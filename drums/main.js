let btn = document.querySelector("button");
let zvuk =  document.querySelector("audio");

window.addEventListener("keydown" , (event)=>{
    // if(event.key === 'b')
    // document.body.style.backgroundColor = "blue";
    // if(event.key === 'y')
    // document.body.style.backgroundColor = "yellow ";
    if(event.key === 'k'){
        btn.style.background = "white";
        zvuk.currentTime = "0";
        zvuk.play();
    }
})
// btn.addEventListener("transitionend",(e)=>{
//     if(e.propertyName !== 'background')return;
//     console.log(e.target);
// })
window.addEventListener("keyup" , (event)=>{
    // if(event.key === 'b')
    // document.body.style.backgroundColor = "blue";
    // if(event.key === 'y')
    // document.body.style.backgroundColor = "yellow ";
    if(event.key === 'k'){
        btn.style.backgroundColor = "#00d9ff";

    }
})











// const fja = a => console.log("PERA");

// btns.array.forEach(function (button)  {
//     button.addEventListener("click"  , function (event){
//         event.preventDefault();//ukoliko ne zelimo da radi ono sto je predodredjen npr link koji vodi ka nekom sajtu nece voditi
//         let clicked = event.target;
//     })
// }); 

// let forma = document.querySelector("form");
// forma.addEventListener("submit" , (event) =>{
//         event.preventDefault();
// });
// let slc = document.querySelector("select");

// slc.addEventListener("change" , (event)=>{
//     console.log(event.target.value);
// })

// window.addEventListener("resize", ()=>{
//     console.log(window.innerWidth);
// })

// let inpt = document.querySelector("input");

// inpt.addEventListener("keypress" , (event)=>{
//     console.log(event.key);
// })

// window.addEventListener("mousemove", (event)=>{
//     console.log(event.x + '  '+ event.y);
// })