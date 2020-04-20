// 1) Create an event listener that will run when the document's DOMContentLoaded event fires. In the subsequent steps, you'll add code to this event listener so that it will run when the page finishes loading.



document.addEventListener('DOMContentLoaded', function() {

  var answer = Math.floor(Math.random() * 100) + 1;
  var form = document.querySelector("form");
  var guessInput = document.querySelector("#guess");
  var paragraph = document.querySelector("p");
  var newGame = document.querySelector("a");
  var guessCount = 0;

  paragraph.textContent = 'Guess a number from 1 to 100'


  form.addEventListener("submit", function(event) {
    event.preventDefault()
    var guess = parseInt(guessInput.value, 10);
    var message;
    guessCount += 1
    message = setGuessMessage(guess, answer, guessCount)
    paragraph.textContent = message;
  });

  newGame.addEventListener('click', function(event) {
    event.preventDefault()
    answer = Math.floor(Math.random() * 100) + 1;
    paragraph.textContent = 'Guess a number from 1 to 100';
    guessCount = 0;
  })

  function setGuessMessage(guess, answer, guessCount) {
    console.log(guess, answer)
    if (guess < answer) {
      return 'My number is higher than ' + String(guess);
    } else if ( guess > answer) {
      return 'My number is lower than ' + String(guess);
    } else {
       return `You guessed it! It took ${guessCount} guesses`;
    }
  }

});

