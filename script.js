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
        return "Tie game.";
    } else if (playerChoice == "rock" && computerChoice == "paper") {
        return "Computer Wins...Paper beats Rock";
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        return "You win! Rock beats Scissors.";
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        return "You win! Paper beats Rock.";
    } else if (playerChoice == "paper" && computerChoice == "paper") {
        return "Tie game.";
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        return "Computer wins...Scissors beat Paper.";
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        return "Computer wins...Rock beats Scissors.";
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        return "You win! Scissors beats Paper.";
    } else if (playerChoice == "scissors" && computerChoice == "scissors") {
        return "Tie game.";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoiceRaw = prompt("Choose Rock, Paper, or Scissors");
        let playerChoice = playerChoiceRaw.toLowerCase();
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice,computerChoice);
        console.log(i);
        console.log(result);
        if (result.charAt(0) == "Y") {
            playerScore++;
        } 
        else if (result.charAt(0) == "C") {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        return "You Won!"
    }
    else if (computerScore > playerScore) {
        return "You lose! Better luck next time."
    }
}

let result = game();
console.log(result);