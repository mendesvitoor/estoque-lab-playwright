import type { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly heading: Locator;
  readonly loginHeading: Locator;
  readonly username: Locator;
  readonly password: Locator;
  readonly submitButton: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { level: 1 });
    this.loginHeading = page.getByRole('heading', { name: 'Entrar no EstoqueLab' });
    this.username = page.getByLabel('Usuário');
    this.password = page.getByLabel('Senha');
    this.submitButton = page.getByRole('button', { name: 'Entrar' });
  }

  async open(): Promise<void> {
    await this.page.goto('/');
  }

  async login(username: string, password: string): Promise<void> {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.submitButton.click();
  }
}
