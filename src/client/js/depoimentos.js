// src/client/js/depoimentos.js
(async () => {
  // === CONFIGURAÇÕES ===
  const API_KEY = 'SUA_API_KEY_AQUI';            // ← substitua com sua chave
  const PLACE_ID = 'SEU_PLACE_ID_AQUI';          // ← substitua com o Place ID
  // =======================

  // Endpoint da Google Places API solicitando apenas os reviews
  const endpoint = `https://maps.googleapis.com/maps/api/place/details/json?
    place_id=${PLACE_ID}
    &key=${API_KEY}
    &fields=reviews`;

  try {
    const resp = await fetch(endpoint);
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const data = await resp.json();

    const container = document.getElementById('depoimentos-lista');
    if (!container) {
      console.error('#depoimentos-lista not found');
      return;
    }

    data.result.reviews.forEach(rev => {
      const div = document.createElement('div');
      div.className = 'depoimento';
      div.innerHTML = `
        <blockquote>
          <p>${rev.text}</p>
          <footer>— ${rev.author_name}
            <small>(Nota: ${rev.rating}/5)</small></footer>
          <time datetime="${rev.time}">
            ${new Date(rev.time * 1000).toLocaleDateString('pt-BR')}
          </time>
        </blockquote>
      `;
      container.appendChild(div);
    });
  } catch (e) {
    console.error('Erro ao carregar depoimentos do Google:', e);
    const container = document.getElementById('depoimentos-lista');
    if (container) container.textContent = 'Não foi possível carregar os depoimentos no momento.';
  }
})();