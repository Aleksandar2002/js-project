class Validator{
    constructor(conf){
        this.config = conf;
        this.errors = {};

        this.kreirajGreske();
        this.inputListener();
    }

    kreirajGreske(){
        for(let el in this.config){
            this.errors[el] = [];
        }
    }

    inputListener(){
        let allInputs = document.querySelectorAll('input');
        allInputs.forEach(input =>{
            input.addEventListener("input" , this.proveri.bind(this));
        })
    }

    proveri(e){
        let con = this.config;
        let trenutniInput = e.target;
        let inputName = trenutniInput.getAttribute('name');
        let inputValue = trenutniInput.value;
        let greska = this.errors;

        greska[inputName] = [];
        if(con[inputName].required){
            if(inputValue.length<1){
                greska[inputName].push('Polje ne sme biti prazno');
            }
        }
        if(con[inputName].email){
            if(!this.proveriEmail(inputValue)){
                greska[inputName].push("Nije ispravan format emaila");
            }
        }
        if(inputValue.length < con[inputName].minLength || inputValue.length > con[inputName].maxLength){
            greska[inputName].push(`Duzina teksta mora biti izmedju ${con[inputName].minLength} i ${con[inputName].maxLength} karaktera`);
        }
        if(con[inputName].zip_code){
            let ind =0;
            for(let i=0 ; i<inputValue.length; i++){
                if(inputValue.charCodeAt(i)< 48 || inputValue.charCodeAt(i)> 57){
                    ind= 1;
                    break;
                }
            }
            if(ind){
                greska[inputName].push('Mozete uneti samo brojeve');
            }
        }
        if(con[inputName].match){
            let matchElement = document.querySelector(`input[name="${con[inputName].match}"]`);
            if(inputValue !== matchElement.value){
                greska[inputName].push("Nisu iste lozinke");
            }else{  
                greska[con[inputName].match] = [];
            }
        }

        this.popuniGreske();
    }

    proveriEmail(email){
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            return true;
        }else{
            return false;
        }
    }
    popuniGreske(){
        for(let elem of document.querySelectorAll('ul')){
            elem.remove();
        }

            for(let key of Object.keys(this.errors)){

                let input = document.querySelector(`input[name="${key}"]`);
                let list = document.createElement('ul');
                let parent = input.parentElement;
                parent.appendChild(list);
                this.errors[key].forEach(error=>{
                    let li = document.createElement('li');
                    li.innerText = error;
                    list.appendChild(li);
                })
            }
    }
}