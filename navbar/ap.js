let menuBtnDiv = document.querySelector(".menu-btn-div");
let menuBtn = document.querySelector(".menu-btn");
let list = document.querySelector("nav");
let ind=0;

menuBtnDiv.addEventListener("click" , ()=>{
    if(ind){
        list.style.visibility = "hidden";
        list.style.opacity = 0;
        list.style.left = "-20rem";
        menuBtn.classList.remove("open");
        ind = 0;
    }
    else{
        list.style.visibility = "inherit";
        list.style.opacity = 1;
        list.style.left = "0rem";
        ind= 1;
        menuBtn.classList.add("open");
    }
})