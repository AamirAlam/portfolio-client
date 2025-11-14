// tests-e2e/auth.spec.ts
import { test, expect } from '@playwright/test'

test('Should load the app', async ({ page }) => {
  // Visit root page
  await page.goto('/')

  // rediect to login page
  await expect(page.getByText('© 2025 Aamir Alam | Fullstack Blockchain Developer')).toBeVisible()
})