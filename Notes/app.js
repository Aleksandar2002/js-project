let addBtn = document.querySelector("#add");
let notes = document.querySelector("#notes");
let i=0;
let ind = 0;
//let noteCard , headerCard , centerBlock , newHeaderInput , btnsDiv, newEditBtn , newDeleteBtn , bodyDiv , newNoteInput;

let noteTemplate = document.querySelector("[notes-template]")

let card = noteTemplate.content.cloneNode(true).children[0];
notes.append(card);
// ADD BTN
addBtn.addEventListener("click", ()=>{
/* STUPID WAY
    i++;
    // note card div
    noteCard = document.createElement("div");
    noteCard.classList.add("note-card");

    // header
    headerCard = document.createElement("header");
    
    // center block div
    centerBlock = document.createElement("div");
    centerBlock.classList.add("center-block");

    // input H
    newHeaderInput = document.createElement("input");
    newHeaderInput.setAttribute( "type" , "text");
    newHeaderInput.classList.add("head-text"); 

    // note card div
    btnsDiv = document.createElement("div");
    btnsDiv.classList.add("btns");

    //  btns 
    newEditBtn = document.createElement("button");
    newEditBtn.classList.add("edit");
    newEditBtn.setAttribute( "onclick" , "Edit("+i+")");
    newEditBtn.innerHTML = '<i class="fas fa-pen"></i>';
    
    btnsDiv.appendChild(newEditBtn);

    newDeleteBtn = document.createElement("button");
    newDeleteBtn.classList.add("delete");
    newDeleteBtn.setAttribute( "onclick" , "deleteF("+i+")");
    newDeleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    btnsDiv.appendChild(newDeleteBtn);

    // adding Elements
    centerBlock.appendChild(newHeaderInput);
    centerBlock.appendChild(btnsDiv);
    headerCard.appendChild(centerBlock);
    noteCard.appendChild(headerCard);

    //body
    bodyDiv = document.createElement("div");
    bodyDiv.classList.add("body");

    //input
    newNoteInput = document.createElement("input");
    newNoteInput.setAttribute( "type" , "text");
    newNoteInput.setAttribute( "name" , "note-text");
    newNoteInput.classList.add( "note-text"); 

    bodyDiv.appendChild(newNoteInput);

    noteCard.append(bodyDiv);

    notes.appendChild(noteCard); */
    // SMART WAY
    i++;
    card = noteTemplate.content.cloneNode(true).children[0];
    card.querySelector(".delete").setAttribute("onclick" , "deleteF("+i+")");
    card.querySelector(".edit").setAttribute("onclick" , "Edit("+i+")");
    notes.append(card);

})

function deleteF( broj){
    let noteCards = document.querySelectorAll(".note-card");    
    noteCards[broj].style.display = "none";
}

function Edit(broj){
    let noteCards = document.querySelectorAll(".note-card");      
    if(ind == 0)
    {
        noteCards[broj].querySelectorAll("input")[0].focus();
        ind= 1;
    }
    else{
        noteCards[broj].querySelectorAll("input")[1].focus();
        ind= 0;
    }
}