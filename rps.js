//get a random number between 1 and 3
function randomNum() {
    return Math.floor(Math.random() * 3);
}

// computers choice
function computerSelection() {
   if (randomNum() === 2) {
    return "Rock";
   }
   else if(randomNum() === 0) {
    return "Paper";
   }

   else {
    return "Scissors";
   } 
}

console.log(computerSelection());

function playerSelection() {
    let correctInput = "invalid entry, please type Rock Paper or Scissors";
    let userInput = prompt("enter rock paper or scissors here").toLowerCase();
    if (userInput === "rock" || "paper" || "scissors") {
        return userInput.charAt(0).toUpperCase() + userInput.slice(1);
    }

    else {
        return correctInput
    }
}

console.log(playerSelection());

