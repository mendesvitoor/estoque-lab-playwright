import 'dotenv/config';
import { defineConfig, devices } from '@playwright/test';

const isCI = Boolean(process.env.CI);

export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.ts',
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  workers: isCI ? 2 : undefined,
  reporter: [['list'], ['html', { open: 'never' }]],
  timeout: 30_000,
  expect: { timeout: 5_000 },
  use: {
    baseURL: process.env.BASE_URL || undefined,
    actionTimeout: 10_000,
    navigationTimeout: 15_000,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  outputDir: 'test-results',
});
