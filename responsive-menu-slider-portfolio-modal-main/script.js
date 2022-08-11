//MENU

let menuBtn = document.querySelector(".header button");
let menuList = document.querySelector(".header ul");
let ind = 0;

menuBtn.addEventListener("click",() =>{
    if(ind === 1){
        menuList.style.display = "none";
        ind =0;
    }else{
        menuList.style.display = "block";
        ind = 1;
    }
});

//SLIDER

let firstImg = document.querySelector(".slider-images img:first-child");
let sliderImgs = document.querySelectorAll(".slider-images img");
let leftBtn = document.querySelector("#left-btn");
let rightBtn = document.querySelector("#right-btn");
let currentImg = 0;

leftBtn.addEventListener("click" , ()=>{
    sliderImgs[currentImg].style.display = "none";
    if(currentImg === 0)currentImg = 3;
    currentImg--;
    sliderImgs[currentImg].style.display = "block";
})
rightBtn.addEventListener("click" , ()=>{
    sliderImgs[currentImg].style.display = "none";
    if(currentImg === 2)currentImg = 0;
    currentImg++;
    sliderImgs[currentImg].style.display = "block";
    
})

//PORTFOLIO

let portBtns = document.querySelectorAll(".portfolio-categories button");
let portItems = document.querySelectorAll(".portfolio-items div");
let ind1 = 0;

portBtns.forEach(function (btn){
    btn.addEventListener("click", ()=>{
        let category = btn.attributes[0].value
        portItems.forEach(function (portItem){
            let itemCategory = portItem.attributes[1].value;
            if(category === "sve"){
                portItem.style.display = "block";
            }else{
                if(itemCategory !== category){
                    portItem.style.display = "none";
                }else{
                    portItem.style.display = "block";
                }
            }
            if(itemCategory.includes(',')){  // ------------UMESTO ATRIBUTES MOZE I GETATTRIBUTE('DATA-CATEGORY')
                ind1= 0;
                // console.log((portItem.attributes[1].value).substring(0 , portItem.attributes[1].value.indexOf(',')));
                itemCategory.split(',').forEach(function (element){
                    if(element === category){
                        ind1 =1;
                    }
                })
                if(ind1){portItem.style.display = "block";}
                else{
                    portItem.style.display = "none";
                }
                if(category === "sve"){
                    portItem.style.display = "block";
                }
            }
        })
    });
})


//MODAL

let modalBtn = document.querySelector(".modal-section button");
let closeBtn = document.querySelector("#closeModal");
let popupModal = document.querySelector(".popup-modal");
let overlay = document.querySelector(".overlay");

modalBtn.addEventListener("click" , ()=>{
    popupModal.style.display = "block";
    overlay.style.display = "block";
})

closeBtn.addEventListener("click" , ()=>{
    popupModal.style.display = "none";
    overlay.style.display = "none";
})