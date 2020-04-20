// Read through the code shown below. What does it log to the console at lines 5 and 8?

var myArray = [1, 2, 3, 4];
var myOtherArray = myArray;

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);

// The value logged for myOtherArray at line 5 is the same value (i.e., the same array object) as the value of myArray. This is because the value stored in the variable myArray is a reference to the location of the value and not the value itself. Therefore, when the program pops a value from myArray, myOtherArray mirrors the change.

// On line 9 we change the value that is stored in myArray so that it now points to a different array object.

// erforming a reassignment operation changes the value stored to a reference of a value in a different location. As a result of line 7, myArray and myOtherArray now have different (reference) values stored, so any future mutations of myArray will no longer affect myOtherArray and vice versa.