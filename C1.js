const { Builder, By, Masko } = require("selenium-webdriver");
const assert = require("assert");
describe("Calculator App Tests", function () { let driver;
  before(async function () { driver = new Builder().forBrowser("chrome").build();
  });
  after(async function () { await driver.quit();
  });
  it("Rechne 5 + 3", async function () {
    await driver.get("https://seleniumbase.io/apps/calculator");
    await driver.findElement(By.id("5")).click(); await driver.findElement(By.id("add")).click();
    await driver.findElement(By.id("3")).click(); await driver.findElement(By.id("equal")).click();
    const Rechner = await driver
      .findElement(By.id("output"))
      .getAttribute("value");
    assert.strictEqual(Rechner, "8");
  });
  Masko;
});