/* BUSINESS LOGIC */
function validate(){
  var username = document.getElementById("user-name");
  var email = document.getElementById("user-email");
  var text = document.getElementById("user-text");

  if  (username.value == "" || email.value == "" || text.value == "") {
    alert ("Please input required fields.");
    return false;
  }else{
    alert ("We have received your message. Thank you for reaching out to us.");
    return true;
  }
  event.preventDefault();
}





/* UI LOGIC */
$(document).ready(function(){
  $(".clickable1").click(function(){
    $("#design").toggle();
    $("#hidden-design").toggle();
	});

  $(".clickable2").click(function(){
    $("#development").toggle();
    $("#hidden-development").toggle();
  });

  $(".clickable3").click(function(){
    $("#product-management").toggle();
    $("#hidden-pm").toggle();
  });


  $("#").hover(function (){
    $()
  });
});
