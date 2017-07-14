
/* Loads About Me when page is opened*/
$(document).ready(function(){
    $('#content').fadeIn(1000);
    $("#content").load("public/views/about.html #about");
});