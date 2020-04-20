function reverse(string) {
  // split into array? reverse array
  return string.split("").reverse().join("")
}

console.log(reverse('hello'));                  // returns "olleh"
console.log(reverse('The quick brown fox'));    // returns "xof nworb kciuq ehT"

