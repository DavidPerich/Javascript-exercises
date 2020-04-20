$(function () {
  $("form").submit(function (event) {
    event.preventDefault();

    var answer;
    var firstNumber = parseInt($("#firstNumber").val(), 10); ;
    var secondNumber = parseInt($("#secondNumber").val(), 10);
    var operator = $("select").val();

    switch (operator) {
      case "plus":
        answer = firstNumber + secondNumber;
        break;
      case "minus":
          answer = firstNumber - secondNumber;
          break;
      case "multiply":
          answer = firstNumber * secondNumber;
          break;
      case "divide":
        answer = firstNumber / secondNumber;
        break;
    }

    $("#answer").text(answer);
    console.log()
  });
});