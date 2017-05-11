generateRandomNumber();

var randomNum;

var minValue = document.getElementById('user-min-value');
var minConvert = parseInt(minValue.value);

var maxValue = document.getElementById('user-max-value');
var maxConvert = parseInt(maxValue.value);

var setRangeButton = document.getElementById('one-to-hundred');

var chooseRangeButton = document.getElementById('choose-your-range');

var introToGuess = document.querySelector('.intro-to-guess');

var userGuess = document.getElementById('user-guess');

var guessButton = document.getElementById('guess');

var clearButton = document.getElementById('clear');

var lastGuess = document.querySelector('.last-number-guess');

var comment = document.querySelector('.guess-comment');

var continuePlay = document.querySelector('.continue-play');

var reset = document.querySelector('.reset');

//Function to generate a random number between 1-100;
function generateRandomNumber(min, max) {
  var min = Math.ceil(1);
  var max = Math.floor(100);
  randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log("Random number is " + randomNum);
}
//Function to generate random number based on user chosen range.
function genRangeRandomNumber(min, max) {
  var minInput = minConvert;
  var maxOutput  = maxConvert;
  var min = Math.ceil(minInput);
  var max = Math.floor(maxOutput);
  randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log("Random number is " + randomNum);
}
//Take user min and max inputs.
// minValue.addEventListener('input', function(){
//   if (minConvert && maxConvert) {
//     genRangeRandomNumber();
//   }
// })
//
// maxValue.addEventListener('input', function(){
//   if (!isNaN(maxConvert) && !isNaN(minConvert)) {
//     genRangeRandomNumber();
//   }
// })

//Activate genRangeRandomNumber when choose your range is clicked.
chooseRangeButton.addEventListener('click', function(){
  genRangeRandomNumber();
  console.log(randomNum);
})

//function for guess button to take user input and display number-guess submitted into input box;
guessButton.addEventListener('click', function(){
  var guessValue = userGuess.value;
  lastGuess.innerText = guessValue;
  introToGuess.innerText = "Your last guess was...";
  evaluateGuessIsNumInRange();
});

//Evaluate the user guess, display feedback about guess...Need parseInt() to change "string" into numeric value.
function evaluateGuess() {
  if (parseInt(userGuess.value) > randomNum) {
    disableResetButton();
    comment.innerText = "That is too high";
  } else if (parseInt(userGuess.value) < randomNum) {
    disableResetButton();
    comment.innerText = "That is too low";
  } else {
    reset.disabled = false;
    introToGuess.innerText = "Thats Correct!";
    comment.innerText = "BOOM!";
  }
}

//Evaluate whether the guess is a number, display error if number is out of range, or NaN.
function evaluateGuessIsNumInRange() {
  var guess = parseInt(userGuess.value);
  if (isNaN(guess)) {
    introToGuess.innerText = "NO! Give me a number";
    lastGuess.innerText = "1 - 100";
    comment.innerText = "";
  } else if (guess < 1 || guess > 100) {
    introToGuess.innerText = "Pick a number between";
    lastGuess.innerText = "1 - 100";
    comment.innerText = "";
  } else {
    evaluateGuess();
  }
}

// Function to disable clear button when input is blank:
function disableClearButton() {
  if (userGuess.value === ""){
    clearButton.disabled = true;
  } else if (userGuess.value !== "") {
    clearButton.disabled = false;
  }
};

//Function for button to clear guess input.
clearButton.addEventListener('click', function(){
  userGuess.value = "";
  disableClearButton();
});

//Function to reverse clear button disable when input field is in use.
userGuess.addEventListener('input', function(){
  disableClearButton();
})

//Function to disable reset button until user guess is correct.
function disableResetButton() {
  if (comment.innerText === "BOOM!") {
    reset.disabled = false;
  } else {
    reset.disabled = true;
  }
}

//Function for button to reset game, which reloads page.
reset.addEventListener('click', function(){
  window.location.reload();
});
