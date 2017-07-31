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
console.log(readMe);
