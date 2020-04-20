// Build a program that logs when the user will retire and how many more years the user has to work until retirement.

// Example:

// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

// PROBLEm

// determine many more years somebody has to work given
  // their age
  // what age they want to retire

// Example s
// Age: 40, retire: 50 - you have 10 years of work to go
// Age: 20, retire: 50 - you have 30 years of work to go
// age: 10 retire: 100 - you have 90 years of work to go

function howLongTillRetirement() {
  var age;
  var retireAge;
  var yearsTillRetirement;
  var retirementYear;
  age = prompt("What is  your age: ");
  retireAge = prompt("What age would you like to retire:");


  yearsTillRetirement = retireAge - age
  retirementYear = new Date().getFullYear() + yearsTillRetirement;
  console.log('You will retire in ' + retirementYear)
  console.log('You have only ' + yearsTillRetirement + ' years of work to go')
}

howLongTillRetirement()