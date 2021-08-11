const h1 = document.querySelector("div.hello:first-child h1");

function handleh1Click(){
    console.log("h1 was clicked!");
}

function handleMouseEnter(){
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("ALL GOOOOOOD");
}

h1.addEventListener("click", handleh1Click);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.onmouseleave = handleMouseLeave;


window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);