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
                    return `You Win! ${pSel} beats ${cSel}`;
                case "paper":
                    return `You Lose! ${cSel} beats ${pSel}`;
                default:
                    return "It's a Draw!";
            }
        case "paper":
            switch(computerSelection) {
                case "rock":
                    return `You Win! ${pSel} beats ${cSel}`;
                case "scissors":
                    return `You Lose! ${cSel} beats ${pSel}`;
                default:
                    return "It's a Draw!";
            }
        case "scissors":
            switch(computerSelection) {
                case "paper":
                    return `You Win! ${pSel} beats ${cSel}`;
                case "rock":
                    return `You Lose! ${cSel} beats ${pSel}`;
                default:
                    return "It's a Draw!";
            }
        default:
            return "Something went wrong...";
    }
}