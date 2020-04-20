// Write a function named copyProperties that takes two Objects as arguments. The function should copy all properties from the first object to the second. The function should return the number of properties copied.

var hal = {
  model: 9000,
  enabled: true,
};

var sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }

function copyProperties(object, copy)  {
  var count = 0;
  for (k in object) {
    copy[k] = object[k];
    count += 1;
  }

  return count;
}