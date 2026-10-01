// -------------------------
// CONFETTI
// -------------------------

function continuousConfetti() {
    confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
    });

    confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
    });
}

continuousConfetti();

setInterval(continuousConfetti, 250);


// -------------------------
// FADE IN CONTENT + SOUNDS
// -------------------------

window.addEventListener("load", function () {

    const contents = document.getElementById("contents");
    const button = document.getElementById("button");

    // -------------------------
    // FADE IN CONTENT
    // -------------------------

    contents.style.transition = "opacity 2s ease";

    setTimeout(function () {
        contents.style.opacity = "1";
    }, 100);


    // -------------------------
    // FADE IN BUTTON
    // -------------------------

    button.style.transition = "opacity 1.5s ease";

    setTimeout(function () {
        button.style.opacity = "1";
    }, 2200);


    // -------------------------
    // PARTY SOUND
    // -------------------------

    const partySound = new Audio("party.mp3");
    const backgroundMusic = document.getElementById("backgroundMusic");

    partySound.volume = 0.5;
    backgroundMusic.volume = 0.3;

    // Play party sound once
    partySound.play();

    // -------------------------
    // BACKGROUND MUSIC
    // -------------------------

    // Start background music AFTER
    // the party sound finishes
    partySound.addEventListener("ended", function () {
        backgroundMusic.play();
    });

});
