const { Builder, Browser, By, Key, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build()
  try {
    await driver.navigate().to('https://www.google.com/ncr');
    await driver.navigate().back();
    await driver.navigate().forward('https://www.google.com/ncr');
    

    await driver.sleep(7000)
  } finally {
    await driver.quit()
  }
})();

/* const { Builder, Browser, By, Key, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build()
  try {
    await driver.navigate().to('https://www.google.com/ncr');
    
    await driver.navigate().refresh();
    await driver.sleep(5000);

    
    
  } finally {
    await driver.quit()
  }
})();*/