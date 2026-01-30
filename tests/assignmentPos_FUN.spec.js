// tests/assignment.spec.js
const { test, expect } = require('@playwright/test');

test.describe('IT3040 Assignment 1 - Final Verified Suite', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
  });

  // --- Helper Function (Robust) ---
  // Forces translation verification
  async function checkOutput(page, expectedText) {
    // Press Space to ensure the last word triggers the conversion
    await page.locator('#singlish').press('Space');
    
    // Wait for the output to appear in the result box
    const outputLocator = page.locator('#sinhala');
    await expect(outputLocator).not.toBeEmpty({ timeout: 10000 });
    
    // Check if the expected text exists within the output
    await expect(outputLocator).toContainText(expectedText);
  }

  // ==========================================
  // 1. POSITIVE FUNCTIONAL TESTS (Your 30 Sentences)
  // ==========================================

  test('Pos_Fun_0001: Simple Sentence', async ({ page }) => {
    await page.locator('#singlish').fill('nangi potha kiyavanavaa.');
    await checkOutput(page, 'නන්ගි පොත කියවනවා.');
  });

  test('Pos_Fun_0002: Compound Sentence', async ({ page }) => {
    await page.locator('#singlish').fill('ammayi thaaththayi kadee yanavaa vageema baduth gannavaa.');
    await checkOutput(page, 'අම්මයි තාත්තයි කඩේ යනවා වගේම බඩුත් ගන්නවා.');
  });

  test('Pos_Fun_0003: Complex Sentence', async ({ page }) => {
    await page.locator('#singlish').fill('oyaa heta enakan mama methana balan innavaa.');
    await checkOutput(page, 'ඔයා හෙට එනකන් මම මෙතන බලන් ඉන්නවා.');
  });

  test('Pos_Fun_0004: Question Form', async ({ page }) => {
    await page.locator('#singlish').fill('api adha raeeta monavadha uyanne?');
    await checkOutput(page, 'අපි අද රෑට මොනවද උයන්නෙ?');
  });

  test('Pos_Fun_0005: Polite Command', async ({ page }) => {
    await page.locator('#singlish').fill('karunaakaralaa dhorata thattu karanna epaa.');
    await checkOutput(page, 'කරුනාකරලා දොරට තට්ටු කරන්න එපා.');
  });

  test('Pos_Fun_0006: Negation', async ({ page }) => {
    await page.locator('#singlish').fill('mata kaeema genna mathaka naee.');
    await checkOutput(page, 'මට කෑම ගෙන්න මතක නෑ.');
  });

  test('Pos_Fun_0007: Past Tense/Place', async ({ page }) => {
    await page.locator('#singlish').fill('api giya maase gaallee giyaa.');
    await checkOutput(page, 'අපි ගිය මාසෙ ගාල්ලේ ගියා.');
  });

  test('Pos_Fun_0008: Future Tense', async ({ page }) => {
    await page.locator('#singlish').fill('ayiyaa heta pansal yaavi.');
    await checkOutput(page, 'අයියා හෙට පන්සල් යාවි.');
  });

  test('Pos_Fun_0009: Plural Form', async ({ page }) => {
    await page.locator('#singlish').fill('sisun iskolee sellam karanavaa.');
    await checkOutput(page, 'සිසුන් ඉස්කොලේ සෙල්ලම් කරනවා.');
  });

  test('Pos_Fun_0010: Conditional Request', async ({ page }) => {
    await page.locator('#singlish').fill('puluvannam mata thaeegga dhenna.');
    await checkOutput(page, 'පුලුවන්නම් මට තෑග්ග දෙන්න.');
  });

  test('Pos_Fun_0011: Mixed English Object', async ({ page }) => {
    await page.locator('#singlish').fill('mama aluth laptop ekak gaththaa.');
    await checkOutput(page, 'මම අලුත් laptop එකක් ගත්තා.');
  });

  test('Pos_Fun_0012: Mixed Brand Name', async ({ page }) => {
    await page.locator('#singlish').fill('mama Facebook ekee post ekak dhaemmaa.');
    await checkOutput(page, 'මම Facebook එකේ post එකක් දැම්මා.');
  });

  test('Pos_Fun_0013: Currency', async ({ page }) => {
    await page.locator('#singlish').fill('meeke mila Rs. 2500 yi.');
    await checkOutput(page, 'මේකෙ මිල Rs. 2500 යි.');
  });

  test('Pos_Fun_0014: Time Format', async ({ page }) => {
    await page.locator('#singlish').fill('api 8.00 AM ta hamuwemu.');
    await checkOutput(page, 'අපි 8.00 AM ට හමුවෙමු.');
  });

  test('Pos_Fun_0015: Date Format', async ({ page }) => {
    await page.locator('#singlish').fill('upan dhinaya 1999-05-12 venidhaa.');
    await checkOutput(page, 'උපන් දිනය 1999-05-12 වෙනිදා.');
  });

  test('Pos_Fun_0016: Formatting/Line Breaks', async ({ page }) => {
    await page.locator('#singlish').fill('gamata yanna \n\n parissamen.');
    // We check if both parts exist in the output (ignoring exact newline visual rendering)
    await checkOutput(page, 'ගමට යන්න');
    await checkOutput(page, 'පරිස්සමෙන්');
  });

  test('Pos_Fun_0017: Slang', async ({ page }) => {
    await page.locator('#singlish').fill('adoo patta kathaava eka machan.');
    await checkOutput(page, 'අඩෝ පට්ට කතාව එක මචන්.');
  });

  test('Pos_Fun_0018: Long Paragraph', async ({ page }) => {
    const longText = 'dubai vala ithihaasaya bohomath puraanaya. sapumal kumaru paeminiimata pera sitama helayo methana jiivath unaa. thissa rajuthumaa gaena thiyena kathaa vishvaasa karanna puluvan. dhaen kaale thiyena technology eka ekka baladhdhi rajayata godak dheeval hoyaaganna puluvan velaa thiyenavaa. Mee rata lassanayi vagema minisun hari  hodhayi. Api haemooma ekathu velaa rata hadhanna oona.';
    await page.locator('#singlish').fill(longText);
    // Verify start and end to ensure full conversion
    await checkOutput(page, 'dubai වල ඉතිහාසය බොහොමත් පුරානය.');
    await checkOutput(page, 'රට හදන්න ඕන.');
  });

  test('Pos_Fun_0019: Feeling/State', async ({ page }) => {
    await page.locator('#singlish').fill('mata bada giniyi.');
    await checkOutput(page, 'මට බඩ ගිනියි.');
  });

  test('Pos_Fun_0020: Group Subject', async ({ page }) => {
    await page.locator('#singlish').fill('api haemooma ekata ekathu velaa vaeda.');
    await checkOutput(page, 'අපි හැමෝම එකට එකතු වෙලා වැඩ.');
  });

  test('Pos_Fun_0021: English Abbreviation', async ({ page }) => {
    await page.locator('#singlish').fill('eyaa oyaage ID eka evanna kivvaa.');
    await checkOutput(page, 'එයා ඔයාගෙ ID එක එවන්න කිව්වා.');
  });

  test('Pos_Fun_0022: Question Emphasis', async ({ page }) => {
    await page.locator('#singlish').fill('oyaa mokadha karanne? kiyanna!');
    await checkOutput(page, 'ඔයා මොකද කරන්නේ? කියන්න!');
  });

  test('Pos_Fun_0023: Repeated Words', async ({ page }) => {
    await page.locator('#singlish').fill('himin himin yanna.');
    await checkOutput(page, 'හිමින් හිමින් යන්න.');
  });

  test('Pos_Fun_0024: Greeting', async ({ page }) => {
    await page.locator('#singlish').fill('Suba raathriyak!');
    await checkOutput(page, 'සුබ රාත්‍රියක්!');
  });

  test('Pos_Fun_0025: Confirmation Response', async ({ page }) => {
    await page.locator('#singlish').fill('Ov, eekanam vaeradhiyi.');
    await checkOutput(page, 'ඔව්, ඒකනම් වැරදියි.');
  });

  test('Pos_Fun_0026: Idiomatic Question', async ({ page }) => {
    await page.locator('#singlish').fill('eyaa koyi lookedha inne?');
    await checkOutput(page, 'එයා කොයි ලෝකෙද ඉන්නේ?');
  });

  test('Pos_Fun_0027: Thanks', async ({ page }) => {
    await page.locator('#singlish').fill('akkaata godaak sthuthiyi.');
    await checkOutput(page, 'අක්කාට ගොඩාක් ස්තුතියි.');
  });

  test('Pos_Fun_0028: Future Prediction', async ({ page }) => {
    await page.locator('#singlish').fill('anidhdhaa vahinavaa.');
    await checkOutput(page, 'අනිද්දා වහිනවා.');
  });

  test('Pos_Fun_0029: Food Suggestion', async ({ page }) => {
    await page.locator('#singlish').fill('api aappa kamu.');
    await checkOutput(page, 'අපි ආප්ප කමු.');
  });

  test('Pos_Fun_0030: Units (Weight)', async ({ page }) => {
    await page.locator('#singlish').fill('siini 1kg k ganna.');
    await checkOutput(page, 'සීනි 1kg ක් ගන්න.');
  });

 

});