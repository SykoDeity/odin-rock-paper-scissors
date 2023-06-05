//Function to handle user input to match with the expected test cases!
function caps(str) {
  str = str.toLowerCase();
  let firstChar = str.charAt(0).toUpperCase();
  let newStr = str.replace(str.charAt(0), firstChar);
  return newStr;
}

//Function to get the computer to make a random choice between "Rock", "Paper", or "Scissors".
function getComputerChoice() {
  const OPTIONS = ["Rock", "Paper", "Scissors"];
  let choiceIndex = Math.floor(Math.random() * OPTIONS.length);
  return OPTIONS[choiceIndex];
}

//Display the final score of the game and announce a winner.
function showScore(pScore, cScore) {
  if (pScore > cScore) console.log(`Player Wins! ${pScore}-${cScore}`);
  else console.log(`Computer Wins! ${cScore}-${pScore}`);
}

//Function to keep track of the score within rounds of play.
function scoreCounter(playerScore, computerScore) {
  let userScore = 0,
    pcScore = 0;
  if (playerScore == "tie" && computerScore == "tie") {
    userScore += 0;
    pcScore += 0;
  } else if (playerScore == "playerWin" && computerScore == "computerLose") {
    userScore++;
  } else if (computerScore == "computerWin" && playerScore == "playerLose") {
    pcScore++;
  } else if (playerScore == "reset" && computerScore == "reset") {
    showScore(userScore, pcScore);
    (userScore = 0), (pcScore = 0);
  }
  console.log(`userScor = ${userScore} pcScore = ${pcScore}`);
}

//Function that can play one round of rock paper scissors.
function playRound(playerSelection, computerSelection) {
  playerSelection = caps(playerSelection);
  if (playerSelection == computerSelection) {
    console.log("It's a draw! You have the same selection!");
    scoreCounter("tie", "tie");
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    console.log("You win! Rock beats Scissors");
    scoreCounter("playerWin", "computerLose");
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    console.log("You win! Scissors beats Paper");
    scoreCounter("playerWin", "computerLose");
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    console.log("You win! Paper beats Rock");
    scoreCounter("playerWin", "computerLose");
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    console.log("You lose! Scissors beats Paper");
    scoreCounter("playerLose", "computerWin");
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    console.log("You lose! Rock beats Scissors");
    scoreCounter("playerLose", "computerWin");
  } else if (playerSelection == "Rock" && computerSelection == "Paper") {
    console.log("You lose! Paper beats Rock");
    scoreCounter("playerLose", "computerWin");
  }
}

//Fuction thath can allow the player to play 5 rounds, then display the winner at the end.
function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper, or Scissors?");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
  scoreCounter("reset", "reset");
}
