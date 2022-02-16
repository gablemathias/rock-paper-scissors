let playerScore = 0;
let computerScore = 0;
const selection = ['rock','paper','scissors'];

function computerPlay(){
  let computerSelection;
  return computerSelection = selection[Math.floor((Math.random()*2)+0.5)];
  //console.log(selection[Math.floor((Math.random()*2)+0.5)]);
}

function playerPlay(){ 
  let playerSelection = prompt("Choose between rock, paper or scissors").toLowerCase();
  
  if (selection.includes(playerSelection)){
    return playerSelection;
  }

  else{
    alert('You have to choose between rock, paper or scissors');
    playerPlay();
  }
}

//comparison function to declare winner of the round

function comparePlay(){
  if (playerSelection === computerSelection){
    alert("Its a tie");
  } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
    alert('Rock beats Scissors! Player wins this round')
    playerScore++;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
    alert('Scissors cuts Paper! Player wins this round')
    playerScore++;
  } else if (playerSelection === 'paper' && computerSelection === 'rock'){
    alert('Paper packs rock! Player wins this round')
    playerScore++;
  } else if (playerSelection === 'rock' && computerSelection === 'paper'){
    alert('Paper packs rock! Computer wins this round')
    computerScore++;
  } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
    alert('Rock beats Scissors! Computer wins this round')
    computerScore++;
  } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
    alert('Scissors cuts Paper! Computer wins this round')
    computerScore++;
  }
}

function checkScore(){
  if (playerScore === 3 || playerScore === 5 ){
    alert('Congrats! You won the game!');
    fail;
    //break;
  } else if (computerScore === 3 || computerScore === 5){
    alert('Sorry :( ! Computer won the game!');
    fail;
  } else{
    return;
  }
}

function showScore(){
  alert(`Player is ${playerScore} and Computer is ${computerScore}`);
};

function playRound(){
  playerSelection = playerPlay();
  computerSelection = computerPlay();
  
  comparePlay();
  showScore();
  checkScore();
}

function game(){
  
  alert("Welcome to this amazing game! Now you'll probably remember how is to suffer in a simple game like this one!");
  //A 5 round game
  for(let i = 1; i < 5; i++){
    alert(`The round ${i} starts now!`);
    playRound();
  }
  if (playerScore > computerScore){
    alert("Player wins!");
  } else if (playerScore < computerScore){
    alert("Computer wins!");
  } else{
    alert("It's a Tie!")
  }
}

game();