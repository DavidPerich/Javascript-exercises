// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

var array1 = ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
var array2 = [];
var i;

for (i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}
console.log(array1);
console.log(array2);


// If you expected array2 to remain unchanged, then you are correct. But why should this be the case if array1 is an object? This is because even though array1 is an object and thus mutable, its elements are string primitives and thus immutable.

// The uppercase returns a new string to the array1