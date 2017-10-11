function init() {
	var students = [
		{"id":1, "name":"Bill","email":"abc@123.com"},
		{"id":2, "name":"Dave","email":"def@123.com"},
		{"id":3, "name":"Mark","email":"ghi@123.com"},
		{"id":4, "name":"John","email":"jkl@123.com"},
		{"id":5, "name":"Mike","email":"mno@123.com"},
		];	
	
	for (var i = 0; i < students.length; i++) {
		alert("Student ID: " + students[i].id +
		 "\nStudent Email: " + students[i].email);
	};
};