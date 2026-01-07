// COUNTDOWN TIMER
const eventDate = new Date("March 15, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const difference = eventDate - now;

  if (difference < 0) return;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}, 1000);

// CTA BUTTON
document.getElementById("ctaBtn").addEventListener("click", () => {
  alert("Registration opens soon!");
});

// FORM VALIDATION
document.getElementById("notifyBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const message = document.getElementById("message");

  if (email === "") {
    message.textContent = "Please enter your email.";
    message.style.color = "red";
  } else {
    message.textContent = "You’ll be notified!";
    message.style.color = "green";
  }
});