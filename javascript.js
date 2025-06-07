const rps = ["rock", "paper", "scissors"];
var humanScore = 0;
var computerScore = 0;
let humanChoice = "";


function getComputerChoice(){
    const rand = (Math.random() * 3);
    if(rand <= 1) {
        return rps[0];
    } else if (rand <= 2){
        return rps[1];
    } else {
        return rps[2];
    }
}

function getHumanChoice() {
    do {
        humanChoice = prompt("Rock, Paper, Scissors");
        if(humanChoice) {
            humanChoice = humanChoice.toLowerCase();
        }
    }while (!rps.includes(humanChoice));    
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
     ) {
        humanScore ++;
     } else if (humanChoice != computerChoice) {
        computerScore ++;
     }
}

function playGame(humanChoice){
    const computerSelection = getComputerChoice();
    playRound(humanChoice, computerSelection);

    //Updates the score here everytime a game has been played
    updateScore();

    //Annoucements the winner when a player reaches a score of 5.
    if(humanScore >= 5) {
        document.getElementById("win-lose-message").textContent = "You Win";
    }

    if(computerScore >= 5) {
         document.getElementById("win-lose-message").textContent = "Computer Wins";
    }
}

function updateScore() {
    document.getElementById("human-score").textContent = "Your Score: " + humanScore;
    document.getElementById("computer-score").textContent = "Computer Score: " + computerScore;
}

document.getElementById("rock").addEventListener("click", () => {
    humanChoice = "rock";
    playGame(humanChoice);
});

document.getElementById("paper").addEventListener("click", () => {
    humanChoice = "paper";
    playGame(humanChoice);
});

document.getElementById("scissors").addEventListener("click", () => {
    humanChoice = "scissors";
    playGame(humanChoice);
});

updateScore();
