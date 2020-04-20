// Implement an ancestors method that returns the prototype chain (ancestors) of a calling object as an array of object names. Here's an example output:

// name property added to make objects easier to identify
var foo = {name: 'foo'};
var bar = Object.create(foo);
bar.name = 'bar';
var baz = Object.create(bar);
baz.name = 'baz';
var qux = Object.create(baz);
qux.name = 'qux';

qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
// baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
// bar.ancestors();  // returns ['foo', 'Object.prototype']
// foo.ancestors();  // returns ['Object.prototype']

function ancestors() {
  var result = [];

  if (Object.getPrototypeOf(this) === undefined) {
    return 'Object.prototype';
  }

  result.push(this.an)

  // push the result of ancestors()
  // break condition is if object.getPrototypeOf == undefined
  // push the current object.name
  // return ancestors()

}

console.log(Object.getPrototypeOf(foo).name);
