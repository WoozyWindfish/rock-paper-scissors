
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

console.log(getComputerChoice()); 