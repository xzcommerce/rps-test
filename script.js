document.addEventListener('DOMContentLoaded', function() {
    let userScore = document.getElementById('user-score');
    let compScore = document.getElementById('comp-score');

    const button = document.querySelector('button')
    
    function game(userChoice) {
        let compChoice = getComputerChoice();
    
        if (userChoice == 'paper' && compChoice == 'rock') {
            console.log('User Wins! Paper beats Rock!');
            userScore.innerText = parseInt(userScore.innerText) + 1;  
        } else if (userChoice == 'paper' && compChoice == 'scissors') {
            console.log('Computer Wins! Scissors beat Paper!');
            compScore.innerText = parseInt(compScore.innerText) + 1;  
        } else if (userChoice == 'paper' && compChoice == 'paper') {
            console.log('Draw!');
        } else if (userChoice == 'scissors' && compChoice == 'paper') {
            console.log('User Wins! Scissors beat Paper!');
            userScore.innerText = parseInt(userScore.innerText) + 1;  
        } else if (userChoice == 'scissors' && compChoice == 'rock') {
            console.log('Computer Wins! Rock beats Scissors!');
            compScore.innerText = parseInt(compScore.innerText) + 1;  
        } else if (userChoice == 'scissors' && compChoice == 'scissors') {
            console.log('Draw!');
        } else if (userChoice == 'rock' && compChoice == 'scissors') {
            console.log('User Wins! Rock beats Scissors!');
            userScore.innerText = parseInt(userScore.innerText) + 1;  
        } else if (userChoice == 'rock' && compChoice == 'paper') {
            console.log('Computer Wins! Paper beats Rock!');
            compScore.innerText = parseInt(compScore.innerText) + 1;  
        } else if (userChoice == 'rock' && compChoice == 'rock') {
            console.log('Draw!');
        }
    }
  
    document.getElementById('r').addEventListener('click', function() {
      game('rock');
    });
  
    document.getElementById('p').addEventListener('click', function() {
      game('paper');
    });
  
    document.getElementById('s').addEventListener('click', function() {
      game('scissors');
    });

const choices = ['rock', 'paper','scissors'];


function getComputerChoice() {
    const compChoice = Math.floor(Math.random() * 3);
    return choices[compChoice];
}

let popupButton = document.getElementById('new-pop-up').addEventListener('click', function() {
    const popUpContainer = document.createElement('div');
    const popUpCloseButton = document.createElement('button');
    popUpCloseButton.textContent = 'Close';
    popUpContainer.style.cssText = "display: flex; background-color: rgba(128, 25, 128); backdrop-filter: blur(20px); opacity: 1; height: 100%; width: 100%; position: fixed; top: 0; left: 0;";
    popUpCloseButton.style.cssText = "position: absolute; left: 1790px;";

    const bdy = document.querySelector('body');

    bdy.appendChild(popUpContainer);
    popUpContainer.appendChild(popUpCloseButton);

    popUpCloseButton.addEventListener('click', function() {
        bdy.removeChild(popUpContainer);
    })

    console.log('success');
})


})