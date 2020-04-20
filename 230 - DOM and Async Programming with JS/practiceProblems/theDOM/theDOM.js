// http://d186loudes4jlv.cloudfront.net/fe2/exercises_objects_and_dom/dom_assignment.html

// uses that html

// Use JavaScript to set a class of 'heading' to the heading (the h1 element).

document.querySelector("h1").setAttribute("class", "heading")

// or

document.getElementById("primary_heading").setAttribute("class", "heading")

// or

document.querySelector("#primary_heading").setAttribute("class", "heading")

// 2 - set UL to bulleted class

document.getElementById("list").setAttribute("class", "bulleted")

// 3) Our page has an element that you can't see initially; it's hidden. When the user clicks the link, the browser should display the hidden item; the next click on that link should hide the revealed item. Each click should toggle the hidden element between the visible and hidden states.

// Use the Inspector to find the hidden element and determine its ID. Following this, set the onclick property on the link with an ID of toggle to a function that makes the element visible when it's hidden and hides it when it's visible. You can use getAttribute to access the class, and setAttribute to set it; the class names of interest are 'visible' and 'hidden'.

// Your function should take a single argument, e. The first line of your function should invoke e.preventDefault. We'll discuss this later when we talk more about events, but, for now, just be aware that preventDefault tells your browser that it shouldn't try to follow the link.

document.getElementById('toggle').onclick = function(e) {
  e.preventDefault();
  var notice = document.getElementById('notice');
  if (notice.getAttribute('class') === 'hidden') {
    notice.setAttribute('class', 'visible');
  } else {
    notice.setAttribute('class', 'hidden');
  }
};

// 4 - Add an onclick event to the element we show and hide above. This time, the function should set the class of the element to 'hidden'. This event will let you hide the visible element by clicking on it. As with the previous function, the first thing the function should do is invoke e.preventDefault.

// Inside your function, this points to the current DOM element, which means that you can use this.setAttribute to change its class; you don't have to locate it first with getElementById.

document.getElementById('notice').onclick = function(e) {
  e.preventDefault();
  this.setAttribute('class', 'hidden');
  }
};

// 5 Locate the multiplication paragraph and change the text to the result of the arithmetic problem.

document.getElementById("multiplication").textContent = "107"
// or document.getElementById('multiplication').innerText = String(13 * 9);

// 6 Set the ID of the body element to 'styled' to apply the rest of the styles from the original file. The body tag in this file doesn't have an ID, so you must locate it by some other means.

document.querySelector("body").setAttribute("id", "styled")
// can just use this too
document.body