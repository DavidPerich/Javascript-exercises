// In JavaScript, comparing two objects either with == or === checks for object identity. In other words, the comparison evaluates to true if it's the same object on either side of == or ===. This is a limitation, in a sense, because sometimes we need to check if two objects have the same key/value pairs. JavaScript doesn't give us a way to do that.

// Write a function objectsEqual that accepts two object arguments and returns true or false depending on whether the objects have the same key/value pairs.

// pedac
// Problem
// Input: two objects, output a boolean
// Compare each property of the two objects if they are equal then then return true, else false
  // order shouldn't matter
  // if objects are different lengths they can't be equal
  // if a property contains an object you should check for deep equality? - call objectsequal on those two objects
  // to compare a property you compare obj1[key] === object2[key]

// algorithm
  // if objects are not same length return false
  // for let prop in obj1
    // if obj[prop] typeof is an object
      // return false if objectsequal(obj1[prop] === obj2[prop]) is false
    // if obj1[prop] not equal to obj2[prop] then return false
    // objects of the same length, but values that won't be checked.
    // a property that has undefined as its actual value.
  // end for loop

  // return true

function objectsEqual(obj1, obj2) {
  if (obj1.length != obj2.length) return false;

  for (let prop in obj1) {
    let leftSideProp = obj1[prop];
    let rightSideProp = obj2[prop];

    if  (typeof leftSideProp === "object") {
      if (!(objectsEqual(leftSideProp, rightSideProp))) return false;
    } else if (!obj2.hasOwnProperty(prop)) {
        return false
    } else {
      if (leftSideProp != rightSideProp) return false;
    }
  }

  return true;
}




console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({a: 'foo', b: 'bar'}, {b: "bar", a: 'foo'}));            // true
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false

var object1 = {
  a: {
    x: 1,
    y: 2,
  },
}

var object2 = {
  a: {
    x: 1,
    y: 2,
  },
}

console.log(objectsEqual(object1, object2)); // true

var object1 = {
  a: {
    x: 1,
    y: 2,
  },
}

var object2 = {
  a: {
    x: 1,
    y: 3,
  },
}

console.log(objectsEqual(object1, object2)); // False
