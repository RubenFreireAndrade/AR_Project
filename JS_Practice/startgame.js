function startGame(evnt) {
    //const startButton = document.getElementById("gameBtn").textContent = "Button is working";

    //console.log(evnt.touches);
}

const start = document.getElementById("body");

start.addEventListener("click", startGame(start));
start.addEventListener("touchstart", startGame(start));