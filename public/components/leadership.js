const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function(){
navLinks.classList.toggle("active");


});

// Animation div hero Selection

gsap.registerPlugin(ScrollTrigger);

gsap.from(".cardleft", {
  opacity: 0,
  x: -150,
  duration: 1,
  stagger: 0.4,

  scrollTrigger: {
    trigger: ".main-grid",
    start: "top 80%",
    toggleActions: "restart none restart none"
  }
});

gsap.from(".cardRight", {
  opacity: 0,
  x: 50,
  duration: 1,
  stagger: 0.4,

  scrollTrigger: {
    trigger: ".main-grid",
    start: "top 80%",
    toggleActions: "restart none restart none"
  }
});
