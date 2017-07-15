
/* Loads About Me when page is opened*/
$(document).ready(function(){
    $("#content").load("public/views/about.html #aboutPage");
});

// $("#miscNav").on('click', function() {
//   $("#content").load("public/views/misc.html #miscPage");
// });

// $("#projectsNav").on('click', function() {
//   $("#content").load("public/views/projects.html #projectsPage");
// });

// $("#educationNav").on('click', function() {
//   $("#content").load("public/views/education.html #educationPage");
// });

// $("#aboutNav").on('click', function() {
//   $("#content").load("public/views/about.html #aboutPage");
// });

// $("#resumeNav").on('click', function() {
//   $("#content").load("Resources/jiwookimCSresume.pdf");
// });

$(".navbar").on('click', function(e){
  var myClass = e.target.className;
  if (myClass === "navOp") {
    var myId = e.target.id;
    $("#content").load("public/views/%{myId}.html #%{myId}Page");
  }
});