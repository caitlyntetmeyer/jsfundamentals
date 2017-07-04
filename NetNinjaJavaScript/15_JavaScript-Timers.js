/* 

JavaScript Timers

The functions we use for JavaScript timers are:

setTimeout()
setInterval()

There's also clearTimeout() and clearInterval().

You'll want to add transitions in your CSS, ex:

#message {
	opacity: 0;
	transition: opacity 0.7s;
}

#message.show: {
	opacity: 1;
	transition: opacity 0.7s;
}

*/


// setTimeout() :

var myMessage = document.getElementById("message");
// saves the element w/an id of "message" to the variable myMessage

function showMessage(){
	myMessage.className = "show"; 
}
/* adds a class name of "show" to myMessage. The class name "show" is built
in to JavaScript and will cause something to show on the page. */

/*

Syntax for setTimeout() :

setTimout(function we want to call, after how many milliseconds you want this 
	function to fire);

*/
setTimeout(showMessage, 3000);
// calls the showMessage function after 3 seconds


// setInterval() :

// setInterval() calls a function many times, not just once like setTimout()
var colorChanger = document.getElementById("color-changer");
// saves the element w/an id of "color-changer" to the variable colorChanger

var colors = ["red", "blue", "green", "pink"];
// saves an array of strings to the variable colors

var counter = 0;
// counts which position we're in in the array

function changeColor(){
	if (counter >= colors.length) {
		counter = 0;
	}
	// Once it cycles to pink (see line 56), start over at red.

	colorChanger.style.background = colors[counter];
	/* grabs the style of the background of the colorChanger variable and sets
	it equal to the colors' counter */
	counter++;
}
// changes the color of the div that has an id of "color-changer"


/* 

Syntax of setInterval() :

setInterval(function we wanna call, how OFTEN we wanna call it);

*/

var myTimer = setInterval(changeColor, 3000);

// How to stop a timer:

// When user clicks on the div...
colorChanger.onclick = function(){
	// ...stop the colors from changing any more...
	clearInterval(myTimer);
	// ...and change the text of the div from no text to "Timer stopped".
	colorChanger.innerHTML = "Timer stopped";
}













