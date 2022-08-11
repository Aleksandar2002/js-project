let popupBtn = document.querySelector("#sign_up");
let popup = document.querySelector('.popup');
let closeBtn = document.querySelector('#close');

popupBtn.addEventListener("click" , ()=>{
    popup.style.display = 'flex';

})
closeBtn.addEventListener("click", ()=>{
    popup.style.display = 'none';
})

const config = {
    "username" : {
        required: 'yes',
        minLength: 6,
        maxLength: 30
    },
    "email":{
        email : 'yes',
        minLength: 10,
        maxLength:30,
        required:'yes'
    },
    "email2":{
        email : 'yes',
        minLength: 10,
        maxLength:30,
        required:'yes'
    },
    "password":{
        required:'yes',
        maxLength:30,
        minLength:8
    },
    "password2":{
        required:'yes',
        maxLength:30,
        minLength:8,
        matching:'confirm_pass'
    },
    "confirm_pass":{
        required:'yes',
        maxLength:30,
        minLength:8,
        matching:"password2"
    }
}

let validator = new Validator(config ,1);

