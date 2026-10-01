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
// FADE IN CONTENT + PARTY SOUND
// -------------------------

window.addEventListener("load", function () {

    const contents = document.getElementById("contents");
    const button = document.getElementById("button");

    // Fade in contents
    contents.style.transition = "opacity 2s ease";

    setTimeout(function () {
        contents.style.opacity = "1";
    }, 100);


    // Show button after content finishes
    button.style.transition = "opacity 1.5s ease";

    setTimeout(function () {
        button.style.opacity = "1";
    }, 2200);


    // Play party sound ONCE
    const partySound = new Audio("party.mp3");
    partySound.volume = 0.5;
    partySound.play();

});