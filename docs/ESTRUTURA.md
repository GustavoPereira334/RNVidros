2# Estrutura de Pastas do Projeto Web

Esta pasta contém a organização sugerida para um site institucional voltado para microempresa de vidros. Cada diretório tem um propósito específico, facilitando a manutenção e o desenvolvimento escalável.

## src/
Diretório principal do código-fonte da aplicação. Contém os subdiretórios `client` e `server`.

### src/client
Código do **frontend** (cliente). Inclui:
- HTML, CSS e JavaScript puro ou frameworks (React, Vue, etc.).
- Componentes de interface do usuário.
- Views/responsáveis por renderizar as páginas.
- Estilos globais e módulos de UI.

### src/server
Código do **backend** (servidor). Inclui:
- Lógica de negócio e rotas API.
- Integração com banco de dados.
- Autenticação, autorização e middleware.
- Qualquer código que não deve ser exposto ao cliente.

## public/
Diretório de **arquivos estáticos** servidos diretamente ao navegador sem processamento do servidor. Contém:
- `index.html` (página principal).
- Favicon, manifestos e ícones.
- Outros recursos estáticos como imagens ou fuentes que não precisam de processamento.

## assets/
Pasta para **recursos visuais e de estilo** utilizados tanto no cliente quanto no servidor.

### assets/css
- Arquivos CSS (stylesheets) com estilos globais, componentes e temas.
- Possivelmente SCSS/SASS ou módulos CSS.

### assets/js
- Scripts JavaScript adicionais que não estejam dentro de `src/client`.
- Bibliotecas ou helpers compartilhados.

### assets/images
- Imagens, ícones, ilustrações e assets gráficos usados na aplicação.
- Subpastas por tipo se necessário (ex.: `icons`, `photos`).

## config/
Arquivos de **configuração** da aplicação. Exemplos:
- Variáveis de ambiente (`.env`, `.env.example`).
- Arquivos de script de build/deploy (`build.sh`, `deploy.yml`).
- Configurações de serviço (ex.: `nginx.conf`, `docker-compose.yml`).

## docs/
Diretório de **documentação** do projeto. Contém:
- Manual de instalação e setup (`INSTALL.md`).
- Guia de contribuição (`CONTRIBUTING.md`).
- Documentação da API (`API.md`).
- Decisões de arquitetura (`DECISIONS.md`).
- FAQ e guias de estilo (`STYLE_GUIDE.md`).

## tests/
Pasta onde residem todos os **testes automatizados**:
- Testes unitários (`unit/`).
- Testes de integração (`integration/`).
- Testes E2E (end‑to‑end) (`e2e/`).
- Configurações de framework de testes (ex.: `jest.config.js`, `pytest.ini`).

## scripts/
**Scripts auxiliares** para automação de tarefas recorrentes, como:
- Build (`build.sh`, `build.ps1`).
- Lint/format (`lint.sh`, `format.sh`).
- Deploy (`deploy.sh`, `deploy.ps1`).
- Scripts de migração de banco (`migrate.sh`).

## root files (raiz do projeto)
Arquivos essenciais que definem o projeto:

- `package.json` ou `pyproject.toml` / `go.mod` etc. – dependências e scripts NPM.
- `README.md` – visão geral, instruções rápidas de uso.
- `.gitignore` – regras de exclusão de arquivos do controle de versão.
- `.gitattributes` – configurações de ignorar/filtrar ao versionar.
- `.github/workflows` – pipelines de CI/CD (ex.: `ci.yml`).
- `LICENSE` – licença do projeto.

---

### Por que essa organização?
- **Separar responsabilidades**: Frontend, backend e recursos estáticos ficam em diretórios claros.
- **Manter escalabilidade**: Novos recursos podem ser adicionados sem sobrecarregar um único diretório.
- **Facilitar a colaboração**: Equipes diferentes podem trabalhar simultaneamente em `client` e `server`.
- **Automatizar builds**: Diretórios bem definidos permitem scripts de build e deploy previsíveis.

Esta estrutura pode ser adaptada conforme o crescimento do projeto ou a adoção de frameworks específicos, mas serve como ponto de partida sólido para um site de microempresa de vidros.