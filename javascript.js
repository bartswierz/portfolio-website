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

//Collecting all projects with class name 'project-section'
const allProjects = document.querySelectorAll(".project-section");
// console.log("My Projects: ", allProjects);

//Observer for PROJECT #1 - Alpha Clothing
const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // If entry intersects then we will display project to user
    if (entry.isIntersecting) {
      //animate-proj-1 or animate-proj-2 or animate-proj-3
      // console.log("entry: ", entry.target.classList[1]);

      /*
      entry.target.classList[1] === class="animate-proj-1 or 2 or 3"
      in this query selector we are creating string literal for one of the three project sections -> 
      (i.e. document.querySelector('.animate-proj-1') )
      */
      document.querySelector(`.${entry.target.classList[1]}`).classList.add("fadeInBottom");
    }
  });
});

//Observes ALL THREE PROJECT SECTIONS - 3 Projects total
allProjects.forEach((project) => {
  projectObserver.observe(project);
});
