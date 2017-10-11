function init() {
	//create div element and set attributes
	var newdiv = document.createElement('div');
	newdiv.setAttribute('id','abc');
	
	//create input element and set attributes
	var newinput = document.createElement('input');
	newinput.setAttribute('type', 'text');
	newinput.setAttribute('id','txtName');
	
	//create button element and set attributes
	var newbutton = document.createElement('input');
	newbutton.setAttribute('type','button');
	newbutton.setAttribute('value','click me');	
	
	//add div to page
	document.body.appendChild(newdiv);
	
	//add elements to div
	newdiv.appendChild(newinput);
	newdiv.appendChild(newbutton);	
};

init();