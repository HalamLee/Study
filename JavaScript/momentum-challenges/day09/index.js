const maxNum = document.getElementById("maxNum");
const inputGuess = document.getElementById("guessNumber");
const form = document.getElementById("numberForm");
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");

function playBtn(event) {
  event.preventDefault();
  const maxNumValue = parseInt(maxNum.value);
  const guessValue = parseInt(inputGuess.value);
  const machineNum = Math.floor(Math.random() * maxNumValue);

  text1.innerText = `You chose: ${guessValue}, the machine chose: ${machineNum}`;
  if (guessValue === machineNum) {
    text2.innerText = "You Won!";
  } else {
    text2.innerText = "You lost!";
  }
}

form.addEventListener("submit", playBtn);
