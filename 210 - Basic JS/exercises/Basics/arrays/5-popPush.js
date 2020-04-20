// In this exercise, you will implement your own version of two Array methods: Array.prototype.pop and Array.prototype.push. The pop method removes the last element from an array and returns that element. If pop is called on an empty array, it returns undefined. The push method, on the other hand, adds one or more elements to the end of an array and returns the new length of the array.

// Examples:

// pop
// var array = [1, 2, 3];
// console.log(pop(array));                        // 3
// console.log(array);                // [1, 2]
// console.log(pop([]));                           // undefined
// console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

// // capture last value. make length -1 return the value.

// function pop(array) {
//   var value = array[array.length - 1];
//   array.splice(array.length - 1)
//   return value;
// }

function push(array, value) {
  var i;

  for  (i = 1; i < arguments.length; i += 1) {
    array[array.length] = arguments[i]
  }

  return array.length
}

// // push
var array = [1, 2, 3];
console.log(push(array, 4, 5, 6));              // 6
console.log(array);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0