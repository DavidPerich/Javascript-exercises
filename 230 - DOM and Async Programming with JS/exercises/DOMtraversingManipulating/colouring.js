// Write a function that colors a specific generation of the DOM tree. A generation is a set of elements that are on the same level of indentation. We'll be using a "styled" HTML for this exercise to better visualize the generations. You may use the .generation-color class to color the specific generation. You can assume that only non-negative integers will be provided as arguments. Following are some sample output to help you test your code:

// problem
// function that colours a specific generation of the DOM tree
  // A generation is all elements on the same level of indentation.
  // .generation-color - class is how you need to colour.
  // Assume you will be passed an id - and it will be non negative


// problem is - how do you find all sibligns?

function colorGeneration(generationNumber) {
  // the problem is not to get the id
  // it is to get the nth generation
  var generation = [document.body];

  console.log(generation)
  var generationCount = 0

  while (generationCount != generationNumber) {
    generation = generation.map(function(element) {
      console.log(element);
      [].slice.call(element.children);
    });
    generationCount += 1;
  }

  console.log(generation)
  // generationNumber times get the children of the current generation

}


// how do you get all the elemets at a certain depth