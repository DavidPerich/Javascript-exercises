// Implement an ancestors method that returns the prototype chain (ancestors) of a calling object as an array of object names. Here's an example output:

// name property added to make objects easier to identify
var foo = {name: 'foo'};
var bar = Object.create(foo);
bar.name = 'bar';
var baz = Object.create(bar);
baz.name = 'baz';
var qux = Object.create(baz);
qux.name = 'qux';

Object.prototype.ancestors = function() {
  var ancestor = Object.getPrototypeOf(this);
  if (ancestor.name === undefined) return ["Object.prototype"];
  return [ancestor.name].concat(ancestor.ancestors())
}

// given a number of variables which contain objects which delegate to each other
// ancestors is called as a method by an object
  // for any given object return the [[prototype]] chain ending in Object.protoype as an array



console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']



// Object.prototype.ancestors = function ancestors() {
//   var ancestor = Object.getPrototypeOf(this);
//   if (ancestor.name === undefined) return ['Object.prototype'];
//   return [ancestor.name].concat(ancestor.ancestors());
// };
