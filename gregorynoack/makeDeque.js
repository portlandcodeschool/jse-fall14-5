//-------
// Part a): build a deque factory
var makeDeque = (function(){
	// ...
 var factory = function(arr) {
 		var arr = arr;
		function top() {
			var end = arr.length-1;
			return arr[end];
		};
		function bottom() {
			return arr[0];
		};
		function pop() {
			return arr.pop();
		};

		function push(val) {
			return arr.push(arr[val]);
		};

		function shift() {
			this.pop();
			return this.top();
		};
		function unshift(val) {
			return arr.unshift(val);
		};
		function cut(offset) {
			var cutDeck = arr.splice(Math.round(arr.length / 2), arr.length-1);
			return arr = cutDeck.concat(arr);
		};
		var deck = {
			top:top,
			bottom:bottom,
			pop:pop,
			push:push,
			shift:shift,
			unshift:unshift,
			cut:cut,
		//	map:map,
		//	sort:sort
		};
		return deck;
};
return factory;
})();
/* make array of 52 card objects here, using your code from Problem 1) */;
// At this point, data looks like Fig.1
var makeCard = (function(){
  var factory = function(id) {
    function rank() {
      return Math.floor((this.id / 4)+1);
    };
    function suit() {
      return (this.id % 4) + 1;
    };
    function color() {
       return (this.suit() < 3 ? "red" : "black");
    };
    function cardName() {
      return this.arrRank[this.rank()] + " of " + this.arrSuit[this.suit()];
    };
    var card = {
      id:id, 
      rank:rank, 
      suit:suit, 
      color:color, 
      cardName:cardName, 
      arrRank:["","Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King"],
      arrSuit:["","Hearts","Diamonds","Spades","Clubs"],
    };
  return card;
  card.rank(id);
  card.suit(id);
  card.color(id);
  card.cardName(id);
  };
return factory;
})();
var someCards = [];
for (var id = 0; id < 52; id++) {
  someCards.push(makeCard(id));
};


var cardDex = makeDeque(someCards);


//-------
// Part b): build a deque instance:
var deckOfCards = makeDeque(someCards);
// sort it:
deckOfCards.sort(/* something here */);
// At this point, data looks like Fig.2

// sort it differently:
deckOfCards.sort(/* something different here */);

//-------
// Part c): build another deque instance:
var someNames = /* make array of names here */;
var deckOfNames = makeDeque(someNames);
deckOfNames.sort(/* something here */);

