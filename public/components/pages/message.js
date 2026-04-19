// toggle function menu button

const menuBtn=document.getElementById("menuBtn");
const navLinks=document.getElementById("navLinks");

menuBtn.addEventListener("click",function(){
 navLinks.classList.toggle("show");
});

// Animation div hero Selection

gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-card", {
  opacity: 0,
  y: -350,
  duration: 1,
  stagger: 0.4,

  scrollTrigger: {
    trigger: ".container",
    start: "top 80%",
    toggleActions: "restart none restart none"
  }
});

gsap.from(".cardLeft", {
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
  x: 150,
  duration: 1,
  stagger: 0.4,

  scrollTrigger: {
    trigger: ".main-grid",
    start: "top 80%",
    toggleActions: "restart none restart none"
  }
});