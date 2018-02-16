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

		/*
		
		7 Data Types:

		1) Six data types that are primitives:
			a) Boolean
			b) null
			c) undefined - top-level property whose value is not defined
			d) Number
			e) String
			f) Symbol - its instances are unique and immutable

		2) Object - named containers for values

		Objects and funcitons are the other fundamental elements in JavaScript.

		Functions - procedures that your app can perform

		*/


	// Data Type Conversion:

		// You can start with this:
		var answer = 42;

		//...and later make it this without problems:
		answer = 'Thanks for all the fish';

		// That's because JavaScript is dynamically typed.

		// In expressions w/both numeric and string values w/the + operator, JS converts numeric values to strings:
		x = "The answer is " + 42; // The answer is 42
		y = 42 + " is the answer"; // 42 is the answer

		// In statements involving other operators besides +, JS does NOT convert numeric values to strings:
		'37' - 7 // 30 because nothing was converted to a string

	// Converting Strings to Numbers:

		// In the case that a value representing a number is in memory as a string, there are methods for conversion.

		parseInt()
		parseFloat()
		// parseInt only returns whole numbers, so its use is diminished for decimals. Additionally, a best practice for parseInt is to always include the radix parameter. The radix parameter is used to specify which numerical system is to be used.

		// An alternative method of retrieving a number from a string is with the + (unary plus) operator:

		'1.1' + '1.1' = '1.11.1'
		(+'1.1') + (+'1.1') = 2.2   
		// Note: the parentheses are added for clarity, not required.







