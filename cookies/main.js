document.querySelector("button").addEventListener("click", e=>{
    e.preventDefault();
    document.cookie = "name=pera";
    document.cookie = "cart=true";
    const date = new Date();
    
    let today = date.getTime();
    let expires = 10*1000;
    
    date.setTime(today+expires)
    
    date.setTime(date.getTime());
    let new_date= date.toUTCString();
    
    document.cookie = `login=true; expires=${new_date}`;
    console.log(document.cookie);
})