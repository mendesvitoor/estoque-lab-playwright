import { test, expect } from '../fixtures/test';

test.describe('Página inicial', () => {
  test.skip(!process.env.BASE_URL, 'Configure BASE_URL no arquivo .env para executar os testes.');

  test('abre a página inicial e apresenta o formulário de acesso', async ({ page, homePage }) => {
    await homePage.open();

    await expect(page).toHaveTitle('EstoqueLab | Laboratório de QA e Automação de Testes');
    await expect(homePage.heading).toBeVisible();
    await expect(homePage.loginHeading).toBeVisible();
    await expect(homePage.username).toBeVisible();
    await expect(homePage.password).toBeVisible();
  });

  test('entra no ambiente com as credenciais de demonstração', async ({ homePage }) => {
    await homePage.open();
    await homePage.login('admin', '123456');

    await expect(homePage.loginHeading).toBeHidden();
  });
});
