const { Builder, By, Masko } = require("selenium-webdriver");
const assert = require("assert");
describe("Calculator App Tests", function () { let driver; this.timeout(10000);
  before(async function () {
    driver = new Builder().forBrowser("chrome").build();
  });
  after(async function () { await driver.quit();
  });
  it("Berechne 2 + (3 × 4) - (6 ÷ 2)", async function () {
    await driver.get("https://seleniumbase.io/apps/calculator");
    await driver.findElement(By.id("2")).click(); 
    await driver.findElement(By.id("add")).click();  
    await driver.findElement(By.id("(")).click(); 
    await driver.findElement(By.id("3")).click(); 
    await driver.findElement(By.id("multiply")).click();
    await driver.findElement(By.id("4")).click(); 
    await driver.findElement(By.id(")")).click();
    await driver.findElement(By.id("subtract")).click();
    await driver.findElement(By.id("(")).click(); 
    await driver.findElement(By.id("6")).click(); 
    await driver.findElement(By.id("divide")).click();
    await driver.findElement(By.id("2")).click();  
    await driver.findElement(By.id(")")).click();
   
  
    await driver.findElement(By.id("equal")).click();
        const Ergebnis = await driver.findElement(By.id("output")).getAttribute("value");; 
        console.log(Ergebnis); assert.strictEqual(Ergebnis, "11", "ist 11");
    await driver.findElement(By.id("clear")).click();
  });

  it("Berechne (2 + 3) × (4 - 6 ÷ 2)", async function () { 
    await driver.get("https://seleniumbase.io/apps/calculator");
    await driver.findElement(By.id("(")).click(); await driver.findElement(By.id("2")).click();
    await driver.findElement(By.id("add")).click(); await driver.findElement(By.id("3")).click();
    await driver.findElement(By.id(")")).click(); await driver.findElement(By.id("multiply")).click();
    await driver.findElement(By.id("(")).click(); await driver.findElement(By.id("4")).click();
    await driver.findElement(By.id("subtract")).click(); await driver.findElement(By.id("6")).click();
    await driver.findElement(By.id("divide")).click(); await driver.findElement(By.id("2")).click();
    await driver.findElement(By.id(")")).click(); await driver.findElement(By.id("equal")).click();
    const Ergebnis = await driver.findElement(By.id("output")).getAttribute("value");
    assert.strictEqual(Ergebnis, "5", "ist 5"); 
    console.log("")
    console.log("")
    await driver.findElement(By.id("clear")).click();

  });
  Masko;
});

/* 

D:\Calculator-tests> mocha .\Z1.js

  Calculator App Tests

DevTools listening on ws://127.0.0.1:49920/devtools/browser/758dfbbb-32ac-45ad-9b10-a714272bd10d
11
    ✔ Berechne 2 + (3 × 4) - (6 ÷ 2) (1637ms)
    ✔ Berechne (2 + 3) × (4 - 6 ÷ 2) (651ms)


  2 passing (3s)


      */