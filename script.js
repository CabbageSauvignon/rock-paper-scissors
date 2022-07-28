function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random()*3);
    let computerChoice;
    if(choiceNumber == 0) {
        computerChoice = "rock";
    }
    else if(choiceNumber == 1) {
        computerChoice = "paper";
    }
    else if(choiceNumber == 2) {
        computerChoice = "scissors";
    } 
    return computerChoice;
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice == "rock" && computerChoice == "rock") {
        
    } else if (playerChoice == "rock" && computerChoice == "paper") {
        
    } else if (playerChoice == "rock" && computerChoice == "scissors") {

    } else if (playerChoice == "paper" && computerChoice == "rock") {

    } else if (playerChoice == "paper" && computerChoice == "paper") {

    } else if (playerChoice == "paper" && computerChoice == "scissors") {

    } else if (playerChoice == "scissors" && computerChoice == "rock") {

    } else if (playerChoice == "scissors" && computerChoice == "paper") {

    } else if (playerChoice == "scissors" && computerChoice == "scissors") {

    }
    
    
    
    console.log(playerChoice);
    console.log(computerChoice);
}

let playerChoice = prompt("Choose Rock, Paper, or Scissors");
let computerChoice = getComputerChoice();
playRound(playerChoice,computerChoice);
