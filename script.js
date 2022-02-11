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
function game(){
  playRound();
}
function playRound(){
}
const selection = ['rock','paper','scissors'];

//a 5 round game start
//the round 1 starts after that
//the console asks the user for its choise between rock,paper,scissors - OK
//playerSelection need to be case-insensitive - OK
const playerSelection = prompt("Choose between rock, paper or scissors").toLowerCase();
if (selection.includes(playerSelection)){
  console.log(playerSelection);
  //return playerSelection;
}
//after that the computer chooses his play
//random play from computer - OK
function computerPlay(){
  return selection[Math.floor((Math.random()*2)+0.5)];
  //console.log(selection[Math.floor((Math.random()*2)+0.5)]);
}
//comparison function to declare winner of the round
//if rock and paper, paper wins
//if rock and scissors, rock wins
//if paper and scissors, scissors wins
//after a win, mark a point to the winner of the round and next round.
//if both values are the same, restart the round.
//after 3 rounds, if player or computer has 3 points the game ends
//and its showed the winner.
//after 4 rounds, if player or computer has 3 points the game ends
//and its showed the winner.
//after the 5 round, show the winner.