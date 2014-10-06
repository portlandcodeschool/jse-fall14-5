//Problem 1: Package the playing card factory into an IIFE
//Tristan Question: I don't quite understand why the methods within this IIFE version are different from homework 4 implementation.

(function makeCard(id){
	//This is the card factory function defintion from homework 4--------------
	//Check the argument to make sure it's a valid card ID
	if (!((id>-1) && (id<52))) return null;
	if (typeof(id) != "number") return null;
	if ((id%1)!==0) return null;

	var newCard = {
					id:id, //Give the new object a property so it knows its own ID		
					rank:rank,//Assign each of the functions above to methods of the instance newCard
					suit:suit,
					color:color,
					myName:myName
				};

					//Define each of the functions that will be given to the instances.

					//#1 is the rank function
					function rank() {
 					   return Math.ceil((this.id+1)/4);
 					}

 					//#2 is the suit function
 					function suit(){
						return (this.id%4)+1;
 						 }

 					//#3 is the color function
 					function color(){
 							var mySuit = this.suit(this.id);
					     	if ((mySuit === 1) || (mySuit ===2))
					    	return "red";
 					    	else 
 				        	return "black";
            				}

    				//#4 is the name function which we must call differently for some reason. I'll call it myName
    				function myName(){
    					var suitName = ["Hearts", "Diamonds", "Spades", "Clubs"];
    					var rankName = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven","Eight", "Nine", "Ten", "Jack", "Queen", "King"]
							var fullName = rankName[this.rank(this.id)-1] + " of " + suitName[this.suit(this.id)-1];
							return fullName;
						    }

					return newCard;
	//This is the end of the card factory definition and the brace immediately after this note is the ending punctuation.

}) (); //Close the function definition with the closing brace. Close the parens that cause the function definition to happen. Then parens to cause the function to run immediately.