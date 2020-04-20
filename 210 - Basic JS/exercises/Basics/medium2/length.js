// Read through the code below. What values w ill be logged to the console? Can you explain these results?

var languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages); // JS logs the array as an Array literal.
console.log(languages.length); // an array's length is one greater than the largest index. In this case 3.

languages.length = 4;
console.log(languages); // ['JavaScript', 'Ruby', 'Python', undefined]; If you increase the length property of an array it will add additional elements with a value of undefnied.
console.log(languages.length); // 4

languages.length = 1;
console.log(languages); // ['JavaScript'] If you decrease the length of an array it will remove elements from teh end of the array so that the number of elements in the array is length -1
console.log(languages.length); // 1

languages.length = 3;
console.log(languages); // ['JavaScript', undefined, undefined]
console.log(languages.length); 3

languages.length = 1;
languages[2] = 'Python'; // if you assign a value to an array index that doesn't exist yet it will add that element. If there are now gaps in the array they get filled with empty slots varaibles.
console.log(languages); // ['JavaScript',undefined,  'Python' ] // in this case we we added the string 'python' to the 3rd index (0, 1, 2). JS fills the gap with an empty slots.
console.log(languages[1]); // undefined
console.log(languages.length); // 3


// Arrays with 'empty slots' are sometimes referred to as 'sparse arrays'. You may see them represented in a variety of different ways. For example: