// In the following code, a user creates a person object literal and defines two methods for returning the person's first and last names. What is the result when the user tries out the code on the last line?

var person = {
  firstName: function () {
    return 'Victor';
  },
  lastName: function () {
    return 'Reyes';
  },
};

console.log(person.firstName + ' ' + person.lastName);
console.log(person.firstName)

// It should just be Victor Reyes?