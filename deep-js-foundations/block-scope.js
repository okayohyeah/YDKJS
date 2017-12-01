// BLOCK SCOPE

function diff(x, y) {
	if (x > y) {
		var temp = x; 
		/* you have stylistically signaled that you want to treat "var" variable "temp" only inside the if statement BUT you cannot enforce it. It is still available outside of the if statement 
		*/
		x = y;				
		y = temp;
	}

	return y-x;
}

// creating BLOCK SCOPE with "let"
function diff(x, y) {
	if (x > y) {
		let temp = x;  // declare "let" temp variable first
		/* "let" ENFORCES variable "temp" is attached to scope of if statement ONLY and not anywhere else outside of the if statement and within the function
		*/
		x = y;					
		y = temp;
	}

	return y-x;
}

/*
"let" does NOT replace "var"
		useful when you stylistically signal that you want to attach a variable to scope. 
		it enforces it for you.

{
	place a set of curly braces creates a block scope (alt to IIFE statement)
}
*/

function formatStr(str) {
	{ let prefix, rest;	
	/* placed curly braces and declared variable on the top line that are going to be blocked scope to the code within the curly braces
	*/
			prefix = str.slice(0, 3);
			rest = str.slice(3);
			str = prefix.toUpperCase() + rest;
	}

	if (/^FOO:/.test(str)) {
		return str;
	}

	return str.slice(4);
}