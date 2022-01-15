let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('userScore');
const computerScore_span = document.getElementById('computerScore');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const rockComp = document.getElementById('rockComp');
const paperComp = document.getElementById('paperComp');
const scissorsComp = document.getElementById('scissorsComp');
const result = document.querySelector('.result');
const reset = document.getElementById('play');

const genComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randNumber = Math.floor(Math.random() * 3);
    return choices[randNumber];
}

const win = (userChoice, computerChoice) => {
    const selection = document.getElementById(userChoice);
    const selectionComp = document.getElementById(computerChoice + 'Comp');
    userScore++;
    userScore_span.innerHTML = userScore;
    result.innerHTML = `${userChoice} beats ${computerChoice}. You won!`;
    selection.classList.add('selection');
    setTimeout(() => { selection.classList.remove('selection') }, 800);
    selectionComp.classList.add('selection');
    setTimeout(() => { selectionComp.classList.remove('selection') }, 800);
}

const lose = (userChoice, computerChoice) => {
    const selection = document.getElementById(userChoice);
    const selectionComp = document.getElementById(computerChoice + 'Comp');
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = `${computerChoice} beats ${userChoice}. You lost!`;
    selection.classList.add('selection');
    setTimeout(() => { selection.classList.remove('selection') }, 800);
    selectionComp.classList.add('selection');
    setTimeout(() => { selectionComp.classList.remove('selection') }, 800);
}

const draw = (userChoice, computerChoice) => {
    const selection = document.getElementById(userChoice);
    const selectionComp = document.getElementById(computerChoice + 'Comp');
    result.innerHTML = 'It\'s a draw.';
    selection.classList.add('selection');
    setTimeout(() => { selection.classList.remove('selection') }, 800);
    selectionComp.classList.add('selection');
    setTimeout(() => { selectionComp.classList.remove('selection') }, 800);
}

const game = (userChoice) => {
    const computerChoice = genComputerChoice();
    console.log(userChoice + computerChoice);
    switch (userChoice + computerChoice) {
        case ('rockscissors'):
        case ('scissorspaper'):
        case ('paperrock'):
            win(userChoice, computerChoice);
            break;
        case ('rockpaper'):
        case ('paperscissors'):
        case ('scissorsrock'):
            lose(userChoice, computerChoice);
            break;
        case ('rockrock'):
        case ('scissorsscissors'):
        case ('paperpaper'):
            draw(userChoice, computerChoice);
            break;
    }
}

const main = () => {
    rock.addEventListener('click', () => {
        game('rock');
    })

    paper.addEventListener('click', () => {
        game('paper');
    })

    scissors.addEventListener('click', () => {
        game('scissors');
    })
}

main();

const restartGame = () => {
    reset.addEventListener('click', () => {
        userScore = 0;
        computerScore = 0;
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
    })
}

restartGame();