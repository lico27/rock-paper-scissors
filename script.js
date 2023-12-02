
let userChoice = '';
let compChoice = '';
let score = 0;
let play = true;
let choices = ['r', 'p', 's']

function game() {
    userChoice = prompt('Enter r, p, or s');
    compChoice = Math.floor(Math.random() * 3);
    compChoice = choices[compChoice];
    if ((userChoice === 'r' && compChoice === 'r') || (userChoice === 's' && compChoice === 's') || (userChoice === 'p' && compChoice === 'p')) {
        alert(`It's a tie. Your score is ${score}`);
    } else if ((userChoice === 'r' && compChoice === 'p') || (userChoice === 's' && compChoice === 'r') || (userChoice === 'p' && compChoice === 's')) {
        alert(`Computer wins! Your score is ${score}`);
    } else if ((userChoice === 'p' && compChoice === 'r') || (userChoice === 'r' && compChoice === 's') || (userChoice === 's' && compChoice === 'p')) {
        score = score + 1;
        alert(`You win! Your score is ${score}`);
    } else {
        alert('Invalid choice. Please type r, p, or s');
    } 
}

for (let i = 0; i < 10; i++) {
    game();
}

alert(`You played 10 times. Your final score is ${score}`);
