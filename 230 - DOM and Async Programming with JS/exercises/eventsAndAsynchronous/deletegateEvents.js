// Implement a function named delegateEvent that delegates events to the descendant (inner) elements of a parent element that match a given selector. The function takes four arguments: parentElement, selector, eventType, and callback. It returns true if it was able to add an event listener and undefined if it wasn't. For example, if the parentElement is section and selector is p, the function should delegate events of eventType on the p element within section to the function callback; consequently, the function returns true.







  var callback = function(event) {
    alert('Target: ' + event.target.tagName + '\nCurrent Target: ' + event.currentTarget.tagName);
  };



  document.addEventListener('DOMContentLoaded', function() {

    var element1 = document.querySelector('table');
    var element2 = document.querySelector('main h1');
    var element3 = document.querySelector('main');

    function delegateEvent(parent, selector, eventType, callback) {
      console.log(parent);
      if (!parent) return undefined;

      parent.addEventListener(eventType, function(event) {
        var elements = [].slice.call(parent.querySelectorAll(selector));
        if (elements.includes(event.target)) {
          callback(event);
        }
      });
      return true;
    }



    // console.log(delegateEvent(element1, 'p', 'click', callback)); // return undefined because parent doesn't exist(is undefined)

    // console.log(delegateEvent(element2, 'p', 'click', callback)); // return  true as event listener adde)d to element2 - but nothing should fire the event

    // console.log(delegateEvent(element2, 'h1', 'click', callback)); // same as above - ther)e
    // console.log(delegateEvent(element3, 'h1', 'click', callback));

    // console.log(delegateEvent(element3, 'aside p', 'click', callback));
    console.log(delegateEvent(element2, 'p', 'click', callback));

    var newP = document.createElement('P');
    var newContent = document.createTextNode('New Paragraph');
    newP.appendChild(newContent);

    element2.appendChild(newP);
  });




// // Possible elements for use with the scenarios