const rockValue = "Rock";
const paperValue = "Paper";
const scissorsValue = "Scissors";

const drawText = "It's a draw!";
const playerLostText = "Oh, no, you lost =(";
const playerWonText = "Woo-hoo, you won!";

const drawResultValue = "Draw";
const winResultValue = "Win";
const loseResultValue = "Lose";

let playerChoiceEl = document.querySelector("#playerChoice");
let computerChoiceEl = document.querySelector("#computerChoice");
let resultEl = document.querySelector("#result");

let buttonRock = document.querySelector("#rock");
let buttonPaper = document.querySelector("#paper");
let buttonScissors = document.querySelector("#scissors");

// todo to remove
let scoreResult = document.querySelector("#score");
// ---
let playerScore = 0;
let computerScore = 0;

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

function displayOutcome() {
    let calculationResult = calculateResult();
    if (calculationResult == drawResultValue) {
        resultEl.innerHTML = drawText;
        scoreResult.innerHTML = `Score: ${playerScore} - ${computerScore}`;
    } else if (calculationResult == winResultValue) {
        resultEl.innerHTML = playerWonText;
        playerScore++;
        scoreResult.innerHTML = `Score: ${playerScore} - ${computerScore}`;
    } else if (calculationResult == loseResultValue) {
        resultEl.innerHTML = playerWonText;
        computerScore++;
        scoreResult.innerHTML = `Score: ${playerScore} - ${computerScore}`;
    }
}
buttonRock.addEventListener("click", function () {
    playerChoiceEl.innerHTML = rockValue;
    computerMakeTurn();
    displayOutcome();
});

buttonPaper.addEventListener("click", function () {
    playerChoiceEl.innerHTML = paperValue;
    computerMakeTurn();
    displayOutcome();
});

buttonScissors.addEventListener("click", function () {
    playerChoiceEl.innerHTML = scissorsValue;
    computerMakeTurn();
    displayOutcome();
});

function calculateResult() {
    let calculationResult;

    if (playerChoiceEl.innerHTML == computerChoiceEl.innerHTML) {
        calculationResult = drawResultValue;
    } else if (
        playerChoiceEl.innerHTML == rockValue &&
        computerChoiceEl.innerHTML == paperValue
    ) {
        calculationResult = loseResultValue;
    } else if (
        playerChoiceEl.innerHTML == rockValue &&
        computerChoiceEl.innerHTML == scissorsValue
    ) {
        calculationResult = winResultValue;
    } else if (
        playerChoiceEl.innerHTML == paperValue &&
        computerChoiceEl.innerHTML == rockValue
    ) {
        calculationResult = winResultValue;
    } else if (
        playerChoiceEl.innerHTML == paperValue &&
        computerChoiceEl.innerHTML == scissorsValue
    ) {
        calculationResult = loseResultValue;
    } else if (
        playerChoiceEl.innerHTML == scissorsValue &&
        computerChoiceEl.innerHTML == rockValue
    ) {
        calculationResult = loseResultValue;
    } else if (
        playerChoiceEl.innerHTML == scissorsValue &&
        computerChoiceEl.innerHTML == paperValue
    ) {
        calculationResult = winResultValue;
    }
    return calculationResult;
}

let newGame = document.querySelector("#reset");
newGame.addEventListener("click", function () {
    playerChoiceEl.innerHTML = "";
    computerChoiceEl.innerHTML = "";
    resultEl.innerHTML = "";
    playerScore = 0;
    computerScore = 0;
    scoreResult.innerHTML = `Score: ${playerScore} - ${computerScore}`;
    // TODO reset score
});
