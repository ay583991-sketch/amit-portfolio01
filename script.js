(function () {
  // Auto year update
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Scroll reveal observer
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  }, { threshold: 0.15 });

  // Observe all animated elements (including glow-text)
  document.querySelectorAll('.glow-text, .project, .contact-section, .site-footer')
    .forEach(el => observer.observe(el));

  // Button hover ripple
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      btn.style.setProperty('--x', `${x}px`);
      btn.style.setProperty('--y', `${y}px`);
    });
  });

  // Fade-in hero on load
  window.addEventListener('load', () => {
    document.querySelectorAll('.hero-left, .profile-card')
      .forEach(el => el.classList.add('show'));
  });
})();
