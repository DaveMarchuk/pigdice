function Game() {
  this.players = {};
}

function Player(playerName) {
  this.playerName = playerName;
  this.currentScore = 0;
  this.totalScore = 0;
  this.diceRoll = 0;
}

Player.prototype.playDice = function () {
  this.diceRoll = Math.floor(Math.random() * 6 + 1);
  if (this.diceRoll === 1) {
    return (this.currentScore = 0);
  } else {
    this.currentScore += this.diceRoll;
    return this.currentScore;
  }
};

Player.prototype.holdDice = function () {
  this.totalScore += this.currentScore;
  this.diceRoll = 0;
  if (this.totalScore >= 100) {
    return this.playerName + " Has Won!";
  }
};

let player1 = new Player("Rafael");
let player2 = new Player("Oscar");

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
