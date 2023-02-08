var randomNum;
var scorevalue = 0;

let randomNumElem = document.querySelector(".number");
let guessNumElem = document.querySelector(".guess");
let messageElem = document.querySelector(".message");
let scoreElem = document.querySelector(".score");
let resetscoreElem = document.querySelector(".resetscore");
let highscoreElem = document.querySelector(".highscore");
let highscorevalue = Number(highscoreElem.textContent);

function generateRandomNumber() {
  randomNum = Math.floor(Math.random() * 20) + 1;
  randomNumElem.textContent = randomNum;
}
function resetscore() {
  showreset.addEventListener("click", showreset);
  resetscoreElem = Math.floor(Math.random() * 20) + 1;
  resetscoreElem.textContent = resetscoreElem;
}
function checkNumber() {
  let message;
  let guess = Number(guessNumElem.value);

  if (randomNum == guess) {
    document.body.style.backgroundColor = "blue";
    message = "Correct guess";
    scorevalue += 2;
    if (reset == 0) {
      document.body.style.backgroundColor = "green";
      message = " start guessing";
      scorevalue = 0;
    }
    if (highscorevalue < scorevalue) {
      highscorevalue = scorevalue;
      highscoreElem.textContent = highscorevalue;
    }
    guessNumElem.value = "";
    generateRandomNumber();
  } else {
    document.body.style.backgroundColor = "red";
    scorevalue = scorevalue > 0 ? scorevalue - 1 : 0;
    if (randomNum > guess) {
      message = "Wrong guess..Please give higher value";
    } else {
      message = "Wrong guess..Please give lesser value";
    }
  }
  scoreElem.textContent = scorevalue;
  messageElem.textContent = message;
  resetElem.textContent = reset;
}
generateRandomNumber();
