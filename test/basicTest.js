const { Builder, Browser, By, Key, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build()
  try {
    await driver.get('https://www.google.com/ncr')
    await driver.findElement(By.name('q')).sendKeys('weather', Key.RETURN)
    await driver.wait(until.titleIs('weather - Google Search'), 5000)
  } finally {
    await driver.quit()
  }
})();