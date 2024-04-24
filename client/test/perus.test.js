const puppeteer = require('puppeteer');

describe('Perustestaus', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
  });

  afterEach(async () => {
    await browser.close();
  });

  test('Sovellus aukeaa', async () => {
    await page.goto('http://localhost:3000/');

    const title = await page.title(); 
    expect(title).toContain('Logiikkapiirin piirtosovellus');
  });
});