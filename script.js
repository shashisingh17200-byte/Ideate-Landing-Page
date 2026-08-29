const header = document.querySelector("[data-header]");
const countdown = document.querySelector("[data-countdown]");
const eventStart = new Date("2026-12-16T09:00:00+05:30");

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
}

function updateCountdown() {
  const remaining = eventStart.getTime() - Date.now();

  if (remaining <= 0) {
    countdown.textContent = "Now live";
    return;
  }

  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);

  countdown.textContent = `${days}d ${hours}h ${minutes}m`;
}

updateHeader();
updateCountdown();
window.addEventListener("scroll", updateHeader, { passive: true });
window.addEventListener("resize", updateHeader);
setInterval(updateCountdown, 60000);
