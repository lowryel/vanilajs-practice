console.log('Welcome');


const computerChoiceDisplay=document.getElementById('computer-choice');
const userChoiceDisplay=document.getElementById('user-choice');
const resultDisplay=document.getElementById('result');

let userChoice;
let computerChoice;
let result;

const possibleUserChoices=document.querySelectorAll('button');
possibleUserChoices.forEach(possibleUserChoice=> possibleUserChoice.addEventListener('click', (e)=>{
    userChoice=e.target.id;
    userChoiceDisplay.innerHTML=userChoice;
    generateComputerChoice();
    getResult();
}));

const generateComputerChoice=function() {
    const randomGenerator=Math.floor(Math.random()*3)+1; // or you can use possibleUserChoices.length
    if(randomGenerator===1){
        computerChoice='rock'
    }
    if(randomGenerator===2){
        computerChoice='paper'
    }
    if(randomGenerator===3){
        computerChoice='scisssors'
    }
    computerChoiceDisplay.innerHTML=computerChoice;
    
};
const getResult=function () {
    if(computerChoice===userChoice){
        result='Is a draw';
    } else if(computerChoice==='rock' && userChoice==='paper'){
        result='You lost!';
    } else if(computerChoice==='scissors' && userChoice==='paper'){
        result='You lose!';
    } else if(computerChoice==='scissors' && userChoice==='rock'){
        result='You win!';
    }else if(computerChoice==='paper' && userChoice==='rock'){
        result='You win!';
    }else if(computerChoice==='paper' && userChoice==='scissors'){
        result='You win!';
    }else if(computerChoice==='rock' && userChoice==='scissors'){
        result='You lose!';
    }else{'game closed!'}

    resultDisplay.innerHTML=result;
}


