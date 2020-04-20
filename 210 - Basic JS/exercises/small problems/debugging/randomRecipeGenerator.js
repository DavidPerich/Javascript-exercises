// One bored and hungry evening we decided to randomly generate recipes. We can't wait to see the first suggestions, but JavaScript raises a TypeError, telling us that dishName.join is not a function. What is wrong?

// Picks n random elements from an array,
// and returns a new array with those elements.
function random(array, n) {
  if (n === undefined) {
    n = 1;
  }

  var elements = array.slice();
  var randomElements = [];

  while (n > 0 && elements.length > 0) {
    var randomIndex = Math.floor(Math.random() * elements.length);
    var randomElement = elements[randomIndex];

    randomElements.push(randomElement);
    elements.splice(randomIndex, 1);
    n--;
  }

  return randomElements;
}

// Ingredients

var ingredients = ['rice', 'green bell pepper', 'mushrooms', 'carrot', 'kebab',
  'spinach', 'soy bean sprouts', 'mashed potatoes', 'corn', 'cucumber', 'peas'];

var spices = ['peri peri', 'cinnamon', 'nutmeg', 'cardamom', 'ground ginger',
  'poppy seed', 'cumin'];

var extras = ['peanuts', 'sesame seeds', 'egg', 'wasabi', 'soy sauce'];

// Name

var adjective  = ['Delicious', 'Hot', 'Exotic', 'Creative', 'Festive', 'Dark'];
var firstNoun  = ['Power', 'After Work', 'Holiday', 'Disco', 'Late Night'];
var secondNoun = ['Mix', 'Delight', 'Bowl', 'Chunk', 'Surprise', 'Bliss'];

// Generate! OLD code

// var dishName = random(adjective) + random(firstNoun) + random(secondNoun);
// var dish = random(ingredients, 3) + random(spices, 2) + random(extras, 1);

// console.log('How about: ' + dishName.join(' '));
// console.log('You need: ' + dish.join(', '));


// you can't use operators to combine arrays like we try todo on line 43
// What you end up with is a string. So when we try to call join on a string we get dishName.join is not a function.

// Solution is to either deliberately change the dishName assignment so it returns a string in the format we want or fix it so it creates a new array. Since there are going to be multiple ingridients and spices and extras i'd probably just try fix it so it actually is an array.

var dishName = random(adjective).concat(random(firstNoun)).concat(random(secondNoun));
var dish = random(ingredients, 3).concat(random(spices, 2)).concat(random(extras, 1));

console.log(dishName, dish)

console.log('How about: ' + dishName.join(' '));
console.log('You need: ' + dish.join(', '));