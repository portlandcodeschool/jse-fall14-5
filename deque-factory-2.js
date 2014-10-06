// 2) All hands off deque [easyish, 2 hrs]

// If you haven't yet finished Homework 4, #2f, please do so first. 
// That implementation of a deque tries to maintain the integrity of 
// its contents by preventing a push or unshift of items not in the 
// original deque. But a programmer could deliberately or accidentally 
// circumvent those efforts by accessing and changing the deque's array 
// instead of using its methods.

// Write another version of a deque factory which protects the deque 
// instances by using closures to hide their content arrays from the 
// outside world. Your deque methods should be the only way of changing 
// their hidden arrays.

// (Hint #1: you'll have to give up the strategy of sharing factory 
// 	methods with instances to avoid redundancy. Instead, have each 
// 	call to the factory generate a set of methods specific to one 
// 	deque instance which can access any private arrays associated 
// 	with it.)

// (Hint #2: the private arrays will live in a function scope, not in 
// 	an object.)

var makeDeque = (function(){
	var factory = function(values) {
		var arr = values.slice();

		function top() {
			return this.arr[(this.arr.length - 1)]; 
		};
		function bottom() {
			return this.arr[0];
		};

		function pop() { //is this even needed since this is just working on the array?
			if (this.arr.pop() !== undefined) {this.absent.push(val);}
			return this.arr.pop();
		};
		function push(val) {
			return this.readmit(val) && this.arr.push(val);
		};

		function shift() { //is this needed? can Array.shift() do the same?
			if (this.arr.shift() !== undefined) {this.absent.push(val);
			return this.arr.shift();
		};
		function unshift(val) {
			return this.readmit(val) && this.arr.unshift(val);
		};

		function cut() {
			var arr1 = [];
			var arr2 = [];
			if (this.arr.length%2 !== 0) {
				arr1 = this.arr.slice(0, (Math.ceil(this.arr.length/2)));
				arr2 = this.arr.slice((Math.ceil(this.arr.length/2)), this.arr.length);
				this.arr = arr2.concat(arr1).slice();
			} else {
				arr1 = this.arr.slice(0, (this.arr.length/2));
				arr2 = this.arr.slice((this.arr.length/2), this.arr.length);
				this.arr = arr2.concat(arr1).slice();
			}
		};

		function map(convertValFn) {
			return this.arr.map(convertValFn);
		};

		function sort(compareValsFn) {
			return this.arr.sort(compareValsFn);
		};

		function shuffle() {
			var end = this.arr.length, temp, i;
		  	while (end>1) {
		    	i = Math.floor(Math.random() * end--);
		    	temp = this.arr[end];
		    	this.arr[end] = this.arr[i];
		    	this.arr[i] = temp;
		  	}
		}

		function readmit(val) { 
			var foundAt = this.absent.indexOf(val);
			if (foundAt < 0) 
					return false;
			this.absent.splice(foundAt,1);
			return true;
		}
	}
	return factory;
})