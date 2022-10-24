/*
document.getElementsByTagName(tagName) returns a list (array-like structure) of HTML elements that match the tagName.

E.g document.getElementsByTagName("p") returns a list of all <p> elements
*/

// Use document.getElementsByTagName to get all the <h1> elements on the page and store them in a h1Elements variable

 //assigns the HTML content of the body element to myBody variable

// h1Elements is an array-like structure. Change the content of the 2nd h1 to "It was dynamically created with JS"

// YOUR CODE GOES HERE
const h1Element = document.getElementsByTagName("header");
h1Element.innerHTML = "It was dynamically created with JS";
//type h1Element in console
/*****************************************************************
DO THIS BEFORE YOU MOVE ON TO THE NEXT ACTIVITY:
Look up the methods/properties above and make sure you understand what they do
*****************************************************************/

/*
BONUS:
- Can you find another way to return a list of HTML elements by a tagName other than using the getElementsByTagName() method?

*/