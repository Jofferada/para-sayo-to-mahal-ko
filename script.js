
const heartBackground = document.getElementById("heartBackground");
const surpriseButton = document.getElementById("surpriseButton");
const surpriseMessage = document.getElementById("surpriseMessage");

// Create floating hearts
function createHeart() {
  if (!heartBackground) return;

  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = Math.random() > 0.5 ? "♡" : "♥";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (14 + Math.random() * 22) + "px";
  heart.style.animationDuration = (7 + Math.random() * 7) + "s";

  heartBackground.appendChild(heart);

  heart.addEventListener("animationend", () => {
    heart.remove();
  });
}

// Keep the animation gentle
for (let i = 0; i < 10; i++) {
  setTimeout(createHeart, i * 350);
}

setInterval(createHeart, 900);

// Reveal the anniversary surprise
if (surpriseButton && surpriseMessage) {
  surpriseButton.addEventListener("click", () => {
    surpriseMessage.hidden = false;
    surpriseButton.textContent = "Surprise opened! 💗";
    surpriseButton.disabled = true;
    surpriseButton.style.opacity = "0.8";

    surpriseMessage.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  });
}

// Highlight the current navigation section
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === "#" + entry.target.id) {
            link.style.color = "#c74779";
          } else {
            link.style.color = "";
          }
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach((section) => observer.observe(section));
}
