const elements = document.querySelectorAll("#contents h2, #contents h4");

function typeText(element) {
    const text = element.textContent;
    element.textContent = "";
    element.style.visibility = "visible";

    let i = 0;

    return new Promise(resolve => {
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, 50);
            } else {
                resolve();
            }
        }

        type();
    });
}

async function startTyping() {
    for (const element of elements) {
        await typeText(element);
    }
}

// Hide text initially
elements.forEach(element => {
    element.style.visibility = "hidden";
});

// Continuous confetti
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

window.onload = function() {
    // Start confetti
    continuousConfetti();

    // Keep launching confetti
    setInterval(continuousConfetti, 250);

    // Start typing
    startTyping();
};