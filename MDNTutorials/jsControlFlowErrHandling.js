/* 

JavaScript Control Flow and Error Handling

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling

The semicolon is used to separate statements in JS code.

Any JS expression is also a statement.

*/

	// Block Statement:

		// The most basic statement is a block statement that's used to group statements. Delimited by { }.

		{
			statement_1;
			statement_2;
			statement_3;
		}

		// In this example, what's in curly braces is the block statement:

		while ( x < 10 ) {
			x++;
		}

		// Block statements do NOT define a scope for "var":

		var x = 1;
		{
			var x = 2;
		}
		console.log(x); // 2 - because both "var x" statements are in the same SCOPE.

			// Starting with ECMAScript2015, the "let" variable declaration IS block-scoped.

	// Conditional Statements:

		// If Statement:

		if (condition) {
			statement_1;
		} else {
			statement_2;
		}

		// You can use "else if" to have multiple conditions tested in sequence:

		if (condition_1) {
			statement_1;
		} else if (condition_2) {
			statement_2;
		} else if (condition_n) {
			statement_n;
		} else {
			statement_last;
		}

		// Only the 1st logical condition that evaluates to true will be executed. To execute multiple statements, group them in a block statement:

		if (condition) {
			statement_1_runs_if_condition_is_true;
			statement_2_runs_if_condition_is_true;
		} else {
			statement_3_runs_if_condition_is_false;
			statement_4_runs_if_condition_is_false;
		}

		/*

		Falsy Values (evaluate to false):

			false
			undefined
			null
			0
			NaN
			""

		All other values, including all objects, evaluate to true when passed to a conditional statement: */

			var b = new Boolean(false); // This is a Boolean object
			if (b) // true because b does exist
			if (b == true) // false because b's value is false

		// Example - This function returns "true" if the num of chars in a Text object is 3; otherwise, it displays an alert and returns "false":

			function checkData() {
				if (document.form1.threeChar.value.length == 3) {
					return true;
				} else {
					alert("Enter exactly 3 characters. " +
						document.form1.threeChar.value + " is not valid.");
					return false;
				}
			}
	





















