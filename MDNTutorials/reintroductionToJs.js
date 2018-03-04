/*

A Re-Introduction to JavaScript

	https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript

Types in JS:

	Number
	String
	Boolean
	Symbol (new in ES2015)
	Object
		Function
		Array
		Date
		RegExp
	null
	undefined

Numbers:

	Example: The Math.sin function return the sine of a number: */
	Math.sin(3.5); // -0.35078322768961984

	// Here's an example of a variable that uses Math.PI, which is pi (approx. 3.14159):
	var circumference = 2 * Math.PI * r; // Uncaught ReferenceError: r is not defined

	// Here's my example using Math.PI:
	function findCircumference(r) {
		return 2 * Math.PI * r;
	}
	findCircumference(2); // 12.566370614359172

	// Convert a string to an integer using parseInt(). The second argument is the base for the conversion:
	parseInt('123', 10); // 123
	parseInt('010', 10); // 10
	parseInt('010', 8); // 8

	// Convert a binary number to an integer by making the base 2:
	parseInt('11', 2); // 3

	/* parseFloat() always uses base 10.

	You can also use the unary + operator to convert values to numbers: */
	+ '42'; // 42
	+ '010'; //10
	+ '0x10'; // 16 (hexadecimal)

	// If the string isn't a number, NaN is returned:
	parseInt('hello', 10); // NaN

	// Is it not a number? Use isNaN():
	isNaN(NaN); // true
	isNaN(8); // false

	// JS has the special values Infinity and -Infinity:
	1 / 0; // Infinity
	-1 / 0; // -Infinity

	// Test for Infinity, -Infinity, and NaN using isFinite():
	isFinite(1 / 0); // false
	isFinite(-Infinity); // false
	isFinite(NaN); // false
	isFinite(203843); // true

/*

Strings:

	https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript

	Strings in JS are sequences of Unicode characters (sequences of UTF-16 code units; each code unit is represented by a 16-bit number). Each Unicode character is represented by 1 or 2 code units.

	To find the length of a string, access its length property: */
	'hello'.length; // 5

	// You can use strings like objects. They have methods that let you manipulate the string and access info abt the string:
	'hello'.charAt(0); // "h" because "h" is at the 0th place
	'hello, world'.replace('hello,', 'goodbye, cruel'); // "goodbye, cruel world"
	'hello'.toUpperCase(); // "HELLO"

/*

Falsy-ness:

	null - a deliberate non-value only accessible through the keyword "null"

	undefined - a value that hasn't been initialized yet

	falsy - false, 0, "", NaN, null, undefined

	Check if something's falsy: */
	Boolean(''); // false because an empty string is falsy
	Boolean(234); // true because all non-false and non-falsy values become true

/*

Variables:

	https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript

	New variables in JavaScript are declared using one of three keywords: let, const, or var.

	"let" allows you to declare block-level variables. The declared variable is available from the block it is enclosed in: */
	let a;
	let name = 'Simon';

	// myLetVariable is only visible inside the block:
	for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
		console.log(myLetVariable); // 0 1 2 3 4
	} 

	// "const" allows you to declare variables whose values are never intended to change. The variable is available from the block it is declared in:
	const Pi = 3.14159; // variable Pi is set
	Pi = 1; // error because you can't change a constant

	/*

	"var" is the most common declarative keyword. It does not have the restrictions that the other two keywords have.

	A variable declared with the var keyword is available from the function it is declared in. */
	var a;
	var name = 'Simon';

	// myVarVariable is available in and out of the block:
	for (var myVarVariable = 0; myVarVariable < 5; myVarVariable++) {
		console.log(myVarVariable); // 0 1 2 3 4
	}

/*

Operators:
	
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript

	JavaScript's numeric operators are +, -, *, / and % which is the remainder operator (which is not the same as modulo.) Values are assigned using =, and there are also compound assignment statements such as += and -=. These extend out to x = x operator y. */

	x += 5;
	x = x + 5;
	/* You can use ++ and -- to increment and decrement respectively. These can be used as a prefix or postfix operators.

	The + operator also does string concatenation: */

	'hello' + ' world'; // "hello world"
	// If you add a string to a number (or other value) everything is converted in to a string first. This might catch you up:

	'3' + 4 + 5;  // "345"
	 3 + 4 + '5'; // "75"
	// Adding an empty string to something is a useful way of converting it to a string itself.

	// Comparisons in JavaScript can be made using <, >, <= and >=. These work for both strings and numbers. Equality is a little less straightforward. The double-equals operator performs type coercion if you give it different types, with sometimes interesting results:

	123 == '123'; // true
	1 == true; // true
	// To avoid type coercion, use the triple-equals operator:

	123 === '123'; // false
	1 === true;    // false
	// There are also != and !== operators.




