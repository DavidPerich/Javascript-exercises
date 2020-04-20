// Without changing the behavior of the following code, remove the call to event.stopPropagation and refactor the result.

// original code

document.querySelector('html').addEventListener('click', function() {
  document.querySelector('#container').style = 'display: none';
});

document.querySelector('#container').addEventListener('click', function(event) {
  event.stopPropagation();
});

// my solution

document.querySelector('html').addEventListener('click', function(event) {
  if (event.target === document.querySelector('#container')) {
    event.target.style = 'display: none';
  }
});


// Not sure if my solution will work? I hit on the right area - click bubbles down to the container anyway.

// Their solution

document.querySelector('html').addEventListener('click', function(event) {
  var container = document.querySelector('#container');

  if (!container.contains(event.target)) {
    container.style = 'display: none';
  }
});

// The refactored code uses the contains method to determine whether the event.target is the container element or one of its children. If event.target isn't part of the container element, the program hides the container.
