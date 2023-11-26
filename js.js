let Dino = document.getElementsByClassName('dino');
let obstackle = document.getElementsByClassName('obstackle');
let positionDino = 0;
let directionDino = 1;
let countJump = 0;
let score = document.querySelector('.counter');
const playButton = document.querySelector('.play-button');
const playAgainButton = document.querySelector('.play-again');
const gameover = document.createElement('div');
const gameBox = document.querySelector('.game-box');
const soundJump = new Audio('./jump.mp3');
const gameMusic = new Audio('./game-music.mp3');
const scoreMusic = new Audio('./score.mp3');
let maxSpeed = 1.8;


playAgainButton.addEventListener('click', (e) => {
    playAgainButton.style.display = 'none';
    document.querySelector('.game-over').style.display = 'none';
    score.textContent = '0';
    deleteAllObstackles('.yellow-obstackle-animation');
    deleteAllObstackles('.green-obstackle-animation');
    deleteAllObstackles('.purple-obstackle-animation');
    CreateObstackles();
    
});

playButton.addEventListener('click', () => {
    CreateObstackles();
    gameMusic.volume = 0.1;
    gameMusic.loop = true;
    gameMusic.play();
    playButton.style.display = 'none';
    // Створення напису GAME OVER
    gameover.classList.add('game-over');
    gameover.textContent = 'GAME OVER';
    gameover.style.cssText = "display: none; position: absolute; font-size: 3vw; color: white; right: 0; left: 0; text-align: center; top: 35%";
    document.querySelector('.game-box').appendChild(gameover);
});

document.body.addEventListener('click', () => {
    countJump = 0;
    if (countJump == 0) {
        dinoJump();
        soundJump.volume = 0.3;
        soundJump.play();
    }
})
document.body.addEventListener('keydown', (e) => {
    if (e.code == 'Space') {
        countJump = 0;
        if (countJump == 0) {
            dinoJump();
            soundJump.volume = 0.3;
            soundJump.play();
        }
    }
})
function deleteAllObstackles(nameClass) {
    Array.from(document.querySelectorAll(nameClass)).forEach((i) => {
        i.remove();
    });
}
function dinoJump() {

    if (countJump <= 1) {
        positionDino = positionDino + directionDino * 1.8;
        Dino[0].style.bottom = positionDino + 'px';

    if (positionDino >= document.getElementsByClassName('game-box')[0].clientHeight - Dino[0].getBoundingClientRect().width || positionDino <= 0) {
        directionDino = directionDino * (-1);
        countJump += 1;
    }
        requestAnimationFrame(dinoJump);
    }
}
function CreateObstackles() {
        let obstackleInterval = setInterval(() => {
            let positionObstackle = 0;
            let randomObstackles = Math.ceil(Math.random() * 3);
            let obstackle = document.createElement('div');
            let obstackleRandomSize = Math.ceil(Math.random() * 90);

            do {
                obstackleRandomSize = Math.ceil(Math.random() * 90);
            } while (obstackleRandomSize < 65)
            
            if (randomObstackles == 1) {
                obstackle.classList.add('yellow-obstackle-animation');
                obstackle.style.cssText = `position: absolute; display: block; right: 0; bottom: 0; width: ${obstackleRandomSize}px; height: ${obstackleRandomSize}px; background: yellow;`;
                gameBox.appendChild(obstackle);
                function obstackleMoveLeft() {
                    positionObstackle += maxSpeed;
                    obstackle.style.right = `${positionObstackle}px`;
                    if (Dino[0].getBoundingClientRect().right >= obstackle.getBoundingClientRect().left && Dino[0].getBoundingClientRect().bottom >= obstackle.getBoundingClientRect().top && Dino[0].getBoundingClientRect().left <= obstackle.getBoundingClientRect().right && Dino[0].getBoundingClientRect().top <= obstackle.getBoundingClientRect().bottom) {
                        console.log('GAME OVER');
                        playAgainButton.style.display = 'block';
                        gameover.style.display = 'block';
                        clearInterval(obstackleInterval);
                    }
            
                    if (positionObstackle > gameBox.clientWidth - obstackleRandomSize) {
                        obstackle.remove();
                        score.textContent = parseInt(score.textContent) + 1;
                        scoreMusic.volume = 0.4;
                        scoreMusic.play();
                    }
                    if (positionObstackle <= gameBox.clientWidth - obstackleRandomSize && gameover.style.display != 'block') {
                        requestAnimationFrame(obstackleMoveLeft);
                    }
                }
                obstackleMoveLeft();
                
            }
            if (randomObstackles == 2) {
                obstackle.classList.add('green-obstackle-animation');
                obstackle.style.cssText = `position: absolute; display: block; right: 0; bottom: 0; width: ${obstackleRandomSize}px; height: ${obstackleRandomSize}px; background: lime;`;
                gameBox.appendChild(obstackle);
                function obstackleMoveLeft() {
                    positionObstackle += maxSpeed;
                    obstackle.style.right = `${positionObstackle}px`;
                    if (Dino[0].getBoundingClientRect().right >= obstackle.getBoundingClientRect().left && Dino[0].getBoundingClientRect().bottom >= obstackle.getBoundingClientRect().top && Dino[0].getBoundingClientRect().left <= obstackle.getBoundingClientRect().right && Dino[0].getBoundingClientRect().top <= obstackle.getBoundingClientRect().bottom) {
                        console.log('GAME OVER');
                        playAgainButton.style.display = 'block';
                        gameover.style.display = 'block';
                        clearInterval(obstackleInterval);
                    }
            
                    if (positionObstackle > gameBox.clientWidth - obstackleRandomSize) {
                        obstackle.remove();
                        score.textContent = parseInt(score.textContent) + 1;
                        scoreMusic.volume = 0.4;
                        scoreMusic.play();
                    }
                    if (positionObstackle <= gameBox.clientWidth - obstackleRandomSize && gameover.style.display != 'block') {
                        requestAnimationFrame(obstackleMoveLeft);
                    }
                }
                obstackleMoveLeft();
                
            }
            if (randomObstackles == 3) {
                obstackle.classList.add('purple-obstackle-animation');
                obstackle.style.cssText = `position: absolute; display: block; right: 0; top: 0; width: ${obstackleRandomSize}px; height: ${obstackleRandomSize}px; background: #C71585;`;
                gameBox.appendChild(obstackle);
                function obstackleMoveLeft() {
                    positionObstackle += maxSpeed;
                    obstackle.style.right = `${positionObstackle}px`;
                    if (Dino[0].getBoundingClientRect().right >= obstackle.getBoundingClientRect().left && Dino[0].getBoundingClientRect().bottom >= obstackle.getBoundingClientRect().top && Dino[0].getBoundingClientRect().left <= obstackle.getBoundingClientRect().right && Dino[0].getBoundingClientRect().top <= obstackle.getBoundingClientRect().bottom) {
                        console.log('GAME OVER');
                        playAgainButton.style.display = 'block';
                        gameover.style.display = 'block';
                        clearInterval(obstackleInterval);
                    }
            
                    if (positionObstackle > gameBox.clientWidth - obstackleRandomSize) {
                        obstackle.remove();
                        score.textContent = parseInt(score.textContent) + 1;
                        scoreMusic.volume = 0.4;
                        scoreMusic.play();
                    }
                    if (positionObstackle <= gameBox.clientWidth - obstackleRandomSize && gameover.style.display != 'block') {
                        requestAnimationFrame(obstackleMoveLeft);
                    }
                }
                obstackleMoveLeft();
                
            }
        }, 1500)
}





