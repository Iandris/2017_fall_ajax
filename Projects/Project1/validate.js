function init() {
	addClickHandler();
	clearDivs();
}

function addClickHandler() {
	var control = document.getElementById("validate");
	
	if (window.addEventListener) {
		control.addEventListener("click", validate, false);
	} else {
		control.attachEvent("onclick", validate);
	}

}

function clearDivs() {
	var elemDiv = document.getElementById('resultsDiv');		
	if (elemDiv != null) {
		document.body.removeChild(elemDiv);
	};
	
	var errorDivs = document.getElementsByClassName('errors');	
	
	while(errorDivs[0]){
		errorDivs[0].parentNode.removeChild(errorDivs[0]);
	};
};

function validate() {
	clearDivs();
	
	var errors = 0;
	
	errors += validateTextInput("name");
	
	errors += validateTextInput("email");
	
	errors += validateTextInput("areacode");
	
	errors += validateTextInput("prefix");
	
	errors += validateTextInput("suffix");
	
	errors += validateTextInput("address");
	
	errors += validateTextInput("city");
	
	errors += validateCheckBox();
	
	errors += validateSelect();
	
	errors += validateTextInput("zip");	

	if (errors == 0) {
		clearDivs();
		insertResult();
	};
};

function appendErrorDiv(elementID) {
	var errorDiv = document.createElement('div');
	errorDiv.name = "errorDiv_" + elementID;
	errorDiv.id = "errorDiv_" + elementID;
	errorDiv.className = 'errors';
	errorDiv.setAttribute('style', 'float:right;margin:5px;color:red');	
	errorDiv.appendChild(document.createTextNode("ERROR: " + elementID.charAt(0).toUpperCase() + elementID.slice(1) + " is required"));
	document.getElementById(elementID).parentNode.appendChild(errorDiv);
};

function validateTextInput(elementID) {	
	var element = document.getElementById(elementID);
	if (element.value.length == 0 || element.value == null) {
		appendErrorDiv(elementID);
		return 1;
	} else {
		return 0;
	};
}

function validateCheckBox() {
	if (getPreviousCheck() == "") {
		var previous = document.getElementsByClassName('checkbox');
		appendErrorDiv(previous[0].id);
		return 1;
	} else {
		return 0;
	};
}

function validateSelect() {
	var state = document.getElementById("state");
	if (state.options[state.selectedIndex].value == "Select...") {
		appendErrorDiv(state.id);
		return 1;
	} else {
		return 0;
	};
}

function getGenderRadio() {
	var gender = "Unknown";
	
	var radios = document.getElementsByName("gender");
	
	for (var i = 0; i < radios.length; i++ ) {
		if (radios[i].checked) {
			gender = radios[i].value;
			break;
		};
	};

	return gender;
}

function getPreviousCheck() {
	var previous = document.getElementsByClassName('checkbox');
	var previousSelected = "";
	
	for (var i = 0; previous[i]; i++) {
		if (previous[i].checked) {
			previousSelected += previous[i].value + ", ";
		};
	};
	
	previousSelected = previousSelected.substring(0, previousSelected.length -2);
	return previousSelected;
}

function insertResult() {	
	var elemDiv = document.createElement('div');
	var state = document.getElementById("state");
	
	elemDiv.name = "resultsDiv";
	elemDiv.id = "resultsDiv";
	
	elemDiv.appendChild(document.createElement("br"));
	
	elemDiv.appendChild(document.createTextNode("Name:\t" + document.getElementById("name").value));
	elemDiv.appendChild(document.createElement("br"));
	
	elemDiv.appendChild(document.createTextNode("Email:\t" + document.getElementById("email").value));
	elemDiv.appendChild(document.createElement("br"));
	
	elemDiv.appendChild(document.createTextNode("Phone:\t(" + document.getElementById("areacode").value + ") " 
		+ document.getElementById("prefix").value + "-"  + document.getElementById("suffix").value));
	elemDiv.appendChild(document.createElement("br"));

	elemDiv.appendChild(document.createTextNode("Address:\t" + document.getElementById("address").value));
	elemDiv.appendChild(document.createElement("br"));

	elemDiv.appendChild(document.createTextNode("City:\t" + document.getElementById("city").value));
	elemDiv.appendChild(document.createElement("br"));	
	
	elemDiv.appendChild(document.createTextNode("State:\t" + state.options[state.selectedIndex].value));
	elemDiv.appendChild(document.createElement("br"));

	elemDiv.appendChild(document.createTextNode("Zip:\t" + document.getElementById("zip").value));
	elemDiv.appendChild(document.createElement("br"));
	
	elemDiv.appendChild(document.createTextNode("Gender:\t" + getGenderRadio()));
	elemDiv.appendChild(document.createElement("br"));

	elemDiv.appendChild(document.createTextNode("Previous Course(s):\t" + getPreviousCheck() ));
	elemDiv.appendChild(document.createElement("br"));
	
	document.body.appendChild(elemDiv);
}