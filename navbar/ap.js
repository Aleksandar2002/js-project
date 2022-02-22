let menuBtn = document.querySelector("#menu-btn");
let list = document.querySelector("nav");

menuBtn.addEventListener("click" , ()=>{
    list.style.display = "block";
    list.style.opacity = 1;
    list.style.top = "9rem";
})