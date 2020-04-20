var paragraph = document.createElement("p");

paragraph.textContent = "this is a test.";

document.body.appendChild(paragraph);

var text = document.createTextNode('This is a test');
var paragraph =document.createElement('p');
paragraph.appendChild(text);
document.body.appendChild(paragraph)

var par3 = paragraph.cloneNode(true);
document.body.appendChild(par3)