const counterPlayer = document.querySelector('.playerScore');
const counterComputer = document.querySelector('.computerScore');
const roundMessage = document.querySelector('.winnerRound');
const winnerMessage = document.querySelector('.container');
const winnerContent = document.createElement('div');

let playerScore, computerScore;

game(playerScore, computerScore);

function game(){
  playerScore = 0;
  computerScore = 0;
  const buttons = document.querySelectorAll('#choices > button');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      playRound(button.id);
    });
  });
};

function playRound(playerSelection){
  const selection = ['rock','paper','scissors'];
  if (selection.includes(playerSelection)){
    computerSelection = computerPlay(selection);
    const scores = comparePlay(playerSelection, computerSelection);
    checkScore(scores);
  }
  else{
    return alert('You have to choose between rock, paper or scissors');
  }
};

function computerPlay(selection){
  return selection[Math.floor((Math.random()*2)+0.5)];
};

function comparePlay(playerSelection, computerSelection){
  let message;
  if (playerSelection === computerSelection){
    message = "Its a tie";
    return{
      playerScore, computerScore, message
    }
  }; 
  
  if (playerSelection === 'rock' && computerSelection === 'scissors'){
    message = 'Rock beats Scissors!'
    playerScore++;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
    message = 'Scissors cuts Paper!'
    playerScore++;
  } else if (playerSelection === 'paper' && computerSelection === 'rock'){
    message = 'Paper packs rock!'
    playerScore++;
  } else if (playerSelection === 'rock' && computerSelection === 'paper'){
    message = 'Paper packs rock!'
    computerScore++;
  } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
    message = 'Rock beats Scissors!'
    computerScore++;
  } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
    message = 'Scissors cuts Paper!'
    computerScore++;
  }

  return{
    playerScore, computerScore, message
  }
};

function checkScore(scores){
  updateScore(scores.message);
  winnerContent.classList.add('winnerMessage');
  if (scores.playerScore === 5 ){
    winnerContent.textContent = 'Congrats! You won the game!';
    winnerMessage.appendChild(winnerContent);
    playerScore = 0;
    computerScore = 0;
  };
  if (scores.computerScore === 5){
    winnerContent.textContent = 'Computer won the game!';
    winnerMessage.appendChild(winnerContent);
    playerScore = 0;
    computerScore = 0;
  };
};

function updateScore(message){
  roundMessage.textContent = message;
  counterPlayer.textContent = `Player score: ${playerScore}`;
  counterComputer.textContent = `Computer score: ${computerScore}`;
  counterPlayer.style.color = '#2C3E50';
  counterComputer.style.color = '#2C3E50';
  roundMessage.style.color = '#2C3E50';
};