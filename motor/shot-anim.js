// Kullanım: node shot-anim.js 1 [saniye=9] [fps=30]  -> s1.js animasyonunu out/kapak-animasyon.mp4 (1080x1350, H.264) olarak üretir.
// Çizimde anim() ile tanımlı animasyonlar kare kare ilerletilir. Gerekli: ffmpeg.
let pw;
try { pw = require('/opt/npm-tools/node_modules/playwright'); } catch (e) { pw = require('playwright'); }
const { chromium } = pw;
const fs = require('fs'), path = require('path'), { execSync } = require('child_process');
(async () => {
  const n = process.argv[2] || '1', sec = +(process.argv[3] || 9), fps = +(process.argv[4] || 30);
  const opts = { args: ['--allow-file-access-from-files'] };
  for (const p of [process.env.CHROMIUM_PATH, '/opt/pw-browsers/chromium']) if (p && fs.existsSync(p)) { opts.executablePath = p; break; }
  const b = await chromium.launch(opts);
  const pg = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  pg.on('pageerror', e => console.log('ERR', e.message));
  pg.on('console', m => console.log('  ', m.text()));
  await pg.addInitScript('window.ANIMATE = true');
  fs.writeFileSync(`slide${n}.html`, fs.readFileSync('tpl-koyu.html', 'utf8').replace('SLIDE', `s${n}.js`));
  await pg.goto('file://' + path.resolve(`slide${n}.html`));
  await pg.waitForFunction('window.READY === true', null, { timeout: 20000 });
  fs.rmSync('frames', { recursive: true, force: true }); fs.mkdirSync('frames'); fs.mkdirSync('out', { recursive: true });
  const total = Math.round(sec * fps);
  for (let f = 0; f < total; f++) {
    await pg.evaluate(t => document.getAnimations().forEach(a => { a.currentTime = t; }), (f * 1000) / fps);
    await pg.screenshot({ path: `frames/${String(f).padStart(4, '0')}.png` });
  }
  await b.close();
  execSync(`ffmpeg -y -loglevel error -framerate ${fps} -i frames/%04d.png -c:v libx264 -pix_fmt yuv420p -crf 17 -movflags +faststart out/kapak-animasyon.mp4`);
  fs.rmSync('frames', { recursive: true, force: true });
  console.log('ok out/kapak-animasyon.mp4', total, 'kare');
})();
