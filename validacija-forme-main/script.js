//DUZI NACIN

// let fullName = document.querySelector("#ime_prezime");  
// let userName = document.querySelector("#korisnicko_ime");
// let mail = document.querySelector("#email");
// let pass = document.querySelector("#lozinka");
// let confirmPass = document.querySelector("#ponovi_lozinku");
// let submitBtn = document.querySelector("form button");

// fullName.addEventListener("change", ()=>{
//     let par = document.querySelector("#name");
//     if(fullName.value.length < 5){
//         par.style.display = "block";
//         par.innerText = "Ime mora biti duze od 5";
//         return;
//     }else{
//         par.style.display = "none";
//     }
//     if(!fullName.value.trim().includes(' ')){
//         par.style.display = "block";
//         par.innerText = "Morate uneti i prezime";
//     }else{
//             par.style.display = "none";
//         }
// })

// userName.addEventListener("change" , ()=>{
//     let parUser = document.querySelector("#username");
//     if(userName.value.length < 7){
//         parUser.style.display = "block";
//         parUser.innerText = "Ime mora biti duze od 6";
//         return;
//     }else{
//         parUser.style.display = "none";
//     }
// })

// mail.addEventListener("change" , ()=>{
//     let parMail = document.querySelector("#parMail");
//     let mailUser = mail.value.substring(0, mail.value.indexOf('@'));
    
//     if(mail.value.includes('@') && mail.value.includes('.') && mailUser.length >4 && mail.value.substring(mail.value.indexOf('@')+1,mail.value.indexOf('.')).length>3 &&mail.value.substring(mail.value.indexOf('.')+1).length>1){
//         parMail.style.display = "none";
//     }else{
//         parMail.style.display = "block";
//         parMail.innerText = "Neispravan Email";
//     }
// })

// pass.addEventListener("change" , ()=>{
//     let parPs = document.querySelector("#parPs");
//     if(pass.value.length < 8){
//         parPs.style.display = "block";
//         parPs.innerText = "Lozinka mora biti duza od 8";
//     }else{
//         parPs.style.display = "none";
//     }   

// })

// confirmPass.addEventListener("change" , ()=>{
//     let parPass = document.querySelector("#parPass");
//     if(confirmPass.value !== pass.value){
//         parPass.style.display = "block";
//         parPass.innerText = "Moraju biti iste lozinke";
//     }else{
//         parPass.style.display = "none";
//     }   

// })


//KRACI NACIN

let inputs = document.querySelectorAll("input");
let errors = {
    "ime_prezime": [],
    "korisnicko_ime": [],
    "email": [],
    "lozinka": [],
    "ponovi_lozinku": [],
}

inputs.forEach(element=>{
    element.addEventListener("change", e=>{
        let currentInput = e.target;
        let inputValue = currentInput.value;
        let inputName = currentInput.getAttribute("name");

        if(inputValue.length > 4){
            errors[inputName] = [];

            switch(inputName){
                case 'ime_prezime':
                    let valid = inputValue.trim();
                    valid = valid.split(' ');
                    if(valid.length<2){
                        errors[inputName].push("Moras napisati i ime i prezime");
                    }
                    break;
                case 'email':
                    if(!validateEmail(inputValue)){
                    errors[inputName].push("Neispravna email adresa");
                }break;
                case 'ponovi_lozinku':
                    let loz = document.querySelector("input[name='lozinka']").value;
                    if(inputValue !== loz){
                        errors[inputName].push('Lozinka se ne poklapa');
                    }
            }
        }else{
            errors[inputName] = ['Polje ne moze imati manje od 5 karaktera'];
        }
        populateErrors();
    })
})

const populateErrors = () =>{
    for(let elem of document.querySelectorAll("ul")){
        elem.remove();
    }

    for(let key of Object.keys(errors)){
        let input = document.querySelector(`input[name="${key}"]`);
        let parentElement = input.parentElement;
        let errorsElement = document.createElement("ul");
        parentElement.appendChild(errorsElement);

        errors[key].forEach(error =>{
            let li = document.createElement("li");
            li.innerText = error;

            errorsElement.appendChild(li);
        })
    }
}

const validateEmail = email => {
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return true;
    }else{
        return false;
    }
}