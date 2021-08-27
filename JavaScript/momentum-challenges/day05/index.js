const body = document.body;

function handleColorSize() {
  const innerWidth = window.innerWidth;
  if (innerWidth < 800) {
    body.classList.remove("medium");
    body.classList.add("small");
  } else if (innerWidth < 1100) {
    body.classList.remove("big");
    body.classList.add("medium");
  } else {
    body.classList.remove("medium");
    body.classList.add("big");
  }
}

window.addEventListener("resize", handleColorSize);
