// Write a Function named octalToDecimal that performs octal to decimal conversion. When invoked on a String that contains the representation of an octal number, the Function returns a decimal version of that value as a Number. Implement the conversion yourself: do not use something else to perform the conversion for you.

function octalToDecimal(numberString) {
  var reversedNumbers = numberString.split("").reverse();

  var convertedNumbers = reversedNumbers.map(function (value, index) {
    return value * Math.pow(8, index);
  })

  return convertedNumbers.reduce((total, value) => total + value);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9

// to conver to decimal you take each digit and multiply it by 8 ^ its reverse index.
// so we need to conver the string to an array. reverse the order.
// map each element with to be 8 ^ its index
// reverse to Number.

