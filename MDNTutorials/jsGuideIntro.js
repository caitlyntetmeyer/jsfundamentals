/*

JavaScript Guide - Introduction:

	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction


	The DOM (Document Object Model) defines the way in which HTML document objects are exposed to your script.

	*/

	// Ex. 1:

	function greetMe(yourName) {
	  alert("Hello, " + yourName + "!");
	}

	greetMe("Caitlyn"); // Hello, Caitlyn!

	/* 

JavaScript Grammar and Types:

	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types


	3 Kinds of Declarations in JavaScript:

		1) var - declares a variable, optionally initializing it to a value

		2) let - declares a block-scoped, local variable, optionally initializing it to a value

		3) const - declares a block-scoped, read-only named constant (can't be changed)

	
	Variables:

		-Use variables as symbolic names for values
		-The names for values are called "identifiers"
		-Identifiers must begin w/a letter, _, or $
		-Ex: Number_hits, temp99, $credit, _name

		Declaring Variables:

			Three ways:
			1) With the keyword "var" (ex: var x = 42)
			2) x = 42 (DON'T DO THIS)
			3) With the keyword "let" (ex: let y = 13)

		Evaluating Variables: 

			A variable declared using the "var" or "let" statement w/no assigned value specified has the value of "undefined". 

			An attempt to access an _unDECLARED_ variable results in a ReferenceError exception being thrown.
			*/

			var a;
			console.log('The value of a is ' + a); // The value of a is undefined

			console.log('The value of b is ' + b); // The value of b is undefined
			var b;

			console.log('The value of c is ' + c); // Uncaught ReferenceError: c is not defined

			let x;
			console.log('The value of x is ' + x); // The value of x is undefined

			console.log('The value of y is ' + y); // Uncaught ReferenceError: y is not defined
			let y;

			// This evaluates to true because "input" is undefined (doesn't have a value):
			var input;
			if (input === undefined) {
				doThis(); // This will run.
			} else {
				doThat();
			}

			// In a boolean context, "undefined" behaves as false:
			var myArray = []; // myArray is undefined
			if (!myArray[0]) myFunction(); // This WILL run because myArray is not 0 - it's undefined.

			// The undefined value converts to NaN when used in numeric context:
			var a;
			a + 2; // NaN because a is undefined

			// If a variable is "null", it'll behaves as 0 in numeric contexts and as false in boolean context:
			var n = null;
			console.log(n * 32); // 0 because null behaves as 0 in numberic contexts

		/*
		
		Variable Scope:

			Global vs. Local variables
			*/

			if (true) {
				var x = 5;
			}
			console.log(x); // 5

			// The behavior changes if you use "let":

			if (true) {
				let y = 5;
			}
			console.log(y); // ReferenceError: y is not defined

	// Constants

		const PI = 3.14; // A constant must be initialized to a value. It can't change value.

		const MY_OBJECT = {'key': 'value'};
		MY_OBJECT.key = 'otherValue'; // This statement is executed without problems.

// Data Structures and Types:

	// Data Types:

	// Data Type Conversion:

	// Converting Strings to Numbers:








