// IIFE PATTERN: immediately invoked function expression. Runs once and is done

var foo = "foo";

function bob(){  // named function declared
	var foo = "foo2";
	console.log(foo);	// "foo2"
}

bob();

console.log(foo); // "foo"

// turn the above function declaration to a named function expression and IIFFE
(function bob(){  // named function expression
	var foo = "foo2";
	console.log(foo);	// "foo2"
})(); // the "()" immediately invokes function. IIFE

console.log(foo); // "foo"


// IIFE in a for loop
for (var i = 1; i < 5; i++) {
	(function IIFE() {  //IIFE
		var j = i;  // new var j for each loop
		console.log(j);
	})():
}

// Problems with IIFE: if there is a return statement within an IIFE which it is inside a for loop, it doesn't talk to external function