
/* Loads About Me when page is opened*/
$(document).ready(function(){
    $("#content").load("public/views/about.html #aboutPage");
});

/* Loads corresponding page when selected in Nav Bar */
$(".navbar").on('click', function(e){
  var myClass = e.target.className;
  if (myClass === "navOp" || myClass === "navText") {
    var myId = e.target.id;
    if (myId !== "resume"){
      $("#content").load("public/views/" + myId + ".html #" + myId + "Page");
    }
  }
});