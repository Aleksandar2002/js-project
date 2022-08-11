let config = {
    "ime_prezime": {
        required : true,
        minLength:3,
        maxLength:50
    },
    "korisnicko_ime": {
        required : true,
        minLength: 5,
        maxLength: 50
    },
    "email": {
        required : true,
        email: true,
        minLength: 5,
        maxLength: 50
    },
    "broj_telefona": {
        required : false,
        minLength : 9,
        maxLength: 13
    },
    "lozinka": {
        required: true,
        minLength: 7,
        maxLength: 25,
        matching: "ponovi_lozinku"
    },
    "ponovi_lozinku": {
        required: true,
        minLength: 7,
        maxLength: 25,
        matching: "lozinka"
    },
    "zip_code": {
        required: true,
        minLength: 4,
        maxLength: 10,
        text_allowed: "numbers"
    }
};
let validator = new Validator(config);

//FIRST WAY
// const Osoba = {
//     f_name: 'Nikola',
//     l_name: "Nikolic",
//     phone: '0637701954',
//     mail: 'nikonikic@gmail.com'
// };
//SECOND

// function Osoba(f_name, l_name , phone , mail){
//     this.f_name  = f_name;
//     this.l_name = l_name;
//     this.phone = phone;
//     this.mail = mail;
    
//     //METHODS
//     this.getName = () =>{
//         console.log(`Ime i prezime: ${this.f_name} ${this.l_name}`);
//     }
// }

// let os1  = new Osoba("Pera" , "Peric" , "0637701954" , "peraperic@gmail.com");
// let os2  = new Osoba("Dzoni" , "Peric" , "063770192354" , "dzoniperic@gmail.com");

// console.log(os1);
// os2.getName();

//Class
//NAJBOLJI NACIN
// class Osoba{
//     constructor(first_name , last_name , phone){
//         this.first_name = first_name;
//         this.last_name = last_name;
//         this.phone = phone;
//     }
//     getName(){
//         console.log(this.first_name +' ' + this.last_name);
//     }
// }
// let osoba1 = new Osoba("Niko","Nikolic" , "063215521");

// osoba1.getName();
