generateRandomNumber();

var randomNum;

var introToGuess = document.querySelector('.intro-to-guess');

var userGuess = document.getElementById('user-guess');

var guessButton = document.getElementById('guess');

var clearButton = document.getElementById('clear');

var lastGuess = document.querySelector('.last-number-guess');

var comment = document.querySelector('.guess-comment');

var reset = document.querySelector('.reset');

function generateRandomNumber(min, max) {
  var min = Math.ceil(min);
  var max = Math.floor(max);
  randomNum = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  console.log("Random number is " + randomNum);
}

//function for guess button to take user input and display number-guess submitted into input box
guessButton.addEventListener('click', function(){
  var guessValue = userGuess.value;
  lastGuess.innerText = guessValue;
  introToGuess.innerText = "Your last guess was...";
  evaluateGuessIsNumInRange();
});



//Evaluate the user guess, display feedback about guess...Need parseInt() to change "string" into numeric value.

function evaluateGuess() {
  if (parseInt(userGuess.value) > randomNum) {
    comment.innerText = "That is too high";
  } else if (parseInt(userGuess.value) < randomNum) {
    comment.innerText = "That is too low";
  } else {
    comment.innerText = "BOOM!";
  }
}

function evaluateGuessIsNumInRange() {
  var guess = parseInt(userGuess.value);
  if (isNaN(guess)) {
    introToGuess.innerText = "NO! Give me a number";
    lastGuess.innerText = "1 - 100";
    comment.innerText = "";
  } else if (guess < 1 || guess > 100) {
    lastGuess.innerText = "Pick a number between 1 & 100";
    comment.innerText = ""
  } else {
    evaluateGuess();
  }
}

//function for button to clear guess input
clearButton.addEventListener('click', function(){
  userGuess.value = "";
  // document.querySelector('.number-guess').reset();
  // disableClearButton();
});

//Function to disable clear button when input is blank:
// function disableClearButton() {
//   if (userGuess.value.length == 0);
//     clearButton.disabled = true;
//   };


//function for button to reset game
reset.addEventListener('click', function(){
  window.location.reload();
});
