//Compare this value to new value, if user moves up then current value will be LESS than prevScrollPos and display navigation, else if user moves down then current will stay larger keeping navigation off the screen.
var prevScrollPos = window.pageYOffset;

window.onscroll = function () {
  // console.log("previous", prevScrollPos);
  var currentScrollPos = window.pageYOffset;
  // console.log("current", currentScrollPos);

  if (prevScrollPos > currentScrollPos) {
    //User Scrolled UP
    document.getElementById("my-navbar").style.top = "0";
  } else {
    // User Scrolled DOWN - 67.25px is current navbar height
    document.getElementById("my-navbar").style.top = "-250px";
  }
  // Update value for future comparison
  prevScrollPos = currentScrollPos;
};

/*****************************************************/
//Fade In effect for projects when user intersects

//Observer for PROJECT #1 - Alpha Clothing
const observerProjOne = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // If classes ARE INTERSECTING then we will ADD BACK IN fade class
    if (entry.isIntersecting) {
      document.querySelector(".animate-proj-1").classList.add("fadeInBottom");
    }
  });
});

observerProjOne.observe(document.querySelector(".animate-proj-1"));

/*****************************************************/
//Observer for PROJECT #2 - Bots For Hire
const observerProjTwo = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log("entries: ", entries);

    //If User intersects container, add animation
    if (entry.isIntersecting) {
      document.querySelector(".animate-proj-2").classList.add("fadeInBottom");
    }
  });
});

observerProjTwo.observe(document.querySelector(".animate-proj-2"));

/*****************************************************/
//Observer for PROJECT #3 - Pizza Bytes
const observerProjThree = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // If classes ARE INTERSECTING then we will ADD BACK IN fade class
    if (entry.isIntersecting) {
      document.querySelector(".animate-proj-3").classList.add("fadeInBottom");
    }
  });
});

observerProjThree.observe(document.querySelector(".animate-proj-3"));
