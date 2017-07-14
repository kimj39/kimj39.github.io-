
/* Loads About Me when page is opened*/
$(document).ready(function(){
    $("#content").load("public/views/about.html #about");
    $("#about").fadeIn("slow");
});