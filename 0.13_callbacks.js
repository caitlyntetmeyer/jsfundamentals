/*
	Above, make the names in bulls.dictionary into strings. Then, split
	them and put each one on a new line.
	
	bulls = bulls.toString().split('\n').filter(function(bulls) {
		
		Go over the dictionary we've passed in.
		Then it's checking if the bulls are located inside of the dictionary.
		If they are, then it's returning that value.
		
		return dict.indexOf(bulls) !== -1;
	});
	done(bulls);
};
}

getBulls('0.13_bulls.txt', function(err, bulls) {
	if (err) {
		return done(err);
	};
	console.log(bulls);
})
*/




/*
Use require keyword like we did previously with Express.
"Find modules associated with this and pull from the module."
This and Http are built into node.
You can name the following variable however you want, but we picked fs to
stand for file system.
The second fs is a keyword from node.
Syntax: fs.readFile(path[, options], callback)
*/
var fs = require('fs');
/*
Diagram of a callback:

"Execute this thing here once it's done running. 
Use this function I'm gonna give you w/these parameters."

Look at main.js: 
When we have a .done function: "When this .done is done running,
execute console.log(data)."

request = prepare_the_request();
  send_request_asynchronously (request, function(resonse){
  	display(response);
  });

Create function that grabs our bulls dictionary.
Compare if this doc has any bulls players:
*/
// Create function - syntax: getBulls([path], callback)
function getBulls(filepath, done){
	/* 
	When coding, be sure to talk through what you're doing 
	in your mind.

	Tell file system to read a file (readFile) that the user of the
	function passes into as an argument. Then create a callback
	to handle that case: 
	*/
	//telling file system to read a file that the user of the function passes into 
	//as a argument. Then we are creating a callback to handle that case.
	fs.readFile(filepath, function(err, bulls){
		/*
		If file doesn't have anything inside it, readFile can print out errors
		to help us out.

		Error handling: We handle whatever errors may come. readFile
		can track down errors from file systems inside of this file:
		
		"Print out this error message if there's an error":
		*/
		// error handling
		if (err) return done(err);
		// Read the file, bulls.dictionary, in the file system.
		fs.readFile('0.13_bulls.dictionary', function(err, dict){
			// error handling - put the most unique case first:
			if (err) return done(err);
			compareBulls(bulls, dict);
		})
	});
	// Variable way:
	// Instantiate a variable:
	var compareBulls = function (bulls, dict) {
	// Turn the items from these files into arrays, then split them:
	dict = dict.toString().split('\n');
	bulls = bulls.toString().split('\n').filter(function(bulls){
		//going over the dictionary, then it's checking if the bulls are located 
		//inside of the dictionary. If it is then it's retuning that value
		return dict.indexOf(bulls) !== -1
		})
	done(bulls);
	}
}
// variable way
getBulls('0.13_bulls.txt', function(bulls){
	console.log(bulls);
});

// Another example of a callback:
console.log("Tell me your name.");
var printNameInThreeSeconds = setTimeout(function() {
	console.log("Caitlyn");
	}, 3000);
console.log("Nice to meet you!");




































