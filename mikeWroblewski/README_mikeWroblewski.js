#### Homework 5

Due Mon. 10/6

/*
---

**1)  Card module** _[moderate, 2 hrs]_

Package your earlier playing-card code into a module; that is, wrapped inside an immediately-invoked function expression (IIFE, or "Iffy").  Your module should return one object: the factory _makeCard_.  As before, calling `makeCard(id)` should create and return a card object with methods for rank, suit, name, etc, but with a structural difference:
the methods shared between instances need not be linked initially as methods of the factory, but can instead be 'siblings' of it, functions local to the IFFE's scope.
*/

var makeCard = (function() {

	var id = id;

    var cardRankArr = [	"",
                  		"Ace",
                  		"Two",
                  		"Three",
                  		"Four",
                  		"Five",
                  		"Six",
                  		"Seven",
                  		"Eight",
                  		"Nine",
                  		"Ten",
                  		"Jack",
                  		"Queen",
                  		"King"
                  	  ];

    var cardSuitArr = [	"",
                  		"Hearts",
                  		"Diamonds",
                  		"Spades",
                  		"Clubs"
                  	  ];

	function rank() {
	  
	    var cardRank = Math.floor((this.id / 4)+1);
	  
	    if ((this.id>=0 && this.id<52) && (this.id % 1 === 0) && (typeof this.id !== "string")) {
	        return cardRank;
	    } else {
	        return NaN;
	    }
	};

	function suit() {
  
    	var cardSuit = (this.id % 4) + 1;

	    if ((this.id>=0 && this.id<52) && (this.id % 1 === 0) && (typeof this.id !== "boolean")) {
	        return cardSuit;
	    } else {
	        return NaN;
	    }
	};

	function color() {
	  
	    var cardSuit = this.suit();
	      
	    if (typeof this.id !== "number") {return NaN;}
	      
	    if (cardSuit < 3) {
	      var result = "red";
	    } else {
	      return "black";
	    }
	      return result;
	};

	function cardName() {

	    var cardRank = this.rank();
	    var cardSuit = this.suit();

	    if ((this.id>=0 && this.id<52) && (this.id !== "NaN") && (typeof this.id !== "boolean")) {  
	        return this.cardRankArr[cardRank] + " of " + this.cardSuitArr[cardSuit];
	    } else {
	        return NaN;
	    }
	  
	};

	function factory(id) {

		return {id: id,
				rank: rank,
				suit: suit,
				color: color,
				name: cardName,
				cardRankArr: cardRankArr,
				cardSuitArr: cardSuitArr};

	}

    return factory;

})();


/*
---

**2)  All hands off deque** _[easyish, 2 hrs]_

If you haven't yet finished Homework 4, #2f, please do so first.
That implementation of a deque tries to maintain the integrity of its contents by preventing a _push_ or _unshift_ of items not in the original deque.  But a programmer could deliberately or accidentally circumvent those efforts by accessing and changing the deque's array instead of using its methods.  

Write another version of a deque factory which protects the deque instances by using closures to hide their content arrays from the outside world.  Your deque methods should be the only way of changing their hidden arrays.

_(Hint #1: you'll have to give up the strategy of sharing factory methods with instances to avoid redundancy.  Instead, have each call to the factory generate a set of methods specific to one deque instance which can access any private arrays associated with it.)_

_(Hint #2: the private arrays will live in a function scope, not in an object.)_

---
*/

function makeDeque (values) {

	var outcast = [];
	var copyValues = values.slice();

	function top() {
		var end = copyValues.length-1;
		return copyValues[end];
	};

	function bottom() {
		return copyValues[0];
	};

	function pop() {
		var popped = copyValues.pop();
		if (popped !== undefined) {
			outcast.push(popped);
		}
		return popped;
	};

	function push(val) {
		return checkVal(val) && copyValues.push(val);
	};

	function shift() {
		var shifted = copyValues.shift();
		if (shifted !== undefined) {
			outcast.push(shifted);
		}
		return shifted;
	};

	function unshift(val) {
			return checkVal(val) && copyValues.unshift(val);
	};

	function cut() {
		var cutDeck = copyValues.splice(Math.round(copyValues.length / 2), copyValues.length-1);
		
		return copyValues = cutDeck.concat(copyValues);
	};

	function map(convertValFn) {
		return (copyValues.map(convertValFn));
	};

	function sort(compareValsFn) {
		return (copyValues.sort(compareValsFn));
	};

	function shuffle() {
	  var m = copyValues.length, t, i;
	  while (m) {
	    i = Math.floor(Math.random() * m--);
	    t = copyValues[m];
	    copyValues[m] = copyValues[i];
	    copyValues[i] = t;
	  }
	  return this.copyValues;
	};

	function checkVal(val) {
		var foundAt = outcast.indexOf(val);
		if (foundAt < 0) {
				return false;
		} else {
		outcast.splice(foundAt,1);
		return true;
		}
	}	

	return {top: top,
			bottom: bottom,
			pop: pop,
			push: push,
			shift: shift,
			unshift: unshift,
			cut: cut,
			map: map,
			sort: sort,
			shuffle: shuffle,
			checkVal: checkVal};

};



// 3) Secrets at all levels

// a)

var makeUser = function(name,pwd) {
	var userName = name;
	var userPwd = pwd;
  
	var userObj = {getName: 	function() {return userName;},
				   validate: 	function(str) {return (str === userPwd);}
                  };
	
	return userObj;
}


// b)

var userSystem = (function() {

	var systemLog = []; // log of user messages
	
	function getLog(username) {
		var name = username;
		if (name === undefined) {
			return systemLog.join("\n");
		} else {
			return systemLog.filter(nameFilter);
		}
	};

	function nameFilter(name) {
		
	};

	function makeUser(name,pwd) {

		var userName = name;
		var userPwd = pwd;

		return {getName: 	function() {return userName;},
				validate: 	function(str) {return (str === userPwd);},
				record: 	function(message) {
						   		if (message) {
						   			systemLog.push(name+": "+message);
						   			return true;
						   		} else {
						   			return undefined;
						   		}
							}
			   };					
	};

	return {makeUser: makeUser, getLog: getLog};

}) ();



