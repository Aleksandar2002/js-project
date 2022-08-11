let txt = document.querySelector(".section1 h1");

let splitedtext = txt.textContent.split('');

txt.innerHTML = ''
for(let i =0 ; i<splitedtext.length;i++){
    if(splitedtext[i]=== ' ')
    splitedtext[i] = "&nbsp"
    txt.innerHTML += `<span>${splitedtext[i]}</span>`;
}
let h = 0;
let int = setInterval(()=>{
    let spans = document.querySelectorAll(".section h1 span");
    let singleSpan = spans[h];
    singleSpan.classList.add("faded") 
    h++;
    if(h === spans.length){
            clearInterval(int);
    }
}
    ,80);


    let borderl = document.querySelector(".border-line")
    let per=0;
    let leftImg = document.querySelector(".slideFromLeft");
    let rightImg = document.querySelector(".slideFromRight");
    
    window.onscroll = ()=>{
    if(this.scrollY>this.oldScroll){
        if(per >=100)per = 100
        else{
            per+=2;
        }
        borderl.style.width = per + "%";
    }else{
        if(per <=0)per = 0;
        else{
            per-=2;
        }
        borderl.style.width = per + "%";
    }
    this.oldScroll= this.scrollY;
    
    
    let sectAnimate = document.querySelector(".section2 .images");
    let sectPos = sectAnimate.getBoundingClientRect().top;
    let screenPos = window.innerHeight/1.05;

    if(sectPos <screenPos){
        rightImg.classList.add("animated");
        leftImg.classList.add("animated");
    }

}