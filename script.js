// 'use strict';
// console.log(document.querySelector('.message').textContent);
// const ds = document.querySelector('.message').textContent = 'Corect!';
// // document.querySelector('.label-score').textContent = '💯 Scorul este: ' ;
// document.querySelector('.secretNumber').textContent = '13';
// document.querySelector('.score').textContent = '10';
// document.querySelector('.guess').value = 23;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function() {
  const guess =Number(document.querySelector('.guess').value);
  if(!guess) {
    document.querySelector('.message').textContent = 'No secretNumber!';
  } 
  else if ( guess === secretNumber ){
    document.querySelector('.message').textContent = 'Correct number!';

    document.querySelector('body').style.backgroundColor= '#60b347';
    document.querySelector('.number').style.width = "30rem";
    document.querySelector('.number').textContent= secretNumber;
  } 
    else if( guess > secretNumber ) {
      if( score > 1) {
      document.querySelector('.message').textContent = 'too high!';
    score--;
      document.querySelector('.score').textContent = score;
    } 
    else {
      document.querySelector('.message').textContent= 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } 
    else if( guess < secretNumber ) {
      if( score > 1) {
      document.querySelector('.message').textContent = 'too low!';
    score--;
      document.querySelector('.score').textContent = score;
    } 
    else {
      document.querySelector('.message').textContent= 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
} 
);

document.querySelector('.again').addEventListener('click', function() {
  score=20;
  // secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start quessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = "";
  document.querySelector('body').style.backgroundColor= '#222';
  document.querySelector('.number').style.width = "15rem";
});
