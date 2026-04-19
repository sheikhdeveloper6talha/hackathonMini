const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function(){

navLinks.classList.toggle("active");

});

// Animation div hero Selection

gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-card", {
  opacity: 0,
  y: -250,
  duration: 1,
  stagger: 0.4,

  scrollTrigger: {
    trigger: ".container",
    start: "top 80%",
    toggleActions: "restart none restart none"
  }
});
// Animation div hero Selection

gsap.registerPlugin(ScrollTrigger);

gsap.from(".left-col", {
  opacity: 0,
  x: -250,
  duration: 1,
  stagger: 0.4,

  scrollTrigger: {
    trigger: ".detail-grid",
    start: "top 80%",
    toggleActions: "restart none restart none"
  }
});
gsap.from(".right-col", {
  opacity: 0,
  x: 750,
  duration: 1,
  stagger: 0.4,

  scrollTrigger: {
    trigger: ".detail-grid",
    start: "top 80%",
    toggleActions: "restart none restart none"
  }
});
