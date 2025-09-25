/* =========================
   Theme Toggle (Dark / Light)
   ========================= */

// Grab the toggle button in the header
const themeBtn = document.getElementById('themeToggle');

// Read previously saved preference from localStorage
const savedTheme = localStorage.getItem('theme'); // 'dark' | 'light' | null
if (savedTheme === 'dark') {
  // Apply dark mode on initial load
  document.documentElement.classList.add('dark-mode');
  if (themeBtn) themeBtn.textContent = '☀️'; // show sun when in dark mode
} else {
  // Ensure icon matches current state on first load
  if (themeBtn) themeBtn.textContent = '🌙';
}

// Toggle on click + persist preference
themeBtn?.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode');
  const isDark = document.documentElement.classList.contains('dark-mode');
  themeBtn.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});


/* =========================
   Back-to-Top Button
   ========================= */

// Button that appears after you scroll down
const backToTopBtn = document.getElementById('backToTop');

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
  const y = window.scrollY || document.documentElement.scrollTop;
  backToTopBtn.style.display = y > 200 ? 'block' : 'none';
});

// Smoothly scroll to the top when clicked
backToTopBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


/* =========================
   Contact Form (Front-end demo only)
   ========================= */

// Intercept submit, show a friendly status, and reset the form
const form = document.querySelector('form');
form?.addEventListener('submit', (e) => {
  e.preventDefault();

  // Reuse a single status element to avoid duplicates
  let statusEl = form.querySelector('#formStatus');
  if (!statusEl) {
    statusEl = document.createElement('p');
    statusEl.id = 'formStatus';
    statusEl.style.marginTop = '8px';
    form.appendChild(statusEl);
  }

  statusEl.textContent = '✅ Thank you! Your message was captured (demo only).';
  statusEl.style.color = 'green';

  form.reset();
});


/* =========================
   Smooth Scrolling for internal nav links
   
   ========================= */

// Enhance anchor links like #about / #projects / #contact
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href'); // e.g., "#about"
    if (targetId && targetId.length > 1) {
      const section = document.querySelector(targetId);
      if (section) {
        e.preventDefault();
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
