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