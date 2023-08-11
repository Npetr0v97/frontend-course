const p1ScoreEl = document.querySelector("#scorep1");
const p2ScoreEl = document.querySelector("#scorep2");

const dropdownEl = document.querySelector("#playto");

const p1Btn = document.querySelector("#pl1");
const p2Btn = document.querySelector("#pl2");
const resetBtn = document.querySelector("#reset");

let p1Score = 0;
let p2Score = 0;
let limit = Number(dropdownEl.value);

//reset score
const resetScore = function () {
  p1Score = p2Score = 0;
  p1ScoreEl.textContent = p1Score;
  p2ScoreEl.textContent = p2Score;
  p1ScoreEl.style.color = "rgb(73, 73, 73)";
  p2ScoreEl.style.color = "rgb(73, 73, 73)";
};

//enable buttons
const enableButtons = function () {
  p1Btn.classList.remove("disabled");
  p2Btn.classList.remove("disabled");
};

//disable buttons whenever someone wins
const disableButtons = function () {
  p1Btn.classList.add("disabled");
  p2Btn.classList.add("disabled");
};

//check if any player  has reached the desired score
//the winner get's his text in green and the loser in red
const checkScore = function () {
  if (p1Score === limit) {
    p1ScoreEl.style.color = "green";
    p2ScoreEl.style.color = "red";
    disableButtons();
  }

  if (p2Score === limit) {
    p2ScoreEl.style.color = "green";
    p1ScoreEl.style.color = "red";
    disableButtons();
  }
};

//increment score for player1

p1Btn.addEventListener("click", () => {
  p1Score++;
  p1ScoreEl.textContent = p1Score;
  checkScore();
});

//increment score for player2
p2Btn.addEventListener("click", () => {
  p2Score++;
  p2ScoreEl.textContent = p2Score;
  checkScore();
});

resetBtn.addEventListener("click", () => {
  resetScore();
  enableButtons();
});

dropdownEl.addEventListener("change", () => {
  limit = Number(dropdownEl.value);
  console.log(limit);
});
