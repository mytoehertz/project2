console.log("registering the js doc");

var isSiginingUp = true;
var isLoggingIn = false;

$(".login-form").hide();
$(".login").css("background", "none");

$(".login").click(function() {
  isLoggingIn = true;
  isSiginingUp = false;
  $(".signup-form").hide();
  $(".login-form").show();
  $(".signup").css("background", "none");
  $(".login").css("background", "#fff");
});

$(".signup").click(function() {
  isLoggingIn = false;
  isSiginingUp = true;
  $(".signup-form").show();
  $(".login-form").hide();
  $(".login").css("background", "none");
  $(".signup").css("background", "#fff");
});

$(".btn").click(function() {
  $(".input").val("");
});

// $("#submitButton").click(function() {

// $.

//   if (isSiginingUp == true) {
//     $.post("//signup", { name: , time: "2pm" });
//   }
// });
