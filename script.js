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