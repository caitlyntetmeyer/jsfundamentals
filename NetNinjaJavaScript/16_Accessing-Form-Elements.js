// Accessing Form Elements

// Video: https://www.youtube.com/watch?v=BhlvQfIaE4k&index=43&list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET

document.forms.theNameOfYourForm;
// returns your form.
// Store it in a variable:
var myForm = document.forms.theNameOfYourForm;
myForm;
// returns your form.

// Return a certain thing, such as a name, from the form:
myForm.name;
myForm.name.value;	// "ninja"
myForm.color;	// "Blue"

// The event .onfocus (ex: your cursor's on a form box):
myForm.name.onfocus = function(){
	myForm.name.style.border = "4px solid pink";
}
// So when the focus is on the form box, there's a pink border.
// .onblur - opposite of .onfocus:
myForm.name.onblur = function(){
	myForm.name.style.border = "none";
}
// So when you click away from the form box, there's no border.
