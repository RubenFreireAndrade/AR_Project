class Player{
    constructor(name){
        this.name = name;
    }
}

const startBtnContainer = document.getElementById("-button-container");

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
    //const dropDownContainer = document.createElement('div');
    const dropDownLabel = document.createElement('label');
    var dropDownSelect = document.createElement('select');
    var option = document.createElement('option');
    const playerSubmitBtn = document.createElement('button');

    playerForm.setAttribute("id", "-player-form");
    playerForm.setAttribute("onsubmit", "return false");
    playerForm.className = "-pointer-enabled";

    playerInput.setAttribute("id", "-player-input");
    playerInput.setAttribute("type", "text");
    playerInput.setAttribute("placeholder", "Your Name Here!");

    // dropDownContainer.setAttribute("id", "-dd-container");
    // dropDownContainer.className = "-pointer-enabled";

    dropDownLabel.textContent = "Choose Your Monster!";
    dropDownLabel.className = "-pointer-enabled";

    dropDownSelect.setAttribute("id", "-drop-down");
    dropDownSelect.className = "-pointer-enabled";
    
    option.setAttribute("id", "-option-elem");
    option.className = "-pointer-enabled";

    //playerSubmitBtn.setAttribute("id", "-player-submit-btn");
    playerSubmitBtn.setAttribute("onclick", "checkInputField()");
    playerSubmitBtn.textContent = "Submit";
    playerSubmitBtn.className = "-pointer-enabled";

    // 1. Create h1 title: Enter Player 1 details.
    // 2. Create monster select dropdown using MonsterLibrary.getMonsterIds().
    // 3. Instead of using eventListener create a button for text field.

    // 4. if playerName field not empty and player monster is selected.
    // add player to battleSystem.
    // 5. reset input fields to default.
    // 6. update h1 title: enter Player 2 details.
    // 7. repeat step 4 for player 2, then start game.

    // dropDownContainer.appendChild(dropDownLabel);
    // dropDownContainer.appendChild(dropDownSelect);
    dropDownSelect.appendChild(option);
    playerForm.appendChild(playerInput);
    playerForm.appendChild(dropDownLabel);
    playerForm.appendChild(dropDownSelect);
    playerForm.appendChild(playerSubmitBtn);
    UI.appendChild(playerForm);

    var monsterOptions = MonsterLibrary.getMonsterIds();
    for(var key in monsterOptions){
        var monster = monsterOptions[key];
        dropDownSelect.options[dropDownSelect.options.length] = new Option(monster);
    }

    getPlayerInfo(playerInput);
    //console.log(dropDownContainer);
}

function getPlayerInfo(input){
    input.addEventListener("keypress", (evnt) =>{
        if (evnt.key == "Enter") {
            const name = document.getElementById("-player-input").value;
            const p1 = createPlayer(name);
            const p1Monster = MonsterLibrary.getMonsterDetails("dragon");
            const p1MonsterMarker = spawnMonster(p1, "hiro", p1Monster);

            battleSystem.addPlayer(p1, p1Monster, p1MonsterMarker);

            return name;
        }
    })
}

function checkInputField(){
    console.log("YOu have pressed submit button");
    var field1 = document.forms["-player-form"]["-player-input"].value;
    var field2 = document.forms["-player-form"]["-drop-down"].value;
    console.log(field1, field2);
    
    if (field1 != "" && field2 != "") {
        console.log("details has been submitted");
        document.forms.namedItem("-player-form").reset();
        return true;
    }
    else
    {
        console.log("field is empty");
        return false;
    }
}

startGame();