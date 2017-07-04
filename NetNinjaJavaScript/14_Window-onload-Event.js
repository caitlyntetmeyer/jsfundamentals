// Window onload Event

// Video: https://www.youtube.com/watch?v=RVA4HoEE_q8&index=41&list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET

/* HTML docs load from top to bottom, so we normally have to put our script 
tags RIGHT BEFORE the closing body tag. But if you put all your JavaScript 
content in the functions below, you don't have to do that! */

function setUpEvents(){
	/* Your JavaScript content goes here. We'll call this function below, 
	INSIDE OF the window.onload function. */
}

window.onload = function(){
// "window" refers to the browser window.
// .onload says, "When all HTML tags have loaded, fire this function."
	
	setUpEvents();
	// calls the function from line 9
	
};

// makes sure that no JavaScript is fired until the window is loaded