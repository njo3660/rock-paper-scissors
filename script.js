function getComputerChoice() {
    let rand = Math.random();
    if (rand < .33){
        return "rock";
    }
    else if (rand > .65){
        return "scissors";
    }
    else {
        return "paper";
    }
}

function playRound(playerSelection, computerSelection) {
    let pSel = playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1);
    let cSel = computerSelection.slice(0,1).toUpperCase() + computerSelection.slice(1);

    switch(playerSelection) {
        case "rock":
            switch(computerSelection) {
                case "scissors":
                    display.textContent = `You Win! ${pSel} beats ${cSel}.`;
                    return "win";
                case "paper":
                    display.textContent = `You Lose! ${cSel} beats ${pSel}.`;
                    return "lose";
                default:
                    display.textContent = "It's a Draw!";
                    return "draw";
            }
        case "paper":
            switch(computerSelection) {
                case "rock":
                    display.textContent = `You Win! ${pSel} beats ${cSel}.`;
                    return "win";
                case "scissors":
                    display.textContent = `You Lose! ${cSel} beats ${pSel}.`;
                    return "lose";
                default:
                    display.textContent = "It's a Draw!";
                    return "draw";
            }
        case "scissors":
            switch(computerSelection) {
                case "paper":
                    display.textContent = `You Win! ${pSel} beats ${cSel}.`;
                    return "win";
                case "rock":
                    display.textContent = `You Lose! ${cSel} beats ${pSel}.`;
                    return "lose";
                default:
                    display.textContent = "It's a Draw!";
                    return "draw";
            }
        default:
            return "Something went wrong...";
    }
}

function game(){
    let playerWins = 0;
    let computerWins = 0;

    //for (let i = 0; i < 5; i ++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
        let result = playRound(playerSelection, getComputerChoice());
        switch(result) {
            case "win":
                playerWins ++;
                break;
            case "lose":
                computerWins ++;
                break;
            default:
                break;
        }
    //}

    if(playerWins > computerWins) {
        console.log("You Won! Congradulations!");
    }
    else if (computerWins > playerWins) {
        console.log("You Lost! Better luck next time!");
    }
    else {
        console.log("It was a Draw!");
    }

    return;
}

const rpsBtns = document.querySelectorAll("button");

rpsBtns.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice());
    });
});

const display = document.querySelector('#display');
