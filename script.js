// Global variables
var gameCounter = 0;
var diceRollOne = 'change every round';
var withinNum = 'change every round';

// Controlled random number function (Dice Roll & Within Number)
var randomNumGenerator = function (min, max) {
  // generate a random number from min to max
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};

// Start new game function
var startNewGame = function () {
  // Within number (from 1 to 12)
  diceRollOne = randomNumGenerator(1, 12);
  console.log(`Dice roll : ${diceRollOne}`);
  // Within number (from 1 to 3)
  withinNum = randomNumGenerator(1, 3);
  console.log(`Within : ${withinNum}`);
};

// Winning Logic Function
// ensure that min number does not go below one
var lessThanZero = function (input) {
  var changeNegative = input;
  if (input < 0) {
    changeNegative = 1;
  }
  return changeNegative;
};
// player guess has to be within the within number of the dice rolls
var winningLogic = function (input) {
  var winningLogicOutput = '';
  // set minimum within num
  var minWithin = lessThanZero(diceRollOne - withinNum);
  // set maximum within num
  var maxWithin = diceRollOne + withinNum;
  // wrong answer
  winningLogicOutput = 'You lose!';
  // right answer
  // if player guess is equals to diceRoll OR within minmum within number OR withing max within number
  if ((input == diceRollOne)
  || (input >= minWithin)
  && (input <= maxWithin)) {
    winningLogicOutput = 'START NEW GAME' + '<br>' + 'WINNER!' + '<br>' + `Previous Dice roll: ${diceRollOne}. Previous within Number: ${withinNum}`;
    // Start new game
    startNewGame();
  }
  // if empty input
  if (input.trim() == '') {
    winningLogicOutput = 'You cannot leave it blank!';
  }
  return winningLogicOutput;
};

/* ------------------------------------------------------------- */
/* ------------------------PRE GAME----------------------------- */
/* ------------------------------------------------------------- */
startNewGame();

/* ------------------------------------------------------------- */
/* ------------------------MAIN FUNCTION------------------------ */
/* ------------------------------------------------------------- */
var main = function (input) {
  // // TEST
  // diceRollOne = 1;
  // withinNum = 3;
  // START GAME Winning Logic
  var myOutputValue = winningLogic(input);
  // Add to game counter
  gameCounter += 1;
  // Output
  return myOutputValue
  + '<br>' + 'Games Played:  ' + gameCounter;
};
