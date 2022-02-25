const button = document.getElementById("boxBtn");

button.addEventListener("click", function isBoxClicked(){
  button.remove();
  console.log("StartBtn box was clicked!");

  const playerForm = document.createElement('form');
  const playerInput = document.createElement('input');

  playerForm.setAttribute("id", "-player-form");
  playerForm.setAttribute("onsubmit", "return false");
  playerForm.className = "pointerEnabled";
  
  playerInput.setAttribute("id", "-player-name");
  playerInput.setAttribute("type", "text");
  playerInput.setAttribute("placeholder", "Your Name Here!");

  playerForm.appendChild(playerInput);
  UI.appendChild(playerForm);

  playerInput.addEventListener("keypress", function (evnt){
    if (evnt.key == "Enter") {
      const input = document.getElementById("-player-name").value;
      console.log(input);
    }
  })
})
