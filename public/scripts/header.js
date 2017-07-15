
/* Loads About Me when page is opened*/
$(document).ready(function(){
    $("#content").load("public/views/about.html #aboutPage");
});

$("#resume").on('click', function() {
  $("#content").load("Resources/jiwookimCSresume.pdf");
});

$(".navbar").on('click', function(e){
  var myClass = e.target.className;
  if (myClass === "navOp") {
    var myId = e.target.id;
    if (myId !== "resume"){
      $("#content").load("public/views/" + myId + ".html #" + myId + "Page");
    }
  }
});