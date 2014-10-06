// 1) Card module [moderate, 2 hrs]

// Package your earlier playing-card code into a module; that is, wrapped 
// inside an immediately-invoked function expression (IIFE, or "Iffy"). Your 
// module should return one object: the factory makeCard. As before, calling 
// makeCard(id) should create and return a card object with methods for rank, 
// suit, name, etc, but with a structural difference: the methods shared 
// between instances need not be linked initially as methods of the factory, 
// but can instead be 'siblings' of it, functions local to the IFFE's scope.

var makeCard = (function() { 
	var factory = function(id) { //not sure about "id" input here 
		if ((typeof id)!="number" || id%1 !== 0 || 
            id < 0 || id > 51) {return null;} 
		
		function rank() {
			return Math.floor(id/4)+1;
		}

		function suit() {
			return (id%4)+1;
		}

		function cardColor() {
			return ((card.suit<3)? "red": "black");
		}

		function cardName() {
		var ranks = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
	    var suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
	    return = (ranks[(card.rank-1)] + " of " + suits[(card.suit-1)]);	
		}
	
		var card = {
			id:id,
			rank:rank,
			suit:suit,
			cardColor:cardColor,
			cardName:cardName
		};
		return card;
	}
	return factory;
});
