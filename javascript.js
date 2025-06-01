const rps = ["rock", "paper", "scissors"];
var humanScore = 0;
var computerScore = 0;
let humanChoice = null;


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

function playGame(){
    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log("Computer Score " + computerScore);
    console.log("Your Score " + humanScore);

    if(humanScore > computerScore) {
        console.log("You Win");
    } else if (computerScore > humanScore) {
        console.log("You lose")
    } else {
        console.log("It's a tie")
    }
}

playGame();