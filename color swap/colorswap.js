let colors = ["#e65a5a" , "#5772ab" , "#6fe873", "#af6fd6" , "#ebf562" , "#6e732d", "#545451", "#e3e3e3", "#10038a"];
let colorBtn= document.querySelector("#color-flip");
let naslov = document.querySelector("#background-h");

colorBtn.addEventListener("click" , ()=>{
        clearH();
        let randNum= Math.floor(Math.random() * colors.length);
        naslov.innerHTML += colors[randNum]; 
        document.body.style.backgroundColor = colors[randNum];
})

function clearH(){
    naslov.innerHTML="";
}