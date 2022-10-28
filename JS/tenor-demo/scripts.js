// Initial Test
/*
when form#user_input_form is submitted, use the form's card title, text, and photo values, to create a bootstrap card with that information, and append that new card to the div#cards_container
 */

// Add submit event listener to form#user_input_form
//document.querySelector("#user_input_form")
//document.getElementById("user_input_form")

//const user_input_form = document.querySelector("#user_input_form")
//or
// user_input_form.

//user_input_form.addEventListener("eventType", callbackfunction)
//or
//user_input_form.oneventtype = callbackfunction

user_input_form.addEventListener("submit", (txg) =>{
    txg.preventDefault();
    //get the form's input text
    //const userInputValue = document.getElementById("search_term").value;

    //get card title, text, and photo url
    const card_title_value = card_title.value;
    const card_text_value = card_text.value;
    const card_photo_value = card_photo.value;


    //use above values to create bootstrap card, consider using classList
    const card_container = document.createElement("div"); //create a div
    card.classList.add("card");
    card.setAttribute("style", "width: 18rem;");

    const cardPhoto = document.createElement("img");
    cardPhoto.setAttribute("src", card_photo_value);
    cardPhoto.classList.add("card-img-top");
    cardPhoto.setAttribute("alt", card_title_value)

    //who's child is this image? its the card's
    //append child
    card.appendChild(cardPhoto);

    //append to card container
    card_container.append(card);   

    
    // card.setAttribute("class", "firstCardClass");
    // card.setAttribute("class", "secondCardClass");

    /*
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="..." alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the    bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    */

//append the new bootstrap card to container,

    // const userInputValue = search_term.value;

    // //create a paragraph with that text
    // const newP = document.createElement("p");
    // newP.textContent = userInputValue;

    // //append the new paragraph to the div#para_container
    // document.getElementsByTagName("para_container").appendChild(newP);

    // //clear form input
    // document.getElementById("user_input_form").reset();



// Equivalent:
// user_input_form.onsubmit = () =>{
//     alert("Hi there, I see you")
// }


});