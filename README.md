# EstoqueLab Playwright

Automação end-to-end do EstoqueLab com Playwright e TypeScript.

## Requisitos

- Node.js 20.19 ou superior e npm
- A aplicação disponível em uma URL acessível

## Configuração local

```powershell
npm ci
Copy-Item .env.example .env
npx playwright install chromium
```

O arquivo .env.example aponta para a aplicação publicada. Altere BASE_URL no arquivo .env para testar outra instância.

```dotenv
BASE_URL=https://estoquelab.netlify.app
```

Execute os testes com npm test. Sem BASE_URL, eles são ignorados. O cenário de login usa as credenciais fictícias de demonstração exibidas na página (admin / 123456).

## Comandos úteis

- npm test: executa testes em Chromium
- npm run test:ui: abre a interface interativa do Playwright
- npm run test:headed: mostra o navegador durante a execução
- npm run test:debug: abre o depurador
- npm run test:report: abre o relatório HTML mais recente
- npm run check: executa ESLint, Prettier e verificação de tipos

## Organização

```text
tests/
├── e2e/          # Cenários agrupados por funcionalidade
├── fixtures/     # Fixtures compartilhadas
└── pages/        # Page Objects e seletores da interface
```

Cada teste recebe um contexto de navegador isolado. Prefira seletores acessíveis (getByRole, getByLabel e getByText), evite esperas fixas e aguarde condições com expect.

## Integração contínua

O workflow .github/workflows/quality.yml verifica lint, formatação, tipos e testes E2E em pushes e pull requests para main. O relatório HTML e os resultados de falha são anexados ao workflow por 14 dias.

## GitHub

Repositório público sugerido: mendesvitoor/estoque-lab-playwright.
