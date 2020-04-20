// Write a function named startCounting that logs a number to the console every second, starting with 1. Each number should be one greater than the previous number.

function startCounting() {
  var count = 0;
  counterID = setInterval(function() {
    console.log(count);
    count += 1;
  }, 1000)
}

startCounting()

function stopCounting() {
  clearInterval(counterID)
}