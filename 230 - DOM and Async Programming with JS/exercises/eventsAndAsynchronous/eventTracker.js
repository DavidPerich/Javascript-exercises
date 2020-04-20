// Implement a function that tracks events on a web page by wrapping a callback function in a function that adds each event to a tracker object before invoking the callback. In other words, your function should take a callback function as an argument and return a new function that:

// Records the event.
// Executes the original callback function.
// Use the following markup and sample scenario to ascertain the expected behavior of the tracker object.

var tracker = (function() {
  var events = [];
  return {
    list: function() {
      return events.slice();
    },
    elements: function() {
      return this.list().map(function(event) {
        return event.target;
      });
    },
    add: function(event) {
      events.push(event);
    },
    clear: function() {
      events.length = 0;
      return events.length;
    },
  };
})();

function track(callback) {
  function isEventTracked(events, event) {
    return events.indexOf(event) !== -1;
  }

  return function(event) {
    if (!isEventTracked(tracker.list(), event)) {
      tracker.add(event);
      event.tracked = true;
    }

    callback(event);
  };
}




document.addEventListener("DOMContentLoaded", function () {
  var divRed = document.getElementById("red")
  var divBlue = document.getElementById("blue")
  var divOrange = document.getElementById("orange")
  var divGreen = document.getElementById("green")


  divRed.addEventListener('click', track(function(event) {
    document.body.style.background = 'red';
  }));

  divBlue.addEventListener('click', track(function(event) {
    event.stopPropagation();
    document.body.style.background = 'blue';
  }));

  divOrange.addEventListener('click', track(function(event) {
    document.body.style.background = 'orange';
  }));

  divGreen.addEventListener('click', track(function(event) {
    document.body.style.background = 'green';
  }));
});
