var burritos = new Array();
function init() {	
    var btn1 = document.getElementById("btnAdd");
    if (window.addEventListener) {
        btn1.addEventListener("click", btn_add_click, false);
    } else {
        btn1.attachEvent("onclick", btn_add_click);
    };
	
	resetForm();
	
	clearReceipt();
};

function btn_add_click() {
	var burrito = new Burrito();
	burrito.setMeat(document.getElementById("meat").value);
	burrito.setRice(getRadioSelected("rice"));
	burrito.setBeans(getRadioSelected("beans"));
	burrito.setSalsa(getCheckboxList);
	burrito.setGuac(document.getElementById("guac").checked);
	
	//add burrito to listStyleType (include removeclick handler)	
	burritos.push(burrito);
	
	updateReceiptTotal();
};

function btn_remove_click() {
	//find burrito in list and remove
	
	updateReceiptTotal();
};

function updateReceiptTotal() {
	var totalSection = document.getElementById("totalCost");
	var receiptDiv = document.getElementById('burritoOrder');		
	
	if (totalSection != null) {
		receiptDiv.removeChild(totalSection);
	};
	
	var newTotal = document.createElement('div');
	newTotal.id = "totalCost";
	newTotal.appendChild(document.createTextNode(calculateTotal()));
	
	receiptDiv.appendChild(newTotal);
	resetForm();
};

function calculateTotal() {
	var total = 0.00;
	
	for (var i = 0; i < burritos.length; i++ ) {
		total += parseFloat(burritos[i].getCost());
	}
	
	return total.toFixed(2);
};

function resetForm() {
	document.getElementById("meat").selectedIndex = 0;
	
	var allRadios = document.querySelectorAll("input[type='radio']");
	for (var i = 0; i < allRadios.length; i++) {
		allRadios[i].checked = false;
	};
	
	var allChecks = document.querySelectorAll("input[type='checkbox']");
	for (var i = 0; i < allChecks.length; i++) {
		allChecks[i].checked = false;
	};	
};

function clearReceipt() {
	var receiptDiv = document.getElementById('burritoOrder');		
	if (receiptDiv != null) {
		document.body.removeChild(receiptDiv);
	};
	var newReceiptDiv = document.createElement('div');
	newReceiptDiv.id = "burritoOrder";
	
	document.body.appendChild(newReceiptDiv);
};

function getRadioSelected(control) {
	var selected = "none";
	var radios = document.getElementsByName(control);	
	for (var i = 0; i < radios.length; i++ ) {
		if (radios[i].checked) {
			selected = radios[i].value;
			break;
		};
	};

	return selected;	
};

function getCheckboxList() {
	var salsa = document.querySelectorAll('.salsa');
	var salsaSelected = "";
	
	for (var i = 0; salsa[i]; i++) {
		if (salsa[i].checked) {
			salsaSelected += salsa[i].value + ", ";
		};
	};
	
	salsaSelected = salsaSelected.substring(0, salsaSelected.length -2);
	return salsaSelected;	
};

function Burrito() {
	var chosenMeat;
	var chosenRice;
	var chosenBeans;
	var chosenSalsa;
	var chosenGuac;
	
	this.setMeat = function(meat) {
		chosenMeat = meat;
	};
	
	this.getMeat = function() {
		return chosenMeat;
	};
	
	this.setRice = function(rice) {
		chosenRice = rice;
	};
	
	this.getRice = function() {
		return chosenRice;
	};
	
	this.setBeans = function(beans) {
		chosenBeans = beans;
	};
	
	this.getBeans = function() {
		return chosenBeans;
	};
	
	this.setSalsa = function(salsa) {
		chosenSalsa = salsa;
	};
	
	this.getSalsa = function() {
		return chosenSalsa;
	};
	
	this.setGuac = function(guac) {
		chosenGuac = guac;
	};
	
	this.getGuac = function() {
		return chosenGuac;
	};
	
	this.getCost = function() {
		var cost = 0.00;
		switch (chosenMeat) {
			case "Chicken":
				cost = 6.20;
				break;
			case "Steak":
				cost = 6.75;
				break;
			case "Carnitas":
				cost = 6.60;
				break;
			case "Barbacoa":
				cost = 6.60;
				break;
			case "Vegetarian":
				cost = 6.20;
				break;				
		};
		
		if (chosenGuac == true) {			
			cost = cost + 1.40;
		}
		
		return cost.toFixed(2);
	};
};