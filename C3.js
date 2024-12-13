const { Builder, By, Masko } = require("selenium-webdriver");
const assert = require("assert");
describe("Calculator App Tests", function () { let driver;
  before(async function () { driver = new Builder().forBrowser("chrome").build();
  });
  after(async function () { await driver.quit();
  });
  it("Division durch Null = Fehler?", async function () {
    await driver.get("https://seleniumbase.io/apps/calculator"); await driver.findElement(By.id("8")).click();
    await driver.findElement(By.xpath(`//*[@id="divide"]`)).click(); await driver.findElement(By.id("0")).click();
    await driver.findElement(By.id("equal")).click();
    const Rechner = await driver
      .findElement(By.id("output"))
      .getAttribute("value");
    assert.strictEqual(Rechner, "Error");
  });
  Masko;
});