 // tests/assignment1.spec.js
const { test, expect } = require('@playwright/test');

test.describe('IT3040 Assignment 1 - Positive Test Suite', () => {

  // වෙබ් අඩවියට පිවිසීම
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
  });

  // --- Helper Function ---
  // මෙය භාවිතා කරන්නේ පරිවර්තනය සිදුවන තෙක් රැඳී සිටීමට සහ ප්‍රතිඵලය පරීක්ෂා කිරීමටයි.
  async function checkOutput(page, expectedText) {
    // Space බොත්තම ඔබා පරිවර්තනය Trigger කරයි
    await page.locator('#singlish').press('Space');
    
    const outputLocator = page.locator('#sinhala');
    
    // ප්‍රතිඵලය ලැබෙන තෙක් තත්පර කිහිපයක් රැඳී සිටී
    await expect(outputLocator).not.toBeEmpty({ timeout: 30000 });
    
    // බලාපොරොත්තු වන වචන ප්‍රතිඵලයේ ඇත්දැයි පරීක්ෂා කරයි
    await expect(outputLocator).toContainText(expectedText);
  }

  // ==========================================
  // POSITIVE TEST CASES (ඔබගේ වාක්‍ය 30)
  // ==========================================

  test('Pos_Fun_0001: Simple Sentence', async ({ page }) => {
    await page.locator('#singlish').fill('malli potha kiyavanavaa.');
    await checkOutput(page, 'මල්ලි පොත කියවනවා.');
  });

  test('Pos_Fun_0002: Compound Sentence', async ({ page }) => {
    await page.locator('#singlish').fill('akkayi malliyi kadee yanavaa vageema baduth gannavaa.');
    await checkOutput(page, 'අක්කයි මල්ලියි කඩේ යනවා වගේම බඩුත් ගන්නවා.');
  });

  test('Pos_Fun_0003: Complex Sentence', async ({ page }) => {
    await page.locator('#singlish').fill('malli heta enakan akkaa methana balan innavaa.');
    await checkOutput(page, 'මල්ලි හෙට එනකන් අක්කා මෙතන බලන් ඉන්නවා.');
  });

  test('Pos_Fun_0004: Interrogative (Question)', async ({ page }) => {
    await page.locator('#singlish').fill('api adha raeeta monavadha kanne?');
    await checkOutput(page, 'අපි අද රෑට මොනවද කන්නෙ?');
  });

  test('Pos_Fun_0005: Polite Command', async ({ page }) => {
    await page.locator('#singlish').fill('karunaakaralaa oluvata thattu karanna epaa.');
    await checkOutput(page, 'කරුනාකරලා ඔලුවට තට්ටු කරන්න එපා.');
  });

  test('Pos_Fun_0006: Negation', async ({ page }) => {
    await page.locator('#singlish').fill('mata potha geenna mathaka naee.');
    await checkOutput(page, 'මට පොත ගේන්න මතක නෑ.');
  });

  test('Pos_Fun_0007: Past Tense', async ({ page }) => {
    await page.locator('#singlish').fill('api giya maase maathara giyaa.');
    await checkOutput(page, 'අපි ගිය මාසෙ මාතර ගියා.');
  });

  test('Pos_Fun_0008: Future Tense', async ({ page }) => {
    await page.locator('#singlish').fill('akkaa heta pansal yaavi.');
    await checkOutput(page, 'අක්කා හෙට පන්සල් යාවි.');
  });

  test('Pos_Fun_0009: Plural Form', async ({ page }) => {
    await page.locator('#singlish').fill('sisun pittaniyee sellam karanavaa.');
    await checkOutput(page, 'සිසුන් පිට්ටනියේ සෙල්ලම් කරනවා.');
  });

  test('Pos_Fun_0010: Conditional Request', async ({ page }) => {
    await page.locator('#singlish').fill('puluvannam mata potha dhenna.');
    await checkOutput(page, 'පුලුවන්නම් මට පොත දෙන්න.');
  });

  test('Pos_Fun_0011: Mixed English (Object)', async ({ page }) => {
    await page.locator('#singlish').fill('mama aluth bus ekak gaththaa.');
    await checkOutput(page, 'මම අලුත් bus එකක් ගත්තා.');
  });

  test('Pos_Fun_0012: Mixed English (Brand)', async ({ page }) => {
    await page.locator('#singlish').fill('eyaa Facebook ekee post ekak dhaemmaa.');
    await checkOutput(page, 'එයා Facebook එකේ post එකක් දැම්මා.');
  });

  test('Pos_Fun_0013: Currency Format', async ({ page }) => {
    await page.locator('#singlish').fill('car ekee mila Rs. 5500.');
    await checkOutput(page, 'car එකේ මිල Rs. 5500.');
  });

  test('Pos_Fun_0014: Time Format', async ({ page }) => {
    await page.locator('#singlish').fill('api 10.00 AM ta hamuvemu.');
    await checkOutput(page, 'අපි 10.00 AM ට හමුවෙමු.');
  });

  test('Pos_Fun_0015: Date Format', async ({ page }) => {
    await page.locator('#singlish').fill('upan dhinaya 1996-05-23 venidhaa.');
    await checkOutput(page, 'උපන් දිනය 1996-05-23 වෙනිදා.');
  });

  test('Pos_Fun_0016: Formatting (Spaces/Line Breaks)', async ({ page }) => {
    // මෙම වාක්‍යයේ ඇති හිස්තැන් (Spaces) එලෙසම තබා ඇත
    const multiLineInput = 'parissamen        pansalata                                                                        yanna.';
    await page.locator('#singlish').fill(multiLineInput);
    // වචන වෙන් වෙන්ව පරිවර්තනය වී ඇත්දැයි බලයි
    await checkOutput(page, 'පරිස්සමෙන්');
    await checkOutput(page, 'පන්සලට');
  });

  test('Pos_Fun_0017: Slang Expression', async ({ page }) => {
    await page.locator('#singlish').fill('adoo maara paadama eeka machan.');
    await checkOutput(page, 'අඩෝ මාර පාඩම ඒක මචන්.');
  });

  test('Pos_Fun_0018: Long Paragraph', async ({ page }) => {
    const longText = 'dubai vala ithihaasaya bohomath puraanaya. sapumal kumaru paeminiimata pera sitama helayo methana jiivath unaa. thissa rajuthumaa gaena thiyena kathaa vishvaasa karanna puluvan. dhaen kaale thiyena technology eka ekka baladhdhi rajayata godak dheeval hoyaaganna puluvan velaa thiyenavaa. Mee rata lassanayi vagema minisun hari naeNa guNavath . Api haemooma ekathu velaa rata hadhanna oona.';
    await page.locator('#singlish').fill(longText);
    
    // ඡේදයේ මුල සහ අග පරීක්ෂා කරයි
    await checkOutput(page, 'dubai වල ඉතිහාසය බොහොමත් පුරානය.');
    await checkOutput(page, 'රට හදන්න ඕන.');
  });

  test('Pos_Fun_0019: Feeling/State', async ({ page }) => {
    await page.locator('#singlish').fill('mallita badaginiyi.');
    await checkOutput(page, 'මල්ලිට බඩගිනියි.');
  });

  test('Pos_Fun_0020: Group Subject', async ({ page }) => {
    await page.locator('#singlish').fill('api haemooma heta vaeda.');
    await checkOutput(page, 'අපි හැමෝම හෙට වැඩ.');
  });

  test('Pos_Fun_0021: English Abbreviation', async ({ page }) => {
    await page.locator('#singlish').fill('eyaata oyaage ID eka oona kivvaa.');
    await checkOutput(page, 'එයාට ඔයාගෙ ID එක ඕන කිව්වා.');
  });

  test('Pos_Fun_0022: Question with Emphasis', async ({ page }) => {
    await page.locator('#singlish').fill('oyaa bath kanavadha? kiyanna!');
    await checkOutput(page, 'ඔයා බත් කනවද? කියන්න!');
  });

  test('Pos_Fun_0023: Repeated Words', async ({ page }) => {
    await page.locator('#singlish').fill('ikmanata ikmanata yanna.');
    await checkOutput(page, 'ඉක්මනට ඉක්මනට යන්න.');
  });

  test('Pos_Fun_0024: Greeting', async ({ page }) => {
    await page.locator('#singlish').fill('Suba raathriyak!');
    await checkOutput(page, 'සුබ රාත්‍රියක්!');
  });

  test('Pos_Fun_0025: Confirmation', async ({ page }) => {
    await page.locator('#singlish').fill('Ov, eeka vaeradhiyi.');
    await checkOutput(page, 'ඔව්, ඒක වැරදියි.');
  });

  test('Pos_Fun_0026: Idiomatic Question', async ({ page }) => {
    await page.locator('#singlish').fill('oyaa koyi lookedha inne?');
    await checkOutput(page, 'ඔයා කොයි ලෝකෙද ඉන්නේ?');
  });

  test('Pos_Fun_0027: Thanks', async ({ page }) => {
    await page.locator('#singlish').fill('oyaata godaak sthuthiyi.');
    await checkOutput(page, 'ඔයාට ගොඩාක් ස්තුතියි.');
  });

  test('Pos_Fun_0028: Future Prediction', async ({ page }) => {
    await page.locator('#singlish').fill('anidhdhaa paayanavaa.');
    await checkOutput(page, 'අනිද්දා පායනවා.');
  });

  test('Pos_Fun_0029: Food Suggestion', async ({ page }) => {
    await page.locator('#singlish').fill('api vadee kamu.');
    await checkOutput(page, 'අපි වඩේ කමු.');
  });

  test('Pos_Fun_0030: Units (Weight)', async ({ page }) => {
    await page.locator('#singlish').fill('parippu 5kg ganna.');
    await checkOutput(page, 'පරිප්පු 5kg ගන්න.');
  });

});