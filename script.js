const buttons = document.querySelectorAll("button");
const body = document.querySelector("#container");
const res = document.querySelector("#result");
const pScore = document.querySelector("#playerScore");
const cScore = document.querySelector("#computerScore");

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
      } else {
        visibleStatus();
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
  let result = playRound(playerChoice, getComputerChoice());
  res.textContent = result;
  pScore.textContent = playerScore;
  cScore.textContent = computerScore;
};

let visibleStatus = () => {
  const visibility = document.querySelector("#visibility");
  visibility.style.visibility = "hidden";
  const finalResult = document.querySelector("h2");
  const playBtn = document.createElement("button");
  playBtn.textContent = "Play again?";
  finalResult.textContent =
    playerScore === 5 ? `Yay! You won the match` : `Oh no! you lost the match`;
  finalResult.setAttribute(
    "style",
    "display:flex; flex-direction:column; align-items:center; gap:30px; font-size:35px ",
  );
  finalResult.style.visibility = "visible";
  finalResult.appendChild(playBtn);

  playBtn.addEventListener("click", () => {
    visibility.style.visibility = "visible";
    finalResult.textContent = "";
    pScore.textContent = "0";
    cScore.textContent = "0";
    computerScore = 0;
    playerScore = 0;
  });
};
