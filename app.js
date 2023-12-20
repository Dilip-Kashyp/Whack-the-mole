const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
let timeLeft = document.getElementById('timeLeft');
let score = document.getElementById('score');
let start = document.getElementById('start');
let bg = document.querySelector('.start-bg');
let wraper = document.querySelector('#wrapper');

let result = 0;
let hitPositionID = null;
let speed = null;
let currTime = 30;

mole.style.display = 'none';
wraper.style.display = 'none';


const startgame = () => {
    start.addEventListener('click', () => {
        bg.style.display = 'none';
        start.style.display = 'none';
        mole.style.display = 'block';
        wraper.style.display = 'block';
        result = 0;
        currTime = 30;
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
function moveMole() {
    speed = setInterval(randomSquare, 500);
    function countDown() {
        currTime--;
        timeLeft.textContent = currTime;
        if (currTime === 0) {
            clearInterval(countTimeID);
            clearInterval(speed);
            start.style.display = 'block';
            bg.style.display = 'block';
            wraper.style.display = 'none';
            start.textContent = 'Game Over, Play Again'
            
        }
    }
    
    let countTimeID = setInterval(countDown,1000);
}

startgame();



