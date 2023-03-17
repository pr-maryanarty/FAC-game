const rockValue = "Rock";
const paperValue = "Paper";
const scissorsValue = "Scissors";

const drawValue = "It's a draw!";
const playerLostValue = "Oh, no, you lost =(";
const playerWonValue = "Woo-hoo, you won!";

let playerChoiceEl = document.querySelector("#playerChoice");
let computerChoiceEl = document.querySelector("#computerChoice");
let resultEl = document.querySelector("#result");

let buttonRock = document.querySelector("#rock");
let buttonPaper = document.querySelector("#paper");
let buttonScissors = document.querySelector("#scissors");

function computerMakeTurn() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum == 0) {
    computerChoiceEl.innerHTML = rockValue;
  } else if (randomNum == 1) {
    computerChoiceEl.innerHTML = paperValue;
  } else if (randomNum == 2) {
    computerChoiceEl.innerHTML = scissorsValue;
  }
}

buttonRock.addEventListener("click", function () {
  playerChoiceEl.innerHTML = rockValue;
  computerMakeTurn();
  calculateResult();
});

buttonPaper.addEventListener("click", function () {
  playerChoiceEl.innerHTML = paperValue;
  computerMakeTurn();
  calculateResult();
});

buttonScissors.addEventListener("click", function () {
  playerChoiceEl.innerHTML = scissorsValue;
  computerMakeTurn();
  calculateResult();
});

function calculateResult() {
  if (playerChoiceEl.innerHTML == computerChoiceEl.innerHTML) {
    resultEl.innerHTML = drawValue;
  } else if (
    playerChoiceEl.innerHTML == rockValue &&
    computerChoiceEl.innerHTML == paperValue
  ) {
    resultEl.innerHTML = playerLostValue;
  } else if (
    playerChoiceEl.innerHTML == rockValue &&
    computerChoiceEl.innerHTML == scissorsValue
  ) {
    resultEl.innerHTML = playerWonValue;
  } else if (
    playerChoiceEl.innerHTML == paperValue &&
    computerChoiceEl.innerHTML == rockValue
  ) {
    resultEl.innerHTML = playerWonValue;
  } else if (
    playerChoiceEl.innerHTML == paperValue &&
    computerChoiceEl.innerHTML == scissorsValue
  ) {
    resultEl.innerHTML = playerLostValue;
  } else if (
    playerChoiceEl.innerHTML == scissorsValue &&
    computerChoiceEl.innerHTML == rockValue
  ) {
    resultEl.innerHTML = playerLostValue;
  } else if (
    playerChoiceEl.innerHTML == scissorsValue &&
    computerChoiceEl.innerHTML == paperValue
  ) {
    resultEl.innerHTML = playerWonValue;
  }
}
