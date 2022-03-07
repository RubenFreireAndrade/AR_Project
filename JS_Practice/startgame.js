const startBtnContainer = document.getElementById("-button-container");
const backgroundForm = document.getElementById("-background-form");

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
    const playerMarker = document.createElement('input');
    const dropDownLabel = document.createElement('label');
    let dropDownSelect = document.createElement('select');
    let option = document.createElement('option');
    const playerSubmitBtn = document.createElement('button');
    let playerIndicator = document.createElement('h1');

    playerForm.setAttribute("id", "-player-form");
    playerForm.setAttribute("onsubmit", "return false");
    playerForm.className = "-pointer-enabled";

    playerInput.setAttribute("id", "-player-input");
    playerInput.setAttribute("type", "text");
    playerInput.setAttribute("placeholder", "Your Name Here!");

    playerMarker.setAttribute("id", "-player-marker");
    playerMarker.setAttribute("type", "text");
    playerMarker.hidden = true;
    playerMarker.value = "hiro";

    dropDownLabel.textContent = "Choose Your Monster!";
    dropDownLabel.className = "-pointer-enabled";

    dropDownSelect.setAttribute("id", "-drop-down");
    dropDownSelect.className = "-pointer-enabled";
    
    option.setAttribute("id", "-option-elem");
    option.className = "-pointer-enabled";

    playerSubmitBtn.setAttribute("onclick", "checkInputField()");
    playerSubmitBtn.textContent = "Submit";
    playerSubmitBtn.className = "-pointer-enabled";

    playerIndicator.setAttribute("id", "-h1");
    playerIndicator.textContent = "Player 1:";

    // 1. Create h1 title: Enter Player 1 details.
    // 2. Create monster select dropdown using MonsterLibrary.getMonsterIds().
    // 3. Instead of using eventListener create a button for text field.

    // 4. if playerName field not empty and player monster is selected.
    // add player to battleSystem.
    // 5. reset input fields to default.
    // 6. update h1 title: enter Player 2 details.
    // 7. repeat step 4 for player 2, then start game.
    // 8. add background image to UI while in player forms.

    dropDownSelect.appendChild(option);
    playerForm.appendChild(playerIndicator);
    playerForm.appendChild(playerInput);
    playerForm.appendChild(dropDownLabel);
    playerForm.appendChild(dropDownSelect);
    playerForm.appendChild(playerMarker);
    playerForm.appendChild(playerSubmitBtn);
    UI.appendChild(playerForm);
    backgroundForm.appendChild(UI);

    let monsterOptions = MonsterLibrary.getMonsterIds();
    for(var key in monsterOptions){
        var monster = monsterOptions[key];
        dropDownSelect.options[dropDownSelect.options.length] = new Option(monster);
    }
}

function checkInputField(){
    console.log("You have pressed submit button");
    const nameField = document.forms["-player-form"]["-player-input"].value;
    const monsterField = document.forms["-player-form"]["-drop-down"].value;
    const markerField = document.forms["-player-form"]["-player-marker"].value;
    console.log(nameField, monsterField);
    
    if (nameField != "" && monsterField != "") {
        console.log("details has been submitted");

        const p1 = createPlayer(nameField);
        const p1Monster = MonsterLibrary.getMonsterDetails(monsterField);
        const p1MonsterMarker = spawnMonster(p1, markerField, p1Monster);

        battleSystem.addPlayer(p1, p1Monster, p1MonsterMarker);
        
        document.forms.namedItem("-player-form").reset();

        let indicator = document.getElementById("-h1");
        indicator.textContent = "Player 2:";
        document.forms["-player-form"]["-player-marker"].value = "kanji";

        if (markerField == "kanji") {
            UI.removeChild(document.forms["-player-form"]);

            let frag = document.createDocumentFragment();
            while (backgroundForm.firstChild) {
                frag.appendChild(backgroundForm.firstChild);
            }
            backgroundForm.parentNode.insertBefore(frag, backgroundForm);
            backgroundForm.parentNode.removeChild(backgroundForm);
        }
        return true;
    }
    else
    {
        console.log("field is empty");
        return false;
    }
}

startGame();