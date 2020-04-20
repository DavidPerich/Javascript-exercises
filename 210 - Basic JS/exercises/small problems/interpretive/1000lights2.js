// You have a bank of switches before you, numbered from 1 to n. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have gone through n repetitions.

// Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after n repetitions.

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]


// PEDAC
// P
// Input: an integer which represents the number of total number of lights switches
// output: is an array which represents the position of the light switches that are on after the function LightsOn executes
  // lights position are from 1 to n (not the same as an index position)
  // the execution of llightsOn loops "walks" through n times - if the lights position is divisible by the current cycle then the light gets toggled to the opposite of its current value - on becoems off // off becomes on.
  // all lights start in the off position
  // e.g first pass - all switches are divisible by 1 so they all get toggled on
  // second pass - switches at position 2, 4, 6.... 100 - are divisible by 2 so they get toggled (now off) all other switches are still on
  // once you've cycled through n times you then return ONLY the switches that are left.
  // Assume - you'll have a whole number, always have a number, always have an argument, won't be negative.

// data structure
// need to transform and then filter so array seems most logical.
// could also use a hash which has keys from 1 to n and stores whether they are on or off.

// algorithm

// declare a lights array that has num length and staart with num false values. 
// eg. [false, false, false]  to represent each light being off
// for each value in Lightsarray with index // could also just loop from 1 to num. 
    // if the mapIndex + 1 is divisible by the current ForEach index  + 1
      // return opposite of map[index]
      // otherwise jsut return map[index]


// once all the looping is done
// for each value if the value is true then push teh index to a results


var x = new Array(100).fill(false)
// array with num length that is just full of false values at each index