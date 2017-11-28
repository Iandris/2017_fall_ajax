$(document).ready(function() {

    if ($("#headStick").length) {
        $("#headStick").sticky({topSpacing:0});
        $("#button").sticky({topSpacing:22});
        $("#another").sticky({topSpacing:48});
    }

    if ($("#alerts").length) {
        alertify.prompt("Enter something into this Alertify Prompt", function(e, str) {
            if (e) {
                alertify.alert("You clicked OK after entering " + str);
            }else {
                alertify.alert("You clicked Cancel");
            }
        }, "Error");
    }
	
	if ($("#gmaps").length) {
		var map = new GMaps({
		  el: '#gmaps',
		  lat: 43.1210101,
		  lng: -89.3306279
		  //Madison College Lat/Long
		});
	}
	
	if ($("#shuffles").length) {
		$(function(){
			var container = $("#container");
			var	userText = $('#userText'); 

			container.shuffleLetters();

			userText.click(function () {

			  userText.val("");

			}).bind('keypress',function(e){

				if(e.keyCode == 13){
					container.shuffleLetters({
						"text": userText.val()
					});

					userText.val("");
				}

			}).hide();

			setTimeout(function(){
				container.shuffleLetters({
					"text": "Type anything you want to shuffle"
				});

				userText.val("type anything and hit return..").fadeIn();

			},1000);

		});		
	}
});