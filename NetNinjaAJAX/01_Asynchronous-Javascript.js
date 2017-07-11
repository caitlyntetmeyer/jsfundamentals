/*
Asynchronous JavaScript (AJAX)

Video: https://www.youtube.com/watch?v=YxWMxJONp7E&list=PL4cUxeGkcC9jAhrjtZ9U93UMIhnCc44MH

1st, Synchronous JavaScript:
JavaScript code runs on a single thread (can do 1 thing at a time)
Synchronous code waits for 1 action to complete before moving on to the next
*/

// Synchronous JS Example (does 1 thing, waits for it to finish, then moves on to next thing):
var article = readSync(article_loc);
console.log(article);
var authors = readSync(authors_loc);
console.log(authors);
// Problem: If the article is very large, maybe it could take 10 seconds to move on!

// Asynchronous JS Example:
readAsync(article_loc, function() { // creates a thread
	console.log(article);
});
readAsync(authors_loc, function() { // creates a separate thread
	console.log(authors);
});

/* 
"Run to Completion" Diagram:

Async: 
Each item in the queue shown is a function. There can be a function in the queue that requests data. While the data is being retrieved, JS can move on to the next item in the queue. Once the data is retrieved, the callback function from the request is added on to the end of the queue. 

Sync: 
1st function fires, 2nd function fires. Let's say the 2nd function is a request. JS has to wait until the request is complete before it can move on to the next item.
*/

/*
Aync Flow Control:
Callbacks - good
Promises - better
Generators - awesome
*/



















