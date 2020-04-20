// Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 200 (inclusive).

// Example Output:

// Teddy is 69 years old!

howOldIsTeddy(20, 200)
howOldIsTeddy(20, 200)
howOldIsTeddy(20, 200)
howOldIsTeddy(20, 200)
howOldIsTeddy(20, 200)
howOldIsTeddy(20, 200)
howOldIsTeddy(400, 20)




function howOldIsTeddy(start, end) {
  var sampleRange = range(start, end);
  sampleNum = Math.floor(Math.random() * sampleRange.length)

  console.log('Teddy is ' + sampleRange[sampleNum] + ' years old!')
}

function range(start, end) {
  var lowestNum = start > end ? end : start;
  var highestNum = start > end ? start : end;

  return (new Array(highestNum - lowestNum + 1)).fill(undefined).map((_, i) => i + lowestNum);
}
