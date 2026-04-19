const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function(){
navLinks.classList.toggle("active");
console.log('working');

});


// Animation div hero Selection

gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-header", {
  opacity: 0,
  y: -150,
  duration: 1,
  stagger: 0.4,

  scrollTrigger: {
    trigger: ".container",
    start: "top 80%",
    toggleActions: "restart none restart none"
  }
});
gsap.from(".filters-card", {
  opacity: 0,
  x: -150,
  duration: 1,
  stagger: 0.4,

  scrollTrigger: {
    trigger: ".explore-grid",
    start: "top 80%",
    toggleActions: "restart none restart none"
  }
});
gsap.from(".req-card", {
  opacity: 0,
  x: 150,
  duration: 1,
  stagger: 1,

  scrollTrigger: {
    trigger: ".explore-grid",
    start: "top 80%",
    toggleActions: "restart none restart none"
  }
});
