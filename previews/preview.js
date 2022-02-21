//          BUTTONS
let leftBtn = document.querySelector("#left");
let rightBtn = document.querySelector("#right");
let randBtn = document.querySelector("#rand-btn");
// ELEMENTS
let visibleBlock = document.querySelector(".visible-block");
let counter = document.querySelector("#counter");
let previewList = document.querySelectorAll(".preview");

// VARIABLES
let curentPreview = 0;

leftBtn.addEventListener("click" , ()=>{
    hidePreview(curentPreview);
    checkMin();
    showPreview(curentPreview);
})
rightBtn.addEventListener("click" , ()=>{
    hidePreview(curentPreview);
    checkMax();
    showPreview(curentPreview);
})
randBtn.addEventListener("click" , ()=>{
    hidePreview(curentPreview);
    curentPreview = Math.floor(Math.random() * 6);
    showPreview(curentPreview);
})

function checkMin(){    
    if(curentPreview == 0)
        curentPreview = 5;
    else curentPreview--;
}
function checkMax(){
    if(curentPreview == 5)
        curentPreview = 0;
    else curentPreview++;
}
function hidePreview(a){
    previewList[a].style.display= "none";
    counter.innerHTML = "";
}
function showPreview(a){
    previewList[a].style.display= "flex";
    counter.innerHTML = curentPreview+1;
}