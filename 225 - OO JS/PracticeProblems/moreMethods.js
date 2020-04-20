// //Using this method, create a function that constructs a new object with a log method that is read-only. The log method will use console.log to output the name property on itself.

// // this method is `Object.defineProperties)

// function newPerson(name) {
//   var obj = {
//     name: name
//   };

//   Object.defineProperties(obj, {
//     log: {
//       value: function() {
//       console.log(this.name);
//     },
//     writable: false
//   }
//   });

//   console.log(obj)
//   return obj
// }

// var me = newPerson('Shane Riley');
// console.log(me.log)
// me.log();     // => Shane Riley


// me.log = function() { console.log('Amanda Rose'); };
// me.log();     // => Shane Riley


var frozen = {
  integer: 4,
  string: 'String',
  array: [1, 2, 3],
  object: {
    foo: 'bar'
  },
  func: function() {
    console.log('I\'m frozen');
  },
};

Object.freeze(frozen);
frozen.integer = 8;
frozen.string = 'Number';
frozen.array.pop();
frozen.object.foo = 'baz';
frozen.func = function() {
  console.log('I\'m not really frozen');
};

console.log(frozen.integer);      // => 4
console.log(frozen.string);       // => String
console.log(frozen.array);        // => [1, 2]
console.log(frozen.object.foo);   // => baz
frozen.func();                    // => I'm frozen

frozen.array = ["David"]
console.log(frozen.array) // [1, 2]