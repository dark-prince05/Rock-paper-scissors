const buttons = document.querySelectorAll("button");

let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
  let choices = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
};

let play = () => {
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (computerScore < 5 && humanScore < 5) {
        playRound(e.target.id, getComputerChoice());
      }
    });
  });
};

let playRound = (humanChoice, computerChoice) => {
  const box = document.querySelector("#body");
  const winnerResult = document.querySelector("#result");
  const playerPoint = document.querySelector("#playerScore");
  const computerPoint = document.querySelector("#computerScore");
  if (humanChoice === "rock" && computerChoice === "paper") {
    winnerResult.textContent = "You lose! Paper beats Rock";
    computerScore++;
    computerPoint.textContent = computerScore;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    winnerResult.textContent = "You lose! Scissors beats Paper";
    computerScore++;
    computerPoint.textContent = computerScore;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    winnerResult.textContent = "You lose! Rock beats Scissors";
    computerScore++;
    computerPoint.textContent = computerScore;
  } else if (humanChoice === computerChoice) {
    winnerResult.textContent = "Draw! Both are Equal";
  } else {
    winnerResult.textContent = "You win! ";
    humanScore++;
    playerPoint.textContent = humanScore;
  }
};
play();
