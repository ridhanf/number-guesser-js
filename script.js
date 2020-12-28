let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (userGuess, computerGuess, target) => {
  userDifference = Math.abs(userGuess - target);
  computerDifference = Math.abs(computerGuess - target);
  return (userDifference <= computerDifference) ? true : false;
}

const updateScore = (winner) => {
  switch (winner) {
    case 'human':
      humanScore++;
      break;
    case 'computer':
      computerScore++;
      break;
  }
  return undefined;
}

const advanceRound = () => {
  currentRoundNumber++;
  return undefined;
}