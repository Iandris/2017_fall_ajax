function init() {
	var btn1 = document.getElementById("btn1");
	var btn2 = document.getElementById("btn2");
	var btn3 = document.getElementById("btn3");
	
	if (window.addEventListener) {
		btn1.addEventListener("click", btn_click, false);
		btn2.addEventListener("click", btn_click, false);
		btn3.addEventListener("click", btn_click, false);
	} else {
		btn1.attachEvent("onclick", btn_click);
		btn2.attachEvent("onclick", btn_click);
		btn3.attachEvent("onclick", btn_click);
	};
}

function btn_click() {
	var control;
	if (window.event) {
		control = window.event.srcElement;
	} else {
		control = this;
	};	
	appendDiv(control.value);
}

function appendDiv(val) {
	var cartDiv = document.getElementById('cart');		
	if (cartDiv == null) {
		cartDiv = document.createElement('div');
		cartDiv.id = 'cart';		
	} else {
		cartDiv.appendChild(document.createElement('br'));
	};
	
	cartDiv.appendChild(document.createTextNode("Clicked Button " + val));
	document.body.appendChild(cartDiv);
}