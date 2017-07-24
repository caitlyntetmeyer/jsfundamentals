	/*

	Modules and require()

	Video #6: https://www.youtube.com/watch?v=xHLd36QoS4k

	It's not good to put everything in one file - hard to maintain.
	We can use modules to split our code up into re-usable, logical sections.
	Then we can call on those modules just whenever we need them.

	module - just another JavaScript file

	Example:

	1) In count.js:
	*/
	var counter = function(arr) {
		return 'There are ' + arr.length + ' elements in this array!';
	};

	module.exports = counter;
	// makes the "counter" function available outside of this module

	console.log(counter(['shaun', 'crystal', 'ryu']));
	// There are 3 elements in this array.

	// In Terminal, you can run "node count" and see, "There are 3 elements in this array!"

	module.exports = counter;
	// Makes the counter FUNCTION available outside of this module (file)! Very important to have this!

	/*

	Now, we want to connect count.js (a module) to our app.js file.

	2) In app.js:
	 */
	var counter = require('./count'); // requires count.js in this file

	console.log(counter(['shaun', 'crystal', 'ryu']));
	// Because we've REQUIRED count.js in this file AND we've exported the counter function from count.js, we can see, "There are 3 elements in this array!"
