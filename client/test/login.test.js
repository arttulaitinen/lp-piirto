const puppeteer = require('puppeteer');

describe('Login', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();

    await page.goto('http://localhost:3000/'); 
  });

  afterEach(async () => {
    await browser.close();
  });

  test('Login palauttaa false syöttäessä väärät tiedot', async () => {
    const usernameInput = await page.waitForSelector('input[placeholder="Käyttäjänimi"]');
    const passwordInput = await page.waitForSelector('input[placeholder="Salasana"]');
    const loginButton = await page.waitForSelector('button:first-of-type');

    await usernameInput.type('asd');
    await passwordInput.type('123');
    await loginButton.click();


    const errorMessage = await page.waitForSelector('p');
    const errorText = await errorMessage.evaluate(el => el.textContent);

    expect(errorText).toBe('Login failed');
  });

  test('Jatka kirjautumatta painike ohjaa eteenpäin', async () => {
    const skipLoginButton = await page.waitForSelector('button:last-of-type');
  
    await skipLoginButton.click();

    const drawingComponentSelector = '[data-testid="drawing-area"]';
    const drawingComponent = await page.waitForSelector(drawingComponentSelector); 
    expect(drawingComponent).toBeDefined(); 
  });
});