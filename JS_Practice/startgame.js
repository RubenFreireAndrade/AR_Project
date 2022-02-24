const button = document.getElementById("boxBtn");
const indexUI = document.getElementById("UI");

button.addEventListener("click", function isBoxClicked(){
  button.remove();
  console.log("StartBtn box was clicked!");

  const playerForm = document.createElement('form');
  const playerInput = document.createElement('input');
  playerInput.setAttribute("id", "player-name");
  playerInput.setAttribute("type", "text");
  playerInput.setAttribute("placeholder", "Your Name Here!");
  playerForm.className = "pointerEnabled";

  playerForm.appendChild(playerInput);
  indexUI.appendChild(playerForm);

  console.log(playerInput);
})

function getInputValue(){
  const value = document.getElementById("player-name").value;
}