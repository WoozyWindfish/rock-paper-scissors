const container = document.createElement('div');

const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');

rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";

container.appendChild(rockBtn);
container.appendChild(paperBtn);
container.appendChild(scissorsBtn);

document.body.appendChild(container);

const resultsDiv = document.createElement("div");
container.appendChild(resultsDiv);

const scoreDiv = document.createElement('div');
container.appendChild(scoreDiv);

const winnerDiv = document.createElement('div');
container.appendChild(winnerDiv);

let humanScore = 0;
let computerScore = 0;


function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function getComputerChoice() {
  let randomNumber = getRandomInt(0, 3);

  if (randomNumber === 0) {
    return 'Rock';
  } else if (randomNumber === 1) {
    return 'Paper';
  } else if (randomNumber === 2) {
    return 'Scissors';
  }
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } 
  else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice == "rock")  ||
    (humanChoice === "scissors" && computerChoice == "paper")
  ) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}.`;
  }

  else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}.`;
  }
}

function playGame() {

  console.log(`Final score: Human ${humanScore} Computer ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("You won!");
  } else if (humanScore < computerScore) {
    console.log("You lost!");
  } else {
    console.log("The game is a tie!");
  }
}

rockBtn.addEventListener("click", () => {
  resultsDiv.textContent = playRound("rock", getComputerChoice());
  scoreDiv.textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      winnerDiv.textContent = "You won the game!";
    } else {
      winnerDiv.textContent = "You lost the game!";
  }
}});

paperBtn.addEventListener("click", () => {
  resultsDiv.textContent = playRound("paper", getComputerChoice());
  scoreDiv.textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      winnerDiv.textContent = "You won the game!";
    } else {
      winnerDiv.textContent = "You lost the game!";
  }
}});

scissorsBtn.addEventListener("click", () => {
  resultsDiv.textContent = playRound("scissors", getComputerChoice());
  scoreDiv.textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      winnerDiv.textContent = "You won the game!";
    } else {
      winnerDiv.textContent = "You lost the game!";
  }
}});