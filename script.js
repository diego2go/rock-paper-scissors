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
        return "Tied!";
    }
}

const buttons = document.querySelectorAll('button');
const counter = document.createElement('div');
const roundMessage = document.createElement('p');
const div = document.querySelector('.container');
const resetBtn = document.createElement('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        roundMessage.textContent = playRound(button.textContent, getComputerChoice());
        counter.textContent = `Computer ${computerCounter} - You ${playerCounter}`;
        if(playerCounter == 5 && playerCounter > computerCounter) {
            roundMessage.textContent = "You win!";
            playerCounter = 0;
            computerCounter = 0;
        }
        else if(computerCounter == 5 && computerCounter > playerCounter) {
            roundMessage.textContent = "You lost. Computers FTW!";
            playerCounter = 0;
            computerCounter = 0;
        }
    })
})
div.appendChild(counter);
div.appendChild(roundMessage);