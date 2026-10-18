// Kullanım: node shot.js 1 2 3 4  (hikâye: node shot.js 1 2 3 --hikaye → h1.js… → out/h01.png…, 1080x1920; varsayılan koyu tema: tpl-koyu.html + lib-koyu.js; eski açık defter teması için --acik)
// Eski kullanım: node shot.js 1 2 3 4  -> s1.js, s2.js... dosyalarını out/01.png... olarak çizer; UYARI satırlarını düzeltin
let pw;
try { pw = require('/opt/npm-tools/node_modules/playwright'); } catch (e) { pw = require('playwright'); }
const { chromium } = pw;
const fs = require('fs'), path = require('path');
(async () => {
  const opts = { args: ['--allow-file-access-from-files'] };
  for (const p of [process.env.CHROMIUM_PATH, '/opt/pw-browsers/chromium']) if (p && fs.existsSync(p)) { opts.executablePath = p; break; }
  const b = await chromium.launch(opts);
  const hikaye = process.argv.includes('--hikaye');
  const pg = await b.newPage({ viewport: { width: 1080, height: hikaye ? 1920 : 1350 } });
  pg.on('pageerror', e => console.log('ERR', e.message));
  pg.on('console', m => console.log('  ', m.text()));
  fs.mkdirSync('out', { recursive: true });
  const acik = process.argv.includes('--acik'), tpl = hikaye ? 'tpl-hikaye.html' : acik ? 'tpl.html' : 'tpl-koyu.html';
  const on = hikaye ? 'h' : 's';
  for (const n of process.argv.slice(2).filter(a => !a.startsWith('--'))) {
    fs.writeFileSync(`slide${n}.html`, fs.readFileSync(tpl, 'utf8').replace('SLIDE', `${on}${n}.js`));
    await pg.goto('file://' + path.resolve(`slide${n}.html`));
    await pg.waitForFunction('window.READY === true', null, { timeout: 20000 });
    await pg.screenshot({ path: `out/${hikaye ? 'h' : ''}${String(n).padStart(2, '0')}.png` });
    console.log('ok', n);
  }
  await b.close();
})();
