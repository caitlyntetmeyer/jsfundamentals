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

// stuff is module.exports.
// .counter is a PROPERTY:
module.exports.counter = counter;
// .adder is a PROPERTY:
module.exports.adder = adder;
// .pi is a PROPERTY:
module.exports.pi = pi;
/*

2) In app.js:

*/
var stuff = require('./stuff'); // requires stuff.js in this file

console.log(stuff.counter(['shaun', 'crystal', 'ryu'])); // There are 3 elements in this array
console.log(stuff.adder(5,6)); // The sum of the 2 numbers is 11
console.log(stuff.adder(stuff.pi,5); // The sum of the 2 numbers is 8.142
/*

3) Easier way: Make stuff.js this way instead -
*/
module.exports.counter = function(arr) {
  return 'There are ' + arr.length + ' elements in this array!';
};

module.exports.adder = function(a,b){
  return `The sum of the 2 numbers is ${a+b}`
};

module.exports.pi = 3.142;
/*

A third way you could do stuff.js:
*/
var counter = function(arr) {
  return 'There are ' + arr.length + ' elements in this array!';
};

var adder = function(a,b){
  return `The sum of the 2 numbers is ${a+b}`
};

var pi = 3.142;

// Using Object Literal notation:
module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
}
