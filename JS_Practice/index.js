const UI = document.getElementById("UI");
const scene = document.getElementById("scene");

function createPlayer(name){
    const player = document.createElement('div');
    player.id = name;
    player.className = "playerStatusBar";
    player.hidden = true;

    const monsterName = document.createElement('div');
    monsterName.id = name + "-monster-name";

    const monsterHealth = document.createElement('div');
    monsterHealth.id = name + "-monster-hp";
    monsterHealth.className = "healthBarContainer";

    const monsterDamage = document.createElement('div');
    monsterDamage.id = name + "-monster-dmg";

    const monsterHealthVal = document.createElement('div');
    monsterHealthVal.id = name + "-monster-hp-value";
    monsterHealthVal.className = "healthBarValue";

    const monsterHealthFill = document.createElement('div');
    monsterHealthFill.id = name + "-monster-hp-fill";
    monsterHealthFill.className = "healthBarFill";

    player.appendChild(monsterName);
    player.appendChild(monsterHealth);
    player.appendChild(monsterDamage);
    monsterHealth.appendChild(monsterHealthVal);
    monsterHealth.appendChild(monsterHealthFill);

    UI.appendChild(player);
    return player;
}

function spawnMonster(player, markerPreset, monsterDetails){
    const monster = document.createElement('a-marker');
    monster.id = player.id + "-monster-marker";
    monster.setAttribute("preset", markerPreset);
    monster.setAttribute("emitevents", "true");

    const monsterModel = document.createElement('a-obj-model');
    monsterModel.setAttribute("src", monsterDetails.model);
    monsterModel.setAttribute("position", "0 0 0");
    monsterModel.setAttribute("scale", "0.01 0.01 0.01");
    monsterModel.setAttribute("rotation", "0 0 0");

    monster.appendChild(monsterModel);
    scene.appendChild(monster);

    monster.addEventListener("markerFound", () => {
        player.hidden = false;
    })

    monster.addEventListener("markerLost", () => {
        player.hidden = true;
    })
    updateMonsterStatsUi(player.id, monsterDetails);
    return monster;
}

function updateMonsterStatsUi(playerName, monsterDetails){
    document.getElementById(playerName + "-monster-name").textContent = monsterDetails.name;
    document.getElementById(playerName + "-monster-hp-value").textContent = monsterDetails.health;
    document.getElementById(playerName + "-monster-dmg").textContent = monsterDetails.damage;
}

function removeMonsterStatsUi(id){
    
}

const p1 = createPlayer("PlayerOne");
const p1Monster = MonsterLibrary.getMonsterDetails("dragon");
const p1MonsterMarker = spawnMonster(p1, "hiro", p1Monster);

const p2 = createPlayer("PlayerTwo");
const p2Monster = MonsterLibrary.getMonsterDetails("dragon2");
const p2MonsterMarker = spawnMonster(p2, "kanji", p2Monster);