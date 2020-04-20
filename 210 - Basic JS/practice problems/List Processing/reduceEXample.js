// Let's implement a function that takes a list of words as an argument and returns the word with the most characters:
function myReduce(array, func, initial) {
  var value = initial || array[0];
  var index;

  if (initial == array[0]) {
    index = 1;
  } else {
    index = 0;
  }

  array.slice(index).forEach(function (element) {
    value = func(value, element)
  });

  return value;
}

function longestWord(words) {
  return myReduce(words, longest);
}

var longest = function (result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
};

console.log(longestWord(['abc', 'launch', 'targets', '']));      // "targets"

