// Simple Form Validation using the onsubmit method

// We have a form where the user enters her name. When she clicks Submit, we wanna check if she's entered text into the Name field. 
// So we'll INTERRUPT the process of the form being sent to the server so that we can perform some client-side validation 1st & save time.

var myForm = document.forms.myForm;
var message = document.getElementById("message");

// The onsubmit event is what happens when the user clicks Submit.
myForm.onsubmit = function(){
	if (myForm.name.value == "") {
		message.innerHTML = "Please enter a name.";
		// If the user hasn't entered a name, stop the process by returning false:
		return false;
	} else {
		message.innerHTML = "";
		// If the user has entered a name, let the submission happen by returning true:
		return true;
	}
};
