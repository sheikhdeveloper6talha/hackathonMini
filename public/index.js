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