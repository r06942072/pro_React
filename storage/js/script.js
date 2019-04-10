//JQuery
$(document).ready(function() {
    $("#hidden").hover(function(){
        $(this).css("color", "green");
    })
    $("#alert_button").click(function() {
        alert("I am alerting you by JQuery");
    })
})

