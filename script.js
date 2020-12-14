// Global variables
var gameCounter = 0;

// Dice roll function
var rollDice = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

// Main function
var main = function (input) {
  // Roll dice one and two
  diceRollOne = rollDice();
  diceRollTwo = rollDice();
  //
  var myOutputValue = `Better luck next time! Dice one was ${diceRollOne}. Dice two was ${diceRollTwo}`;
  // START GAME
  if ((diceRollOne == 5) && (diceRollTwo == 6)) {
    myOutputValue = `Lucky 11! Dice one was ${diceRollOne}. Dice two was ${diceRollTwo}`;
  }
  // Add to game counter
  gameCounter += 1;
  // Output
  return myOutputValue
  + '<br>' + 'Games Played:  ' + gameCounter;
};
