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

  // Hide the question
  questionScreen.classList.add("hidden");

  // Show the happy screen
  yesScreen.classList.remove("hidden");

  // Start the celebration
  celebrate();

});


// ==========================================
// NOT YET BUTTON
// ==========================================

noButton.addEventListener("click", () => {

  // Hide the question
  questionScreen.classList.add("hidden");

  // Show the "not yet" message
  noScreen.classList.remove("hidden");

  // Create gentle hearts
  createSoftHearts();

});


// ==========================================
// CREATE FLOATING HEART
// ==========================================

function createHeart() {

  const heart = document.createElement("span");

  heart.className = "floating-heart";

  heart.textContent = "♥";

  // Random horizontal position
  heart.style.left = `${Math.random() * 100}vw`;

  // Random heart size
  heart.style.fontSize =
    `${16 + Math.random() * 24}px`;

  // Random animation speed
  heart.style.animationDuration =
    `${5 + Math.random() * 4}s`;

  // Add heart to page
  heartContainer.appendChild(heart);

  // Remove after animation
  setTimeout(() => {
    heart.remove();
  }, 10000);
}


// ==========================================
// YES CELEBRATION
// ==========================================

function celebrate() {

  // Create lots of floating hearts
  for (let number = 0; number < 40; number++) {

    setTimeout(() => {
      createHeart();
    }, number * 70);

  }

  // Heart explosion from center
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

  // Start from center of screen
  heart.style.left = "50%";
  heart.style.top = "50%";

  // Random explosion direction
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

  // Remove after animation
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

      // Random screen position
      sparkle.style.left =
        `${Math.random() * 100}vw`;

      sparkle.style.top =
        `${Math.random() * 100}vh`;

      heartContainer.appendChild(sparkle);

      // Remove after animation
      setTimeout(() => {
        sparkle.remove();
      }, 1800);

    }, number * 60);
  }
}


// ==========================================
// SOFT HEARTS FOR "NOT YET"
// ==========================================

function createSoftHearts() {

  for (let number = 0; number < 8; number++) {

    setTimeout(() => {

      const heart =
        document.createElement("span");

      heart.className = "soft-heart";

      heart.textContent = "♡";

      heart.style.left =
        `${20 + Math.random() * 60}vw`;

      heartContainer.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 4000);

    }, number * 250);

  }

}


// ==========================================
// BACKGROUND HEARTS
// ==========================================

// Create one heart every 2.5 seconds
setInterval(createHeart, 2500);
