// The method franchise.allMovies is supposed to return the following array:

// [
//   'How to Train Your Dragon 1',
//   'How to Train Your Dragon 2',
//   'How to Train Your Dragon 3'
// ]

// Explain why this method will not return the desired object? Try fixing this problem by taking advantage of JavaScript lexical scoping rules.

// var franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     return [1, 2, 3].map(function(number) {
//       return this.name + ' ' + number;
//     });
//   },
// };


// map is a method call on teh array object. So the execution context gets set to the array object NOT the franchise object.

// few different ways to fix this:

// 1) declare a variable to store the execution context of franchse.

var franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    let self = this
    return [1, 2, 3].map(function(number) {
      return self.name + ' ' + number;
    });
  },
};

console.log(franchise.allMovies())

// 2) change it to a IIFE expression and hard bind it

var franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
      return [1, 2, 10].map(function(number) {
        return this.name + ' ' + number;
    }.bind(this));
  },
};

console.log(franchise.allMovies())


// 3) Similar to above - you can pass in an execution context argument to enumerable functions

var franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
      return [1, 2, 4].map(function(number) {
      return this.name + ' ' + number;
    }, this);
  },
};

console.log(franchise.allMovies())
