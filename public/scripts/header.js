
/* Loads About Me when page is opened*/
$(document).ready(function(){
    $("#content").load("public/views/about.html #about");
});

$("#miscNav").on('click', function() {
  $("#content").load("public/views/misc.html #misc");
});

$("#projectsNav").on('click', function() {
  $("#content").load("public/views/projects.html #projects");
});

$("#educationNav").on('click', function() {
  $("#content").load("public/views/education.html #education");
});

$("#aboutNav").on('click', function() {
  $("#content").load("public/views/about.html #about");
});

$("#resumeNav").on('click', function() {
  $("#content").load("Resources/jiwookimCSresume.pdf");
});
