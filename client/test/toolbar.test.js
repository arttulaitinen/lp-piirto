const puppeteer = require('puppeteer');

describe('Toolbar', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch(); 
    page = await browser.newPage();

    await page.goto('http://localhost:3000');
  });

  afterEach(async () => {
    await browser.close();
  });

  test('Lisää portti', async () => {
    const skipLoginButton = await page.waitForSelector('button:last-of-type');
  
    await skipLoginButton.click();

    const drawingComponentSelector = '[data-testid="drawing-area"]';
    await page.waitForSelector(drawingComponentSelector);

    const dropdownButton = await page.waitForSelector('.dropdown-toggle');
    await dropdownButton.click();

    const andGateButton = await page.waitForSelector('.dropdown-menu li:first-of-type a'); 
    await andGateButton.click(); 

    const andGateElement = await page.waitForSelector('[data-testid="and-gate"]'); 
    expect(andGateElement).toBeDefined(); 
  });
  test('Lisää yhteys', async () => {
    const skipLoginButton = await page.waitForSelector('button:last-of-type');
  
    await skipLoginButton.click();

    const drawingComponentSelector = '[data-testid="drawing-area"]';
    await page.waitForSelector(drawingComponentSelector);

    const addConnectionButton = await page.waitForSelector('button.border.btn.btn-light.mx-1'); 
    await addConnectionButton.click(); 
  
    const connectionElement = await page.waitForSelector('[data-testid="connection"]');
    expect(connectionElement).toBeDefined();
  });

});