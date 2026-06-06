// Mark JS as active — only now do reveal elements hide themselves
document.body.classList.add('js-ready');

// Scroll reveal
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.dataset.delay || 0);
        setTimeout(() => entry.target.classList.add('visible'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
} else {
  // Fallback: show everything immediately
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
}

// Nav scroll effect
const navWrapper = document.querySelector('.nav-wrapper');
if (navWrapper) {
  window.addEventListener('scroll', () => {
    navWrapper.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

// Services tabs
const tabs = document.querySelectorAll('.tab-btn');
const svcCards = document.querySelectorAll('.svc-card');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const cat = tab.dataset.cat;
    svcCards.forEach(card => {
      card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
    });
  });
});

// Animated counters
const counters = document.querySelectorAll('[data-count]');
if ('IntersectionObserver' in window && counters.length) {
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const duration = 1600;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = Number.isInteger(target) ? Math.round(eased * target) : (eased * target).toFixed(1);
        el.textContent = val + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      countObserver.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(el => countObserver.observe(el));
}
