// Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences.

// Example:

var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

function countOccurrences(array) {
  var result = {}
  var i;
  array.forEach(element => {
    if (result[element]) {
      result[element] += 1
    } else {
      result[element] = 1
    }
  });

  for (key in result) {
    console.log(key + ' => ' + result[key])
  }
}

// Their way of initializing the value is better:

// function countOccurrences(elements) {
//   var occurrences = {};
//   var i;

//   for (i = 0; i < elements.length; i += 1) {
//     occurrences[elements[i]] = occurrences[elements[i]] || 0;
//     occurrences[elements[i]] += 1;
//   }

//   logOccurrences(occurrences);
// }
