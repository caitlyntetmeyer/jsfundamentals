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

		// In the case that a value representing a number is in memory as a string, there are methods for conversion:

		parseInt()
		parseFloat()
		// parseInt only returns whole numbers, so its use is diminished for decimals.

		// An alternative method of retrieving a number from a string is with the + (unary plus) operator:

		'1.1' + '1.1' = '1.11.1'
		(+'1.1') + (+'1.1') = 2.2   
		// Note: the parentheses are added for clarity, not required.


	/*

	Literals:

		You use literals to represent values in JavaScript. These are fixed values, not variables, that you literally provide in your script. This section describes the following types of literals:

		Array literals
		Boolean literals
		Floating-point literals
		Integers
		Object literals
		RegExp literals
		String literals

	*/

		// Array Literals:

			var coffees = ['French Roast', 'Colombian', 'Kona'];

			var fish = ['Lion', , 'Angel'];
			// fish[0] is Lion, fish[1] is undefined, fish[2] is Angel

			// Don't use a trailing comma (at the end)!

		// Boolean Literals:

			// They have two literal values: true and false. But they're different from Boolean objects, which are wrappers around the primitive Boolean data type.

		// Integers:

			// Can be expressed in decimal (base 10), hexadecimal (base 16), octal (base 8) and binary (base 2).

			// Examples of integer literals:

				// A decimal integer consists of a sequence of digits without a leading zero:
				var decimalBase10 = [0, 117, -345];

				// A leading zero on an integer literal, or a leading 0o or 0O, indicates it is in octal. Octal integers can only include the digits 0-7:
				var octalBase8 = [015, 0001, -0o77];

				// A leading 0x or 0X indicates a hexidecimal integer literal. Hexadecimal integers can include digits 0-9 and the letters a-f and A-F (the case doesn't change the value):
				var hexadecimalBase16 = [0x1123, 0x00111, -0xF1A7];

				// A leading 0b or 0B indicates a binary integer literal. Binary integers can only include the digits 0 and 1:
				var binaryBase2 = [0b11, 0b0011, -0b11];

		// Floating-Point Literals: [(+|-)][digits][.digits][(E|e)[(+|-)]digits]

		3.1415926
		-.123456789
		-3.1E+12
		.1e-23

		/* 

		Object Literals:

			object literal - a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces

			Don't use at beginning of statement because the { will be interpreted as the beginning of a block.

			Example: 1st element of car object defines property myCar and assigns it to a new string, "Saturn". 2nd element, the getCar property, is immediately assigned the result of invoking the function (carTypes("Honda")). 3rd element, the special property, uses an existing variable sales. */

			var sales = "Toyota";

			function carTypes(name) {
				if (name === "Honda") {
					return name;
				} else {
					return "Sorry, we don't sell " + name + ".";
				}
			}

			var car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

			console.log(car.myCar); // Saturn
			console.log(car.getCar); // Honda
			console.log(car.special); // Toyota

			// You can use a numeric or string literal for the name of a property or nest an object inside another:

			var car = { manyCars: {a: "Saab", "b": "Jeep"}, 7: "Mazda" };

			console.log(car.manyCars.b); // Jeep
			console.log(car[7]); // Mazda


			/*

			Object property names can be any string, including an empty string.

			If the property name wouldn't be a valid JS identifier or number, it has to be in quotes.

			Property values that aren't valid identifiers have to be accessed with bracket notation:
			*/

			var unusualPropertyNames = {
				"": "An empty string",
				"!": "Bang!"
			}
			console.log(unusualPropertyNames.""); // SyntaxError: Unexpected string
			console.log(unusualPropertyNames[""]); // An empty string
			console.log(unusualPropertyNames.!); // SyntaxError: Unexpected token !
			console.log(unusualPropertyNames["!"]); // Bang!

			// Enhanced Object Literals:

				// Supported in ES2015: setting the prototype at construction; shorthand for "foo: foo" assignments; defining methods; making super calls; computing property names with expressions.

				var obj = {
					// __proto__
					__proto__: theProtoObj,
					// Shorthand for 'handler: handler'
					handler,
					// Methods
					toString() {
						// Super calls
						return 'd ' + super.toString();
					},
					// Computed (dynamic) property names
					[ 'prop_' + (() => 42)() ]: 42
				};

				// Note:

				var foo = {a: 'alpha', 2: 'two'};

				console.log(foo.a); // alpha
				console.log(foo['a']); // alpha
				// console.log(foo[a]); // Error: a is not defined

				console.log(foo[2]); // two
				console.log(foo['2']); // two
				// console.log(foo.2); // Error: missing ) after argument list
				
				
		// ReExp Literals (a pattern enclosed btwn slashes):

		var re = /ab+c/;		

		// String Literals:

			// zero or more chars in quotes
			'foo';
			"bar";
			'1234';
			'one line \n another line';
			"John's cat";

			// You can use the String.length property w/a string literal:
			console.log("John's cat".length); // 10

			// ES2015: Template Literals:

				// Basic literal string creation:
				`In JavaScript, '\n' is a line-feed.`

				// Multiline strings:
				`In JavaScript, template strings can run
				over multiple lines, but double- and single-
				quoted strings cannot.`

				// String interpolation:
				var name = "Bob", time = "today";
				`Hello ${name}, how are you ${time}?`

				// Construct an HTTP request prefix is used to interpret the replacements and construction:

				POST`http://foo.org/bar?a=${a}&b=${b}
					Content-Type: application/json
					X-Credentials: ${credentials}
					{ "foo": ${foo},
					  "bar": ${bar}}`(myOnReadyStateChangeHandler);














