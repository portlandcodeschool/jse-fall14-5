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
