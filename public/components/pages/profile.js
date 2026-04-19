// toggle btn function

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click",()=>{
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

gsap.registerPlugin(ScrollTrigger);

gsap.from(".cardLeft", {
  opacity: 0,
  x: -150,
  duration: 1,
  stagger: 0.4,

  scrollTrigger: {
    trigger: ".card-grid",
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
    trigger: ".card-grid",
    start: "top 80%",
    toggleActions: "restart none restart none"
  }
});
