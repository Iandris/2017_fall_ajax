function Student() {
	var studentName;
	var studentEmail;
	
	this.setName = function(name) {
		studentName = name;
	};
	
	this.getName = function() {
		return studentName;	
	};
	
	this.setEmail = function(email) {
		studentEmail = email;
	};
	
	this.getEmail = function() {
		return studentEmail;
	};
};

Student.prototype.register = function (email, courseName) {
	return "Email: " + email +"\nCourse: " + courseName;
};

var studentA = new Student();
studentA.setName("student1");
studentA.setEmail("something@abc.com");

alert("Student A\nName: " + studentA.getName() + "\nEmail: " + studentA.getEmail());

var studentB = new Student();
studentB.setName("student2");
studentB.setEmail("somethingElse@abc.com");

alert(studentB.register("sjobs@mac.com","iPhone development"));