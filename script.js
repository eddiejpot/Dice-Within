// Global variables
var scoreBoard = 0;
// Variables for dice
var currentDiceRoll = '';
var currentWithinNum = '';
var getDiceRoll1 = 'change every round';
var getWithinNumber1 = 'change every round';
var getDiceRoll2 = 'change every round';
var getWithinNumber2 = 'change every round';
var fourDWinningNum = 'change every round';

/* -------------------------DICE GAME------------------------------------ */

// Controlled random number function (Dice Roll & Within Number)
var randomNumGenerator = function (min, max) {
  // generate a random number from min to max
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};

// Get dice roll & within number
var startDiceRollAndWithinNum = function () {
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
    // Start new dice game
    startDiceRollAndWithinNum();
  }
  // if empty input
  if (userInput.trim() == '') {
    winningLogicOutput = 0;
  }
  return winningLogicOutput;
};

/* -------------------------4D GAME------------------------------------ */

// create a function that generates 4D number
var fourDGenerator = function () {
  // generate number from 0 to 9
  var randomNumber1 = Math.floor(Math.random() * 10);
  var randomNumber2 = Math.floor(Math.random() * 10);
  var randomNumber3 = Math.floor(Math.random() * 10);
  var randomNumber4 = Math.floor(Math.random() * 10);
  fourDWinningNum = `${randomNumber1}${randomNumber2}${randomNumber3}${randomNumber4}`;
};

// 4D Win Logic
var fourDWinLogic = function (input) {
  // if lose
  var fourDReults = 0;
  // if win
  if ((input == fourDWinningNum)) {
    fourDReults = 1;
  }
  return fourDReults;
};

/* ------------------------------------------------------------- */
/* ------------------------PRE GAME----------------------------- */
/* ------------------------------------------------------------- */

var starNewDiceGameWith2Dice = function () {
  startDiceRollAndWithinNum();
  // currentDiceRoll = 2;
  // currentWithinNum = 1;
  getDiceRoll1 = currentDiceRoll;
  getWithinNumber1 = currentWithinNum;
  // PRINT TEST
  console.log(`*Dice 1* Dice roll: ${currentDiceRoll}`);
  console.log(`*Dice 1* Within number: ${currentWithinNum}`);

  startDiceRollAndWithinNum();
  // currentDiceRoll = 3;
  // currentWithinNum = 1;
  getDiceRoll2 = currentDiceRoll;
  getWithinNumber2 = currentWithinNum;
  // PRINT TEST
  console.log(`*Dice 2* Dice roll: ${currentDiceRoll}`);
  console.log(`*Dice 2* Within number: ${currentWithinNum}`);
};

starNewDiceGameWith2Dice();

/* ------------------------------------------------------------- */
/* ------------------------MAIN FUNCTION------------------------ */
/* ------------------------------------------------------------- */
var main = function (input) {
  var myOutputValue = '';
  // If score is below 2. Play dice within game
  if (scoreBoard < 2) {
    // START GAME
    // if guess is wrong
    var diceWithinOutputValue = 'If you left it blank or you got the wrong answer. You Lose!';
    // Check if dice 1 guess is correct. arguements (diceRoll, withinNum, userInput)
    var checkDiceOne = winningLogic(getDiceRoll1, getWithinNumber1, input); // returns 1 if win
    // check if dice 2 guess is correct. arguements (diceRoll, withinNum, userInput)
    var checkDiceTwo = winningLogic(getDiceRoll2, getWithinNumber2, input); // returns 1 if win
    // if both guesses are within range. Win
    if ((scoreBoard < 2) && (checkDiceOne == 1 || checkDiceTwo == 1)) {
      // increase score on scoreboard
      diceWithinOutputValue = 'YOU WON! THE DICE GAME';
      scoreBoard += 1;
      console.log('Scoreboard:' + scoreBoard);
    }
    if ((scoreBoard == 2) && (checkDiceOne == 1 || checkDiceTwo == 1)) {
      console.log('CURRENT GAME MODE: 4D ROUND');
      // increase score on scoreboard
      diceWithinOutputValue = 'You got 2 guesses correct!' + '<br>' + 'Entering bonus 4D round. Guess the 4D number';
      // generate 4D number
      fourDGenerator();
      console.log(fourDWinningNum);
    }
    // Set Ouput for dice within
    myOutputValue = diceWithinOutputValue;
    return myOutputValue;
  }

  // if score is 2. Start game
  // start 4D game
  if (scoreBoard == 2) {
    console.log('CURRENT GAME MODE: 4DGAME');
    // START GAME
    var check4Dguess = fourDWinLogic(input);
    if (check4Dguess == 0) {
      myOutputValue = 'You got the 4D number wrong' + '<br>' + 'Going back to the dice game';
      // clear score on scoreboard
      scoreBoard = 0;
      console.log('Scoreboard:' + scoreBoard);
      starNewDiceGameWith2Dice();
      return myOutputValue;
    }
    if (check4Dguess == 1) {
      myOutputValue = 'You got the 4D number Right!' + '<br>' + 'Going back to the dice game';
      // clear score on scoreboard
      scoreBoard = 0;
      console.log('Scoreboard:' + scoreBoard);
      starNewDiceGameWith2Dice();
      return myOutputValue;
    }
  }
  // Check score board
  console.log('The score board is now: ' + scoreBoard);
};
