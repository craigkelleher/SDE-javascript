// step 1
//we go over scope of let and var scope

function checkScope() {
  let i = 'function scope';
  debugger;
  if (true) {
    let i = 'block scope';
    debugger;
    //want this i to be block scope
  }
  // want this i to be function scope
  return i;
  debugger;
}
checkScope();





// step 2: Muttate an array declare with const
const s = [5, 7, 2];
debugger;
function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
debugger;







/* step 3: Prevent Object Mutation: */
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  //Freeze what is passed into it to prevent data mutation
  Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
//expect to be 3.14 and not 99
const PI = freezeObj();
debugger;




/* step 4: Arrow Functions for anonymous functions: 
syntatic sugar so to turn multi lines to one if not reusing functio names and 
passing a function as an argument in another funciton
*/

//before
/*var magic = function() {
  return new Date();
};*/
//result
const magic = () => new Date();
debugger;