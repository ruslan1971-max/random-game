const game = document.getElementById('game');
const clock = document.getElementById('clock');
const scoreboard = document.getElementById('score');
const button = document.getElementById('btn')
let time = 40;
let score = 0;

function gameLoop(){
  addCookie();
  time--;
  clock.textContent = time;
  // Проверяем, не закончилось ли время
  if(time <= 0){
    clearInterval(timer);
    game.removeEventListener('click',grab);
    game.innerHTML ='';
  };
}

function addCookie(){
  const cookie = document.createElement('div');
  cookie.textContent = '🍪';
  cookie.className = 'cookie';
  cookie.style.top = `${randomInt(300)}px`;
  cookie.style.left = `${randomInt(500)}px`;
  game.appendChild(cookie);
}

// start timer
const timer = setInterval(gameLoop,700);

game.addEventListener('click',grab);

function grab(event){
  if(event.target.className === 'cookie'){
    score ++;
    scoreboard.textContent = score;
    event.target.remove();
  }
}

// Вспомогательная функция
function randomInt(lower,upper){
  if(upper===undefined){
    upper = lower;
    lower = 1;
  }
  return Math.floor(Math.random()*(upper-lower+1)+lower)
}

button.addEventListener('click', function () {
	window.location.reload(true);
})