const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const seeds = [14,15,16,17,18,19,20,21,22,23];

  let grandTotal = 0;

  for (const seed of seeds) {
    const url = `https://example.com/?seed=${seed}`; // Replace with actual URLs
    await page.goto(url);

    const numbers = await page.$$eval("table td", cells =>
      cells.map(cell => parseFloat(cell.innerText))
           .filter(num => !isNaN(num))
    );

    const pageSum = numbers.reduce((a, b) => a + b, 0);
    grandTotal += pageSum;
  }

  console.log("FINAL TOTAL:", grandTotal);

  await browser.close();
})();
