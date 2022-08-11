let ind=0;
class Validator{
	constructor(config , str){
		this.config = config;
		this.errors = {};

		this.makeErrors();
		this.addListeners();
		if(str){
			this.sign();
		}
	}

	makeErrors(){
		for(let elem in this.config){
			this.errors[elem] = [];
		}
	}

	addListeners(){
		let inputs = document.querySelectorAll('input');

		inputs.forEach(input=>{
			input.addEventListener('input' , this.validate.bind(this));
		})
	}

	validate(e){
		let curentInput = e.target;
		let inpValue= curentInput.value;
		let inpName = curentInput.getAttribute('name'); 
		let con = this.config;

		let err = this.errors;
		err[inpName] = [];

		if(con[inpName].required){
			if(inpValue.length < 1){
				err[inpName].push('This fill must not be empty');
			}
		}
		if(con[inpName].email){
			if(!this.checkEmail(inpValue)){
				err[inpName].push('Not a valid email format');
			}
		}
		if(inpValue.length < con[inpName].minLength || inpValue.length > con[inpName].maxLength){
			err[inpName].push(`Field must not be shorter than ${con[inpName].minLength} and longer than ${con[inpName].maxLength}`);
		}
		if(con[inpName].matching){
			let matchInp = document.querySelector(`input[name="${con[inpName].matching}"]`);
			if(matchInp.value !== inpValue){
				err[inpName].push('Not identical fields');
			}else{
				err[con[inpName].matching] = [];
				err[inpName]=[];
			}
		}
		
		this.populateError();
	}

	checkEmail(email){
		if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
			return true;
		}else{
			return false;
		}
	}

	populateError(){
		for(let ul of document.querySelectorAll('ul')){
			ul.remove();
		}
		for(let key of Object.keys(this.errors)){
			let ul = document.createElement('ul');
			let currentInp = document.querySelector(`input[name="${key}"]`);
			currentInp.parentElement.appendChild(ul);
			this.errors[key].forEach(elem =>{
				let li = document.createElement('li');
				li.innerText = elem;
				ul.appendChild(li);
			})
		}
	}
	sign(){
		let signBtn = document.querySelector('#sign');
		let logBtn = document.querySelector('#log_in');

	
			signBtn.addEventListener("click", (e)=>{
					e.preventDefault();
					this.checkUl(e.target.parentElement);
					if(ind){
						alert('Fill in the fields');
					}else{
						this.addCookie(e.target.parentElement);
						window.open('../hexa.html');
					}
					
					
				})
				
				logBtn.addEventListener("click", (e)=>{
					e.preventDefault();
					this.checkUl(e.target.parentElement);
				if(ind){
					alert('Fill in the fields');
				}else{
					this.addCookie(e.target.parentElement);
					window.open('../hexa.html');
				}
			})
	}
	checkUl(d){
		let inputs = d.querySelectorAll('input');
		let ul = d.querySelectorAll('ul');
		ind = 0;
		inputs.forEach(elem=>{

			if(!elem.value.length){
				ind=1;
			}else{
				ul.forEach(el=>{
					if(el.children.length){
						ind=1;
					}
				})
			}
			// if(elem.children){
			// 	ind=0;
			// }else{
			// 	ind=1;
			// }
		})
	}
	addCookie(btnParent){
		let inputs = btnParent.querySelectorAll('inputs');
		console.log(validator);
	}
}


// class Validator {
// 	constructor(config, formID) {
// 		this.elementsConfig = config;
// 		this.formID = formID;
// 		this.errors = {};
		
// 		this.generateErrorsObject();
// 		this.inputListener();
// 	}

// 	generateErrorsObject() {
// 		for(let field in this.elementsConfig) {
// 			this.errors[field] = [];
// 		}
// 	}

// 	inputListener() {
// 		let inputSelector = this.elementsConfig;

// 		for(let field in inputSelector) {
// 			let el = document.querySelector(`${this.formID} input[name="${field}"]`);

// 			el.addEventListener('input', this.validate.bind(this));
// 		}
// 	}

// 	validate(e) {
// 		let elFields = this.elementsConfig;

// 		let field = e.target;
// 		let fieldName = field.getAttribute('name');
// 		let fieldValue = field.value;

// 		this.errors[fieldName] = [];

// 		if(elFields[fieldName].required) {
// 			if(fieldValue === '') {
// 				this.errors[fieldName].push('Polje je prazno');
// 			}
// 		}

// 		if(elFields[fieldName].email) {
// 			if(!this.validateEmail(fieldValue)) {
// 				this.errors[fieldName].push('Neispravna email adresa');
// 			}
// 		}

// 		if(fieldValue.length < elFields[fieldName].minlength || fieldValue.length > elFields[fieldName].maxlength) {
// 			this.errors[fieldName].push(`Polje mora imati minimalno ${elFields[fieldName].minlength} i maksimalno ${elFields[fieldName].maxlength} karaktera`);
// 		}

// 		if(elFields[fieldName].matching) {
// 			let matchingEl = document.querySelector(`${this.formID} input[name="${elFields[fieldName].matching}"]`);

// 			if(fieldValue !== matchingEl.value) {
// 				this.errors[fieldName].push('Lozinke se ne poklapaju');
// 			}

// 			if(this.errors[fieldName].length === 0) {
// 				this.errors[fieldName] = [];
// 				this.errors[elFields[fieldName].matching] = [];
// 			}
// 		}

// 		this.populateErrors(this.errors);
// 	}

// 	validationPassed() {
// 		for(let key of Object.keys(this.errors)) {
// 			if(this.errors[key].length > 0) {
// 				return false;
// 			}
// 		}

// 		return true;
// 	}

// 	populateErrors(errors) {
// 		for(const elem of document.querySelectorAll('ul')) {
// 			elem.remove();
// 		}

// 		for(let key of Object.keys(errors)) {
// 			let parentElement = document.querySelector(`${this.formID} input[name="${key}"]`).parentElement;
// 			let errorsElement = document.createElement('ul');
// 			parentElement.appendChild(errorsElement);

// 			errors[key].forEach(error => {
// 				let li = document.createElement('li');
// 				li.innerText = error;

// 				errorsElement.appendChild(li);
// 			});
// 		}
// 	}

// 	validateEmail(email) {
// 		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
// 	    	return true;
// 		}
	    
// 	    return false;
// 	}
// }