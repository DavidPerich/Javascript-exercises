// Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

// You may assume that the number passed in is an integer greater than 1.

// Examples:
console.log(multisum(2));       // 0?

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000000));    // 234168

// input: an integer
// output: an integer
  // where the output is the sum of any number from 1 to inputNUm that is a multiple of 3 or 5
  // e.g 20 is input
  // output is 98 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20)

// algorithm

// option 1: loop from 1 to num
  // if number is divisible by 3 or 5 add it to result

// optimised?

// loop once through nums + 3
// loop once through nums + 5
  // if num % 3 dont add

function multisum(max) {
  var result = 0;
  var i;

  for (i = 3; i <= max; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i
    }
  }

  return result;
}


function unique(value, index, self) {
  return self.indexOf(value) === index;
}

x = [1,2,2]

console.log(x.filter(unique))