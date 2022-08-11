let addBtn = document.querySelectorAll(".addbtn");
let allPrices = document.querySelectorAll(".price");
let allQuantities = document.querySelectorAll(".quant");
let totalPrice = document.querySelector("#total-price");
totalPrice.innerHTMl = 0;
let totalBill = 0;
let cartItems =  document.querySelector(".cartItems");
let itemName = document.querySelectorAll(".itemName");
let nizCena= [];

for(let i= 0 ;i<addBtn.length;i++){

    addBtn[i].addEventListener("click" , ()=>{
        addBtn[i].setAttribute("disabled", "yes");
        nizCena[i] =parseInt(allPrices[i].innerText) * allQuantities[i].value;
        let cartItem = document.createElement("div");
        cartItem.classList.add("cartItem");
        let p = document.createElement("p");
        p.innerText = itemName[i].innerText +'  ' +allPrices[i].innerText+'$ ' +' * '+ allQuantities[i].value + ' = ' + nizCena[i];
        cartItem.appendChild(p)
        let removeBtn = document.createElement("button");
        removeBtn.innerText = "Ukloni";
        removeBtn.classList.add("removeBtn");
        removeBtn.addEventListener("click" , ()=>{
            removeBtn.parentElement.remove()
            totalPrice.innerHTML = totalBill-nizCena[i] + '$';
            totalBill -= nizCena[i];
            addBtn[i].removeAttribute("disabled");
        })
    
        cartItem.appendChild(removeBtn);
        cartItems.appendChild(cartItem);
        totalBill  += nizCena[i];
        totalPrice.innerHTML = totalBill + '$';
        totalPrice.parentElement.style.display = "flex";
    });
}

