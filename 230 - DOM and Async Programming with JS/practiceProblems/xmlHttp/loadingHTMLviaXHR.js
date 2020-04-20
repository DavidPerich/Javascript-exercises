document.addEventListener('DOMContentLoaded', function() {
  var store = document.getElementById('store');
  var form = document.getElementById("form")

  var request = new XMLHttpRequest();
  request.open('GET', 'https://ls-230-web-store-demo.herokuapp.com/products');

  request.addEventListener('load', function(event) {
    store.innerHTML = request.response;
  });

  request.send();

  store.addEventListener('click', function(event) {
    var target = event.target;
    if (target.tagName !== 'A') {
      return;
    }

    event.preventDefault();

    var request = new XMLHttpRequest();
    request.open('GET', 'https://ls-230-web-store-demo.herokuapp.com' + target.getAttribute('href'));

    request.addEventListener('load', function(event) {
      store.innerHTML = request.response;
    });

    request.send();
  });

  store.addEventListener("submit", function(event) {
    event.preventDefault();
    form = event.target;

    var data = new FormData(form);

    var request = new XMLHttpRequest();

    request.open('POST', 'https://ls-230-web-store-demo.herokuapp.com/' + form.getAttribute('action'));

    request.setRequestHeader("Authorization", "token AUTH_TOKEN")

    request.addEventListener('load', function() {
      store.innerHTML = request.response;
    });

    request.send(data);
  });
});

function createProduct(productData) {
  var json = JSON.stringify(productData);
  var request = new XMLHttpRequest();

  request.open('POST', 'https://ls-230-web-store-demo.herokuapp.com/v1/products');
  request.setRequestHeader('Content-Type', 'application/json');
  request.setRequestHeader('Authorization', 'token AUTH_TOKEN');

  request.addEventListener('load', function() {
    console.log('This product was added: ' + request.responseText);
  });

  request.send(json);
}

createProduct({
  name: 'HB pencil',
  sku: 'hbp100',
  price: 50,
});
