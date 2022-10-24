/*
1. document.body returns the body element

2. element.style.property changes the property style of an element

E.g document.body.style.marginBottom = "2px" changes the "margin-bottom" of the body to 2px (note how instead of the - we use camelCase and note how the value is a string)
*/

// Give the body the following styles:
// height of 100vh
// 2px of border left and right widths
// both left and right border styles of dashed
// left border color of blue
// right border color of red

debugger;

// YOUR CODE GOES HERE
const bodyStyle = document.body.style;
bodyStyle.height = "100vh";
bodyStyle.borderLeft = "2px dashed blue";
bodyStyle.borderRight = "2px dashed red";
bodyStyle.borderLeftWidth = "0px 2px";
bodyStyle.borderStyle = "none dashed";
bodyStyle.borderLeftColor = "blue";
bodyStyle.borderRightColor = "red";

/*
BONUS:
- If you set the borders' widths, styles, and colors separately, can you set everything about the left border in one line and everything about the right border in one line?

- Change at least 3 other styles dynamically using JS
*/
