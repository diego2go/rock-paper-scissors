let playerCounter = 0;
let computerCounter = 0;
let computerSelection = getComputerChoice();
// get random computer selection
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 100);
    if (randomNum < 33) {
        return "rock";
    }else if(randomNum > 33 && randomNum < 65){
        return "paper";
    }else{
        return "scissors";
    }
}
// function to play a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        playerCounter += 1;
        return "You win! Rock beats scissors";
    }else if(playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        playerCounter += 1;
        return "You win! Scissors beats paper";
    }else if(playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        playerCounter += 1;
        return "You win! Paper beats rock";
    }else if(computerSelection == "rock" && playerSelection.toLowerCase() == "scissors") {
        computerCounter += 1;
        return "You lose! Rock beats scissors";
    }else if(computerSelection == "scissors" && playerSelection.toLowerCase() == "paper") {
        computerCounter += 1;
        return "You lose! Scissors beats paper";
    }else if(computerSelection == "paper" && playerSelection.toLowerCase() == "rock") {
        computerCounter += 1;
        return "You lose! Paper beats rock";
    }else{
        alert("Tied!");
    }
}
// for initial checking of playRound and getComputerChoice
/* let playerSelection = "rock";

console.log(computerSelection);
console.log(playRound(playerSelection,computerSelection)); */

// game function. Play a 5 round game, keep records and define winner at the end.
/* function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection = prompt("What is your selection?", "Rock,paper or scissors"), computerSelection);
        console.log("Computer", computerCounter, "You", playerCounter);
    }
    if(playerCounter > computerCounter){
        return "You win!"
    }else{
        return "You lost. Computers FTW!"
    }
}
console.log("Use console.log(game()) to initiate. Reload page to reset counter."); */

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.textContent, computerSelection);
    })
})

// adding a div to display counter
const counter = document.createElement('div');
counter.textContent = `Computer ${computerCounter} - You ${playerCounter}`;

const div = document.querySelector('.container');
div.appendChild(counter);