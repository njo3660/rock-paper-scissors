function getComputerChoice() {
    let rand = Math.random();
    if (rand < .33){
        return "Rock";
    }
    else if (rand > .65){
        return "Scissors";
    }
    else {
        return "Paper";
    }
}