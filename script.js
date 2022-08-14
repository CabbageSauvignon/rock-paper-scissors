

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

function playRound(e) {
    playerChoice = e.target.id;
    computerChoice = getComputerChoice();

    console.log(playerChoice);
    console.log(computerChoice);
    let winner = "";
    if (playerChoice == "rock" && computerChoice == "rock") {
        winner = "tie";
    } else if (playerChoice == "rock" && computerChoice == "paper") {
        winner = "computer";
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        winner = "player";
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        winner = "player";
    } else if (playerChoice == "paper" && computerChoice == "paper") {
        winner = "tie";
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        winner = "computer";
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        winner = "computer";
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        winner = "player";
    } else if (playerChoice == "scissors" && computerChoice == "scissors") {
        winner = "tie";
    }
    return winner;
}

function game(e) {
    //for (let i = 0; i < 5; i++) {
    let result = playRound(e);
    let resultString = "";
    console.log(result);
    if (result == "player") {
        resultString = "You win this round!";
        playerScore++;
    } 
    else if (result == "computer") {
        resultString = "Computer wins this round...";
        computerScore++;
    }
    else {
        resultString = "Tie!"
    }
    
    console.log(playerScore);
    console.log(computerScore);
    const roundHead = document.createElement('h1');
    roundHead.textContent = `Round ${round}`;
    const roundResults = document.createElement('p');
    roundResults.textContent = resultString;
    const currentScore = document.createElement('p');
    currentScore.textContent = `Current score: Player ${playerScore}, Computer ${computerScore}`;
    round++;

    container.appendChild(roundHead);
    container.appendChild(roundResults);
    container.appendChild(currentScore);
    
    if (playerScore >= 5) {
        const gameWinner = document.createElement('h2');
        gameWinner.textContent = "Player wins the game! Well played!";
        container.appendChild(gameWinner);
    }
    else if (computerScore >= 5) {
        const gameWinner = document.createElement('h2');
        gameWinner.textContent = "Computer wins the game. Better luck next time.";
        container.appendChild(gameWinner);
    }
}

const buttons = document.querySelectorAll('button');
const container = document.querySelector('#container');
let round = 1;
let playerScore = 0;
let computerScore = 0;
buttons.forEach(button => button.addEventListener('click', game));
