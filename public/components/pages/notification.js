// toggle menu btn function

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
// Animation div hero Selection

gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-card", {
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