// write some JS to retrieve a word count for each h2 heading on the page

var h2s = [].slice.call(document.getElementsByTagName("h2"));

h2s.map(function (node) {
  return (node.textContent.split(" ").length)
})

// 2. The page has a table of contents with the title "Contents" and links to the different content sections on "Naming and etymology," "Taxonomy and evolution," etc.

// Use three different DOM methods to retrieve a reference to the div element that contains the table of contents.

var contentsDiv = document.getElementById("toc")
var title2 = document.getElementsByClassName("toc")[0]
document.querySelector("#toc")

// 3) write some javascript code to change the colour for every other link the table of contents to green

var contentsDiv = document.getElementById("toc")

var links = contentsDiv.querySelectorAll("a");

for (let i = 0; i <= links.length; i += 2) {
  links[i].style.color = "green"
}

// could have also done
// var links = document.querySelectorAll('.toc a');


// 4 get every thumbnail captain

var thumbnails = [].slice.call(document.querySelectorAll(".thumbcaption"));

thumbnails.map((thumbnail) => thumbnail.textContent.trim())


//You can think of the scientific classification of an animal as a series of key-value pairs. Here, the keys are taxonomic ranks (Domain, Kingdom, Phylum, etc.). The values are the specific groups to which the animal belongs.

// Write JavaScript code that extracts the classification of animals from the web page and logs an Object that uses the ranks as keys and the groups as values. You may assume the taxonomic ranks to use as keys is provided for you as an array.

var keys = ['Kingdom', 'Phylum', 'Clade', 'Class', 'Order', 'Suborder', 'Family',
            'Genus', 'Species'];
var classification = {};
var tds = document.querySelectorAll('.infobox td');
var cell;
var link;
var i;

for (i = 0; i < tds.length; i++) {
  cell = tds[i];

  keys.forEach(function(key) {
    if (cell.textContent.indexOf(key) !== -1) {
      link = cell.nextElementSibling.firstElementChild;
      classification[key] = link.textContent;
    }
  });
}

console.log(classification);