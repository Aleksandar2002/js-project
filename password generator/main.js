let generateBtn = document.querySelector("#generate");
let copyBtn = document.querySelector("#copy");
let passInput = document.querySelector("#password");
let lengthInput= document.querySelector("#pass-length");
let checkBtns = document.querySelectorAll("[type='checkbox']");
let upperArray;
let symbolArray = ["#" ,"$" , "%"  , "_"]
let niz = [];

let i=65 , j=0 , k=0;

generateBtn.addEventListener("click" , ()=>{
    if(lengthInput.value<8){
        window.alert("Password mustn't be less than 8! Write it again");
    }
    else{
        clearInput();
        upperArray = [];
        niz = [];
        // UPPERLATTERS
        for(i=0 ; i<checkBtns.length ;i++){
            switch(checkBtns[i].checked){
                case true : {
                    niz[j] =i;
                    j++;
                }
            }
        }
        if(j){
            j=0;
        }
        for(i=0 ; i<niz.length; i++){
            switch(niz[i]){
                case 0: {
                    addUpper();
                    break;
                }
                case 1:{
                    addLower();
                    break;
                }
                case 2: {
                    addNumbers();
                    break;
                }
                case 3: {
                    addSymbols();
                    break;
                }
            }
        }
        console.log(upperArray);
            for(i=0 ; i< lengthInput.value ; i++){
                passInput.value += upperArray[Math.floor(Math.random() * upperArray.length)];
            }   
    }
})

copyBtn.addEventListener("click" , ()=>{
    passInput.select();
    passInput.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(passInput.value);
})
//  FUNCTIONS

function clearInput(){
    passInput.value = "";
}


//    upper case
function addUpper(){
        k=65;
        while(k>= 65 && k<=90){
            upperArray[j]= String.fromCharCode(k);
            k++;
            j++;
}
}
function addLower(){
    k=97;
    while(k>= 97 && k<=122){
        upperArray[j]= String.fromCharCode(k);
        j++;
        k++;
}
}
function addNumbers(){
    k=48;
    while(k>= 48 && k<=57){
        upperArray[j]= String.fromCharCode(k);
        j++;
        k++;
}
}
function addSymbols(){
    let ind = 0;
    while(ind<symbolArray.length){
        upperArray[j] = symbolArray[ind];
        j++;
        ind++;
    }
}