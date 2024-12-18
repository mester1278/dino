const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const scoreDisplay = document.getElementById("score");
let score = 0;

// Ugrás funkció
function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");
        setTimeout(function() {
            dino.classList.remove("jump");
        }, 300);
    }
}

// Ütközés ellenőrzés
let isAlive = setInterval(function() {
    // Pozíciók meghatározása
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    // Ütközés és pontszám növelése
    if (cactusLeft < 80 && cactusLeft > 0 && dinoTop >= 130) {
        alert("Játék vége! Pontszám: " + score);
        score = 0; // Pontszám visszaállítása
        scoreDisplay.innerHTML = "Pontszám: " + score;
    } else if (cactusLeft < 80 && cactusLeft > 0) {
        score++;
        scoreDisplay.innerHTML = "Pontszám: " + score;
    }
}, 10);

// Billentyűleütés figyelése
document.addEventListener("keydown", function(event) {
    jump();
});