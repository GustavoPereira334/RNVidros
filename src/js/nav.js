// assets/src/js/nav.js
document.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('#NavMenu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (!href.startsWith('#')) return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
        menuLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });
});