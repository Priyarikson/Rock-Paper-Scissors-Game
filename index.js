//console.log("hi");
let playerScore = 0;
let computerScore = 0;
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
    
    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')){
        // return statement
        //  `You Win! ${playerSelection} beats ${computerSelection}` = value to return 
        //  template literals
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}>>> `;
    }
    if (playerSelection === computerSelection) {
        return "It's a tie";
    }
    else {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}>>> `;
    }
    
    
  }
  
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('button').forEach(function(button) {
            button.onclick = function() {
                const computerSelection = getComputerChoice();
                const playerSelection = button.dataset.value;
                //using inner html to set the contents of your empty <div> to some text
                // createElement method is used to make a new HTML element such as a <div>, button, paragraph
                //let oneItem = document.createElement("div");
    
                let newItem = document.createElement("div");
                // access value
                //oneItem.innerHTML = `playerScore : ${playerScore}`;
                
                newItem.innerHTML = playRound(playerSelection, computerSelection) + `   player score = ${playerScore}` + `   computer score = ${computerScore}`;
        
                // document.location.appendChild(newItem);
                //document.getElementById("result").appendChild(oneItem);
                
                document.getElementById("result").appendChild(newItem);
                //console.log(playRound(playerSelection, computerSelection));
            
            }
            
            
            
        });

    });
    
//const playerSelection = "rock"; 
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));

//function getPlayerChoice() {
    //while(true){
        // case-insensitive (so users can input rock, ROCK, RocK or any other variation), .toLowerCase()
        
        //const playerChoice = prompt("Rock, Paper or Scissors").toLowerCase();
        
        //if(arr.includes(playerChoice)){
            //return playerChoice;
        //}
        //continue;
    //}
        
//}
    

//function game() {
    //Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
    //for (let i = 0; i < 5; i++) {
        // your code here!
        //const playerSelection = getPlayerChoice();
        //const computerSelection = getComputerChoice();
        //console.log(playRound(playerSelection, computerSelection));
    //}
    //if(playerScore > computerScore){
        //console.log("you are the winner");
    //}
    //else{
        //console.log("computer computer! is the winner ");
    //}
//}   
//game();