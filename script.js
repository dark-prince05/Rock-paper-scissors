let getComputerChoice = () => {
  let choices = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
};

let getHumanChoice = () => {
  let choice = prompt(`What's your choice "rock", "paper", "scissors"`);
  return choice;
};
