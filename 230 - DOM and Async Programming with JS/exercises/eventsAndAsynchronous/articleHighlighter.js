// When the user clicks on a navigation link (Articles 1-4), the browser scrolls to that article in the <main> element and adds the highlight class to it. If another element already has the highlight class, the browser removes the class from that element.

// When the user clicks on an article element or any of its child elements, the browser adds the highlight class to it. If another element already has the highlight class, the browser removes the class from that element.

// When the user clicks anywhere else on the page, the browser adds the highlight class to the main element. If another element already has the highlight class, the browser removes the class from that element.

// Here is a short clip that demonstrates the expected behavior:

document.addEventListener("DOMContentLoaded", function () {
  var currentlyHighlighted;
  document.addEventListener("click", function (event) {
    var elementToHighlight;
    var id;
    var target = event.target;

    if (target.tagName === "A") {
      id = target.href.match(/article-[1-9]/);
      elementToHighlight = document.getElementById(id);
    } else if (target.parentElement.tagName === "article") {
      event.stopPropagation()
      elementToHighlight = target;
      console.log(target.parentElement)

    } else {

      elementToHighlight = document.getElementsByTagName("MAIN")[0];
    }


    elementToHighlight.classList.toggle("highlight");

    if (currentlyHighlighted) {
      currentlyHighlighted.classList.remove("highlight");
    }



    currentlyHighlighted = elementToHighlight;
  });

});

