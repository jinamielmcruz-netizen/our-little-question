// ==========================================
// GET HTML ELEMENTS
// ==========================================

const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");

const questionScreen = document.getElementById("question-screen");
const yesScreen = document.getElementById("yes-screen");
const noScreen = document.getElementById("no-screen");

const heartContainer = document.getElementById("heart-container");


// ==========================================
// YES BUTTON
// ==========================================

yesButton.addEventListener("click", () => {
  questionScreen.classList.add("hidden");
  yesScreen.classList.remove("hidden");

  celebrate();
});


// ==========================================
// NOT YET BUTTON
// ==========================================

// Move the button when the mouse gets close to it
noButton.addEventListener("mouseenter", moveNoButton);

// Also move it when clicked/tapped
noButton.addEventListener("click", (event) => {
  event.preventDefault();
  moveNoButton();
});


// Move the button randomly around the screen
function moveNoButton() {

  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;

  // Keep the button inside the visible screen
  const maxX = window.innerWidth - buttonWidth - 20;
  const maxY = window.innerHeight - buttonHeight - 20;

  // Random position
  const randomX = Math.max(
    20,
    Math.random() * maxX
  );

  const randomY = Math.max(
    20,
    Math.random() * maxY
  );

  // Make it move independently from the card
  noButton.style.position = "fixed";

  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;

  noButton.style.zIndex = "1000";
}


// ==========================================
// FLOATING HEARTS
// ==========================================

function createHeart() {

  const heart = document.createElement("span");

  heart.className = "floating-heart";

  heart.textContent = "♥";

  heart.style.left =
    `${Math.random() * 100}vw`;

  heart.style.fontSize =
    `${16 + Math.random() * 24}px`;

  heart.style.animationDuration =
    `${5 + Math.random() * 4}s`;

  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}


// ==========================================
// YES CELEBRATION
// ==========================================

function celebrate() {

  // Floating hearts
  for (let number = 0; number < 40; number++) {

    setTimeout(() => {
      createHeart();
    }, number * 70);

  }

  // Heart explosion
  for (let number = 0; number < 25; number++) {

    setTimeout(() => {
      createCenterHeart();
    }, number * 60);

  }

  // Sparkles
  createSparkles();
}


// ==========================================
// CENTER HEART EXPLOSION
// ==========================================

function createCenterHeart() {

  const heart = document.createElement("span");

  heart.className = "center-heart";

  heart.textContent = "♥";

  heart.style.left = "50%";
  heart.style.top = "50%";

  const x =
    (Math.random() - 0.5) * 500;

  const y =
    (Math.random() - 0.5) * 500;

  heart.style.setProperty(
    "--x",
    `${x}px`
  );

  heart.style.setProperty(
    "--y",
    `${y}px`
  );

  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1500);
}


// ==========================================
// SPARKLES
// ==========================================

function createSparkles() {

  const symbols = [
    "✨",
    "♡",
    "♥",
    "✦"
  ];

  for (let number = 0; number < 25; number++) {

    setTimeout(() => {

      const sparkle =
        document.createElement("span");

      sparkle.className = "sparkle";

      sparkle.textContent =
        symbols[
          Math.floor(
            Math.random() * symbols.length
          )
        ];

      sparkle.style.left =
        `${Math.random() * 100}vw`;

      sparkle.style.top =
        `${Math.random() * 100}vh`;

      heartContainer.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 1800);

    }, number * 60);
  }
}


// ==========================================
// BACKGROUND HEARTS
// ==========================================

setInterval(createHeart, 2500);
