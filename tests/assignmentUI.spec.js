// tests/assignmentUI.spec.js
const { test, expect } = require('@playwright/test');

test.describe('IT3040 Assignment 1 - UI Test Suite', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
  });

  // --- Helper Function ---
  async function checkOutput(page, expectedText) {
    // Force translation trigger
    await page.locator('textarea').first().press('Space');
    // Check output div
    const outputLocator = page.locator('div.bg-slate-50');
    await expect(outputLocator).not.toBeEmpty({ timeout: 15000 });
    await expect(outputLocator).toContainText(expectedText);
  }

  // ==========================================
  // POSITIVE UI TEST CASES
  // ==========================================

  test('Pos_UI_01: Real-time update check', async ({ page }) => {
    // Input: mama gedhara yanavaa, oba dhakinna puluvandha?
    await page.locator('textarea').first().fill('mama gedhara yanavaa, oba dhakinna puluvandha?');
    
    // Expected: මම ගෙදර යනවා, ඔබ දකින්න පුලුවන්ද?
    await checkOutput(page, 'මම ගෙදර යනවා, ඔබ දකින්න පුලුවන්ද?');
  });

  test('Pos_UI_02: Clear button functionality', async ({ page }) => {
    // Input: api mal vaththata yanavaa.
    await page.locator('textarea').first().fill('api mal vaththata yanavaa.');
    
    // Ensure text is entered first
    await expect(page.locator('textarea').first()).toHaveValue('api mal vaththata yanavaa.');

    // Action: Click Clear Button
    await page.getByRole('button', { name: 'Clear' }).first().click();

    // Expected: After clearing, input is empty
    await expect(page.locator('textarea').first()).toBeEmpty();
  });

  // ==========================================
  // NEGATIVE UI TEST CASES
  // ==========================================

  test('Neg_UI_01: Repetitive Pattern Input', async ({ page }) => {
    const input = 'oya oya oya oya oya oya oya oya oya oya oya oya oya oya oya oya oya oya oya oya oya oya oya oya oya oya oya oya oya oya oya oya oya oya';
    const expected = 'ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා';
    
    await page.locator('textarea').first().fill(input);
    await checkOutput(page, expected);
  });


});