
/* Loads About Me when page is opened*/
$(document).ready(function(){
    $("#content").load("public/views/about.html #aboutPage");

    $(".navOp").on('click', function(e){
      console.log("lol");
  });
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
