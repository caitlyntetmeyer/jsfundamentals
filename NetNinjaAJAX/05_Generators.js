// Generators in Asynchronous JavaScript

window.onload = function() {

	// Generator (notice the asterisk):
	function* gen(){
		// We can pause generators using the "yield" keyword.
		var x = yield 10;
		// JS reads from right to left. When the code in this generator is fired, it will read "yield 10" and pause. The "10" will be passed out of the generator, where it can be used outside of the generator.

		console.log(x);
		// 10

	}

	// Use .next method to restart the generator.
	var myGen = gen();
	// doesn't fire the above function* gen(). You must use the .next method on it to start up the code.

	// Run the code until "yield 10", then pause:
	console.log(myGen.next());	
	// 1st time: Object {value: 10, done: false}
	// It will only become "true" once the code has finished running.

	console.log(myGen.next());	
	// 2nd time: Object {value: undefined, done: true}

	console.log(myGen.next(10));	

}
