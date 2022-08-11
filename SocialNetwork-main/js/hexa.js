let likeBtns = document.querySelectorAll('.like');
let commentBtns = document.querySelectorAll('.comment');
let ind2 = 0;

for(let likeBtn of likeBtns){
    likeBtn.addEventListener('click' , e=>{
        ind2 =0;
        likeBtn.classList.toggle('liked');
        let par  = likeBtn.children[1].querySelector('span');
        let numOfLikes = parseInt(par.innerText);

        likeBtn.classList.value.split(' ').forEach(value => {
            if(value === 'liked'){
                ind2=1;
            }
        })
        if(ind2){
            numOfLikes++;}
            else{
                numOfLikes--;
            }
        par.innerText = numOfLikes;
    })
}

for(let commentBtn of commentBtns){
    commentBtn.addEventListener('click', ()=>{
        let addCom = commentBtn.parentElement.parentElement.parentElement.querySelector('.addCom');
        // addCom.style.transform = 'translateY(0)';
        // addCom.style.opacity = 1;
        commentBtn.classList.toggle('liked');
        addCom.classList.toggle('visible');
    })
}

let addComBtns = document.querySelectorAll('.addComBtn');

for(let addComBtn of addComBtns){
    addComBtn.addEventListener('click' , (e) =>{
        e.preventDefault();
        
        let inputValue = addComBtn.parentElement.querySelector('input').value;
        
        if(inputValue){
            
            addComBtn.disabled = true;
            addComBtn.style.color = '#737272';
            
            let ul = document.createElement('ul');
            let li = document.createElement('li');
            li.innerHTML = inputValue;
            ul.appendChild(li)
            addComBtn.parentElement.parentElement.parentElement.appendChild(ul);
        
        }else{
            alert('Type some comment');
        }
    })
}

let editBtn =  document.querySelector('#edit');
let popup = document.querySelector('.popup');
let closeBtn = document.querySelector('#close');

editBtn.addEventListener('click' ,()=>{
    popup.style.display = 'flex';
})

closeBtn.addEventListener("click", ()=>{
    popup.style.display = 'none';
})

const config = {
    "user" : {
        required: 'yes',
        minLength: 6,
        maxLength: 30
    },
    "email3":{
        email : 'yes',
        minLength: 10,
        maxLength:30,
        required:'yes'
    }
}
let validator = new Validator(config , 0);
