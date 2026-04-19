function toggleMenu(){
const navLinks = document.getElementById("navLinks");
navLinks.classList.toggle("active");
}


// Animation div hero Selection

gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-section", {
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
