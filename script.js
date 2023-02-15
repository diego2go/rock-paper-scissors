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
        return "You win! Rock beats scissors";
    }else if(playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats paper";
    }else if(playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        return "You win! Paper beats rock";
    }else if(computerSelection == "rock" && playerSelection.toLowerCase() == "scissors") {
        return "You lose! Rock beats scissors";
    }else if(computerSelection == "scissors" && playerSelection.toLowerCase() == "paper") {
        return "You lose! Scissors beats paper";
    }else if(computerSelection == "paper" && playerSelection.toLowerCase() == "rock") {
        return "You lose! Paper beats rock";
    }else{
        return "Tied!"
    }
}
let playerSelection = "rock";
let computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection,computerSelection))