# Como puxar avaliações (depoimentos) do Google para o site da RN Vidros

Este documento descreve, passo a passo, as duas formas mais usadas para trazer os reviews do Google para a sua página web:

*Usando a **Google Places API** (recomendado e oficial)  
*Usando o **widget de avaliações do Google** (sem código)

---  

## 1. Preparação – obter uma API‑Key e o Place ID

| Etapa | O que fazer | Onde fazer |
|------|--------------|------------|
| **1.1 Criar conta no Google Cloud** | Acesse <https://console.cloud.google.com/> e crie (ou use) sua conta. | Console Google Cloud |
| **1.2 Criar credenciais** | No menu *APIs & Services → Credentials* clique em **Create credentials → API key**. Copie a chave gerada (ex.: `AIzaSyAd…`). | Console Google Cloud |
| **1.3 Habilitar a Places API** | No menu *APIs & Services → Library* procure por **Places API** e clique em **Enable**. | Console Google Cloud |
| **1.4 (Opcional) Habilitar Reviews API** | Caso precise de mais de 10 reviews por chamada, ative **Places Reviews API** (necessário aprovação). | Console Google Cloud |
| **1.5 Encontrar o Place ID** | Abra a página do Google Maps da sua empresa. Na barra de endereço a URL contém algo como `.../place?id=**ChIJ…**`. Copie esse valor – ele é o **Place ID**. | Google Maps (web) |

> **Importante:** Nunca publique a sua API‑Key em código aberto. Use variáveis de ambiente ou um proxy no servidor para mantê‑la protegida.

---  

## 2. Exibir reviews via JavaScript (fetch) – abordagem mais flexível

### 2.1 Estrutura HTML mínima

```html
<section id="Depoimentos">
  <div class="container">
    <div class="sectionTitle"><h2>O que nossos clientes dizem</h2></div>
    <div id="depoimentos-lista"></div>
  </div>
</section>

<script src="/js/depoimentos.js"></script>
```

> **Dica:** Salve o script em `src/client/js/depoimentos.js` ou em qualquer diretório de assets que você prefira.

### 2.2 Código JavaScript (fetch)

```js
// src/client/js/depoimentos.js
(async () => {
  // === CONFIGURAÇÕES ===
  const API_KEY  = 'SUA_API_KEY_AQUI';            // ← substitua
  const PLACE_ID = 'SEU_PLACE_ID_AQUI';           // ← substitua
  // =======================

  // Endpoint da Places API solicitando apenas os reviews
  const endpoint = `https://maps.googleapis.com/maps/api/place/details/json?
    place_id=${PLACE_ID}
    &key=${API_KEY}
    &fields=reviews`;

  try {
    const resp = await fetch(endpoint);
    const data = await resp.json();

    const container = document.getElementById('depoimentos-lista');

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
    container.textContent = 'Não foi possível carregar os depoimentos no momento.';
  }
})();
```

### 2.3 CSS rápido para estilizar

```css
/* src/client/css/depoimentos.css */
#depoimentos-lista .depoimento {
  margin-bottom: 2rem;
  padding: 1rem;
  border-left: 4px solid #4CAF50;
  background:#f9f9f9;
}
#depoimentos-lista blockquote {
  margin: 0;
  font-style: italic;
}
```

> **Como usar:** importe o CSS na sua página principal ou adicione o `<link>` ao `<head>`.

### 2.4 Segurança – evitar expor a API‑Key no cliente

A maneira mais segura é **fazer a chamada do lado do servidor** (Node, PHP, etc.) e apenas devolver os reviews ao front‑end.  
Se precisar de ajuda para criar esse proxy, avise que eu gero o código.

---  

## 3. Widget oficial “Google Reviews” (sem código)

Se você não quiser gerenciar APIs, o Google oferece um **widget de avaliação** que pode ser inserido direto na página.

```html
<section id="Depoimentos">
  <div class="container">
    <div class="sectionTitle"><h2>O que nossos clientes dizem</h2></div>

    <!-- Botão de avaliação (Google) -->
    <a class="g-certificate"
       href="https://www.google.com/search?q=RN+Vidros+Soluções+e+Vidros">
      ★ ★ ★ ★ ★
    </a>

    <!-- Área onde o widget será renderizado -->
    <div id="google-reviews-widget"></div>
  </div>
</section>

<script src="https://apis.google.com/js/platform.js"></script>
<script>
  // Inicializa o widget (necessário estar logado com a conta da empresa)
  window.gapi.load('client:review', function() {
    gapi.client.init('YOUR_CLIENT_ID').then(() => {
      gapi.client.review.get({url: 'https://search.google.com/search?id=YOUR_SEARCH_ID'})
        .then(res => {
          // Renderiza em #google-reviews-widget
        });
    });
  });
</script>
```

- **Vantagens:** não exige chave, não gera chamadas extras.  
- **Limitações:** mostra apenas a classificação geral e um breve trecho “Mostrar mais”. Não traz o texto completo das avaliações.

---  

## 4. Boas práticas e políticas de uso

| Item | O que observar |
|------|----------------|
| **Limite de quota** | O plano gratuito permite ~1 000 chamadas/dia. Cada `place/details` consome 1 quota por chamada. Monitore o uso no console do Google Cloud. |
| **Exposição da chave** | Nunca coloque a API‑Key em repositórios públicos. Use `.env` ou variáveis de ambiente e registre-a como secret. |
| **Conteúdo das avaliações** | Não edite o texto das reviews. Apresente‑as exatamente como o Google entrega. |
| **Política de uso** | Respeite os Termos de Serviço do Google Places. Caso precise de mais de 10 reviews por chamada, solicite aprovação da **Reviews API** ou use um proxy server‑side. |
| **Cache** | Para economizar quota, armazene os resultados em cache por alguns minutos (ex.: `max‑age: 300`). |

---  

## 5. Próximos passos que eu posso ajudar

| O que você pode pedir | Como eu ajudo |
|-----------------------|---------------|
| **Gerar um exemplo completo** (HTML + CSS + JS pronto) | Crio um arquivo `depoimentos.html` pronto para colar no seu `docs/` ou no seu projeto. |
| **Criar um proxy server‑side** (Node/Express ou PHP) | Fornecerei o código que esconde a API‑Key e devolve apenas os reviews. |
| **Integrar com um framework** (React, Vue, Laravel, etc.) | Escrevo um componente/hook específico para a stack que você estiver usando. |
| **Configurar CI/CD** para validar as chamadas de API durante o build | Ajudo a montar uma pipeline no GitHub Actions que verifica se a quota ainda está disponível. |
| **Qualquer outra dúvida** sobre a API ou uso correto | Respondo detalhadamente e aponta links oficiais. |

---  

*Este documento foi criado em **2026‑04‑10** e pode ser atualizado conforme novas versões da Google Places API.*   