
const themeBtn = document.getElementById('themeToggle');


const savedTheme = localStorage.getItem('theme'); // 'dark' | 'light'
if (savedTheme === 'dark') {
  document.documentElement.classList.add('dark-mode');
  themeBtn && (themeBtn.textContent = '☀️');
}

themeBtn?.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode');
  const isDark = document.documentElement.classList.contains('dark-mode');
  themeBtn.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});


const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  const y = window.scrollY || document.documentElement.scrollTop;
  backToTopBtn.style.display = y > 200 ? 'block' : 'none';
});

backToTopBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


const form = document.querySelector('form');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const p = document.createElement('p');
  p.textContent = '✅ Thank you! Your message was captured (demo only).';
  p.style.color = 'green';
  form.appendChild(p);
  form.reset();
});
