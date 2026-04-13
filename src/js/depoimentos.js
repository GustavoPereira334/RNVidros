// src/js/depoimentos.js
(async () => {
  const container = document.getElementById('depoimentos-lista');
  if (!container) return;

  try {
    const resp = await fetch('src/data/depoimentos.json');
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const reviews = await resp.json();

    reviews.forEach(rev => {
      const estrelas = '★'.repeat(rev.rating) + '☆'.repeat(5 - rev.rating);
      const div = document.createElement('div');
      div.className = 'depoimento';
      div.innerHTML = `
        <blockquote>
          <div class="depoimento-estrelas">${estrelas}</div>
          <p>${rev.text}</p>
          <footer>— ${rev.author_name} <small>(${rev.rating}/5)</small></footer>
          <time datetime="${rev.date}">
            ${new Date(rev.date).toLocaleDateString('pt-BR')}
          </time>
        </blockquote>
      `;
      container.appendChild(div);
    });

  } catch (e) {
    console.error('Erro ao carregar depoimentos:', e);
    container.textContent = 'Não foi possível carregar os depoimentos no momento.';
  }
})();