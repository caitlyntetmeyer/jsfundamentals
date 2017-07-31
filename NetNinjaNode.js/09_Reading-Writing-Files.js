/*
Net Ninja Node.js - Reading and Writing Files

Video 9: https://www.youtube.com/watch?v=U57kU311-nE&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&t=2#t=3.295559

How we can use the 'fs' module in node to go out and read & write files to our computer.
*/

// Add the module 'fs':
var fs = require('fs');

// Create a file somewhere called readMe.txt that contains the text, "Yay, you read me!"

// Use a synchronous method, readFileSync, to read readMe.txt:
var readMe = fs.readFileSync('readMe.txt', 'utf8');
console.log(readMe); // Yay, you read me!

// Above, we READ a file. Now, let's WRITE a new file called writeMe.txt by using .writeFileSync:
fs.writeFileSync('writeMe.txt', readMe);
// When you run "node app", a new file called "writeMe.txt" is created, and its content is made to be "Yay, you read me!"

// Now let's look at the ASYNCHRONOUS versions of the above methods.
// First, .readFile:
fs.readFile('readMe.txt', 'utf8', function(err, data){
  console.log(data);
});
// Run "node app" and see "Yay, you read me!"

// Second, .writeFile:
fs.readFile('readMe.txt', 'utf8', function(err, data){
  fs.writeFile('writeMe.txt', data);
});
// Run "node app" and see that the new file has been written.
