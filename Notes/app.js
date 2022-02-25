let addBtn = document.querySelector("#add");
let editBtn = document.querySelector("#edit");
let deleteBtn = document.querySelector("#delete");
let headerInput = document.querySelector("#head-text");
let noteInput = document.querySelector("#note-text");
let notes = document.querySelector("#notes");
let ind=0;
let noteCard , headerCard , centerBlock , newHeaderInput , btnsDiv, newEditBtn , newDeleteBtn , bodyDiv , newNoteInput;

// ADD BTN
addBtn.addEventListener("click", ()=>{
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
    newHeaderInput.id = "head-text"; 

    // note card div
    btnsDiv = document.createElement("div");
    btnsDiv.classList.add("btns");

    //  btns 
    newEditBtn = document.createElement("button");
    newEditBtn.id = "edit";
    newEditBtn.setAttribute( "onclick" , "Edit()");
    newEditBtn.innerHTML = '<i class="fas fa-pen"></i>';
    
    btnsDiv.appendChild(newEditBtn);

    newDeleteBtn = document.createElement("button");
    newDeleteBtn.id = "delete";
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
    newNoteInput.id = "note-text"; 

    bodyDiv.appendChild(newNoteInput);

    noteCard.append(bodyDiv);

    notes.appendChild(noteCard);
})

function Edit(){
    if(ind==0){
        headerInput.focus(); 
        ind=1;
    }
    else{
        noteInput.focus(); 
        ind=0;
    }
}