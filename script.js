// Save each HTML element we need in a variable so we can use it later.
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const questionScreen = document.getElementById("question-screen");
const yesScreen = document.getElementById("yes-screen");
const noScreen = document.getElementById("no-screen");
const heartContainer = document.getElementById("heart-container");

// When Yes is clicked, hide the question and reveal the happy message.
yesButton.addEventListener("click", () => {
  questionScreen.classList.add("hidden");
  yesScreen.classList.remove("hidden");
  celebrate(); // Start the larger burst of hearts.
});

// When Not yet is clicked, hide the question and reveal a kind response.
noButton.addEventListener("click", () => {
  questionScreen.classList.add("hidden");
  noScreen.classList.remove("hidden");
});

// Make one floating heart at a random horizontal spot.
function createHeart() {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = "♥";
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.fontSize = `${16 + Math.random() * 24}px`;
  heart.style.animationDuration = `${5 + Math.random() * 4}s`;
  heartContainer.appendChild(heart);

  // Remove the heart after its animation so the page stays fast.
  setTimeout(() => heart.remove(), 9000);
}

// Create 24 hearts quickly when the answer is Yes.
function celebrate() {
  for (let number = 0; number < 24; number += 1) {
    setTimeout(createHeart, number * 90);
  }
}

// Add one calm background heart every two seconds.
setInterval(createHeart, 2000);
