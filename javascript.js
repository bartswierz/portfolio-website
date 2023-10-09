//HIDE/DISPLAY NAVBAR - Compare this value to new value, if user moves up then current value will be LESS than prevScrollPos and display navigation, else if user moves down then current will stay larger keeping navigation off the screen.
var prevScrollPos = window.pageYOffset;

window.onscroll = function () {
  // console.log("previous", prevScrollPos);
  var currentScrollPos = window.pageYOffset;
  // console.log("current", currentScrollPos);

  if (prevScrollPos > currentScrollPos) {
    //User Scrolled Up - Display Navbar
    document.getElementById("my-navbar").style.top = "0";
  } else {
    // User Scrolled DOWN - 67.25px is current navbar height
    document.getElementById("my-navbar").style.top = "-250px";
    // TODO - when user scrolls down we want to also CLOSE the navbar IF ITS OPEN
  }
  // Update value for future comparison
  prevScrollPos = currentScrollPos;
};

/*****************************************************/
//Fade In effect for projects when user intersects
const intersectionOptions = {
  root: null, // use the viewport
  rootMargin: "0px",
  threshold: 0.1,
};

//Collecting all projects with class name 'project-section'
const allProjects = document.querySelectorAll(".project-section");
console.log("My Projects: ", allProjects);

//Observer for PROJECT #1 - Alpha Clothing
const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // If entry intersects then we will display project to user
    // if (entry.isIntersecting) {
    if (entry.intersectionRatio >= 0.1) {
      //animate-proj-1 or animate-proj-2 or animate-proj-3
      // console.log("entry: ", entry.target.classList[1]);

      /*
      entry.target.classList[1] === class="animate-proj-1 or 2 or 3"
      in this query selector we are creating string literal for one of the three project sections -> 
      (i.e. document.querySelector('.animate-proj-1') )
      */
      document.querySelector(`.${entry.target.classList[1]}`).classList.add("slideInBottom", "display");
    }
  });
}, intersectionOptions);

//Observes ALL THREE PROJECT SECTIONS
allProjects.forEach((project) => {
  projectObserver.observe(project);
});

//WORK PROJECTS ----------
//Collecting all projects with class name 'project-section'
const allWorkProjects = document.querySelectorAll(".work-project-section");
console.log("allWorkProjects: ", allWorkProjects);

//Observer for PROJECT #1 - Alpha Clothing
const workProjectObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // If entry intersects then we will display project to user
    // if (entry.isIntersecting) {
    if (entry.intersectionRatio >= 0.1) {
      //animate-proj-1 or animate-proj-2 or animate-proj-3
      // console.log("entry: ", entry.target.classList[1]);

      /*
      entry.target.classList[1] === class="animate-proj-1 or 2 or 3"
      in this query selector we are creating string literal for one of the three project sections -> 
      (i.e. document.querySelector('.animate-proj-1') )
      */
      document.querySelector(`.${entry.target.classList[1]}`).classList.add("slideInBottom", "display");
    }
  });
}, intersectionOptions);

//Observes ALL THREE PROJECT SECTIONS
allWorkProjects.forEach((project) => {
  workProjectObserver.observe(project);
});
//-----------------------
//=== let target = document.querySelector('#listItem');
const contactForm = document.querySelector(".contact-section");

const contactFormObserver = new IntersectionObserver((entry) => {
  // if(entries[0])
  console.log("Contact Form entry: ", entry);
  if (entry[0].isIntersecting) {
    // document.querySelector(".contact-section").classList.add("fadeInBottom");
    // document.querySelector(".contact-section").classList.add("fadeInLeft");
    document.querySelector(".contact-section").classList.add("slideInLeft", "display");
  }
}, intersectionOptions);

//passing observer the div with class name 'contact-section'
contactFormObserver.observe(contactForm);
//===observer.observe(target);

/*************************************************************/
//Observes ALL THREE FOOTER LINKS
// const allFooterLinks = document.querySelector(".footer-link");
// // const allProjects = document.querySelectorAll(".project-section");

// const footerLinkObserver = new IntersectionObserver((entries) => {
//   // If entry intersects then we will display project to user
//   console.log("entries: ", entries);
//   entries.forEach((entry) => {
//     // If user reaches footer then give all three links fade in
//     if (entry.isIntersecting) {
//       document.querySelectorAll(".footer-link")[0].classList.add("slideInRightIcon");
//       document.querySelectorAll(".footer-link")[1].classList.add("slideInRightIcon");
//       document.querySelectorAll(".footer-link")[2].classList.add("slideInRightIcon");
//     }
//   });
// }, intersectionOptions);

// //Same as -> footerLinkObserver.observe(document.querySelector(".footer-link"));
// footerLinkObserver.observe(allFooterLinks);

const aboutSection = document.querySelector(".about-section");

const aboutSectionObserver = new IntersectionObserver((entry) => {
  if (entry[0].isIntersecting) {
    document.querySelector(".about-section").classList.add("fade-in");
  }
});

//passing observer the div with class name 'about-section'
aboutSectionObserver.observe(aboutSection);
