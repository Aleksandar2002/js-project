class Validator{
    constructor(config){
        this.elementsConfig = config;
        this.errors = {};
        
        this.generateErrorsObject();
        this.inputListener();
    }

    generateErrorsObject(){
        for(let field in this.elementsConfig){
            this.errors[field] = [];
        }
    }

    inputListener(){
        let inputSelector = this.elementsConfig;
        for(let field in inputSelector){
            let el = document.querySelector(`input[name="${field}"]`);
            el.addEventListener('input', this.validate.bind(this));
        }
    }

    validate(e){
        let elementFields =this.elementsConfig;
        let field = e.target;
        let fieldName = field.getAttribute('name');
        let fieldValue = field.value;
        
        this.errors[fieldName] = []; 

        if(elementFields[fieldName].required){
            if(fieldValue === "" || fieldValue === null){
                console.log("pera");
                this.errors[fieldName].push('Polje je prazno');
            }
        }
        if(elementFields[fieldName].email){
            if(!this.validateEmail(fieldValue)){
                this.errors[fieldName].push("Neispravna email adresa");
            }
        }
        if(fieldValue.length < elementFields[fieldName].minLength || fieldValue.length > elementFields[fieldName].maxLength){
            this.errors[fieldName].push(`Polje mora imati vise od ${elementFields[fieldName].minLength} karaktera i manje od ${elementFields[fieldName].maxLength} karaktera`);
        }
        if(elementFields[fieldName].matching){
            let match = document.querySelector(`input[name="${elementFields[fieldName].matching}"]`);
            if(fieldValue !== match.value){
                this.errors[fieldName].push("Nisu iste lozinke");
            }
            if(this.errors[fieldName].length===0){
                this.errors[fieldName] = [];
                this.errors[elementFields[fieldName].matching] = [];
            }
        }
        let ind = 0;
        if(elementFields[fieldName].text_allowed ==='numbers'){
            for (let i = 0; i < fieldValue.length; i++) {
                if(fieldValue.charCodeAt(i)>=48 && fieldValue.charCodeAt(i)<=57){
                }else{
                    ind = 1;
                }
            }
            if(ind){
                this.errors[fieldName].push("Moraju biti samo brojevi");
            }
        }
        this.populateErrors(this.errors);
    }

    validateEmail(email){
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            return true;
        }else{
            return false;
        }
    }

    populateErrors(errors){
        for(let elem of document.querySelectorAll("ul")){
            elem.remove();
        }
        for(let key of Object.keys(errors)){
            let field = document.querySelector(`input[name="${key}"]`);
            
            let list = document.createElement("ul");
            field.parentElement.appendChild(list)

            errors[key].forEach((error)=>{
                let elementListe = document.createElement('li');
                elementListe.innerText = error;
                list.appendChild(elementListe);
            }
            )
        }
    }
}