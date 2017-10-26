$(document).ready(function() {
//1
	$("li").text("cubs stink");
	alert("1. cubs stink");
//2
	console.log("2. Contents of element with ID of header " + $("#header").html());
//3
	console.log("3. Total of elements of class 'link' " + $(".link").length);
//4
	$("tr.odd").find("td").addClass("oddColumn");
	
	$(".oddColumn").each(function() {
		console.log("4. Element with 'oddColumn' class added " + $(this).html());
	});
});