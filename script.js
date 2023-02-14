// get random computer selection
let computerChoice = getComputerChoice();
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