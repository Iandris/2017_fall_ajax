function btn_click() {
    var xhr = new XMLHttpRequest();
    var params = "?name=" + document.getElementById("txtName").value;
	xhr.open("GET", "http://localhost:61635/Home/Index" + params);

	
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200){
			alert(xhr.responseText);
		}
	};
	
	xhr.send(null);
};

function init() { 
    var btn1 = document.getElementById("btnSend");
    if (window.addEventListener) {
        btn1.addEventListener("click", btn_click, false);
    } else {
        btn1.attachEvent("onclick", btn_click);
    };
};