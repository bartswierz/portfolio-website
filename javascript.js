//Compare this value to new value, if user moves up then current value will be LESS than prevScrollPos and display navigation, else if user moves down then current will stay larger keeping navigation off the screen.
var prevScrollPos = window.pageYOffset;

window.onscroll = function () {
  console.log("previous", prevScrollPos);
  var currentScrollPos = window.pageYOffset;
  console.log("current", currentScrollPos);

  if (prevScrollPos > currentScrollPos) {
    //User Scrolled UP
    document.getElementById("my-navbar").style.top = "0";
  } else {
    // User Scrolled DOWN - 67.25px is current navbar height
    document.getElementById("my-navbar").style.top = "-67.25px";
  }
  // Update value for future comparison
  prevScrollPos = currentScrollPos;
};
