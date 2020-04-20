// Write a JavaScript function named delayLog that loops through the numbers from 1 to 10, and logs each number after that number of seconds. It should log 1 after 1 second, 2 after 2 seconds, etc.

function delayLog() {
  for (let i = 1; i <= 10; i += 1) {
    setTimeout(function() {
      console.log(i);
    }, i * 1000);
  }
}

delayLog()

// In what sequence will the JavaScript runtime run the following lines of code? Number them from 1-8 to show the order of execution.

setTimeout(function() {   //
  console.log('Once');    //
}, 1000);

setTimeout(function() {   //
  console.log('upon');    //
}, 3000);

setTimeout(function() {   //
  console.log('a');       //
}, 2000);

setTimeout(function() {   //
  console.log('time');    //
}, 4000);

// In what sequence does the JavaScript runtime run the functions q, d, n, z, s, f, and g in the following code?

setTimeout(function() {
  setTimeout(function() {
    q(); // 7
  }, 15);

  d(); // 3
  setTimeout(function() {
    n();  // 5
  }, 5);

  z(); // 4
}, 10);

setTimeout(function() {
  s(); //6
}, 20);

setTimeout(function() {
  f(); // 2
});

g(); // 1

// Write a function named afterNSeconds that takes two arguments: a callback and a time duration in seconds. The function should wait for the indicated period, then invoke the callback function.

function afterNSeconds(func, delay) {
  setTimeout(func, delay * 1000)
}