console.log("hi");
// array for output options
const arr = ["rock","paper","scissors"];
// Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
// We’ll use this function in the game to make the computer’s play. 
function getComputerChoice(){
    const randomNumber = arr[Math.floor(Math.random()*arr.length)];
    // use the console to make sure this is returning the expected output before moving to the next step!
    // console.log(randomNumber);
    return randomNumber;
}
// calling the function to test
// getComputerChoice();
// Write a function that plays a single round of Rock Paper Scissors.
// The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
function playRound(playerSelection, computerSelection) {
    
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')){
        // return statement
        //  `You Win! ${playerSelection} beats ${computerSelection}` = value to return 
        //  template literals
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection == computerSelection) {
        return "It's a tie";
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    
  }
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
function getPlayerChoice() {
    let validateInput = false;
    while(validateInput = false){
        const playerChoice = prompt("Rock, Paper or Scissors");
        if(playerChoice == null){
            continue;
        }
        const choice = playerChoice.toLowerCase();
        if(arr.includes(choice)){
            validateInput = true;
            return choice;
        }

    }
    
}
function game() {
    //Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
    for (let i = 0; i < 5; i++) {
        // your code here!
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
     }
}
game();