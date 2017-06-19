/*
Closures essentially functions
	variables inside of functions cannot be used outside
*/

var init = function(){

	var name = "Summer";

	function displayName(){
		console.log(name);
	}

	displayName();
}
init();
// console.log(name)

var friend = {};

var setAge = function(myAge){
	//here is our closure
	var birthday = '5/16/2017';

	return {
		getAge: function(){
			console.log(myAge);
			return myAge;
		}
	}
}
/*
 var friend = {
	age = {
		//setting the age
		
		getAge()

		//return the age
	}
 }

*/
friend.age = setAge(55);
console.log(friend.age);
console.log(friend.age.getAge());
console.log(friend.birthday);
