/*

AJAX Requests:

Communicate w/a server by making a http request
No need to reload the page after fetching data
AJAX stands for Asynchronous JavaScript and XML

XML is the data we're retrieving.
Actually, ppl use JSON (JavaScript Object Notation) more than XML now.
*/

// Asynchronous Request Example:

window.onload = function(){
	var http = new XMLHttpRequest();
	// XMLHttpRequest() is built-in, it lets us request data to get back

	// Fire a function every time the ready state changes:
	http.onreadystatechange = function(){
		console.log(http); // 4 XMLHttpRequest objects

		// When readyState is 4 (request is complete) AND http status is OK (200)...
		if(http.readyState == 4 && http.status == 200){
			// console.log(http.response); // JavaScript string - uh-oh, this is hard to use.
			console.log(JSON.parse(http.response)); // Use JSON.parse to make it easy to use - in object form.
		}
	};
	// At this point, we can use our code.

	/* 
	Use the open method to set up the request - Tell JavaScript...
	1. where we wanna get the data ("data/tweets.json), 
	2. what type of data, and 
	3. whether we wanna do it synchronously or asynchronously (a Boolean - true if we want it to be asynchronous:
	*/
	http.open("GET", "data/tweets.json", true)

	// Tell JS to actually go grab the data:
	http.send();

	console.log(http); // XMLHttpRequest object with onreadystatechange, readyState, timeout, withCredentials, and upload
	// See Ready States below.

	console.log("test"); // Shows up in the console before the object, even though this console.log statement comes AFTER the object!

	// Example of an AJAX Request Using jQuery (WAY easier!):
	// 1st parameter: where we wanna retrieve the data from.
	// 2nd parameter: a callback function - the function that fires after the data's been retrieved
	$.get("data/tweets.json", function(data){
		console.log(data);
	});
	console.log("test"); // We get "test" first, and then the object. Yay! We're not blocking the code while we're retrieving the data!

};

/*

READY STATES:

0 - request not initialized
1 - request has been set up
2 - request has been sent
3 - request is in process
4 - request is complete

*/








































