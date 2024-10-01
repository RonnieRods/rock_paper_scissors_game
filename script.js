function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    };
};

function getHumanChoice() {
    return prompt("Please type rock, paper, or scissors.").toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice || computerChoice === humanChoice) {
            return console.log(`You tied! You both picked ${computerChoice}!`);
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            return console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore++;
            return console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            return console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerChoice++;
            return console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            return console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            return console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        } else {
            alert("Please enter rock, paper, or scissors.");
        }
    }

    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Human: ${humanScore}\nComputer: ${computerScore}`);
    };

};

playGame();