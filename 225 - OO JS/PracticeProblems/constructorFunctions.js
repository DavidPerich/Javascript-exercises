// // What does the following code log to the console?

// var a = 1;
// var foo;
// var obj;

// function Foo() {
//   this.a = 2;
//   this.bar = function() {
//     console.log(this.a);
//   };
//   this.bar();
// }

// foo = new Foo();

// foo.bar();
// Foo();

// obj = {};
// Foo.call(obj);
// obj.bar();

// console.log(this.a);

// 2) What does the following code log to the console?

// var RECTANGLE = {
//   area: function() {
//     return this.width * this.height;
//   },
//   perimeter: function() {
//     return 2 * (this.width + this.height);
//   },
// };

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area.call(this);
//   this.perimeter = RECTANGLE.perimeter.call(this);
// }

// var rect1 = new Rectangle(2, 3);
// console.log(rect1.area);
// console.log(rect1.perimeter);

//s in RECTANGLE.area and RECTANGLE.perimeter functions is set to the RECTANGLE object when they are called. Since RECTANGLE does not define width and height properties, both methods return NaN.

// To fix it you remove the function you use `call` and you pass make sure that the execution context is the calling object.


// 3) Write a constructor function Circle, that takes a radius as an argument. You should be able to call an area method on the created objects to get the circle's area. Test your implementation with the following code:

// function Circle(radius) {
//   this.radius = radius;
// }

// Circle.prototype.area = function () {
//   return Math.PI * (this.radius  ** 2 )
// };

// var a = new Circle(3);
// var b = new Circle(4);

// console.log(a.area().toFixed(2)); // => 28.27
// console.log(b.area().toFixed(2)); // => 50.27


// var ninjaA;
// var ninjaB;
// function Ninja() {
//   this.swung = false;
// }

// Ninja.prototype.swing = function () {
//   this.swung = !this.swung
//   return this;
// }


// ninjaA = new Ninja();
// ninjaB = new Ninja();

// // Add a swing method to the Ninja prototype which
// // returns the calling object and modifies swung

// console.log(ninjaA.swing().swung);      // must log true
// console.log(ninjaB.swing().swung);      // must log true

// 7
var ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

var ninjaB = Object.create(ninjaA.__proto__)

console.log(ninjaB.constructor === ninjaA.constructor);    // should log true

