function walk(node, callback) {
  callback(node);

  var i;
  for (i = 0; i < node.childNodes.length; i++) {
    walk(node.childNodes[i], callback);
  }
}

// 1) write a function to find all pargraphs

function findAllParagraphs() {
  var paragraphs = [];

  walk(document, function(node) {
    if (node.nodeName === "P") {
      paragraphs.push(node)
    }
  });

  return  paragraphs;
}

console.log(findAllParagraphs())

// 2)  Write a JavaScript function that adds the class article-text to every <p> tag in this HTML - in the second HTML with this name:

function addClass(nodes, className) {
  nodes.forEach(node => {
    node.classList.add(className)
  });
}

 addClass(findAllParagraphs(), "article-text")


//  3) rewrite the first function so that it can work for any element

function getElementsByTagName(tagName) {
  var results = [];

  walk(document, function(node) {
    if (node instanceof tagName) {
      results.push(node);
    }
  });
  return results;
}

addClass(getElementsByTagName(HTMLParagraphElement), "new-class")


//PRoblem group 2
// use the propper methods to do question 1

 var paragraphs = [].slice.call(document.getElementsByTagName('p'));

 paragraphs.forEach((paragraph) => paragraph.classList.add("article-text"))

 // Let's make the previous problem more realistic. Instead of adding the article-text class to every paragraph on the page, let's restrict it to only the paragraphs inside a <div class="intro"> tag. How can we do this? Keep in mind that you can call getElementsByClassName and getElementsByTagName on any element; document is handiest when you need all matching elements from the page, but you can use any other element if you don't need everything on the page.

// Update the code from Problem 1 to add the article-text class to paragraphs inside <div class="intro">, and nowhere else.

var intros = [].slice.call(document.getElementsByClassName('intro'));


intros.forEach(function(div) {
  var paragraphs = [].slice.call(div.getElementsByTagName("p"))
  paragraphs.forEach((paragraph) => paragraph.classList.add("intro-text"))
})

