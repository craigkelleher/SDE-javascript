/*
document.createElement(tagName) creates an element node of tagName

However, document.createElement is not enough by itself to create an element and show it on the page.

To show the created element on the page, we need to use either:

* parentElementNode.appendChild(createdElementNode) to add the createdElementNode as the last child of an existing parentElementNode

* parentElementNode.insertBefore(createdElementNode, referenceNodeElement) to add the createdElementNode before an existing referenceNodeElement

E.g if we had a page that looked like:
<html>
<head></head>
<body>
    <div id="myDiv">
        <h1>Header</h1>
    </myDiv>
</body>
</html>

let newParagraph = document.createElement("p");
newParagraph.setAttribute("id", "myPara");
newParagraph.innerHTML = "I am new paragraph";
document.getElementById("myDiv").appendChild(newParagraph);

would create a new <p id="myPara">I am a new paragraph</p> and add it as a last child of div#myDiv, i.e. after <h1>Header</h1>

Therefore, our page would now look like:
<html>
<head></head>
<body>
    <div id="myDiv">
        <h1>Header</h1>
        <p id="myPara">I am a new paragraph</p>
    </myDiv>
</body>
</html>

let anotherPara = document.createElement("p");
newParagraph.innerHTML = "ANOTHER Paragraph";
document.getElementById("myDiv").insertBefore(anotherPara, document.getElementById("myPara"));

would create a new <p>ANOTHER Paragraph</p> and add it before the p#myPara element

Therefore, our page would then look like
<html>
<head></head>
<body>
    <div id="myDiv">
        <h1>Header</h1>
        <p>ANOTHER paragraph</p>
        <p id="myPara">I am a new paragraph</p>
    </myDiv>
</body>
</html>
*/

/*****************************************************************
DO THIS BEFORE YOU MOVE ON TO THE NEXT ACTIVITY:
Look up the methods/properties above and make sure you understand what they do
*****************************************************************/

// Use comfirm to ask if the user wants to create a new paragraph
let wantsToCreateParagraph = confirm("Do you want to create a new paragraph?");

while (wantsToCreateParagraph) {
  // Prompt the user with what they want the paragraph to say
  /* 
        YOUR CODE GOES HERE 
    */
  let prompt1 = prompt("Enter your paragraph");

  // Create a new paragraph element
  /* 
        YOUR CODE GOES HERE 
    */
  let newPara1 = document.createElement("p");
  newPara1.id = "para1";
  // Make the content of the newly created paragraph element the text entered by the user
  /* 
        YOUR CODE GOES HERE 
    */
  newPara1.textContent = prompt1;

  // Use the getRandomHexColor function to give the newly created paragraph a background color
  /* 
        YOUR CODE GOES HERE 
    */
  newPara1.style.backgroundColor = getRandomHexColor();

  // Add the newly created paragraph as the last child of the div#paragraph_container
  /* 
        YOUR CODE GOES HERE 
    */
  document.getElementById("paragraph_container").appendChild(newPara1);

  // Ask the user if they want to add another paragraph
  wantsToCreateParagraph = confirm("Want to create another paragraph?");
}

function getRandomHexColor() {
  let hexChars = "0123456789ABCDEF";

  let randomColor = "#";

  for (let index = 0; index < 6; index++) {
    let randomHexCharIdx = Math.floor(Math.random() * hexChars.length);

    let randomHexChar = hexChars[randomHexCharIdx];

    randomColor += randomHexChar;
  }

  return randomColor;
}
