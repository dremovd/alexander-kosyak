// Smooth scrolling for internal links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Language toggle
const langToggle = document.getElementById('lang-toggle');
if (langToggle) {
  langToggle.value = document.documentElement.lang;
  langToggle.addEventListener('change', e => {
    document.documentElement.lang = e.target.value;
  });
}

// Set current year in footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
