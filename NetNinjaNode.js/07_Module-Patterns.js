/*
Node.js - Module Patterns

Video 7: https://www.youtube.com/watch?v=9UaZtgB5tQI&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&t=2#t=5.687684

1) In stuff.js:
*/
var counter = function(arr) {
  return 'There are ' + arr.length + ' elements in this array!';
};

var adder = function(a,b){
  // Check out the backticks, dollar sign, and curly braces. This is new with ES6. It's a way to avoid having to use quotes and a concatenator:
  return `The sum of the 2 numbers is ${a+b}`
};

var pi = 3.142;

module.exports.counter = counter;

// 2) In app.js:

var counter = require('./stuff'); // requires stuff.js in this file

console.log(counter(['shaun', 'crystal', 'ryu']));
