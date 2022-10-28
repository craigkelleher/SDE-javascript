// know when the search button is clicked, grab what is in the form input, use it to create a paragraph element, put the paragraph inside the div.

user_input_form.addEventListener("submit", (variableThatHoldsEventObject) =>{
    variableThatHoldsEventObject.preventDefault()

    const userInput = search_term.value
    //clear field after input
    search_term.value=""; 
    //or
    //user_input_form.reset();

    //create empty paragraph
    const newButton = document.createElement("button")
    // make the new button act like the other buttons and be picked up by addEventListener("clicK")
    newButton.setAttribute("class", "btn_of_interest");
    //make user input go into that new element
    newButton.innerText = userInput;
    //make this the parent of new P
    btns_container.appendChild(newButton);
})

btns_container.addEventListener("click", (eObjContainer)=>{
    //check for if eObjContainer.target is coming from a button
    if(eObjContainer.target.classList.contains("btn_of_interest")){
        // create a new paragraph
        const newP = document.createElement("p");
        newP.textContent = eObjContainer.target.textContent;

        // append paragraph to container
        //cards_container.appendChild(newP);
        eObjContainer.currentTarget.appendChild(newP);
    }
})

/*================DEPRECATED==================*/
// //We had 7 buttons, for 7 event listeners
// why_btn.addEventListener("click",(eObjBtn)=>{
//     debugger;
//     //const buttonText = why_btn.innerText;
//     const newP = document.createElement("p");
//     newP.innerText = why_btn.innerText;
//     cards_container.appendChild(newP);
// })