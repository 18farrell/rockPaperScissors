//get a random number between 1 and 3
function randomNum() {
    return Math.floor(Math.random() * 3);
}

// computers choice
function getComputerChoice() {

   if (randomNum() === 2) {
    return "rock";
   }
   else if(randomNum() === 0) {
    return "paper";
   }

   else {
    return "scissors";
   } 
}

// gets user input for rock paper scissors
function getPlayerChoice() {

    let correctInput = "invalid entry, please type Rock Paper or Scissors";
    let userInput = prompt("enter rock paper or scissors here:").toLowerCase();

    if (userInput === "rock" || "paper" || "scissors") {
        return userInput;
    }
    else {  // error message
        return correctInput;
    }
}
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

// simulate a round played
function playRound(playerSelection, computerSelection) {

     if (playerSelection === computerSelection) {
         return `Tie game, you both chose ${playerSelection}`;
     }

     else if (playerSelection == "paper" && computerSelection == "rock") {
        return "you won, you chose paper and the computer chose rock";
    }

    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "you won, you chose rock and the computer chose scissors";
    }

    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "you won, you chose paper and the computer chose rock";
    }

    else {
        return `you lost, you chose ${playerSelection} and the computer chose ${computerSelection} `;
    }
}

let round = playRound(playerSelection, computerSelection);
console.log(round);









