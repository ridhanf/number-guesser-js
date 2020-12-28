let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (x, y) => {
  return Math.abs(x - y);
}

const compareGuesses = (userGuess, computerGuess, target) => {
  if (userGuess < 0 || userGuess > 9) {
    alert('Your number is out of range!');
    return undefined;
  } else {
    userDifference = getAbsoluteDistance(userGuess, target);
    computerDifference = getAbsoluteDistance(computerGuess, target);
    return (userDifference <= computerDifference) ? true : false;
  }
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