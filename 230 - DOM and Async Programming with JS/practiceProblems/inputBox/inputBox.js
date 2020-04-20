document.addEventListener('DOMContentLoaded', function() {
  var textField = document.querySelector(".text-field");
  var interval;

  textField.addEventListener("click", function() {
    event.stopPropagation()
    this.classList.add("focused");

    if (!interval) {
      interval = setInterval(function() {
        textField.classList.toggle("cursor");
      }, 500)
    }

  });

  document.addEventListener("click", function(event) {
      event.stopPropagation()
      textField.classList.remove("focused");
      clearInterval(interval);
      textField.classList.remove("cursor")
  });




});







































// old answer;


// document.addEventListener("DOMContentLoaded", function() {
//   var textField = document.querySelector(".text-field");
//   var content = document.querySelector(".content");

//   textField.addEventListener("click", function(event) {
//     event.stopPropagation();
//     textField.classList.add("focused")

//     cursor = setInterval(function() {
//       textField.classList.toggle("cursor")
//     }, 500);
//   });

//   document.addEventListener("click", function(event) {
//     textField.classList.remove("focused")
//     clearInterval(cursor);
//     textField.classList.remove("cursor")
//   });

//   document.addEventListener("keydown", function(event) {
//     var key = event.key;
//     console.log(key)
//     if (textField.classList.contains("focused") ) {
//       if (key === "Backspace") {
//         content.textContent = content.textContent.slice(0, content.textContent.length - 1)
//       } else {
//         content.textContent += event.key;
//       }
//     }
//   });

// });

