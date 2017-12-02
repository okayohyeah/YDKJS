function repeat(fn, n) {
	// "var" can be used within the entire function and scoped to the whole function
	var result;

	// preferable to use "let" instead of "var" in for loops because you do not want to access the variable on the outside. That is why you create "var" "result" that can capture the result of "i" and use it outside of the for loop. "let" is block scoped
	for (let i=0; i<n; i++) {
		result =fn(result, i);
	}

	return result;
}

// "var" "id" variable allows them to escape these scopes
function lookupRecord(searchStr) {
	try {
		var id = getRecord(searchStr);
	}
	catch(err) {
		// "var" is redeclared because variable declaration should be close to as possible to where it will be used. You cannot do this with "let"
		var id = -1;
	}

	return id;
}