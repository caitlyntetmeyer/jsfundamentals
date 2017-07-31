/*
Net Ninja Node.js - The Node Event Emitter

Video 8: https://www.youtube.com/watch?v=NtrnaTKqFPQ&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&t=2#t=5.687684

The EVENT EMITTER allows us to wire up custom events to our own objects and then emit those events at a later point in time.

*/
// In app.js:
// Add the name (NOT including the path) of the core module, "events":
var events = require('events');

/*
jQuery Event Listeners -

"When this element fires a click event, fire a function":
element.on('click', function(){})
*/

// Let's manually emit an event. Doesn't matter what kind:

var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(myMessage){
  console.log(myMessage);
});

myEmitter.emit('someEvent', 'The event was emitted, y\'all!'); // The event was emitted, y'all!
