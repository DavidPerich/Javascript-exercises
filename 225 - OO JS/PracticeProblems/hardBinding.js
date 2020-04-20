var obj = {
  message: 'JavaScript',
};

function foo() {
  console.log(this.message);
}
foo.bind(obj);

// console.log(foo.bind(obj));

// console.log(obj)

console.log(obj.foo)