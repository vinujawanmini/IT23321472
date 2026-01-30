// tests/assignmentPos_UI.spec.js
const { test, expect } = require('@playwright/test');

test.describe('IT3040 Assignment 1 - UI Test Suite', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
  });

  // ==========================================
  // POSITIVE UI TEST CASE
  // ==========================================

  test('Pos_UI_0001: Real-time output updates automatically', async ({ page }) => {
    // 1. Type "ma" slowly (simulate real user typing)
    await page.locator('textarea').first().pressSequentially('ma', { delay: 100 });
    
    // 2. Check partial result (Sinhala 'ම') inside the output div
    // This confirms the UI is reacting while the user types
    await expect(page.locator('div.bg-slate-50')).toContainText('ම');

    // 3. Complete the word "mama"
    await page.locator('textarea').first().pressSequentially('ma', { delay: 100 });
    
    // 4. Check full result (Sinhala 'මම')
    await expect(page.locator('div.bg-slate-50')).toContainText('මම');
  });




});