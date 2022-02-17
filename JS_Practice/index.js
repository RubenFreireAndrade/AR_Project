const dragonMarker = document.getElementById("dragonMarker");
const dragonMarker2 = document.getElementById("dragonMarker2");

const playerOne = document.getElementById("playerOne");
const playerTwo = document.getElementById("playerTwo");



function createMonsterStatsUi(id){
    // Generate html stats here.
    const monsterDetails = MonsterLibrary.getMonsterDetails(id);
    console.log(monsterDetails.name);

    const monsterName = document.getElementById("name").textContent = monsterDetails.name;
    const monsterHealth = document.getElementById("healthBarValue").textContent = monsterDetails.health;
    const monsterdamage = document.getElementById("damage").textContent = monsterDetails.damage;
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