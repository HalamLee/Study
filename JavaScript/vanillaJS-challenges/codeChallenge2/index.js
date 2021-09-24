const body = document.body;

function handleWindowWidth() {
  if (window.innerWidth > 1000) {
    body.style.backgroundColor = "yellow";
  } else if (window.innerWidth > 700) {
    body.style.backgroundColor = "purple";
  } else if (window.innerWidth > 300) {
    body.style.backgroundColor = "skyblue";
  }
}
body.style.backgroundColor = "purple";

window.addEventListener("resize", handleWindowWidth);
