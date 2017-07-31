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

// Let's start over in app.js:
var events = require('events');
var util = require('util');

var Person = function(name){
  this.name = name;
};

// Make Person inherit the EventEmitter:
util.inherits(Person, events.EventEmitter);

// Create 3 new people:
var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');

// Store the people in an array:
var people = [james, mary, ryu];

// Because we've inherited the EventEmitter above, we can attach a custom event to each person as we go through the array.
people.forEach(function(person){
  person.on('speak', function(myMessage){
    console.log(person.name + ' said: ' + myMessage);
  });
});

// EMIT the 'speak' event we created by using .emit:
james.emit('speak', 'hey dudes'); // james said: hey dudes
ryu.emit('speak', 'I want a curry'); // ryu said: I want a curry
