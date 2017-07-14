
/* Loads About Me when page is opened*/
$(document).ready(function(){
    $("#content").fadeIn("slow");
    $("#content").load("public/views/about.html #about");
});