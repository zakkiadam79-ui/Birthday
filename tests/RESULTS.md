# Validation — 22 November 2026

- `node --check script.js`: passed.
- Headless Chromium functional suite (`browser.cjs`): passed.
- Passwords: 3122007, 03122007, 03-12-2007, 3/12/2007 accepted; wrong entry produces gentle feedback.
- All 32 constellation cards rendered; completion updates to 6/6 and unlocks secret scene.
- Missing photos fall back without broken image elements.
- Candle early release recovers; a 2.2-second hold extinguishes it.
- Dawn certificate and replay passed.
- Fake PKT clock passes countdown, midnight blackout, then birth.
- Full Cinema timeline exercised with a browser-controlled clock through 320 seconds: locked → countdown → birth → galaxy tour → secret letter → wish → dawn → final blackout, no JavaScript errors.
- 360×640 and 1920×1080 viewports: no horizontal overflow across entrance, galaxy, candle and dawn.
- Mobile entrance and galaxy screenshots visually reviewed.
- Direct file:// loading passed.
- Delivered site files total well below 300 KB, excluding fonts and user photos.

Browser tooling was installed only for development; no package.json, build step,
external script or browser binary is part of the delivered website.
To run the optional test file, provide Playwright and @sparticuz/chromium in your
development environment and serve the repository on port 8000.

Limitations: real iOS tilt permission, physical phone frame rates, Safari/Firefox/
Edge and OBS audio capture require device-level/manual checks. Google font hosts
are blocked in this sandbox, so screenshot review used the offline font fallbacks.
Cinema runs longer than 4:20 to retain the full letter and readable card holds;
this intentional adjustment is explained in README.txt.
