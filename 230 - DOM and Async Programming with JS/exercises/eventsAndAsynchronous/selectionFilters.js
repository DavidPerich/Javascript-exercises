// JavaScript code that updates the options on one dropdown when the selection in the other dropdown changes. For instance, when the user chooses an option under Classifications, the items in the Animals dropdown should change accordingly. Use the lookup tables below to see which animals and classifications go together.

var classifications = {
  'Vertebrate': ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
  'Warm-blooded': ['Bear', 'Whale', 'Ostrich'],
  'Cold-blooded': ['Salmon', 'Turtle'],
  'Mammal': ['Bear', 'Whale'],
  'Bird': ['Ostrich'],
};


var animals = {
  'Bear':	['Vertebrate', 'Warm-blooded', 'Mammal'],
  'Turtle':	['Vertebrate',' Cold-blooded'],
  'Whale':	['Vertebrate', 'Warm-blooded', 'Mammal'],
  'Salmon':	['Vertebrate',' Cold-blooded'],
  'Ostrich':	['Vertebrate', 'Warm-blooded', 'Bird'],
}

document.addEventListener('DOMContentLoaded', function (){
  var classificationList = document.getElementById("animal-classifications");
  var animalsList = document.getElementById("animals");
  var clearFiltersBtn = document.querySelector('#clear');


  classificationList.addEventListener("change", function(event) {
    var selected = event.target.value;
    var filteredAnimals = classifications[selected];

    setOptions(animals, filteredAnimals)
  });

  animalsList.addEventListener("change", function(event) {
    console.log(event.target.value)
  });

  function setOptions(select, filters) {
    select.options.length = 0;
    filters.forEach(function(value, index) {
      select.options[index] = new Option(value)
    });
  }

  function setDefault(event) {
    event.preventDefault();
    setOptions(classificationList, ['Classifications', 'Vertebrate', 'Warm-blooded', 'Cold-blooded', 'Mammal', 'Bird']);
    setOptions(animalsList,  ['Animals', 'Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich']);
  }

  clearFiltersBtn.addEventListener('click', setDefault);
});

