// You have a bank of switches before you, numbered from 1 to n. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have gone through n repetitions.

// Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after n repetitions.

/// Problem
// input: a number representing teh number of switches on a wall (1 to n)
// output an array which represents the lights that are on
// iterate through n times - where n represents the number of switches
  //  for each iteration - if the switch position is divisible by the iteration number then flick the switch to the opposite of its current value (e.g on to off, off to on)
  // e.g on the first iteration switch every switch to on - because all numebrs are divisible by 1
  // on the second iteration switch every second switch will get switched off (they were all on previously)

// return all the lights that are on

// data structure
// needs to retain order so it might be best to use an array, but lets try with hash
// can either use a hash with a value for every number in the range
// use an array in which index positions represent the switches

// algorithm
// option 1: hash
// lights = loop from 1 to switches and add to lights i: false
  // this can represent 1..switches all in the off position


  // loop from 1 to switches (i)
    //  for switch in lights
      // if switch key  % i lights[key] == !lights[key]
// return.lights.filter(position is true (aka it is on))



// Examples:

function lightsOn(switches) {
  var lights = {}
  var i;

  for (i = 1; i <= switches; i += 1) {
    lights[i] = false;
  }

  for (i = 1; i <= switches; i += 1) {
    for (let lightNum in lights) {
      if (Number(lightNum) % i === 0) {
        lights[lightNum] = !lights[lightNum];
      }
    }
  }

  return Object.keys(lights).filter((light) => lights[light]);
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]