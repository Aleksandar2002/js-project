let counter = 0;
let decreaseBtn = document.querySelector("#decrease");
let increaseBtn = document.querySelector("#increase");
let resetBtn = document.querySelector("#reset");
let countField = document.querySelector("#count-num");


decreaseBtn.addEventListener("click", ()=>{
    counter--;
    checkCounter(counter);
    countField.innerHTML = counter;
})
increaseBtn.addEventListener("click", ()=>{
    counter++;
    checkCounter(counter);
    countField.innerHTML = counter;
})
resetBtn.addEventListener("click" , ()=>{
    countField.innerHTML= "0";
    counter = 0;
    countField.style.color = "#dbdbdb";
})

function checkCounter(a){
    if(a>0)
    countField.style.color = "#31a348";
    else if(a<0)
    countField.style.color = "#b8424c";
    else
    countField.style.color = "#dbdbdb";
}