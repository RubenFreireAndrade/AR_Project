const dragonMarker = document.getElementById("dragonMarker");
const dragonMarker2 = document.getElementById("dragonMarker2");

const playerOne = document.getElementById("playerOne");
const playerTwo = document.getElementById("playerTwo");

function createMonsterStatsUi(id){
    // Generate html stats here.
    const monsterDetails = MonsterLibrary.getMonsterDetails(id);

    const monsterName = document.querySelectorAll("#name_1, #name_2").textContent = monsterDetails.name;
    const monsterHealth = document.querySelectorAll("#healthBarValue_1, #healthBarValue_2").textContent = monsterDetails.health;
    const monsterDamage = document.querySelectorAll("#damage_1, #damage_2").textContent = monsterDetails.damage;
}

function removeMonsterStatsUi(id){
    
}

dragonMarker.addEventListener("markerFound", () => {
    playerOne.hidden = false;
    createMonsterStatsUi("dragon");
})

dragonMarker.addEventListener("markerLost", () => {
    playerOne.hidden = true;
})

dragonMarker2.addEventListener("markerFound", () => {
    playerTwo.hidden = false;
    createMonsterStatsUi("dragon2");
})

dragonMarker2.addEventListener("markerLost", () => {
    playerTwo.hidden = true;
})