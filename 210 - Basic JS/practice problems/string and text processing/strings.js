function p(value) {
  console.log(value)
}

// 1.

var firstName = 'David';
var lastName = "Pezdog";

var fullName = firstName + " " + lastName;
p(fullName);

// 2

p(firstName.concat(lastName));

// 3

p(fullName.split(" "));

// 4

var language = 'JavaScript';

var idx = language.indexOf('S');

p(idx);

// 5

var charCode = language.charCodeAt(idx);
p(charCode);

// 6

p(String.fromCharCode(charCode));

// 7

p(language.lastIndexOf('a'));

// 8

 var a = 'a';
 var b = 'b';

 p( a > b);

 b = 'B';

 p(a > b)

// 9

var aIndex = language.indexOf('a');
var vIndex = language.indexOf('v');

p(language.substr(aIndex, 4));
p(language.substr(vIndex, 4));

// 10


p(language.substring(aIndex, 4));
p(language.substring(vIndex, 4));

// 11
var fact1 = 'Javascript is fun';
var fact2 = 'Kids like it too';

var compoundSentance = fact1 + " and " + fact2.toLowerCase();
p(compoundSentance);

// 12

p(fact1[0]);
p(fact2[0]);

// 13

var pi = 22 / 7;
pi = pi.toString(10);

p(pi.lastIndexOf('14'));

// 14

var boxNumber = (356).toString();
p(boxNumber);

// 15

boxNumber = parseInt(parseInt, 10);
p(typeof(boxNumber));

// 16

var name = prompt("what is your name?");

if (name.endsWith('!')) {
  name = name.slice(0, -1).
  p(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING`)
} else {
  p(`Hello ${name}.`)
}