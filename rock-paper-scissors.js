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

function getHumanChoice() {
  let input = prompt ('Rock, Paper, or Scissors?');
  input = input.toLowerCase();
  return input;
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


const humanSelection = getHumanChoice();

const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));

function playGame() {
  playRound(humanSelection, computerSelection);

}