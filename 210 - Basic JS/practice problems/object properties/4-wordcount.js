// Write a function named wordCount that takes a single String as an argument. The function should return an Object that contains the counts of each word that appears in the provided String. In the returned Object, you should use the words as keys, and the counts as values.

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }

function wordCount(string) {
  var object = {}
  var array;
  var index;
  array = string.split(" ")

  for (index in array) {
    if (!object[array[index]]) {
      object[array[index]] = 1
    } else {
      object[array[index]] += 1
    }
  }

  return object
}