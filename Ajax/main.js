//https://62f1558425d9e8a2e7ca90df.mockapi.io/:endpoint
//STARI NACIN
// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function(){
//     if(this.readyState ==4 && this.status == 200){
//         console.log((xhttp.responseText));
//     }
// }
// xhttp.open('GET' , "https://62f1558425d9e8a2e7ca90df.mockapi.io/user" , true);
// xhttp.send();

//NOVI NACIN
let fetchBtn = document.querySelector('#fetchBtn');
let inp = document.querySelector('#userID');
let par = document.querySelector('p');

fetchBtn.addEventListener("click" , ()=> {

    let request = fetch('https://62f1558425d9e8a2e7ca90df.mockapi.io/user/'+inp.value).
    then(response => response.json()).then(data => {
        // data.forEach(person=>{
        //     if(inp.value === person.id){
        //         par.innerHTML = `Ime : ${person.name} <br> Avatar : ${person.avatar} <br> Phone number ${person.phone_number}`;
        //     }
        // })
        console.log(data);
        par.innerHTML = `Ime : ${data["name"]} <br> Avatar : ${data['avatar']} <br> Phone number ${data['phone_number']}`;
    }).catch(error =>{
        alert('Prekinuta veza')
    });
});
