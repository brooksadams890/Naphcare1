// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), entry.target.dataset.delay || 0);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
revealEls.forEach(el => revealObserver.observe(el));

// Services sidebar active state
const sidebarItems = document.querySelectorAll('.services-sidebar-item');
sidebarItems.forEach(item => {
  item.addEventListener('click', () => {
    sidebarItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});

// Sticky nav shadow on scroll
const navEl = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navEl.style.boxShadow = '0 4px 32px rgba(0,0,0,0.12)';
  } else {
    navEl.style.boxShadow = '0 2px 20px rgba(0,0,0,0.06)';
  }
}, { passive: true });
