let goToJoin = ()=>{
    window.location.href = './components/pages/coumunity.html'
}
let gotoCum = ()=>{
    window.location.href = './components/pages/createRequest.html'
}

// toggle btn

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", function(){
menu.classList.toggle("active");
});


// Animation div hero Selection

gsap.registerPlugin(ScrollTrigger);

gsap.from(".container", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.4,

  scrollTrigger: {
    trigger: ".box",
    start: "top 80%",
    toggleActions: "restart none restart none"
  }
});
gsap.from(".section-header", {
  opacity: 0,
  x: -50,
  duration: 1,
  stagger: 0.4,

  scrollTrigger: {
    trigger: ".section-block",
    start: "top 80%",
    toggleActions: "restart none restart none"
  }
});
