
const arr = ["rock","paper","scissors"];

function getComputerChoice() {
    const randomNumber = arr[Math.floor(Math.random()*arr.length)];
    
    return randomNumber;
    
}

function checkWinner(playerSelection, computerSelection) {
    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')){
        return 'player';
    }
    if (playerSelection === computerSelection) {
       
        return "tie";
    }
    else {
      
        return 'computer';
    }
}

function playRound(playerSelection,computerSelection){
    let result = checkWinner(playerSelection, computerSelection);
    if(result == 'player'){
        let player = `You Win! ${playerSelection} beats ${computerSelection}>>> `;
        return player;
    }
    else if(result == 'tie'){
        return "It's a tie";
    }
    else{
        let computer = `You Lose! ${computerSelection} beats ${playerSelection}>>> `;
        return computer;
    }
}

document.addEventListener('DOMContentLoaded', function() {
   
   
    document.querySelectorAll('button').forEach((button) => {
        
        button.addEventListener('click', () => {
            let i=0;
            let playerScore=0;
            let computerScore=0;
            for( i=0; i<5; i++){
                
                let playerSelection = button.dataset.value;
                console.log(playerSelection);
                let computerSelection = getComputerChoice();
                let result = playRound(playerSelection, computerSelection);
                console.log(result);
                if((checkWinner(playerSelection, computerSelection))=="player"){
                    playerScore++;
                }
                else if((checkWinner(playerSelection, computerSelection))=="computer")
                    {
                    computerScore++;
                }
            }
                if(playerScore>computerScore){
                    console.log('player winsssss');
                }
                else if(playerScore<computerScore){
                    console.log('computer winsssss');
                }
                else{
                    console.log('tie');
                }
            
        });
        

});
});