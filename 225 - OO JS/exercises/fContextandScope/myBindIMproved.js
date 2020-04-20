// Our earlier implementation of the Function.prototype.bind was simplistic. Function.prototype.bind has another trick up its sleeve besides hard-binding functions to context objects. It's called partial function application. Read this assignment and the MDN documentation to learn more about partial function application.

// Alter the myBind function written in the previous exercise to support partial function application.

function myBind(func, context) {
  var args = Array.prototype.slice.call(arguments, 2)

  // return a partial function that has args concatenated to any passed in argumetns
  return function(...newArgs) {
    return func.apply(context, args.concat(newArgs));
  }
}


var x = {
  name: "David",
}

name = "Milly";
function hello(surname) {
  console.log(this.name + " " + surname )
}


hello("Perich") // should log Milly Perich
var newHello = myBind(hello, x, "Bum");
newHello("Perich") // Should log Milly Bum?
