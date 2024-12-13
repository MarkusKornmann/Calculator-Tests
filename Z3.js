const { Builder, By, Masko } = require("selenium-webdriver");
const assert = require("assert");
describe("Calculator App Tests", function () { let driver; this.timeout(20000);
  before(async function () { driver = new Builder().forBrowser("chrome").build();
  });
  after(async function () { await driver.quit();
  });
  it("Rechnung ist OK", async function () {
    await driver.get("https://seleniumbase.io/apps/calculator");
  
    const ersteZahl = "200000000000000"; 
      for (const ziffer of ersteZahl) { await driver.findElement(By.id(ziffer)).click();
 } 
    await driver.findElement(By.id("add")).click();

    const zweiteZahl = "300000000000000"; 
      for (const ziffer of zweiteZahl) { 

    await driver.findElement(By.id(ziffer)).click(); } await driver.findElement(By.id("equal")).click(); 
    const rechenErg = await driver.findElement(By.id("output")).getAttribute("value"); 
    assert.strictEqual(rechenErg, "500000000000000"); 
    console.log("")
    console.log("      200000000000000 + 300000000000000 =",(rechenErg))
  });
  Masko;
});


/* await driver.findElement(By.id("1")).click(); await driver.findElement(By.id("2")).click(); await driver.findElement(By.id("3")).click(); 
    await driver.findElement(By.id("4")).click(); await driver.findElement(By.id("5")).click(); await driver.findElement(By.id("6")).click(); 
    await driver.findElement(By.id("1")).click(); await driver.findElement(By.id("8")).click(); await driver.findElement(By.id("9")).click(); 
    await driver.findElement(By.id("0")).click(); await driver.findElement(By.id("1")).click(); await driver.findElement(By.id("2")).click(); 
    await driver.findElement(By.id("3")).click(); await driver.findElement(By.id("4")).click(); await driver.findElement(By.id("5")).click(); 
    await driver.findElement(By.id("6")).click(); await driver.findElement(By.id("1")).click(); await driver.findElement(By.id("8")).click();
    await driver.findElement(By.id("9")).click(); await driver.findElement(By.id("0")).click(); await driver.findElement(By.id("add")).click();

    await driver.findElement(By.id("9")).click(); await driver.findElement(By.id("8")).click(); await driver.findElement(By.id("7")).click(); 
    await driver.findElement(By.id("6")).click(); await driver.findElement(By.id("5")).click(); await driver.findElement(By.id("4")).click(); 
    await driver.findElement(By.id("3")).click(); await driver.findElement(By.id("2")).click(); await driver.findElement(By.id("1")).click(); 
    await driver.findElement(By.id("0")).click(); await driver.findElement(By.id("9")).click(); await driver.findElement(By.id("8")).click();
    await driver.findElement(By.id("7")).click(); await driver.findElement(By.id("6")).click(); await driver.findElement(By.id("5")).click();
    await driver.findElement(By.id("4")).click(); await driver.findElement(By.id("3")).click(); await driver.findElement(By.id("2")).click(); 
    await driver.findElement(By.id("1")).click(); await driver.findElement(By.id("0")).click(); await driver.findElement(By.id("equal")).click();

    */