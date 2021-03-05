const magicNumber = Math.trunc(Math.random() * 10 + 1);

const secrectNumber = document.querySelector(".number");

const btnAgain = document.querySelector(".again");

const btnCheck = document.querySelector(".check");

const userMessage = document.querySelector(".message");

const userScore = document.querySelector(".score");

const userHighscore = document.querySelector(".highscore");

score = 20;
highscore = 0;

userScore.textContent = score;
userHighscore.textContent = highscore;

btnCheck.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (score > 0) {
    if (guess > 0) {
      if (guess == magicNumber) {
        userMessage.textContent = "You Are Correct";
        userHighscore.textContent = score;
        document.querySelector("body").style.backgroundColor = " orange ";
        secrectNumber.textContent = magicNumber;
      } else if (guess > magicNumber) {
        userMessage.textContent = "You Are Too High";
        score--;
        userScore.textContent = score;
      } else if (guess < magicNumber) {
        userMessage.textContent = "You Are Too Low";
        score--;
        userScore.textContent = score;
      }
    } else {
      console.log("You Are entered The Wrong Input");
    }
  } else {
    score = 0;
    userScore.textContent = score;
    document.querySelector("body").style.backgroundColor = " red ";
    userMessage.textContent = "you are wrong";
    secrectNumber.textContent = "?";
    document.querySelector(guess).value = "";
  }
});

btnAgain.addEventListener("click", function () {
  score = 20;
  userScore.textContent = score;
  magicNumber;
  document.querySelector("body").style.backgroundColor = " rgb(34,34,34) ";
  userMessage.textContent = "Start guessing...";
  secrectNumber.textContent = "?";
  document.querySelector(guess).value = "";
});