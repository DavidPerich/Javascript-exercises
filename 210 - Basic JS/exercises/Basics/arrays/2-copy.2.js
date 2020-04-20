// In the previous exercise, the value of the reference gets copied. For this exercise, only the values of the array should be copied, but not the reference. Implement two alternative ways of doing this.

// Here is the code from the previous exercise:

var myArray = [1, 2, 3, 4];
// var myOtherArray = myArray.slice() // option 1


myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);

var myOtherArray = myArray.slice() //using slice with no arguments returns a new array with the same elements.


