const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
let timeLeft = document.getElementById('timeLeft');
let score = document.getElementById('score');
let start = document.getElementById('start');
let bg = document.querySelector('.start-bg');
let wraper = document.querySelector('#wrapper');
let high_score = document.getElementById('high_score');


let result = 0;
let hitPositionID = null;
let speed = null;
let currTime = 30;
let highscore = 0;
let currscore = 0;
let pervious_score = 0;


mole.style.display = 'none';
wraper.style.display = 'none';


const startgame = () => {
    start.addEventListener('click', () => {
        bg.style.display = 'none';
        start.style.display = 'none';
        mole.style.display = 'block';
        wraper.style.display = 'block';
        result = 0;
        currTime = 10;
        moveMole();
    });
}




function randomSquare() {
    squares.forEach(function (square) {
        square.classList.remove('mole');
        square.addEventListener('mousedown', function () {
            if (hitPositionID == square.id) {
                result++;
                score.textContent = result;
                hitPositionID = null;
                randomPosition.classList.remove('mole');
                square.classList.add('gotcha');
                setTimeout(function () {
                    square.classList.remove('gotcha');
                }, 200)
            }
        })

    });

    let randomPosition = squares[Math.floor(Math.random() * squares.length)];
    randomPosition.classList.add('mole');
    hitPositionID = randomPosition.id;

}

const highscores = (pervious_score,currscore) =>{
    currscore<highscore?highscore = highscore:highscore = currscore;
    high_score.textContent = highscore;                                                                               
}
                                                                                    





function moveMole() {
    speed = setInterval(randomSquare, 500);
    function countDown() {
        currTime--;
        timeLeft.textContent = currTime;
        if (currTime === 0) {
            clearInterval(countTimeID);
            currscore = result;
            clearInterval(speed);
            highscores(pervious_score,currscore);
            start.style.display = 'block';
            bg.style.display = 'block';
            wraper.style.display = 'none';
            start.textContent = 'Game Over, Play Again';
       
        }
    }
    
    let countTimeID = setInterval(countDown,1000);
}

startgame();



