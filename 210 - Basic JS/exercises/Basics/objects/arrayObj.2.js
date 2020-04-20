// A user wrote a function that takes an array as an argument and returns its average. Given the code below, the user expects the average function to return 5. Is the user's expectation correct? Why or why not?

var myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  var sum = 0;
  var i;

  for (i = 0; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / array.length;
}

average(myArray);

// no it won't it will return 10. The properities myArray[-1] and myArray[-2] will both be called in the for loop. However the length of the array is not affected by properties. Therefore the array.length is only 2.