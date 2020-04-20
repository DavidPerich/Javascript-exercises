// In these problems, we will be developing a factory function for objects representing countries.

// Consider the code below:

function makeCountry(name, continent, visited = false) {
  return {
    name: name,
    continent: continent,
    visited: visited,

    getDescription: function() {
      if (this.visited ) {
        return this.name + ' is located in ' + this.continent + '. I have visited ' + this.name + ".";
      } else {
      return this.name + ' is located in ' + this.continent + '.';
      }
    },

    visitCountry: function() {
      this.visited = true;
    },
  };
}

var chile = makeCountry('The Republic of Chile', 'South America');
var canada = makeCountry('Canada', 'North America');
var southAfrica = makeCountry('The Republic of South Africa', 'Africa');

console.log(chile.getDescription(), chile.visited);       // "The Republic of Chile is located in South America."
console.log(southAfrica.getDescription()); // "The Republic of South Africa is located in Africa."
canada.visitCountry()
console.log(canada.getDescription());      // "Canada is located in North America."




