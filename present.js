// -------------------------
// FADE IN CONTENT
// -------------------------

window.addEventListener("load", function () {

    const contents = document.getElementById("contents");
    const button = document.getElementById("button");

    // Fade in contents
    contents.style.transition = "opacity 2s ease";

    setTimeout(function () {
        contents.style.opacity = "1";
    }, 100);


    // Fade in button after contents
    button.style.transition = "opacity 1.5s ease";

    setTimeout(function () {
        button.style.opacity = "1";
    }, 2200);

});


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