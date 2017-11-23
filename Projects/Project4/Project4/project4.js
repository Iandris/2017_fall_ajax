$(document).ready(function() {

    if ($("#header")) {
        $("#header").sticky({topSpacing:0});
        $("#button").sticky({topSpacing:22});
        $("#another").sticky({topSpacing:48});
    }

    if($("#alerts")) {
        alertify.prompt("Enter something into this Alertify Prompt", function(e, str) {
            if (e) {
                alertify.alert("You clicked OK after entering " + str);
            }else {
                alertify.alert("You clicked Cancel");
            }
        }, "Error");
    }
});