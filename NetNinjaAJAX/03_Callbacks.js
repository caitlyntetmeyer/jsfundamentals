/*

Callbacks

*/

window.onload = function() {

// Synchronous:
// function callback(val) {
// 	console.log(val);
// }

// var fruits = ["banana", "apple", "pear"];
// fruits.forEach(callback);
// console.log("Done");

// Asynchronous callback function below:
function cb(data){
	console.log(data);
}

$.get("data/tweets.json", cb);
	console.log("test");// This appears BEFORE the data in the console.
};

// ---

// Callback Hell (Don't do this):
window.onload = function(){
	// Triangle of Death:
	$.ajax({
		type: "GET",
		url: "data/tweets.json", // another file
		success: function(data){
			console.log(data);

			$.ajax({
			type: "GET",
			url: "data/friends.json", // another file
			success: function(data){
				console.log(data);

				$.ajax({
				type: "GET",
				url: "data/videos.json", // another file
				success: function(data){
					console.log(data);
				
			},
			error: function(jqXHR, textStatus, error){
				console.log(error);
			}
		});


		},
		error: function(jqXHR, textStatus, error){
			console.log(error);
		}
	});


};

// ---

// This is a bit better:

window.onload = function(){
	function handleError(jqXHR, textStatus, error){
		console.log(error);
	}
	$.ajax({
		type: "GET",
		url: "data/tweets.json", // another file
		success: cbTweets;
		error: handleError
	});
		function cbTweets(data){
			console.log(data);
			$.ajax({
			type: "GET",
			url: "data/friends.json", // another file
			success: cbFriends,
			error: handleError

			});
		}
		function cbFriends(data){
			console.log(data);
		}
				$.ajax({
				type: "GET",
				url: "data/videos.json", // another file
				success: function(data){
					console.log(data);
				}
			},
			error: handleError;
		});

			},
			error: handleError;
		});
	}
};
































