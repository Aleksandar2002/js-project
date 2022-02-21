let hexNum = [1 , 2 , 3, 4 , 5 , 6, 7 , 8 , 9, "A" , "B" , "C", "D", "E", "F"];
let colorBtn= document.querySelector("#color-flip");
let naslov = document.querySelector("#background-h");
let color ;

colorBtn.addEventListener("click" , ()=>{
        clearH();
        color= "#";
        for(let i = 6 ; i>0 ; i--){
            let randNum= Math.floor(Math.random() * hexNum.length);
            color+= hexNum[randNum];
        }
        naslov.innerHTML += color; 
        document.body.style.backgroundColor = color;
})

function clearH(){
    naslov.innerHTML="";
}