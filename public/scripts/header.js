
/* Loads About Me when page is opened*/
$(document).ready(function(){
    $('#content').fadeIn(500);
    $('#content').fadeTo("slow",0.9); 
    $("#content").load("public/views/about.html #about");
});