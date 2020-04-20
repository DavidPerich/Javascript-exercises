var request = new XMLHttpRequest()
const data = {
  name: "david",
  sku: "abca",
  price: 10,
}

const json = JSON.stringify(data)

request.open("POST, https://ls-230-web-store-demo.herokuapp.com/v1/products")

request.send(json)


request.open("GET", "https://api.github.com/repos/rails/rails");

request.send()
request.response


