const cardArray=[
    {
        name:'One',
        img:'image/1.png'
    },
    {
        name:'Two',
        img:'image/2.png'
    },
    {
        name:'Three',
        img:'image/3.png'
    },
    {
        name:'Four',
        img:'image/4.png'
    },
    {
        name:'Five',
        img:'image/5.png'
    },
    {
        name:'Six',
        img:'image/6.png'
    },
    {
        name:'One',
        img:'image/1.png'
    },
    {
        name:'Two',
        img:'image/2.png'
    },
    {
        name:'Three',
        img:'image/3.png'
    },
    {
        name:'Four',
        img:'image/4.png'
    },
    {
        name:'Five',
        img:'image/5.png'
    },
    {
        name:'Six',
        img:'image/6.png'
    }
]

cardArray.sort(()=>0.5-Math.random())
const gridDisplay=document.querySelector('#grid');
const resultDisplay=document.querySelector('#result');


let cardsChosen=[];

let cardsChosenIds=[];

const cardsWon=[];

function createBoard() {
    for(let i=0; i<cardArray.length; i++){
        const card=document.createElement('img');
        card.setAttribute('src', 'image/horse.jpeg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card);
    }

}
createBoard();

function checkMatch() {
    var cards=document.querySelectorAll('img');
    console.log('Check for a match');
    if (cardsChosen[0]==cardsChosen[1]){
        cards[cardsChosenIds[0]].setAttribute('src', 'image/horse.jpeg')
        cards[cardsChosenIds[1]].setAttribute('src', 'image/horse.jpeg')
        alert('You have clicked the same image!')
    }
    if(cardsChosen[0]==cardsChosen[1]){
        alert("You've found a match");
        cards[cardsChosenIds[0]].setAttribute('src', 'image/7.png')
        cards[cardsChosenIds[1]].setAttribute('src', 'image/7.png')
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }else{
        cards[cardsChosenIds[0]].setAttribute('src', 'image/horse.jpeg')
        cards[cardsChosenIds[1]].setAttribute('src', 'image/horse.jpeg')
        alert('Sorry try again!')
        
    }
    resultDisplay.innerHTML=cardsWon.length;
    cardsChosen=[];
    cardsChosenIds=[];

    
    if (cardsWon.length==cardArray.length/2){
        resultDisplay.innerHTML="Congratulations you found them all😊😊😊"
    }
}

function flipCard() {
    const cardId=this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);

    if(cardsChosen.length===2){
        setTimeout(checkMatch, 50);
    }
}
