
/* Loads About Me when page is opened*/
$(document).ready(function(){
     alert("Load was performed");
    $("#content").load("public/views/about.html #about");
});