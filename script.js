const info = document.querySelector(".info");
const startBtn = document.getElementById("start-btn");
const game = document.getElementById("game");
const getReady = document.getElementById("getReady");
const countdownEl = document.getElementById("countdown");
const shape = document.getElementById("shape");
const resultScreen = document.getElementById("result-screen");
const reactTime = document.getElementById("reactTime");
const tryAgain = document.getElementById("tryAgain");

let startTime;

startBtn.addEventListener('click', () => {
  info.style.display = 'none';
  game.style.display = 'block';
  startCounter();
})

function startCounter(){
  let count = 3;
  countdownEl.textContent = count;
  countdownEl.style.animation = 'pop 0.5s';

  const countdownInterval = setInterval(() => {
    count--;
    countdownEl.textContent = count;
    countdownEl.style.animation = 'none';
    void countdownEl.offsetWidth;
    countdownEl.style.animation = 'pop 0.5s';
    if(count === 0){
      clearInterval(countdownInterval);
      countdownEl.style.display = 'none';
      getReady.style.display = 'none';
      showShapeAfterDelay();
    }
  },1000)
}

function showShapeAfterDelay(){
  const delay = Math.random() * 2000 + 500;
  setTimeout(() => {
    const emojis = ["🔴","🔶","🟧","♠️","🟩","🔵","🟤","🔺","🔸","🔹","🔘","⚪","🟢","🟡","🟪","⬜"];
    shape.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    const top = Math.random() * (window.innerHeight - 100);
    const left = Math.random() * (window.innerWidth - 100);

    shape.style.top = `${top}px`;
    shape.style.left = `${left}px`;
    shape.style.display = "block";
    startTime = Date.now();
  },delay);
}

shape.addEventListener('click', () => {
  const endTime = Date.now();
  const timeTaken = ((endTime - startTime) / 1000).toFixed(3);
  shape.style.display ="none";
  game.style.display = "none";
  resultScreen.style.display = "block";
  reactTime.textContent = `Your Reaction Time : ${timeTaken} seconds`;
})

tryAgain.addEventListener('click', () => {
  resultScreen.style.display = 'none';
  game.style.display = "block";
  countdownEl.style.display = "block";
  getReady.style.display = "block";
  startCounter();
})
