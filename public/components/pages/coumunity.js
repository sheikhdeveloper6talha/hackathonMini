// Animation div hero Selection

gsap.registerPlugin(ScrollTrigger);

gsap.from(".dark-card", {
  opacity: 0,
  x: -550,
  duration: 1,
  stagger: 0.4,

  scrollTrigger: {
    trigger: ".auth-wrapper",
    start: "top 80%",
    toggleActions: "restart none restart none"
  }
});
gsap.from(".light-card", {
  opacity: 0,
  x: 550,
  duration: 1,
  stagger: 0.4,

  scrollTrigger: {
    trigger: ".auth-wrapper",
    start: "top 80%",
    toggleActions: "restart none restart none"
  }
});
