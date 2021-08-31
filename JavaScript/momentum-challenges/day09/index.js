const maxNum = document.getElementById("maxNum");
const inputGuess = document.getElementById("guessNumber");
const form = document.getElementById("numberForm");
const btn = document.getElementById("btn-play");
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");

function playBtn(event) {
  event.preventDefault();
  const maxNumValue = maxNum.value;
  const guessValue = inputGuess.value;
  const machineNum = Math.floor(Math.random() * maxNumValue);

  text1.innerText = `You chose: ${guessValue}, the machine chose: ${machineNum}`;
  if (guessValue == machineNum) {
    text2.innerText = "You Win!";
  } else {
    text2.innerText = "You lost!";
  }
}

form.addEventListener("submit", playBtn);
