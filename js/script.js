function Game() {
  this.players = {};
}

function Player(playerName, diceRoll, totalScore) {
  this.name = playerName;
  this.diceRoll = diceRoll;
  this.totalScore = totalScore;
}

Player.prototype.playDice = function() {
  this.diceRoll = Math.floor(Math.random() * 6 + 1);
  return this.diceRoll;
};

Player.prototype.addPoints = function() {
  this.addPoints += newScore;
  return this.addPoints; 
};

let player1 = new Player(' ', 0, 0);
let player2 = new Player(' ', 0, 0);

/*function Player(playerName) {
  let array = [];
  let rollDice = function rollDice() {
    let diceRoll = Math.floor(Math.random() * 6 + 1);
    return diceRoll;
  };
  this.name = playerName;
  this.turnScore = 0;
  this.totalScore = 0;
  this.diceValue = rollDice();
  this.playerResults = array.push(this.diceValue);
}*/

//Player.prototype.playerResults = function () {};
//if (this.)

/*
const player1 = {
  name: "Player 1",
  dice: [1, 2, 3, 4, 5, 6],
};

const player2 = {
  name: "Player 2",
  dice: [1, 2, 3, 4, 5, 6],
};

function rollDice() {
  let diceRoll = Math.floor(Math.random() * 6 + 1);
  return diceRoll;
}
*/
