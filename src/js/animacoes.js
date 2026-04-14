// src/js/animacoes.js
document.addEventListener('DOMContentLoaded', () => {
  const elementos = document.querySelectorAll(
    '.card, .stat, .depoimento, .about-text, .stats, .orcamento-form, .contato-info'
  );

  elementos.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elementos.forEach(el => observer.observe(el));
});