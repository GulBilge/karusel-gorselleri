// Kullanım: node shot.js 1 2 3  -> s1.js, s2.js, s3.js dosyalarını out/01.png... olarak çizer
let pw;
try { pw = require('/opt/npm-tools/node_modules/playwright'); } catch (e) { pw = require('playwright'); }
const { chromium } = pw;
const fs = require('fs'), path = require('path');
(async () => {
  const opts = { args: ['--allow-file-access-from-files'] };
  for (const p of [process.env.CHROMIUM_PATH, '/opt/pw-browsers/chromium']) if (p && fs.existsSync(p)) { opts.executablePath = p; break; }
  const b = await chromium.launch(opts);
  const pg = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  pg.on('pageerror', e => console.log('ERR', e.message));
  fs.mkdirSync('out', { recursive: true });
  for (const n of process.argv.slice(2)) {
    fs.writeFileSync(`slide${n}.html`, fs.readFileSync('tpl.html', 'utf8').replace('SLIDE', `s${n}.js`));
    await pg.goto('file://' + path.resolve(`slide${n}.html`));
    await pg.waitForFunction('window.READY === true', null, { timeout: 20000 });
    await pg.screenshot({ path: `out/${String(n).padStart(2, '0')}.png` });
    console.log('ok', n);
  }
  await b.close();
})();
