function clickMe() {
	var userInput = document.getElementById('username').value;
	if (userInput.length == 0 || userInput == null) {
		window.alert("Username is a required field.");
	} else {
		window.alert(userInput);
	}	
	return false;
}