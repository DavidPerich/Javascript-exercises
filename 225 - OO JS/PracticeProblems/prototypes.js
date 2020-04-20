// Use the method we learned above to assign foo below to a new Object with prot as its prototype.

var prot = {};

var foo = Object.create(prot)

console.log(Object.getPrototypeOf(foo) === prot);

console.log(prot.isPrototypeOf(foo));