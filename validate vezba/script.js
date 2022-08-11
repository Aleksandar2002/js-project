let conf = {
    "ime_prezime": {
        required: true,
        maxLength: 30,
        minLength:5
    },
    "korisnicko_ime": {
        required: true,
        maxLength: 30,
        minLength:6
    },
    "email": {
        email: true,
        required: true,
        maxLength: 40,
        minLength:8
    },
    "broj_telefona": {
        required: false,
        maxLength: 10,
        minLength:9
    },
    "lozinka": {
        required: true,
        maxLength: 30,
        minLength:8,
        match: "ponovi_lozinku"
    },
    "ponovi_lozinku": {
        required: true,
        maxLength: 30,
        minLength:8,
        match: "lozinka"
    },
    "zip_code": {
        required: true,
        maxLength: 10,
        minLength:4,
        zip_code: true
    }
}
let validator = new Validator(conf);