





-----------------
/* var mod = (function(){ 

	var plip = function(n){

		return (n + n);
	};

})(2)
*/
	
-------------------
// Problem # 1).

var cards = (function(n){

	var makeCard(id){
		var newCard = {id:id}
		newCard.rank = rank;
		newCard.suit = suit;

		return newCard;
	};
	var	rank = function() {
		
           return Math.floor(this.id/4)+1;

	}

	var suit = function(){


			return Math.floor ( this.id % 4 ) + 1;

	}
	
	

	


})()




// Version 2 (personal methods)
var makeThing = (function(){
	
    var factory = function(id) {
        var	rank = function() {return Math.floor(makeCard.id/4)+1; };
        var suit = function(){return Math.floor (makeCard.id % 4 ) + 1;};

        var makeCard = {   id:id,
                        rank:rank,
                        suit:suit };
        return makeCard;
    };
    return factory;
})();



----------------------------------------------------

// Problem # 3).

var iffy = (function(){
var logger = [];

	function makeUser(n,pwd){
	var user = {
			getName: function (){
			return n;
			},


			validate: function (attempt) {

			return (attempt === pwd);

			},

			message: function (string) {
			if (string)	{ 
				logger.push(n + ': ' + string)
				return true;
			}else{
				return undefined;
			}
			}
		}
		return user;
	function getLog(){
		return logger.slice();
	} 
	
})();





