var nav = document.getElementById("topNav");
var main = document.getElementById("main");
var menu = document.getElementsByClassName("menuitems");
var close = document.getElementById("closebtn");

//default to measure if/else from
nav.style.height = "50px";
main.style.marginTop = "50px";
for (i = 0; i < menu.length; i++){menu[i].style.marginTop="100px";};

close.addEventListener("click", function(){
  var menuIcon = close.children;
  for (i = 0; i < menuIcon.length; i++){
  menuIcon[i].classList.toggle("active");
  }   
});

function navToggle() {	
    //to close
    if (nav.style.height <= "275px") {
    nav.style.height = "50px";
    main.style.marginTop = "50px";
    
        var i = 0;
        for (i = 0; i < menu.length; i++){
    menu[i].style.opacity="0.0";
    menu[i].style.marginTop="100px";
    };
        document.body.style.backgroundColor = "rgba(0,0,0,0.0)";
    
    } 
    //to open
    else if (nav.style.height <= "50px") {
    nav.style.height = "275px";
    main.style.marginTop = "275px";
        var i = 0;
        for (i = 0; i < menu.length; i++){
    menu[i].style.opacity="1.0";
    menu[i].style.marginTop="0px";
    };
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    
    }

};

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}