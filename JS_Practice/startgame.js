const startBtnContainer = document.getElementById("-button-container");
//const startButton = document.getElementById("-start-button");
//const button = document.getElementById("boxBtn");

function startGame(){
    const startButton = document.createElement('button');
    startButton.setAttribute("id", "-start-button");
    startButton.setAttribute("onsubmit", "return false");
    startButton.textContent = "START GAME";

    startBtnContainer.appendChild(startButton);

    startButton.addEventListener("click", () => {
        startButton.remove();
        console.log("Start button was clicked! Is now creating player forms.");
        createPlayerForms();
    })
}

function createPlayerForms(){
    const playerForm = document.createElement('form');
    const playerInput = document.createElement('input');

    playerForm.setAttribute("id", "-player-form");
    playerForm.setAttribute("onsubmit", "return false");
    playerForm.className = "-pointer-enabled";

    playerInput.setAttribute("id", "-player-input");
    playerInput.setAttribute("type", "text");
    playerInput.setAttribute("placeholder", "Your Name Here!");

    playerForm.appendChild(playerInput);
    UI.appendChild(playerForm);

    getPlayerInfo(playerInput);
}

function getPlayerInfo(input){
    input.addEventListener("keypress", (evnt) =>{
        if (evnt.key == "Enter") {
            const name = document.getElementById("-player-input").value;
            console.log(name);
            return name;
        }
    })
}

const start = startGame();
