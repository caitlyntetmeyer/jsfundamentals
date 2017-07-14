/*

JavaScript Promises
-help us organize callbacks
-an object which represents an action that hasn't finished yet, but will done the line
-placeholder object in which we can register our callbacks for success or failure

*/

// Setup:

window.onload = function(){
	/*

	function get(url){
		return new Promise(function(resolve, reject){
			var xhttp = new XMLHttpRequest();

			xhttp.open("GET", url, true);

			xhttp.onload = function() {
				if (xhttp.status == 200){
					resolve(JSON.parse(xhttp.response));
				} else {
					reject(xhttp.statusText);
				}
			};
			xhttp.onerror = function(){
				reject(xhttp.statusText);
			};
			xhttp.send();
		});
	}


	// Promise:
	var promise = get("data/tweets.json"); // another file

	promise.then(function(tweets){
		console.log(tweets);
		// Another promise:
		return get("data/friends.json"); // another file
	}).then(function(friends){
		console.log(friends);
		// Another promise:
		return get("data/videos.json"); // another file
	}).then(function(videos){
		console.log(videos);
	// If error, use catch() method:
	}).catch(function(error){
		console.log(error);
	});
	*/


	// The jQuery Way (easier to maintain):
	$.get("data/tweets.json").then(function(tweets){
		console.log(tweets); // logs tweets from the json doc
		return $.get("data/friends.json");
	}).then(function(friends){
		console.log(friends);
		return $.get("data/videos.json");
	}).then(function(videos){
		console.log(videos);
	});
};






























