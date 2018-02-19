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