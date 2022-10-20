// Initial Test
console.log("Craig Kelleher"); 

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

// indexOf()
// Method returns the first index at which a given element can be found
// in the array, or -1 if it is not present