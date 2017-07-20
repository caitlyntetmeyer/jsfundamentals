/* Video #4: https://www.youtube.com/watch?v=PY-AycMkEAg&index=3&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp#t=0.506032

The Global Object

The global object is available to us when using Node JS.

The global object, in contrast to the global object in a browser, is not the Window object.

It is just an object called 'Global'.

In this tutorial we'll take a look at some of the things available to us on the object.

See nodejs.org documentation.

*/

// These are on the global object.

console.log('hey ninjas');

setTimeout(function(){
  console.log('3 seconds have passed');
}, 3000);

var time = 0;

var timer = setInterval(function(){
  time += 2;
  console.log(time + ' seconds have passed');
  if (time > 5){
    clearInterval(timer);
  }
}, 2000);

// Node can tell us where we are in a particular directory, or what file we're in:
console.log(__dirname); // /Users/Caitly/Desktop/JavaScriptSummerElevenFifty/jsfundamentals/NetNinjaNode.js
console.log(__filename); // /Users/Caitly/Desktop/JavaScriptSummerElevenFifty/jsfundamentals/NetNinjaNode.js/04_The-Global-Object.js

// require, exports

// Shaun's repo: https://github.com/iamshaunjp/node-js-playlist
