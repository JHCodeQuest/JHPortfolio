// Example: Toggle light/dark mode (optional polish)
const toggleBtn = document.getElementById('toggle-theme');
toggleBtn?.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});