/* Pruebas de navegador de la fase 2. No modifica los archivos de la página. */
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const crypto = require('node:crypto');
const { chromium } = require(path.resolve('.qa-runtime/node_modules/playwright'));

const root = process.cwd();
const out = path.join(root, 'qa-evidence');
fs.mkdirSync(out, { recursive: true });
const base = 'http://127.0.0.1:8765';
const image = 'WhatsApp Image 2026-10-27 at 9.00.40 AM.jpeg';
const files = {
  '/': ['index.html', 'text/html; charset=utf-8'],
  '/index.html': ['index.html', 'text/html; charset=utf-8'],
  '/assets/css/styles.css': ['assets/css/styles.css', 'text/css; charset=utf-8'],
  ['/' + image]: [image, 'image/jpeg'],
};
const report = {
  sourceBase: process.env.QA_SOURCE_BASE,
  testCommit: process.env.GITHUB_SHA,
  generatedAt: new Date().toISOString(),
  platform: process.platform,
  playwright: require(path.resolve('.qa-runtime/node_modules/playwright/package.json')).version,
  sourceBlobs: {},
  scenarios: [],
  consoleErrors: [],
  pageErrors: [],
  resourceErrors: [],
  failures: [],
};
for (const name of ['index.html', 'assets/css/styles.css', image]) {
  const bytes = fs.readFileSync(path.join(root, name));
  report.sourceBlobs[name] = crypto.createHash('sha1').update(`blob ${bytes.length}\0`).update(bytes).digest('hex');
}
const server = http.createServer((request, response) => {
  const target = files[decodeURIComponent(new URL(request.url, base).pathname)];
  if (!target) {
    response.writeHead(404);
    response.end('Not found');
    return;
  }
  response.writeHead(200, { 'Content-Type': target[1], 'Cache-Control': 'no-store' });
  response.end(fs.readFileSync(path.join(root, target[0])));
});
function check(ok, label, details) {
  if (!ok) report.failures.push({ label, details });
}
function observe(page, scenario) {
  page.on('pageerror', error => report.pageErrors.push({ scenario, message: error.message }));
  page.on('console', msg => { if (msg.type() === 'error') report.consoleErrors.push({ scenario, message: msg.text() }); });
  page.on('response', response => {
    if (response.status() >= 400) report.resourceErrors.push({ scenario, url: response.url(), status: response.status() });
  });
  page.on('requestfailed', request => report.resourceErrors.push({ scenario, url: request.url(), error: request.failure()?.errorText }));
}
async function ready(page) {
  await page.goto(base + '/index.html', { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForFunction(() => getComputedStyle(document.body).backgroundColor === 'rgb(247, 247, 242)');
}
async function shot(page, name, fullPage = false) {
  await page.screenshot({ path: path.join(out, name + '.png'), fullPage, animations: 'disabled' });
}
async function layout(page) {
  return page.evaluate(() => {
    const width = document.documentElement.clientWidth;
    const overflow = [];
    const textOverflow = [];
    for (const el of document.body.querySelectorAll('*')) {
      if (!(el instanceof HTMLElement)) continue;
      const r = el.getBoundingClientRect();
      if (!r.width || !r.height) continue;
      if (r.left < -1 || r.right > width + 1) overflow.push({ tag: el.tagName, id: el.id, class: el.className, left: r.left, right: r.right });
      if (el.clientWidth && el.scrollWidth > el.clientWidth + 1) textOverflow.push({ tag: el.tagName, id: el.id, class: el.className, client: el.clientWidth, scroll: el.scrollWidth });
    }
    const controls = [...document.querySelectorAll('.primary-nav__link,.cta,.program-card__link,.faq-item__question,.contact__link,.site-footer__back')].map(el => ({ text: el.textContent.trim(), width: el.getBoundingClientRect().width, height: el.getBoundingClientRect().height }));
    const rect = selector => {
      const r = document.querySelector(selector).getBoundingClientRect();
      return { x: r.x, y: r.y, width: r.width, height: r.height };
    };
    return {
      width, innerWidth, innerHeight, scrollWidth: document.documentElement.scrollWidth,
      overflow, textOverflow, controls,
      logo: rect('.brand__logo'), headline: rect('.hero__title'),
      programColumns: getComputedStyle(document.querySelector('.program-grid')).gridTemplateColumns,
      methodColumns: getComputedStyle(document.querySelector('.method__steps')).gridTemplateColumns,
      fontFamily: getComputedStyle(document.body).fontFamily,
      title: document.title,
    };
  });
}
function checkLayout(metrics, name) {
  check(metrics.scrollWidth <= metrics.width + 1, name + ': sin desplazamiento horizontal', metrics);
  check(metrics.overflow.length === 0, name + ': elementos dentro de la anchura', metrics.overflow);
  check(metrics.textOverflow.length === 0, name + ': contenido sin recorte horizontal', metrics.textOverflow);
  check(metrics.controls.every(c => c.height >= 43.9), name + ': controles principales de al menos 44px', metrics.controls.filter(c => c.height < 43.9));
  check(Math.abs(metrics.logo.width / metrics.logo.height - 310 / 80) < 0.02, name + ': proporción del logo', metrics.logo);
}
async function focused(page) {
  return page.evaluate(() => {
    const el = document.activeElement;
    const s = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return { tag: el.tagName, id: el.id, class: el.className, text: el.getAttribute('aria-label') || el.textContent.trim().replace(/\s+/g, ' '), href: el.getAttribute('href'), outlineWidth: s.outlineWidth, outlineStyle: s.outlineStyle, focusVisible: el.matches(':focus-visible'), visible: r.width > 0 && r.height > 0 && r.bottom > 0 && r.top < innerHeight };
  });
}
async function keyboard(browser, width) {
  const name = 'teclado-' + width;
  const context = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: 'reduce' });
  const page = await context.newPage();
  observe(page, name);
  await ready(page);
  await page.keyboard.press('Tab');
  const skip = await focused(page);
  check(skip.class === 'skip-link' && skip.focusVisible && skip.visible, name + ': enlace para saltar visible', skip);
  await shot(page, name + '-saltar');
  await page.keyboard.press('Enter');
  check(await page.evaluate(() => document.activeElement.id === 'contenido'), name + ': salto al main');
  await page.close();
  const navigation = await context.newPage();
  observe(navigation, name);
  await ready(navigation);
  const order = [];
  let faqs = 0;
  for (let i = 0; i < 26; i++) {
    await navigation.keyboard.press('Tab');
    const f = await focused(navigation);
    order.push(f);
    check(f.visible && f.focusVisible && f.outlineStyle !== 'none' && parseFloat(f.outlineWidth) >= 2, name + ': foco visible en ' + f.text, f);
    if (f.tag === 'SUMMARY') {
      await navigation.keyboard.press('Enter');
      check(await navigation.evaluate(() => document.activeElement.parentElement.open), name + ': Enter abre pregunta ' + faqs);
      if (faqs === 0) {
        await shot(navigation, name + '-pregunta-abierta');
        await navigation.keyboard.press('Tab');
        const answerLink = await focused(navigation);
        check(answerLink.text === 'sección de contacto' && answerLink.visible, name + ': enlace de respuesta alcanzable', answerLink);
        await navigation.keyboard.press('Shift+Tab');
      }
      await navigation.keyboard.press('Space');
      check(await navigation.evaluate(() => !document.activeElement.parentElement.open), name + ': Espacio cierra pregunta ' + faqs);
      faqs++;
    }
    if (f.class === 'site-footer__back') break;
  }
  check(order.length === 21 && faqs === 3, name + ': recorrido completo sin foco en contenido oculto', { count: order.length, faqs });
  await navigation.keyboard.press('Shift+Tab');
  const previous = await focused(navigation);
  check(previous.class.includes('contact__link--instagram'), name + ': recorrido inverso', previous);
  const anchors = [];
  for (const target of ['inicio', 'programas', 'metodologia', 'contacto']) {
    await navigation.locator('.primary-nav__link[href="#' + target + '"]').press('Enter');
    const result = await navigation.evaluate(id => ({ hash: location.hash, top: document.getElementById(id).getBoundingClientRect().top }), target);
    check(result.hash === '#' + target && result.top >= 0 && result.top < 100, name + ': enlace de menú ' + target, result);
    anchors.push({ target, ...result });
  }
  report.scenarios.push({ name, skip, order, faqs, anchors, reducedMotion: true });
  await context.close();
}

(async () => {
  let browser;
  let zoomContext;
  try {
    await new Promise(resolve => server.listen(8765, '127.0.0.1', resolve));
    browser = await chromium.launch();
    report.browser = browser.version();
    for (const width of [320, 375, 768, 1024, 1440]) {
      const name = 'pantalla-' + width;
      const context = await browser.newContext({ viewport: { width, height: 900 }, isMobile: width < 768, hasTouch: width < 768, deviceScaleFactor: 1 });
      const page = await context.newPage();
      observe(page, name);
      await ready(page);
      const metrics = await layout(page);
      checkLayout(metrics, name);
      await shot(page, name);
      await shot(page, name + '-completa', true);
      if (width === 375) {
        for (const summary of await page.locator('summary').all()) {
          await summary.tap();
          check(await summary.evaluate(el => el.parentElement.open), name + ': toque abre pregunta');
          await summary.tap();
          check(await summary.evaluate(el => !el.parentElement.open), name + ': segundo toque cierra pregunta');
        }
      }
      report.scenarios.push({ name, viewport: { width, height: 900 }, mobileEmulation: width < 768, metrics });
      await context.close();
    }
    await keyboard(browser, 375);
    await keyboard(browser, 1440);
    const reduced = await browser.newPage();
    await reduced.emulateMedia({ reducedMotion: 'reduce' });
    await ready(reduced);
    const motion = await reduced.evaluate(() => ({ matches: matchMedia('(prefers-reduced-motion: reduce)').matches, scroll: getComputedStyle(document.documentElement).scrollBehavior, transition: getComputedStyle(document.querySelector('.cta')).transitionDuration }));
    check(motion.matches && motion.scroll === 'auto' && motion.transition === '0s', 'preferencia de movimiento reducido', motion);
    report.scenarios.push({ name: 'movimiento-reducido', ...motion });
    await reduced.close();
    await browser.close();
    browser = undefined;

    const extension = fs.mkdtempSync(path.join(require('node:os').tmpdir(), 'keter-zoom-extension-'));
    fs.writeFileSync(path.join(extension, 'manifest.json'), JSON.stringify({ manifest_version: 3, name: 'Keter QA temporary zoom', version: '1.0', host_permissions: [base + '/*'], background: { service_worker: 'background.js' } }));
    fs.writeFileSync(path.join(extension, 'background.js'), 'chrome.runtime.onInstalled.addListener(() => {});');
    zoomContext = await chromium.launchPersistentContext('', { channel: 'chromium', headless: true, viewport: null, args: ['--window-size=1440,1000', `--disable-extensions-except=${extension}`, `--load-extension=${extension}`] });
    let worker = zoomContext.serviceWorkers()[0];
    if (!worker) worker = await zoomContext.waitForEvent('serviceworker', { timeout: 15000 });
    const zoomPage = await zoomContext.newPage();
    observe(zoomPage, 'zoom-200');
    await ready(zoomPage);
    const before = await layout(zoomPage);
    const zoom = await worker.evaluate(async origin => {
      const tabs = await chrome.tabs.query({ url: origin + '/*' });
      if (tabs.length !== 1) throw new Error('Expected one test tab, got ' + tabs.length);
      await chrome.tabs.setZoomSettings(tabs[0].id, { mode: 'automatic', scope: 'per-tab' });
      await chrome.tabs.setZoom(tabs[0].id, 2);
      return await chrome.tabs.getZoom(tabs[0].id);
    }, base);
    await zoomPage.waitForFunction(original => innerWidth <= original / 2 + 2, before.innerWidth, { timeout: 5000 });
    const after = await layout(zoomPage);
    check(zoom === 2 && Math.abs(after.innerWidth * 2 - before.innerWidth) <= 2, 'zoom real del navegador al 200 %', { zoom, before: before.innerWidth, after: after.innerWidth });
    checkLayout(after, 'zoom-200');
    await shot(zoomPage, 'zoom-200');
    await shot(zoomPage, 'zoom-200-completa', true);
    report.scenarios.push({ name: 'zoom-200', method: 'chrome.tabs.setZoom/getZoom; viewport sin emulación', zoom, before, after });
    await zoomContext.close();
    zoomContext = undefined;
    check(report.pageErrors.length === 0, 'sin excepciones de página', report.pageErrors);
    check(report.consoleErrors.length === 0, 'sin errores de consola', report.consoleErrors);
    check(report.resourceErrors.length === 0, 'recursos cargados sin errores', report.resourceErrors);
  } catch (error) {
    report.failures.push({ label: 'error de ejecución', message: error.message, stack: error.stack });
  } finally {
    if (browser) await browser.close().catch(() => {});
    if (zoomContext) await zoomContext.close().catch(() => {});
    await new Promise(resolve => server.close(resolve));
    fs.writeFileSync(path.join(out, 'resultados.json'), JSON.stringify(report, null, 2) + '\n');
    console.log(JSON.stringify(report, null, 2));
    process.exitCode = report.failures.length ? 1 : 0;
  }
})();
