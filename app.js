
//these are the 3 choices that the user and computer can make
const CHOICES = ['rock', 'paper', 'scissors'];



const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
   button.addEventListener('click', () => {
      playRound(button.id)
   })
});


const results = document.querySelector('#results')

//generate a random number between 0 and 2 and use it as an index for the CHOICES array in order to represent the computer's choice
function computerPlay() {
   const random = Math.floor(Math.random() * 3);
   return CHOICES[random];
}

//declare the score at -1 instead of 0 just to make sure that the game() function works
let userScore = -1;
let computerScore = -1;

//one round of the game
function playRound(userSelection) {
   userSelection = userSelection;
   let computerSelection = computerPlay();


   if (computerSelection === userSelection) {
      results.textContent = 'Draw!'
   } else if (computerSelection === 'rock' && userSelection === 'scissors' ||
      computerSelection === 'paper' && userSelection === 'rock' ||
      computerSelection === 'scissors' && userSelection === 'paper'
   ) {
      computerScore++;
      results.textContent = `You lose, ${computerSelection} beats ${userSelection}`
   } else {
      userScore++;
      results.textContent = `You win, ${userSelection} beats ${computerSelection}`
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




