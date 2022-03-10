let playerScore = 0;
let computerScore = 0;

function game(){
}

function computerPlay(selection){
  return selection[Math.floor((Math.random()*2)+0.5)];
}

function comparePlay(playerSelection, computerSelection){

  if (playerSelection === computerSelection){
    alert("Its a tie");
    return{
      playerScore, computerScore
    }
  } 
  
  if (playerSelection === 'rock' && computerSelection === 'scissors'){
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

  return{
    playerScore, computerScore
  }
}

function checkScore(scores){

  if (scores.playerScore === 3 || scores.playerScore === 5 ){
    alert('Congrats! You won the game!');
  };
  if (scores.computerScore === 3 || scores.computerScore === 5){
    alert('Sorry :( ! Computer won the game!');
  };
}

function showScore(scores){
  alert(`Player is ${scores.playerScore} and Computer is ${scores.computerScore}`);
};

//main function
function playRound(playerSelection){
  const selection = ['rock','paper','scissors'];
  if (selection.includes(playerSelection)){
    computerSelection = computerPlay(selection);
    const scores = comparePlay(playerSelection, computerSelection);
    showScore(scores);
    checkScore(scores);
    //game(scores);
  }
  else{
    return alert('You have to choose between rock, paper or scissors');
  }
}

  /* function game(playerSelection){

  playRound(playerSelection,playerScore,computerScore);

  //A 5 round game
for(let i = 1; i < 5; i++){
    alert(`The round ${i} starts now!`);
  }
  if (playerScore > computerScore){
    alert("Player wins!");
  } else if (playerScore < computerScore){
    alert("Computer wins!");
  } else{
    alert("It's a Tie!")
  }

}
  */

/* The Beginning */
const startGame = document.querySelector('#game');
startGame.onclick = () => game();

//.forEach method to iterate through each button
const buttons = document.querySelectorAll('#choices > button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    //alert(button.id);
    playRound(button.id)
  });
});