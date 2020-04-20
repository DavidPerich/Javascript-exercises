function walk(node, callback) {
  callback(node);

  var i;
  for (i = 0; i < node.childNodes.length; i++) {
    walk(node.childNodes[i], callback);
  }
}

// 1 change header style
var body = document.lastChild.childNodes[2];
var header = body.childNodes[1]
header.style.fontSize = "48px"
header.style.color = "red"

// count paragraphs on page

var paragraphs = document.getElementsByTagName("P");
console.log(paragraphs.length)

// retrieve the first word from each para and log entire list

var result = [];
var i;

for (i = 0; i < paragraphs.length; i += 1) {
  paragraphText = paragraphs[i].textContent.trim();
  firstWord = paragraphText.split(" ")[0];
  result.push(firstWord);
}

console.log(result)

// add a class "stanza" to each par except hte first

for (i = 1; i < paragraphs.length; i += 1) {
  paragraphs[i].classList.add("stanza")
}