// Global variables
var gameCounter = 0;
// Variables for dice
var currentDiceRoll = '';
var currentWithinNum = '';
var getDiceRoll1 = 'change every round';
var getWithinNumber1 = 'change every round';
var getDiceRoll2 = 'change every round';
var getWithinNumber2 = 'change every round';
var diceCounter = 0;

// Controlled random number function (Dice Roll & Within Number)
var randomNumGenerator = function (min, max) {
  // generate a random number from min to max
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};

// Get dice roll & within number
var startDiceRollAndWithinNum = function () {
  diceCounter += 1;
  // Within number (from 1 to 12)
  currentDiceRoll = randomNumGenerator(1, 12);
  // Within number (from 1 to 3)
  currentWithinNum = randomNumGenerator(1, 3);
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
// ensure that max number does not go above 12
var notMoreThanMax = function (input) {
  var changeMax = input;
  if (input > 12) {
    changeMax = 12;
  }
  return changeMax;
};
// player guess has to be within the within number of the dice rolls
var winningLogic = function (diceRoll, withinNum, userInput) {
  var winningLogicOutput = '';
  // set minimum within num
  var minWithin = lessThanZero(diceRoll - withinNum);
  // set maximum within num
  var maxWithin = notMoreThanMax(diceRoll + withinNum);
  // wrong answer
  winningLogicOutput = 0;
  // right answer
  // if player guess is equals to diceRoll OR within minmum within number OR withing max within number
  if ((userInput == diceRoll)
  || (userInput >= minWithin)
  && (userInput <= maxWithin)) {
    winningLogicOutput = 1;
    // Start new game
    startDiceRollAndWithinNum();
  }
  // if empty input
  if (userInput.trim() == '') {
    winningLogicOutput = 0;
  }
  return winningLogicOutput;
};

/* ------------------------------------------------------------- */
/* ------------------------PRE GAME----------------------------- */
/* ------------------------------------------------------------- */
// // 2 sets of dices & within numbers
// startDiceRollAndWithinNum();
// getDiceRoll1 = currentDiceRoll;
// getWithinNumber1 = currentWithinNum;
// // PRINT TEST
// console.log(`*Dice ${diceCounter}* Dice roll: ${currentDiceRoll}`);
// console.log(`*Dice ${diceCounter}* Within number: ${currentWithinNum}`);

// startDiceRollAndWithinNum();
// getDiceRoll2 = currentDiceRoll;
// getWithinNumber2 = currentWithinNum;
// // PRINT TEST
// console.log(`*Dice ${diceCounter}* Dice roll: ${currentDiceRoll}`);
// console.log(`*Dice ${diceCounter}* Within number: ${currentWithinNum}`);

/* ------------------------TEST----------------------------- */
/* ------------------------PRE GAME----------------------------- */
/* ------------------------TEST----------------------------- */
startDiceRollAndWithinNum();
currentDiceRoll = 3;
currentWithinNum = 1;
getDiceRoll1 = currentDiceRoll;
getWithinNumber1 = currentWithinNum;
// PRINT TEST
console.log(`*Dice ${diceCounter}* Dice roll: ${currentDiceRoll}`);
console.log(`*Dice ${diceCounter}* Within number: ${currentWithinNum}`);

startDiceRollAndWithinNum();
currentDiceRoll = 12;
currentWithinNum = 1;
getDiceRoll2 = currentDiceRoll;
getWithinNumber2 = currentWithinNum;
// PRINT TEST
console.log(`*Dice ${diceCounter}* Dice roll: ${currentDiceRoll}`);
console.log(`*Dice ${diceCounter}* Within number: ${currentWithinNum}`);

/* ------------------------------------------------------------- */
/* ------------------------MAIN FUNCTION------------------------ */
/* ------------------------------------------------------------- */
var main = function (input) {
  // START GAME Winning Logic -> arguements (diceRoll, withinNum, userInput)
  myOutputValue = 'If you left it blank or you got the wrong answer. You Lose!';
  // check if dice 1 guess is correct
  var checkDiceOne = winningLogic(getDiceRoll1, getWithinNumber1, input);
  // check if dice 2 guess is correct
  var checkDiceTwo = winningLogic(getDiceRoll2, getWithinNumber2, input);
  // if both guesses are within range. Win
  if (checkDiceOne == 1 || checkDiceTwo == 1) {
    myOutputValue = 'YOU WON!';
  }
  // Add to game counter
  gameCounter += 1;
  // Output
  return myOutputValue + '<br>' + 'Games Played:  ' + gameCounter;
};
