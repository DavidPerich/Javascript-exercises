// Write a function named objectHasProperty that takes two arguments: an Object and a String. The function should return true if the Object contains a property with the name given by the String, false otherwise.

var pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

console.log(objectHasProperty(pets, 'dog'));       // true
console.log(objectHasProperty(pets, 'lizard'));    // false
console.log(objectHasProperty(pets, 'mice'));      // true

function objectHasProperty(object, property) {
  // iterate through the array if any key has the value === property return true
  // elese false
  var i;
  for (k in object) {
    if (k === property) return true ;
  }
  return false;

}