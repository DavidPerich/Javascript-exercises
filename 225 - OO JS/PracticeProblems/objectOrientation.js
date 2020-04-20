// Suppose we want to use code to keep track of products in our hardware store's inventory. A first stab might look something like this:

var scissorsId = 0;
var scissorsName = 'Scissors';
var scissorsStock = 8;
var scissorsPrice = 10;

var drillId = 1;
var drillName = 'Cordless Drill';
var drillStock = 15;
var drillPrice = 45;

function makeProduct(id, name, stock, price) {
 return {
  id: id,
  name: name,
  stock: stock,
  price: price,
  setPrice: function (newPrice) {
    if (newPrice < 0) {
      console.log("That is a negative price");
      return;
    } else {
      this.price = newPrice
    }
    this.price = newPrice
  },
  describeProduct: function() {
    console.log("Name: " + this.name);
    console.log("ID: " + this.id);
    console.log("Price: $" + this.price);
    console.log("Stock: " + this.stock);
  }
 };
}

var scissors = makeProduct(0, 'Scissors', 8, 10);
var cordlessDrill = makeProduct(1, 'Cordless Drill', 15, 45);

console.log(scissors, cordlessDrill)

scissors.setPrice(10);
console.log(scissors.price)
scissors.setPrice(-10);
scissors.describeProduct()