// What will the following program log to the console? Can you explain why?

var array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length);
console.log(Object.keys(array).length);
console.log(array)

array[-2] = 'Watermelon';
console.log(array.length);
console.log(Object.keys(array).length);

// arrays are an object. This means they can have properties, which are represented by key:value pairs. Each of the above assignments is actually declaring a new property on the array.

//  if the value passed into the array bracket notation is not an integer greater than 0 then it will set a new property and coerce value into a string and use it as the key. The value to the right of the assignment statement will be the value in the key:value pair.

// Arrays can be thought of as special objects that have only non-negative integer values (from 0 up to 2 32 - 1) as keys, and have an extra length property that keeps track of how many such key-value pairs exist in the object.