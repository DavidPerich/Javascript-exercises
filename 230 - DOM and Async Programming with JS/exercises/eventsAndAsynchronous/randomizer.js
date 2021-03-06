// Write a randomizer function that accepts n callbacks and calls each callback at some random point in time between now and 2 * n seconds from now. For instance, if the caller provides 5 callbacks, the function should run them all sometime within 10 seconds.

// While running, randomizer should log the elapsed time every second: 1, 2, 3, ..., 2 * n.

function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(...callbacks) {
  var seconds = 0;
  var endTimer = callbacks.length

  function randomTime(numberOfCallbacks) {
    return Math.random() * 2000 * numberOfCallbacks;
  }

  var interval = setInterval(function() {
    seconds += 1;
    console.log(seconds);
  }, 1000);

  callbacks.forEach(function(callback) {
    let timer = randomTime(callbacks.length);
    setTimeout(callback, timer);
  });

  if (seconds >= endTimer) {
    clearInterval(interval);
  }
}




randomizer(callback1, callback2, callback3);



// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6