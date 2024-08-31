const buttons = document.querySelectorAll("button");

let playerScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
  let choices = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
};

let initiate = () => {
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (computerScore < 5 && playerScore < 5) {
        play(e.target.id);
      }
    });
  });
};
initiate();

let playRound = (playerChoice, compChoice) => {
  let winMsg = `You win! ${playerChoice} beats ${compChoice}`;
  let loseMsg = `You lose! ${compChoice} beats ${playerChoice}`;

  if (playerChoice === compChoice)
    return `Draw! You both chose ${playerChoice}`;

  switch (playerChoice) {
    case "rock":
      if (compChoice === "scissors") {
        playerScore++;
        return winMsg;
      }
      break;
    case "paper":
      if (compChoice === "rock") {
        playerScore++;
        return winMsg;
      }
      break;
    case "scissors":
      if (compChoice === "paper") {
        playerScore++;
        return winMsg;
      }
      break;
  }
  computerScore++;
  return loseMsg;
};

let play = (playerChoice) => {
  const pScore = document.querySelector("#playerScore");
  const cScore = document.querySelector("#computerScore");
  const res = document.querySelector("#result");

  let result = playRound(playerChoice, getComputerChoice());
  res.textContent = result;
  pScore.textContent = playerScore;
  cScore.textContent = computerScore;
};
