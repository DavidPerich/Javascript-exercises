// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

var myArray = ['a', 'b', 'c'];

console.log(myArray[0]); // log 'a;'
// console.log(myArray[-1]); // log undefined - there is no property for -1 defined yet .

myArray[-1] = 'd'; // setting a property with a key of -1 and a value of 'd'
myArray['e'] = 5; // setting a property of teh array with a key of 'e' and value of 5
myArray[3] = 'f'; // adding an element to the array with bracket notation at the 4th index position with a value of 'f'

console.log(myArray[-1]); // log d
console.log(myArray['e']); // 5
console.log(myArray); // ['a', 'b', 'c','f',  '-1':'d', e:5, ]

