// 1)
// Our desired output for the code below is: Christopher Turk is a Surgeon. What will the code output, and what explains the difference, if any, between the actual and desired outputs?

// var turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription: function() {
//     return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
//   }
// };

// function logReturnVal(func, context) {
//   console.log(func, context)
//   var returnVal = func.call(context);
//   console.log(returnVal);
// }

// logReturnVal(turk.getDescription, turk);

// ined is a undefined

// the invokation of logReturnVal is in the global context "this" implicitly gets set to window/global context. In this context there are no firstname, lastName or occupation variables so what is returned is the string.

// Can fix it by using call to set the execution context to be the turk object

//3 ) Suppose that we want to extract getDescription from turk, but always have it execute with turk as context. Use one of the methods we've learned in the last lesson to assign such a permanently bound function to a new variable, getTurkDescription.


// var turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription: function() {
//     return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
//   }
// };

// function logReturnVal(func) {
//   var returnVal = func();
//   console.log(returnVal);
// }

// turkDescription = turk.getDescription.bind(turk)

// logReturnVal(turkDescription);

// // 4) Consider the code below, and our desired output:

// var TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach(function(title,) {
//       console.log(this.seriesTitle + ' ' + title);
//     }.bind(this));
//   }
// };

// TESgames.listGames();
// Desired output:

// The Elder Scrolls Arena
// The Elder Scrolls Daggerfall
// The Elder Scrolls Morrowind
// The Elder Scrolls Oblivion
// The Elder Scrolls Skyrim

// 7)

// var foo = {
//   a: 0,
//   incrementA: function() {
//     function increment() {
//       this.a += 1;
//     }

//     increment.call(this);
//   }
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();

// console.log(foo.a)

/// 9)

var foo = {
  a: 0,
  incrementA: function() {
    var increment = function () {
      this.a += 1;
    }.bind(this)

    increment()
    increment()
    increment()
  }
};

foo.incrementA()
console.log(foo.a)