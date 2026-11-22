// Development-only checks. The delivered website itself has no dependencies.
const { chromium } = require("playwright");
const chromiumModule = require("@sparticuz/chromium");
const serverChromium = chromiumModule.default || chromiumModule;
const assert = require("node:assert/strict");
(async () => {
  const browser = await chromium.launch({
    executablePath: await serverChromium.executablePath(),
    args: [
      "--no-sandbox",
      "--disable-gpu",
      "--disable-dev-shm-usage",
      "--no-zygote",
    ],
    headless: true,
  });
  const page = await browser.newPage({ viewport: { width: 360, height: 640 } });
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.route("https://fonts.googleapis.com/**", (r) => r.abort());
  const base = "http://127.0.0.1:8000/index.html";
  await page.goto(base);
  await page.locator("#password").fill("123");
  await page.locator("#unlock").click();
  await page.waitForTimeout(50);
  assert.match(
    await page.locator("#gate-message").innerText(),
    /didn't recognise/,
  );
  for (const pw of ["3122007", "03122007", "03-12-2007", "3/12/2007"]) {
    await page.goto(base + "?fake=2026-12-02T20:00:00%2B05:00");
    await page.locator("#password").fill(pw);
    await page.locator("#unlock").click();
    await page.waitForTimeout(1800);
    assert.equal(await page.getAttribute("body", "data-scene"), "locked");
  }
  await page.goto(base + "?test=galaxy");
  assert.equal(await page.locator(".cluster").count(), 6);
  await page.evaluate(() => focusGroup(0));
  await page.evaluate(() => openStar(0, 0));
  await page.waitForTimeout(400);
  assert.equal(await page.locator(".polaroid").count(), 1);
  assert.equal(await page.locator(".photo img").count(), 0);
  await page.evaluate(() => closeCard(true));
  for (let g = 0; g < 6; g++) {
    const count = await page.evaluate((g) => CONFIG[groups[g]].length, g);
    for (let i = 0; i < count; i++) {
      await page.evaluate(
        ([g, i]) => {
          openStar(g, i);
          closeCard(true);
        },
        [g, i],
      );
    }
  }
  assert.match(await page.locator("#progress").innerText(), /6 of 6/i);
  await page.evaluate(() => {
    openStar(5, 3);
    closeCard();
  });
  await page.waitForTimeout(550);
  assert.equal(await page.getAttribute("body", "data-scene"), "secret");
  await page.goto(base + "?test=wish");
  await page.evaluate(() => beginHold());
  await page.waitForTimeout(300);
  await page.evaluate(() => releaseHold());
  assert.equal(await page.locator("#candle").getAttribute("class"), "");
  await page.evaluate(() => beginHold());
  await page.waitForTimeout(2350);
  assert.match(await page.locator("#candle").getAttribute("class"), /out/);
  await page.goto(base + "?test=dawn");
  await page.waitForTimeout(4200);
  assert.equal(await page.locator("#certificate.visible").count(), 1);
  await page.locator("#replay").click();
  assert.equal(await page.getAttribute("body", "data-scene"), "galaxy");
  await page.goto(base + "?nogate=1&fake=2026-12-02T23:59:58%2B05:00");
  assert.equal(await page.getAttribute("body", "data-scene"), "countdown");
  await page.waitForTimeout(2300);
  assert.equal(await page.locator("#blackout.dark").count(), 1);
  await page.waitForTimeout(1200);
  assert.equal(await page.getAttribute("body", "data-scene"), "birth");
  await page.goto(base + "?cinema=1");
  assert.equal(await page.locator("#cinema-start").isVisible(), true);
  await page.keyboard.press("Space");
  await page.waitForTimeout(3300);
  assert.equal(await page.getAttribute("body", "data-scene"), "locked");
  for (const viewport of [
    { width: 360, height: 640 },
    { width: 1920, height: 1080 },
  ]) {
    await page.setViewportSize(viewport);
    for (const mode of ["", "?test=galaxy", "?test=wish", "?test=dawn"]) {
      await page.goto(base + mode);
      assert.equal(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        true,
      );
    }
  }
  await page.goto("file://" + process.cwd() + "/index.html?test=galaxy");
  assert.equal(await page.locator(".cluster").count(), 6);
  assert.deepEqual(errors, []);
  console.log(
    "PASS: password variants, cards, photo fallback, six completions, secret unlock, candle, dawn/replay, midnight darkness/birth, cinema start, mobile/desktop overflow and file://.",
  );
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
