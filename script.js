//rock-paper-scissors played against the computer
//function called computerPlay that will randomly
//return either 'Rock','Paper' or 'Scissors'
//for the computer to play;

//function that plays a single round;
//it take two parameters;
//playerSelection and computerSelection;
//return a string that declares the winner of
//the round.

//playerSelection need to be case-insensitive
//(rock, ROCK, RoCk)

//write a NEW function called game(). Call the
//playRound function inside of this one to play
//a 5 round game that keeps score and reports a winner
//or loser at the end

//WHEN start the game

let playerScore = 0;
let computerScore = 0;
const selection = ['rock','paper','scissors'];

function computerPlay(){
  //let computerSelection;
  return selection[Math.floor((Math.random()*2)+0.5)];
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
  if (playerPlay() === 'rock' && computerPlay() === 'scissors'){
    alert('Rock beats Scissors! Player wins this round')
    playerScore++;
  } else if (playerPlay() === 'scissors' && computerPlay() === 'paper'){
    alert('Scissors cuts Paper! Player wins this round')
    playerScore++;
  } else if (playerPlay() === 'paper' && computerPlay() === 'rock'){
    alert('Paper packs rock! Player wins this round')
    playerScore++;
  } else if (playerPlay() === 'rock' && computerPlay() === 'paper'){
    alert('Paper packs rock! Computer wins this round')
    computerScore++;
  } else if (playerPlay() === 'scissors' && computerPlay() === 'rock'){
    alert('Rock beats Scissors! Computer wins this round')
    computerScore++;
  } else if (playerPlay() === 'paper' && computerPlay() === 'scissors'){
    alert('Scissors cuts Paper! Player wins this round')
    computerScore++;
  }
}

function checkScore(){
  if (playerScore === 3 || playerScore === 5 ){
    return alert('Congrats! You won the game!');
    //break;
  } else if (computerScore === 3 || playerScore === 5){
    return alert('Sorry :(! Computer won the game!');
    //break;
  } else{
    return;
  }
}

function showScore(){
  alert(`Player is ${playerScore} and Computer is ${computerScore}`);
};

function playRound(){
  playerPlay();
  console.log(playerPlay());
  computerPlay();
  console.log(computerPlay());
  if (playerPlay === computerPlay){
    alert("Its a tie, let's try again")
    playRound();
  }
  comparePlay();
  showScore();
  checkScore();
}

function counter(){
  for(let i = 1; i < 5; i++){
    alert(`The round ${i} starts now!`);
    playRound();
  }
}

function game(){
  alert("Welcome for this amazing game! Now you'll probably remember how is to suffer in a simple game like this one!");
  //Gaming round's inside the counter
  counter();
}

game();

//if rock and paper, paper wins
//if rock and scissors, rock wins
//if paper and scissors, scissors wins
//if both values are the same, restart the round.

//after 3 rounds, if player or computer has 3 points the game ends
//and its showed the winner.
//after 4 rounds, if player or computer has 3 points the game ends
//and its showed the winner.
//after the 5 round, show the winner.

//a 5 round game start
//the round 1 starts after that
//the console asks the user for its choise between rock,paper,scissors - OK
//playerSelection need to be case-insensitive - OK


//return playerSelection;
//after that the computer chooses his play
//random play from computer - OK

