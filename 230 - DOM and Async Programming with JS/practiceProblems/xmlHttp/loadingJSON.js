// Write some JavaScript code that loads JSON data from https://api.github.com/repos/rails/rails, parses the JSON into a JavaScript object, and then logs the HTTP status code and the number of open issues to the console.


var request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/repos/rails/rai3ls');

request.responseType = 'json'

request.addEventListener("load", function(event) {
  if (request.response) {
    console.log(request.status)
    console.log(request.response.open_issues);
  } else {
    console.log("The request could not be completed")
  }

});

request.send();