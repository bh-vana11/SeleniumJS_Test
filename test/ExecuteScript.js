/*const { Builder, Browser, By, Key, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build()
  try {
    await driver.navigate().to('https://www.amazon.in/');
    await driver.executeScript(`document.querySelector("a[href='https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer']").scrollIntoView()`);
    await driver.sleep(5000);
  } finally {
    await driver.quit()
  }
})(); */
const { Builder, Browser, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function example() {
  let options = new chrome.Options();
  options.addArguments('--ignore-certificate-errors');
  options.addArguments('--disable-blink-features=AutomationControlled');

  let driver = await new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeOptions(options)
    .build();

  try {
    await driver.navigate().to('https://www.amazon.in/');

    // Wait until the element is present
    await driver.wait(until.elementLocated(By.css("a[href='https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer']")), 10000);

    await driver.executeScript(`document.querySelector("a[href='https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer']").scrollIntoView()`);
    
    // Adding a sleep to see the scroll effect
    await driver.sleep(5000);
  } finally {
    await driver.quit();
  }
})();


