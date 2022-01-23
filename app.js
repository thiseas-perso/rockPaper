
//these are the 3 choices that the user and computer can make
const CHOICES = ['rock', 'paper', 'scissors'];

//generate a random number between 0 and 2 and use it as an index for the CHOICES array in order to represent the computer's choice
function computerPlay() {
   const random = Math.floor(Math.random() * 3);
   return CHOICES[random];
}

//declare the score at -1 instead of 0 just to make sure that the game() function works
let userScore = -1;
let computerScore = -1;

//one round of the game
function playRound() {
   let userSelection = prompt("make your choice").toLowerCase().trim();
   let computerSelection = computerPlay();
   console.log(`pc: ${computerSelection} /VS/ user: ${userSelection}`)
   if (CHOICES.indexOf(userSelection) !== -1) {
      if (computerSelection === userSelection) {
         console.log('Draw!')
      }
      else if (computerSelection === 'rock' && userSelection === 'scissors') {
         computerScore++;
         console.log(`You lose, ${computerSelection} beats ${userSelection}`)
      } else if (computerSelection === 'paper' && userSelection === 'rock') {
         computerScore++;
         console.log(`You lose, ${computerSelection} beats ${userSelection}`)
      } else if (computerSelection === 'scissors' && userSelection === 'paper') {
         computerScore++;
         console.log(`You lose, ${computerSelection} beats ${userSelection}`)
      } else {
         userScore++;
         console.log(`You win, ${userSelection} beats ${computerSelection}`)
      }
   } else {
      alert("choose between 'rock', 'paper', 'scissors'")
      playRound();
   }
}

//call how many rounds you want to play
function game(rounds) {
   userScore = 0;
   computerScore = 0;
   for (let i = 0; i < rounds; i++) {
      playRound();
   }
   if (userScore > computerScore) {
      return `You win! your score is ${userScore}, the computer's score is ${computerScore}`
   } else if (userScore < computerScore) {
      return `You loose! your score is ${userScore}, the computer's score is ${computerScore}`
   } else return 'Draw!'
}