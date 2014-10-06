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

function makeDeque(values) {
	return {
		array   : values.slice(), 
		top     : makeDeque.top,
		bottom  : makeDeque.bottom,
		push    : makeDeque.push,
		pop     : makeDeque.pop,
		shift   : makeDeque.shift,
		unshift : makeDeque.unshift,
		sort    : makeDeque.sort,
		cut     : makeDeque.cut,
		map     : makeDeque.map,
		shuffle : makeDeque.shuffle,
		absent  : [], 
		readmit : makeDeque.readmit
	}
}