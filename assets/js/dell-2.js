//$(document).ready(function(){
   // $("#signin-click").click(function(){
     // $("#signin").empty();
    //  console.log($("#signin"))
    //});
//});



$('#signin-click').click(function(){
    var x = document.getElementById("signin");
    var y = document.getElementById("user-icon");

    //x.style.display = "none";
    //y.style.display = "block";
    $('#user-icon').css({'display': 'block'});

    //if (x.style.display == "none") {
      //x.style.display = "block";
    //} else {
     // x.style.display = "none";
      //console.log(x.style.display)
    //}
    //console.log(x.style.display)

});


function signin() {
    var x = document.getElementById("signin");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }