let getComputerChoice = () => {
  let choices = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
};

let getHumanChoice = () => {
  let choice = prompt(`What's your choice "rock", "paper", "scissors"`);
  return choice;
};

let humanScore = 0;
let computerScore = 0;

let playRound = (humanChoice, computerChoice) => {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats Rock");
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beats Paper");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats Scissors");
    computerScore++;
  } else if (humanChoice === computerChoice) {
    console.log("Draw! Both are Equal");
  } else {
    console.log("You win! ");
    humanScore++;
  }
};

let playGame = (round) => {
  for (let i = 0; i < round; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }
  if (humanScore > computerScore) {
    alert("You won the game!");
  } else if (humanScore === computerScore) {
    alert("It's a draw");
  } else {
    alert("You lost! try again");
  }
};

playGame(5);
