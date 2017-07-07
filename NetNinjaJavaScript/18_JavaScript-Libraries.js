// JavaScript Libraries

// Video: https://www.youtube.com/watch?v=uq7omoxwA7A&list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET&index=45

// A JS library is code that smn else wrote that can reduce your work load.
// There are libraries for general purpose, animation, form enhancement, video, etc.

/* 
The most popular JS library is jQuery.

Find the CDN (Content Delivery Network) at https://jquery.com/download. Use the minified version. 

Ex of adding jQuery in HTML: <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
If you do this, put this script tag BEFORE your link to your JS document.
*/

// Grab a paragraph that's inside of a div that has an id of "content":
// Vanilla JavaScript is awkward:
var myPara = document.getElementById("content").getElementsByTagName("p")[5];


// It's easier to use jQuery:
var myPara2 = $("#content p:last-child");
// The above uses a CSS selector to grab an HTML div that has an id of "content", then grabs the last p inside that div.

// Let's use jQuery methods on what we've grabbed.


// Use the addClass method to ADD the class of "test" to the p:
myPara2.addClass("test"); // <p class="test">grab me</p>

// Use the removeClass method to REMOVE the class of "test" from the p:
myPara2.removeClass("test"); // <p class>grab me</p>


// Use the fadeOut method to make the paragraph fade OUT:
myPara2.fadeOut();

// Use the fadeIn method to make the p fade IN:
myPara2.fadeIn();


// Control the CSS properties; pass in an object between the curly braces:
myPara2.css( { position: "relative", color: "red" } );
// makes the p have a relative position and changes the text to red

// (position relative - The element is positioned realtive to its NORMAL position, so "left: 50px" adds 50 pixels to the element's LEFT position. So the element moves to the right by 50px.)


// Use the animate method to animate p to MOVE SMOOTHLY to the right 50px:
myPara2.animate( { left: "50px" } );















