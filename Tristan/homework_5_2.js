var testArray = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

function makeDeque(values) {
	var newDeque = {};
	var arrayCopy = values.slice();
	
	newDeque.setter = function(input){
				arrayCopy.push(input);}

	newDeque.getter = function(){return arrayCopy.slice();}

	var removed = {}; //If I have time, I should hide this object inside a setter, too, so that someone can't add Aces here and then be allowed to add Aces to the deque.
	
	newDeque.top = function() { //return the last element in the deque
		var lastItem = -1;
		for(var key in arrayCopy){lastItem++};
		return arrayCopy[lastItem];
	};

	newDeque.bottom = makeDeque.bottom;
	newDeque.pop = makeDeque.pop;
	newDeque.push = makeDeque.push;
	newDeque.shift = makeDeque.shift;
	newDeque.unshift = makeDeque.unshift;
	newDeque.cut = makeDeque.cut;
	newDeque.sort = makeDeque.sort;
	newDeque.shuffleFaux = makeDeque.shuffleFaux;
	newDeque.shuffleReal = makeDeque.shuffleReal;
	newDeque.convertValFn = makeDeque.convertValFn;
	newDeque.removed = removed;

	return newDeque;
};




makeDeque.bottom = function() { //return the first element in the deque
	return this.arrayCopy[0];
	
};

makeDeque.pop = function() { //remove and return the top/last element in the deque
	var lastItem = -1;
	for(var key in this.arrayCopy){lastItem++};
	var lastElement = this.arrayCopy[lastItem];
	this.removed[lastElement] = "removed"; //Make a record of the item removed by the pop method
	this.arrayCopy.splice(lastItem, 1);
	return lastElement;
};

makeDeque.push = function(val) { //add an element to the top/end of the deque
	if (!(val in this.removed)) {console.log("You can't add an item to this deque unless it was already removed.");}
		else{
	this.arrayCopy.push(val);}
};

makeDeque.shift = function() { //remove and return the bottom/first element in the deque
	var bottomElement = this.bottom();
	this.removed[bottomElement] = "removed"; //Make a record of the item removed by the pop method
	this.arrayCopy.shift();
	return bottomElement;
};

makeDeque.unshift = function(val) { //add an element to the bottom/first spot in the deque
	if (!(val in this.removed)) {console.log("You can't add an item to this deque unless it was already removed.");}
		else{
	this.arrayCopy.unshift(val);}
};

makeDeque.cut = function() { //split the deque in the middle and swap the two halves
	var lastItem = this.arrayCopy.length;
	var midpoint = Math.ceil(lastItem/2);
	var arr1=[];
	var arr2=[];
	var p = 0;
	for(var i=0; i<midpoint; i++){arr1[i] = this.arrayCopy[i]};
	for(var v = midpoint; v<lastItem; v++){arr2[p] = this.arrayCopy[v]; p++};

	this.arrayCopy = arr2.concat(arr1);
	return arr2;
};

makeDeque.sort = function() { //reorder the elements of the deque according to the comparison passed in as an argument
	this.arrayCopy = this.arrayCopy.sort(function(a, b){if(a>b)return 1; if (a<b) return -1; else return 0;});
	//I don't really understand in the assignment prompt why it talks about compareValsFn. Should that be a separate function passed in?
	//Can I put the compareValsFn within this method? Or within the factory? Or what?
};

makeDeque.map = function(convertValFn) { //go through the deque and "convert" each one by running the function passed in with the element as the argument to that function. New values in a new array

	//This is a function that takes each element in an array, runs it through a function, and returns a new array with the "transformed" values in it.
	var mappedArray = convertValFn();
	return mappedArray;
};

makeDeque.convertValFn = function(){
	return this.arrayCopy;

}

makeDeque.shuffleFaux = function() {
	this.arrayCopy = this.arrayCopy.sort(function(a, b)
											{if (a.myName().charAt(0)>b.myName().charAt(2))
												return 1; 
												else return -1;})
};

makeDeque.shuffleReal = function() {
  //This stuff just lifted directly from Knuth-Fisher-Yates. Is that right? In any case, it appears to work.
	var m = this.arrayCopy.length, t, i;
	var array = this.arrayCopy;
  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  this.arrayCopy = array;
};



