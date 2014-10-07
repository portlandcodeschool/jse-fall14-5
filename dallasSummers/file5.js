//1)

var makeCard = (function(){

	var cardRankArr = ['','Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];

	var cardSuitArr = ['','Hearts','Diamonds', 'Spades', 'Clubs'];

	  
	function isCard(card) {

	    if(card !== undefined){
	        
	        if((typeof(card) == 'number') || Object.keys(card).length === 0){
	        
	            return false;
	        }

	        if (card.id >= 52){

	            return false;
	        
	        }else{

	            return true;
	        }
	    }else{

	        if(!(typeof(this.id) == 'number')){

	            return false;

	        }

	        if(this.id >= 52){

	            return false;
	        
	        }else{

	            return true;
	        }
	    }
	}


	function rank() {
	    if(!(typeof(this.id) == 'number')){
	        
	        return 'invalid input, is NaN';
	    
	    }else{
	        
	        return Math.floor((this.id/4) + 1);
	    }
	}

	function suit() {
	    
	    return (this.id % 4) + 1;

	}
	   
	function colorz() { 

	    var cardSuit = this.getSuit();
	    
	    if(cardSuit < 3){
	    
	        return 'red';
	    
	    }else{
	    
	        return 'black';
	    
      }
	}


	function cardName() { 
	    
	    var cardRank = this.getRank();
	    
	    var cardSuit = this.getSuit();

	    return this.myCardRankArr[cardRank] + ' of ' + this.myCardSuitArr[cardSuit];
	    
	}


	function factory(id) {
		return{ 
			id: id,

	        myCardRankArr: cardRankArr,

	        myCardSuitArr: cardSuitArr,

	        getCard: isCard,

	        getRank: rank,

	        getSuit: suit,

	        getColor: colorz,

	        getName: cardName
	    };
	}


	return factory;
}

)();

//2)






var makeDeque = (function(){

	var deque = [];

	var removed = {
		
		removedArr:[]
		
	};

	function top() {
		
		return this.deque[this.deque.length -1];

		//return(this.deque[Object.keys(this.deque).length -1]);
	}
	function bottom() {

		return this.deque[0];
		
	}

	function pop() {

		this.removed.removedArr.push(this.deque[this.deque.length -1]);

		return this.deque.pop();
		 
	}

	function push(val) {

		if(!(val in this.removed.removedArr)){

			return 'error. Does not exist';
		}

		delete (val in this.removed.removedArr);

		return this.deque.push(val);
	}

	function shift() {

		this.removed.removedArr.push(this.deque[0]);

		return this.deque.shift();
		 
	}


	function unshift(val) {

		if(!(val in this.removed.removedArr)){

			return 'error. Does not exist';
		}

		delete (val in this.removed.removedArr);

		return this.deque.unshift(val);
	}

	function cut(offset) {

		var values = this.deque.splice(Math.ceil(this.deque.length/2), this.deque.length-1);
		
		return (this.deque = values.concat(this.deque));

	}

	function map(convertValFn) {

		return this.deque.map(convertValFn);
		
	}

	function sort(compareValsFn) {

			return this.deque.sort(compareValsFn);	
	}

	function compareValsFnId(a,b){

		if(a.id < b.id){

			return -1;
	 	}
	 	if(b.id > a.id){

	 		return 1;
	 	}
	 	else{

	 		return 0;
	 	}
	}

	function compareValsFnNm(a,b){

		if(a.getName() < b.getName()){

				return -1;
	 	}
	 	if(a.getName() > b.getName()){

	 			return 1;
	 	}
	 	else{

	 		return 0;
	 	}
	}

	function compareValsFnClNm(a,b){

		if(a.charAt(1) < b.charAt(1)){

				return -1;
	 	}
	 	if(a.charAt(1) > b.charAt(1)){

	 			return 1;
	 	}
	 	else{

	 		return 0;
	 	}
	}

	 function shuffle(fun){

		return this.deque.sort(fun);
	}


	function compareValsFnShuf(a,b){
		
		return (a[Math.random()] = a.id);
		
	}

	function myShuffle(array) {
	  var m = array.length, t, i;

	  // While there remain elements to shuffle…
	  while (m) {

	    // Pick a remaining element…
	    i = Math.floor(Math.random() * m--);

	    // And swap it with the current element.
	    t = array[m];
	   
	    array[m] = array[i];
	   
	    array[i] = t;
	  }

	  return array;
	}

	function viewID(ele){

		console.log(ele.id);
	}

	function viewName(ele){

		console.log(ele.getName());
	}

	function factory(values){

		for(var key in values){
		
		if(values.hasOwnProperty(key)){

			deque[key] = values[key];
		}
	}

	removed.pop = function(){
	
		deque.push(removed.removedArr[removed.removedArr.length -1]);
		
		return removed.removedArr.pop();
	};

	removed.shift = function(){
		
		deque.unshift(removed.removedArr[0]);
		
		return removed.removedArr.shift();
	};

		return{
			deque:deque, 
			
			removed:removed, 
			
			top:top, 

			bottom:bottom, 
			
			pop:pop, 

			push:push, 
			
			shift:shift, 
			
			unshift:unshift, 
			
			cut:cut, 
			
			map:map, 
			
			sort:sort, 
			
			shuffle:shuffle
		};
	}

	return factory;

})();

var someCards = []; 

for(var id = 0; id < 52; id++){

	someCards.push(makeCard(id));
}

var cards = makeDeque;

var deck = cards(someCards);


//3)
// a)



var user = (function(){

	var systemLog = ['systemLog: \n'];
	
	function makeUser(name,pwd){

		function getName(){

			return name;
		}
		function validate(str){

			return (str === pwd) ? true : false;

		}
		function record(name,message){

			message = name + ': ' + message + '\n';

			if(!(message)){

				return undefined;
			}
			for(var key in systemLog){

				if(systemLog[key][0] === name){

					systemLog[key].push(message);

					return true;
				}
			
				else{

					var userMessage = [];

					userMessage[0] = name;

					userMessage.push(message);
				}
			}

			systemLog.push(userMessage);

		}

		return{

				getName: getName,

				validate: validate,

				record: record,
		};
	
	// return systemUser;
	
	}
var systemUser = function(userName){

		if(userName){

			for(var key in systemLog){

				if(systemLog[key][0] == userName){

					return systemLog[key].slice(1) + '\n';
				}
			}
		}
		// for(var i in systemLog){

		// 	systemLog[i].splice(0, i.length);
			
		// 	return systemLog.join();
		// }
		// return systemLog[userMessage].splice(0, systemLog[userMessage].length);

		return systemLog.toString();
	};

	return makeUser;

})();

var dallas = user('dally', 24);

dallas.record('dally', 'im dally');

var danny = user('dannyboy', 36);

danny.record('danny', 'im danny');

danny.record('danny', 'im danny again');





























