// tests/assignmentNeg.spec.js

const { test, expect } = require('@playwright/test');



test.describe('IT3040 Assignment 1 - Negative & Robustness Test Suite', () => {



  test.beforeEach(async ({ page }) => {

    await page.goto('https://www.swifttranslator.com/');

  });



  // --- Helper Function ---

  // Forces translation by pressing Space and checks if the output contains expected text

  async function checkOutput(page, expectedText) {

    await page.locator('textarea').first().press('Space');

    const outputLocator = page.locator('div.bg-slate-50');

    

    // Ensure output is generated

    await expect(outputLocator).not.toBeEmpty({ timeout: 10000 });

    

    // Check if the output contains the expected result (robust match)

    await expect(outputLocator).toContainText(expectedText);

  }



  // ==========================================

  // NEGATIVE / ROBUSTNESS TEST CASES

  // ==========================================



  test('Neg_Fun_0001: Mixed Good Behavior', async ({ page }) => {

    await page.locator('textarea').first().fill('oyaa guna yahapath Lamayek.');

    await checkOutput(page, 'ඔයා ගුණ යහපත් ළමයෙක්.');

  });



  test('Neg_Fun_0002: Mixed English Grammar', async ({ page }) => {

    await page.locator('textarea').first().fill('api heta meet vemu.');

    await checkOutput(page, 'අපි හෙට meet වෙමු.');

  });



  test('Neg_Fun_0003: Math Equation', async ({ page }) => {

    await page.locator('textarea').first().fill('x + y = 10 meya visadhanna.');

    await checkOutput(page, 'x + y = 10 මෙය විසදන්න.');

  });



  test('Neg_Fun_0004: Number Context', async ({ page }) => {

    await page.locator('textarea').first().fill('apee mallige wayasa avurudhu 20k wenwa.');

    await checkOutput(page, 'අපේ මල්ලිගේ වයස අවුරුදු 20ක් වෙනවා.');

  });



  test('Neg_Fun_0005: Password/Credentials', async ({ page }) => {

    await page.locator('textarea').first().fill('magee password eka Nethna3456');

    await checkOutput(page, 'මගේ password එක Nethna3456');

  });



  test('Neg_Fun_0006: URL Handling', async ({ page }) => {

    await page.locator('textarea').first().fill('www.swifttranslator.com mee web site ekata yanna.');

    await checkOutput(page, 'www.swifttranslator.com මේ web site එකට යන්න.');

  });



  test('Neg_Fun_0007: Mixed Language Names', async ({ page }) => {

    await page.locator('textarea').first().fill('magee rata Sri Lanka vayi');

    await checkOutput(page, 'මගේ රට ශ්‍රී ලංකා වයි.');

  });



  test('Neg_Fun_0008: Email Address', async ({ page }) => {

    await page.locator('textarea').first().fill('apee mallige email eka yasiru@gmail.com');

    await checkOutput(page, 'අපේ මල්ලිගේ email එක yasiru@gmail.com');

  });



  test('Neg_Fun_0009: Hashtags', async ({ page }) => {

    await page.locator('textarea').first().fill('haemoma comment karala thibuNaa #Srilanka kiyalaa.');

    await checkOutput(page, 'හැමෝම comment කරලා තිබුණා #SriLanka කියලා.');

  });



  test('Neg_Fun_0010: Missing Spaces (Stress Test)', async ({ page }) => {

    await page.locator('textarea').first().fill('oyatempleekatagiyadha?');

    await checkOutput(page, 'ඔයා temple එකට ගියාද?');

  });



  // --- New Test Case ---

  test('Neg_Fun_0011: Temperature Unit', async ({ page }) => {

    await page.locator('textarea').first().fill('mee upakaraNayee dhaen uShNthvaya 212°F yi.');

    await checkOutput(page, 'මේ උපකරණයේ දැන් උෂ්ණ්ත්වය 212°F යි.');

  });



});