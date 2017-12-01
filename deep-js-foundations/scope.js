var foo = "bar";

function bar() {
	var foo = "baz";
}

// foo parameter is a local variable of function baz
function baz(foo) {
	// at run time, in local scope, foo has been formally declared before, in line 8
	foo = "bam";
	// at run, bam has never been declared but JS will implicitly declare var bam globally because it is an unfulfilled target/LHS reference, unless we are using strict mode
	bam = "yay";
}

// QUIZ
var foo = "bar";

function bar() {
		var foo =  "baz";

		function baz(foo) {
			foo = "bam";
			bam = "yay";
		}
		baz(); // foo = bam & bam = yay
}

bar();
foo;	// bar
bam;	// yay - because bar() was run
baz();	// reference ERROR because it's an unfulfilled source/RHS reference



// REVIEW
/* declared "foo" in global scope which is referencing a function "bar"
	 "bar" is NOT a function declaration, rather "bar" is function expression and "bar" identifier is not added to the enclosing scope.
	     "bar" identifier exists within its OWN SCOPE. 
	     		"bar" exists within lines 2-8 and is accessible within those lines
*/
var foo = function bar() {  // "bar" identifier is not a function declaration, it's a function expression.
	var foo = "baz";

	function baz(foo) {
		foo = bar;
		foo; // function
	}
	baz();
};

foo();
bar(); // error - there is no "bar" identifier in the global scope. It exists but is not added to its enclosing scope


// REVIEW 2
var foo;

try {
	foo.length;
}
catch(err) {	// catch clause declares variable err - block scope
	console.log(err);  // 
}

console.log(err);	// reference ERROR - because err is only availabe to catch class, not global scope

	}
}