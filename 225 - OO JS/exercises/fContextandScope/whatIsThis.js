// Read the following code carefully. What do you think is logged on line 7. Try to answer the question before you run the code.

// var person = {
//   firstName: 'Rick ',
//   lastName: 'Sanchez',
//   fullName: this.firstName + this.lastName,
// };

// console.log(person.fullName);

// It is not bound to the person object. That only happens in a method call

// You could fix it by enclosing what you want to log in a function and then using a method call. with a method call the execution context is set to the object the function is called on e.g the person object.

var person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: function () {
    return this.firstName + this.lastName
  }
};

console.log(person.fullName());