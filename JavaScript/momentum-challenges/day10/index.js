const body = document.body;
const h2 = document.createElement("h2");

function timer() {
  const today = new Date();
  const eve = new Date("2021/12/24");
  const secondsMS = Math.floor((eve - today) / 1000);
  const minutesMS = Math.floor(secondsMS / 60);
  const hoursMS = Math.floor(minutesMS / 60);
  const days = Math.floor(hoursMS / 24);
  const seconds = secondsMS % 60;
  const minutes = minutesMS % 60;
  const hours = hoursMS % 24;

  h2.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  body.appendChild(h2);
}

timer();
setInterval(timer, 1000);
