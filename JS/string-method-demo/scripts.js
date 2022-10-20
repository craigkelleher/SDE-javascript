// Initial Test
console.log("Craig Kelleher"); 
//this comment was added on chrome dev tools
const myName = "Craig Kelleher"
// concat() concatenates 3 strings together
const arrayConcat1 = ["Im a dog"];
const arrayConcat2 = ["I like socks"];
const arrayConcat3 = ["NOM NOM NOM"];
const arrayConcat4 = arrayConcat1.concat(arrayConcat2, arrayConcat3);
console.log(arrayConcat4);
const arrayConcat5 = ["cats"];
const arrayConcat6 = ["666"];
const arrayConcat7 = arrayConcat1.concat(arrayConcat5, arrayConcat6);
console.log(arrayConcat7);

// includes()   Determines whether an array includes a value, returns T or F
const arrayIncludes1 = [1, 2, 3];
console.log(arrayIncludes1.includes(2));
// expected output: true
const arrayIncludes2 = ['cats', 'are', 'mean'];
console.log(arrayIncludes2.includes('cats'));
// expected output: true
console.log(arrayIncludes2.includes('at'));
// expected output: false
console.log(arrayIncludes2.includes('CATS'));
// expected output: false, because includes is case sensitive
console.log(arrayIncludes2.includes('cats',0));
// expected output: true,
console.log(arrayIncludes2.includes('cats',1));
// expected output: not in the right position
console.log(arrayIncludes2.includes('cats',5));
// expected output: Outside bounds of array
debugger;
// indexOf()
// Method returns the first index at which a given element can be found
// in the array, or -1 if it is not present
const beasts = ['my', 'puppy', 'likes', 'sniffing','another', 'puppy'];
console.log(beasts.indexOf('puppy'));
// expected output: 1, found at index 1
console.log(beasts.indexOf('puppy', 2)); // start from index 2
// expected output: 5, found at index 5
console.log(beasts.indexOf('penguin'));
// expected output: -1, as it wasn't found in the array

//lastIndexOf()
// method returns the last index at which a given element can be found in
// the array, or -1 if it is not present. it searches array backwards,
// starting at fromIndex
const animals = ['Panda', 'Lion', 'Squirrel', 'Panda'];
console.log(animals.lastIndexOf('Panda'));
// expected output: 3, found at index 3
console.log(animals.lastIndexOf('Lion'));
// expected output: 1, found at index 1
