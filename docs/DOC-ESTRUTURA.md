# Estrutura do Projeto - RN Vidros

Visao geral da organizacao do projeto e o que cada pasta contem.

```
D:/RNVidros/
├── .github/            # Configuracoes do repositorio GitHub
├── .husky/             # Git hooks pre-commit
├── docs/               # Documentacao do projeto
├── public/             # Arquivos publicos estaticos
├── scripts/            # Scripts utilitarios do projeto
├── src/                # Codigo-fonte principal
│   ├── assets/         # Recursos estaticos (imagens, fontes, icones)
│   ├── css/            # Folhas de estilo
│   ├── js/             # JavaScript da aplicacao
│   ├── pages/          # Paginas HTML completas
│   └── components/     # Componentes reutilizaveis
├── tests/              # Testes automatizados
├── .gitignore          # Arquivos ignorados pelo git
├── .gitattributes      # Configuracoes de linha do git
└── index.html          # Pagina principal
```

---

## `.github/`

Configuracoes e templates para uso do repositorio no GitHub.

### `.github/ISSUE_TEMPLATE/`

Templates padronizados para criacao de issues.

| Arquivo | Descricao |
|---------|-----------|
| `bug_report.md` | Template para reportar erros/bugs encontrados |
| `feature_request.md` | Template para sugerir novas funcionalidades |

### `.github/workflows/`

Arquivos de CI/CD para execucao automatica em acoes do repositorio.

| Arquivo | Descricao |
|---------|-----------|
| `ci.yml` | Pipeline de integracao continua (lint + build) em PRs para main |

---

## `.husky/`

Git hooks pre-commit para validacoes automaticas antes de cada commit (linting, testes, etc). Quando configurado, impede commits que nao passam nas verificacoes.

---

## `docs/`

Documentacao interna do projeto. Aqui voce coloca:

- Documentacao de arquitetura
- Decisoes tecnicas (ADRs)
- Guias de implementacao
- Notas de versao / changelog
- Especificacoes de paginas e funcionalidades

---

## `public/`

Arquivos estaticos que sao servidos diretamente, sem passar pelo processamento do build.

- Favicons
- `robots.txt`
- `sitemap.xml`
- Imagens OG (Open Graph) para compartilhamento em redes sociais
- Arquivos `manifest.json` (PWA)

---

## `scripts/`

Scripts utilitarios para automatizar tarefas do projeto.

- Scripts de build customizados
- Scripts de geracao de sitemap
- Scripts de compressao de imagens
- Scripts de deploy
- Scripts de migracao ou manutencao

---

## `src/`

**Código-fonte principal do projeto.** Aqui reside todo o codigo do site.

### `src/assets/`

Recursos estaticos que sao importados/referenciados pelo codigo.

#### `src/assets/images/`

Todas as imagens do site:

- Fotos de trabalhos realizados (vidros temperados, janelas, boxes, espelhos)
- Imagens da equipe e da loja
- Logos
- Banners
- Fotos de projetos concluidos

Formatos recomendados: `.webp` (principal), `.png` (transparencia), `.svg` (logos/icones)

#### `src/assets/fonts/`

Arquivos de fontes customizadas se nao estiver usando Google Fonts via CDN:

- `.woff2` (principal — melhor compressao)
- `.woff` (fallback)

#### `src/assets/icons/`

Icones customizados do site:

- Icones de servicos (vidro temperado, laminado, espelho, etc)
- Icones de redes sociais
- Icones de UI (menu, setas, fechars)

---

### `src/css/`

Todas as folhas de estilo do projeto.

Arquivos que podem existir aqui:

- `main.css` — Estilos globais, reset, variaveis CSS
- `header.css` — Estilos do cabecalho
- `footer.css` — Estilos do rodape
- `hero.css` — Estilos da secao principal
- `cards.css` — Estilos dos cards de servicos
- `forms.css` — Estilos de formularios e inputs
- `buttons.css` — Estilos de botoes
- `animations.css` — Keyframes e transicoes
- `responsive.css` — Media queries e responsividade

Ou organize por metodologia BEM/Tailwind, conforme sua preferencia.

---

### `src/js/`

Todos os arquivos JavaScript.

#### `src/js/components/`

Componentes JavaScript/JS modulares para partes reutilizaveis da interface:

- `header.js` — Comportamento do cabecalho (menu mobile, scroll)
- `carousel.js` — Carrossel de imagens/fotos
- `modal.js` — Modais (orcamento, galeria)
- `form-validator.js` — Validacao de formularios
- `gallery.js` — Galeria de projetos
- `smooth-scroll.js` — Scroll suave entre secoes
- `lazy-loader.js` — Carregamento lazy de imagens
- `navbar.js` — Navegacao e toggle menu

#### `src/js/utils/`

Funcoes utilitarias compartilhadas:

- `format.js` — Formatacao de dados (telefone, CEP, moeda)
- `debounce.js` — Debounce para eventos de scroll/resize
- `api.js` — Funcoes de chamada de API/fetch
- `storage.js` — Manipulacao de localStorage/sessionStorage
- `date.js` — Funcoes de data
- `validators.js` — Validadores (e-mail, telefone)

---

### `src/pages/`

Paginas HTML completas do site (além do `index.html` da raiz).

Paginas sugeridas para uma vidracaria:

- `sobre.html` — Pagina sobre a empresa
- `servicos.html` — Pagina de servicos detalhados
- `projetos.html` — Galeria de projetos realizados
- `orcamento.html` — Pagina de solicitacao de orcamento
- `contato.html` — Pagina de contato com mapa
- `política-privacidade.html` — Política de privacidade (LGPD)
- `termos.html` — Termos de uso
- `404.html` — Pagina de erro

---

### `src/components/`

Componentes HTML reutilizaveis (snippets/parciais):

- `header.html` — Cabecalho com logo e navegação
- `footer.html` — Rodape com contatos e links
- `card-servico.html` — Card padrao de servico
- `card-projeto.html` — Card de projeto para galeria
- `cta-section.html` — Seccao de call-to-action
- `depoimento.html` — Card de depoimento de cliente
- `whatsapp-button.html` — Botao flutuante WhatsApp

Esses arquivos podem ser usados como includes/partials dependendo do build system escolhido.

---

## `tests/`

Testes automatizados do projeto.

Organizacao sugerida:

```
tests/
├── unit/          # Testes unitarios (funcoes JS individuais)
├── integration/   # Testes de integracao (fluxos completos)
├── e2e/           # Testes end-to-end (Playwright/Cypress)
└── fixtures/      # Dados mockados para testes
```

O que testar:

- Validacao de formularios
- Comportamento do menu mobile
- Carregamento lazy de imagens
- Envio de orcamento
- Navegacao smooth scroll

---

## Arquivos da Raiz

| Arquivo | Funcao |
|---------|--------|
| `.gitignore` | Lista de arquivos/pastas ignorados pelo git (node_modules, .env, build) |
| `.gitattributes` | Configuracoes de normalizacao de linha e arquivos binarios |
| `index.html` | Pagina principal (landing page) do site |
