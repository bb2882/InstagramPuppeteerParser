const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/accounts/login/');
  await page.waitFor('input[name="username"]');
  await page.focus('input[name="username"]');
  await page.keyboard.type('fdkpdk11');
  await page.focus('input[name="password"]');
  await page.keyboard.type('azat123321');
  await page.click('button[type="submit"]');
})();