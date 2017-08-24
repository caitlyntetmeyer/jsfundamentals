// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the TOP of their scope, BEFORE code execution.

// No matter where functions and variables are declared, they are moved to the top of their scope, REGARDLESS of whether their scope is global or local.

// The hoisting mechanism only moves the DECLARATION. The ASSIGNMENTS are left in place.

/* Examples: */

console.log(typeof myAwesomeVariable); // "undefined" because an undeclared variable is assigned the value "undefined" at execution and is ALSO of type "undefined"

console.log(myAwesomeVariable); // "ReferenceError: variable is not defined" because a ReferenceError is thrown when trying to access a previously-undeclared variable

/* Hoisting variables: */

/* 
JavaScript Lifecycle: 
1) Declaration
2) Initialization/Assignment
3) Usage - 
*/
var b; // Declaration
b = 22; 
var b = 22; // Initialization/Assignment
b - 20; // Usage

// The most-used pattern:
var b = 22;

// Review: Variable and function declarations are hoisted to the TOP of their scope.

// BUT _undeclared_ variables don't exist til the code assigning them is actually _executed_.
// "All undeclared variables are GLOBAL variables." Example:

function hoisting() {
	b = 22; // undeclared, so it's global
	var c = 33; // declared, so it's only accessible in the scope of the function
}

hoisting();

console.log(b); // "22" because it's accessible as a global variable _outside of_ the hoisting() function

console.log(c); // "ReferenceError: c is not defined" because c was DECLARED _inside_ of the hoisting() function

// ALWAYS declare variables, regardless of whether they are in a function _or_ global scope! This makes it clear to the interpreter how it should handle the variables at run time.

/* var: */

// If you declare a variable using "var", its scope is its _current execution context_.


// Global variable:

console.log(hello); // "undefined" because "hello" hasn't been defined yet

var hello = "Hi there, how are you?";
// Ideally, you declare AND initialize the variable before you use it.

// Function-scoped variable:

function hiya() {
	console.log(msg);
	var msg = "Here's my secret message!"
}

hiya(); // "undefined" because we tried to console.log the msg before we had declared/initialized it
// So we have to declare AND initialize the variable before using it, as in this example:

function hiya() {
	var msg = "Here's my secret message!"
	return (msg);
}

hiya(); // "Here's my secret message!"

/* "Strict Mode" in es5: */

// It's possible to use strict mode, which will not tolerate the usage of variables before they are declared.

// To use strict mode, put this at the top of your file or before the function in question:
"use strict";

// Example:
console.log(msg); // "ReferenceError: msg is not defined" because we're in strict mode and we did NOT declare msg first
msg = "Here's my secret message!";

/* "let" in es6: */

// If you use the keyword "let," the variable's scope is bound to the block in which it is declared - and NOT the _function_ in which it is declared.

// Example:
console.log(msg); // "ReferenceError: msg is not defined" because "let" hates it when we use undeclared variables
let msg = "Here's my secret message!";

// Example:
let msg;

console.log(msg); // "undefined" because we did not declare and then assign our variable to a value before using it
msg = "Here's my secret message!";

/* "const" keyword in es6: */

// The "const" keyword allows _immutable variables_ - variables whose value CAN'T be modified once they've been assigned.

// With both "let" and "const," the variable is HOISTED to the _top_ of the block.



