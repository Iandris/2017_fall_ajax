function init() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://localhost:61635/Home/Index");	
	
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4){
			alert(xhr.responseText);
		}
	};
	
	xhr.send(null);
};