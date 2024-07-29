const { Builder, Browser, By, Key, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build()
  try {
    await driver.navigate().to('https://www.google.com/ncr');
    //await driver.manage().window().fullscreen()
    //await driver.manage().window().maximize()
    //await driver.manage().window().minimize()
    
    //await driver.manage().window().setSize(300,600);
    const ws= await driver.manage().window().getSize();
    console.log(ws.width+" "+ws.height)
    
    await driver.sleep(5000)
    
  } finally {
    await driver.quit()
  }
})();