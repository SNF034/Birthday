const elements = document.querySelectorAll("#contents h1, #contents h3");
const countdown = document.getElementById("countdown");
const present = document.getElementById("present");
const presentLink = document.getElementById("presentLink");

// October 6, 2026 at 10:00 PM Korea time
const targetDate = new Date("2026-10-06T22:00:00+09:00").getTime();


// -------------------------
// TYPE TEXT
// -------------------------

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

                setTimeout(type, 55);
            } else {
                // Small pause before next line
                setTimeout(resolve, 500);
            }
        }

        type();
    });
}


async function startTyping() {
    for (const element of elements) {
        await typeText(element);
    }

    // Wait a little after all text finishes
    setTimeout(() => {
        startCountdown();
    }, 700);
}


// -------------------------
// COUNTDOWN
// -------------------------

function startCountdown() {

    const now = Date.now();

    // If the page is opened after the countdown,
    // don't show the countdown.
    if (now >= targetDate) {
        present.style.visibility = "visible";
        present.style.opacity = "1";

        presentLink.classList.add("unlocked");

        return;
    }

    // Show countdown and present
    countdown.style.visibility = "visible";
    present.style.visibility = "visible";

    // Fade them in
    setTimeout(() => {
        countdown.style.opacity = "1";
        present.style.opacity = "1";
    }, 50);


    function updateCountdown() {

        const now = Date.now();
        const difference = targetDate - now;

        // Countdown is finished
        if (difference <= 0) {

            countdown.style.opacity = "0";

            setTimeout(() => {
                countdown.style.visibility = "hidden";

                // Change the countdown text
                document.getElementById("timer").textContent = "🎁 Ready to open your gift? 🎁";

                // Show the message
                countdown.style.visibility = "visible";
                countdown.style.opacity = "1";

        }, 1500);

    // Unlock present
    presentLink.classList.add("unlocked");

    clearInterval(interval);

    return;
}


        const days = Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );

        const hours = Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        );

        const minutes = Math.floor(
            (difference / (1000 * 60)) % 60
        );

        const seconds = Math.floor(
            (difference / 1000) % 60
        );


        document.getElementById("timer").textContent =
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }


    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);
}


// -------------------------
// CONTINUOUS CONFETTI
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

setInterval(() => {
    continuousConfetti();
}, 250);

// -------------------------
// DRUMROLL
presentLink.addEventListener("click", function(event) {
    event.preventDefault();

    const drumroll = new Audio("drumroll.mp3");

    drumroll.play();

    drumroll.addEventListener("ended", function() {
        window.location.href = "present.html";
    });
});

// -------------------------
// START EVERYTHING
// -------------------------

// Hide text initially
elements.forEach(element => {
    element.style.visibility = "hidden";
});

// Hide countdown initially
countdown.style.visibility = "hidden";
countdown.style.opacity = "0";

// Hide present initially
present.style.visibility = "hidden";
present.style.opacity = "0";

// Lock present initially
presentLink.style.pointerEvents = "none";
presentLink.style.cursor = "not-allowed";

// Start typing
startTyping();

// Start continuous confetti
continuousConfetti();
setInterval(continuousConfetti, 250);