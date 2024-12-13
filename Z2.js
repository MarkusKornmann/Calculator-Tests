const { Builder, By, Masko } = require("selenium-webdriver");
const assert = require("assert");

describe("Calculator App Tests", function () { let driver; this.timeout(10000);
  before(async function () { driver = new Builder().forBrowser("chrome").build();
  });
  after(async function () { await driver.quit();
  });
  it("Das Egebniss stimmt", async function () {
    await driver.get("https://seleniumbase.io/apps/calculator");
    await driver.findElement(By.id("0")).click(); await driver.findElement(By.id(".")).click(); await driver.findElement(By.id("1")).click(); 
    await driver.findElement(By.id("add")).click();
    
    await driver.findElement(By.id("0")).click(); await driver.findElement(By.id(".")).click(); await driver.findElement(By.id("2")).click(); 
    
    await driver.findElement(By.id("equal")).click();
        
    await driver.findElement(By.id("subtract")).click();
    
    await driver.findElement(By.id("0")).click(); await driver.findElement(By.id(".")).click(); await driver.findElement(By.id("3")).click(); 
    
    await driver.findElement(By.id("equal")).click();
    
    const Ergebnis = await driver.findElement(By.id("output")).getAttribute("value"); assert.ok(Math.abs(parseFloat(Ergebnis) - 0) < 1e-10); 
    console.log("")
    console.log("      Berechne 0.1 + 0.2 - 0.3 =",(Ergebnis))
  });
  Masko;
});

/* 
PS D:\Calculator-tests> mocha .\Z2.js


  Calculator App Tests

DevTools listening on ws://127.0.0.1:50205/devtools/browser/f03dc1ab-f566-4994-bf97-ca8fcd3cac06
0
    ✔ Kettenberechnung 0.1 + 0.2 - 0.3 (1455ms)


  1 passing (2s)

*/