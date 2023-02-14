// get random computer selection
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 100);
    if (randomNum < 33) {
        return "Rock"
    }else if(randomNum > 33 && randomNum < 65){
        return "Paper"
    }else{
        return "Scissors"
    }
}
// function to play a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    if(playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You win! Rock beats scissors"
    }else if(playerSelection == "Scissors" && computerSelection == "Paper") {
        return "You win! Scissors beats paper"
    }else if(playerSelection == "Paper" && computerSelection == "Rock") {
        return "You win! Paper beats rock"
    }else if(computerSelection == "Rock" && playerSelection == "Scissors") {
        return "You lose! Rock beats scissors"
    }else if(computerSelection == "Scissors" && playerSelection == "Paper") {
        return "You lose! Scissors beats paper"
    }else if(computerSelection == "Paper" && playerSelection == "Rock") {
        return "You lose! Paper beats rock"
    }else{
        return "Tied!"
    }
}
let playerSelection = "Rock";
let computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection,computerSelection))