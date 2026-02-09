// Script for rock paper scissors game
// understanding the problem, breaking it down, designing a step-by-step solution (algorithm/pseudocode), 
// coding it, testing rigorously, debugging errors, and documenting the process

 console.log("Hello, Rock Paper Scissors!");

 function getRandomArbitrary(min, max) {
  return (Math.random() * (max - min) + min);
}
console.log(getRandomArbitrary(0, 3));

function computerInput(randomNumber) {
    if (randomNumber < 1)
    return ("Rock");
    if (randomNumber >= 1 && randomNumber < 2)
        return ("Paper");
    if (randomNumber >= 2)
        return ("Scissors");
}
console.log(computerInput(getRandomArbitrary(0, 3)));

let userChoice = prompt("Please enter your choice")
console.log(userChoice)


function getHumanChoice(userChoice) {
    if (userChoice === "Rock")
    return "Rock";
    if (userChoice === "Paper")
    return "Paper";
    if (userChoice === "Scissors")
    return "Scissors";
}

let humanScore = 0;
let computerScore = 0;

console.log("Human Score = " + humanScore + " VS " + "Computer Score = " + computerScore)

function playRound(userChoice, computerChoice) {
    if ((userChoice === "Rock") && (computerChoice === "Paper"))
    return ("You Lose! Paper beats rock");
    if ((userChoice === "Rock") && (computerChoice === "Scissors"))
    return ("You Win! Rock beats scissors");
    if ((userChoice === "Rock") && (computerChoice === "Rock"))
    return ("That's a Draw!");
}

console.log(playRound(userChoice, computerInput))

// console.log(getHumanChoice(userChoice))