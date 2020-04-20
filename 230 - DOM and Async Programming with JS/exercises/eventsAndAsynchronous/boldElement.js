// Implement a function that makes an element bold and allows the user of the function to optionally do something else with it.

function makeBold(element, func) {
  element.style.fontWeight = "bold";
  func(element);
}


// var sectionElement = document.querySelector('section');
// makeBold(sectionElement, function(elem) {
//   elem.classList.add('highlight');
// });

// sectionElement.classList.contains('highlight');
// = true
// sectionElement.style.fontWeight;
// = "bold"

document.addEventListener()