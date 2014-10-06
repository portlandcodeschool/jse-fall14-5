## Section 1
```
var dequeFactory = (function() {

	// ===== makeCard factory =====
	var makeCard = function(id) {
		if((typeof id) !== 'number' || (id < 0) || (id > 51)) return null;
	
	    var card = {
		    
		    id: 	id,
		    rank: 	rank,
		    suit: 	suit,
		    color: 	color,
		    name:	cardName
		    
	    };
	    return card;
	}
	
	
	// ===== is card =====
	var isCard = function(card) {
		if((typeof card) !== 'object' || !('id' in card)) return false;
		return true;
	};
	
	
	// ==== rank =====
	var rank = function() {
		if((typeof this.id) !== 'number' || (this.id < 0) || (this.id > 52)) return NaN;
		return Math.floor(this.id / 4 + 1);
	};
	
	
	// ===== suit =====
	var suit = function() {
	    if((typeof this.id) !== 'number' || (this.id < 0) || (this.id > 52)) return NaN;
	    return (this.id % 4) + 1;
	};
	   
	
	// ===== color =====
	var color = function() {
	    if((typeof this.id) !== 'number' || (this.id < 0) || (this.id > 52)) return NaN;
	    return (this.suit(this.id) == 0 || this.suit(this.id) == 1) ? 'red' : 'black';
	};
	
	var cardName = function() {
		if((typeof this.id) !== 'number' || (this.id < 0) || (this.id > 52)) return NaN;
	 
	    var rankWords = [
			'Ace',
			'Two',
			'Three',
			'Four',
			'Five',
			'Six',
			'Seven',
			'Eight',
			'Nine',
			'Ten',
			'Jack',
			'Queen',
			'King'
		],
		
		suitWords = [
			'Hearts',
			'Diamonds',
			'Spades',
			'Clubs'
		];
		
		return rankWords[this.rank(this.id) - 1] + ' of ' + suitWords[this.suit(this.id) - 1];   
	};
	
	return makeCard;

})();
```

<br>

---
## Section 2
```
function makeDeque(values) {

	var arr 	= [],
		removed = {};
	
	for(count = 0; count < values.length; count++) {
		
		arr.push(values[count]);
		
	}
	
	return {
		
		top: function() {
			return arr[arr.length - 1];
		},
		
		bottom: function() {
			return arr[0];
		},
		
		pop: function() {
			var topElement = arr[arr.length - 1];
			removed[topElement.id] = topElement;
			arr.pop();
			return topElement;
		},
		
		push: function(val) {
			if(!(val.id in removed)) {		
				console.error('ERROR: You can\'t add a card to the deck that\'s already there!');
				return false;
			}
			
			arr.push(val);
			delete removed[val.id];
		},
		
		shift: function() {
			var shifted = arr.shift();
			removed[shifted.id] = shifted;
			return shifted;
		},
		
		unshift: unshift = function(val) {
			if(!(val.id in removed)) {
				console.error('ERROR: You can\'t add a card to the deck that\'s already there!');
				return false;
			}
			
			arr.unshift(val);
			delete removed[val.id];
		},
		
		cut: function() {	
			var arrTop = arr.splice(0, Math.floor(arr.length / 2));
			arr = arr.concat(arrTop);
		},
		
		map: function(convertValFn) {

			return arr.map(convertValFn);
		
		},
		
		sort: function(compareValsFn) {
	
			return arr.sort(compareValsFn);
			
		},
		
		shuffle: function() {
			var array = arr,
				m = array.length, 
				t, 
				i;
			
			while (m) {
				i = Math.floor(Math.random() * m--);
				t = array[m];
				array[m] = array[i];
				array[i] = t;
			}
			return array;	
		}
			
	};
	
}
```

<br>

---
## Section 3

a)
```
function makeUser(name, pwd) {
	
	// ===== GET USERNAME =====
	
	function getName() {
		return name;
	}
	
	
	// ===== CHECK PASSWORD =====
	
	function validate(str) {
		return (str === pwd);
	}
	
	
	// ===== RETURN METHODS =====
	
	return {
		getName:  getName,
		validate: validate
	};
	
}
```

b)
```
var userFactory = (function(){

	function makeUser(name, pwd) {
	
		// ===== GET USERNAME =====
		
		function getName() {
			return name;
		}
		
		
		// ===== CHECK PASSWORD =====
		
		function validate(str) {
			return (str === pwd);
		}
		
		
		// ===== RECORD MESSAGE =====
		
		function record(message) {
			
			if(message) {
				
				if(this.getName() in log) {
					
					log[this.getName()] += '\n' + message;
					return true;
					
				}
				
				log[this.getName()] = message;
				return true;
			}
			
			return undefined;	
		}
		
		
		// ===== RETURN METHODS =====
		
		return {
			getName:  getName,
			validate: validate,
			record:   record
		};
		
	}
	
	// ===== PRIVATE LOG =====
		
	var log = {};
	
	
	// ===== GET THE LOG =====
	
	function getLog(username) {
		
		if(username) {
			
			return log[username];
			
		}
		
		var entryString = '',
			counter     = 0;
		
		for(key in log) {
			
			if(counter > 0) {
				
				entryString += '\n' + log[key];
				
			} else {
				
				entryString += log[key];
					
			}
			
			counter++;
		}
		
		return entryString;
		
	}
	
	return {
		makeUser: makeUser,
		getLog:	  getLog
	}

})();
```