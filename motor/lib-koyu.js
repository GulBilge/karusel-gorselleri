// Koyu premium tema (siyah · gold · zümrüt yeşili; vurgu: pembe ya da mor). Bilge'nin marka stili, 11 Ekim 2026.
const W = 1080, H = 1350;
const C = {
  bg: '#09090B', card: '#131316', card2: '#1B1B20', ivory: '#F4EFE4', muted: '#A9A39A',
  gold: '#D8B45A', goldHi: '#F0D58A', goldDeep: '#8F7228',
  emerald: '#12A67C', emeraldDeep: '#0A5F49', pink: '#EC5B97', purple: '#9B6CFF'
};
// Yazı ölçeği: başlık Playfair Display, gövde Montserrat, el yazısı (Caveat) yalnızca küçük altın notlarda.
const TS = { title: 96, sub: 56, body: 36, note: 30, label: 26, lh: 1.45 };
// Güvenli alan: metinler ve önemli görseller kenarlardan en az 110 px içeride
const SAFE = { l: 150, r: 970, t: 100, b: 1260 };
const NS = 'http://www.w3.org/2000/svg';
const svg = document.getElementById('s');
const rc = rough.svg(svg);
let SEED = 10;
const sd = () => (SEED += 7);
const S = (o, extra = {}) => Object.assign({}, o, { seed: sd() }, extra);
// Çizgi sanatı: ince, düşük pürüzlü altın hatlar
const L = { roughness: 0.5, bowing: 0.5, stroke: C.gold, strokeWidth: 2.4 };

function el(tag, a = {}, parent = svg) { const e = document.createElementNS(NS, tag); for (const k in a) e.setAttribute(k, a[k]); parent.appendChild(e); return e; }
function g(a = {}, parent = svg) { return el('g', a, parent); }
function add(node, parent = svg) { parent.appendChild(node); return node; }

function text(str, x, y, o = {}) {
  const t = el('text', {
    x, y, fill: o.color || C.ivory, 'font-family': o.font || 'Montserrat', 'font-weight': o.weight || 500,
    'font-size': o.size || TS.body, 'text-anchor': o.anchor || 'start', 'letter-spacing': o.ls || 0,
    'font-style': o.italic ? 'italic' : 'normal',
    transform: o.rot ? `rotate(${o.rot} ${x} ${y})` : ''
  }, o.parent || svg);
  t.textContent = str;
  return t;
}
const serif = (str, x, y, o = {}) => text(str, x, y, Object.assign({ font: 'Playfair Display', weight: 700, size: TS.title }, o));
// Kelime kaydırmalı paragraf; bir sonraki satırın y'sini döndürür. o.dry = yalnızca ölç.
function para(str, x, y, o = {}) {
  const size = o.size || TS.body, lh = Math.round(size * (o.lh || TS.lh)), maxW = o.width || (SAFE.r - x);
  const st = { size, font: o.font, weight: o.weight, color: o.color, anchor: o.anchor, parent: o.parent, italic: o.italic };
  const probe = text('', x, y, st), lines = [];
  let cur = '';
  for (const w of str.split(' ')) {
    probe.textContent = cur ? cur + ' ' + w : w;
    if (cur && probe.getComputedTextLength() > maxW) { lines.push(cur); cur = w; } else cur = probe.textContent;
  }
  if (cur) lines.push(cur);
  probe.remove();
  if (!o.dry) lines.forEach((Ln, i) => text(Ln, x, y + i * lh, st));
  return y + lines.length * lh;
}
const body = (str, x, y, o = {}) => para(str, x, y, o);

function glow(cx, cy, r, color, op) {
  const id = 'gl' + sd();
  let defs = svg.querySelector('defs') || el('defs');
  const rg = el('radialGradient', { id, cx: '50%', cy: '50%', r: '50%' }, defs);
  el('stop', { offset: '0%', 'stop-color': color, 'stop-opacity': op }, rg);
  el('stop', { offset: '100%', 'stop-color': color, 'stop-opacity': 0 }, rg);
  el('circle', { cx, cy, r, fill: `url(#${id})` });
}
function diamond(x, y, r, color = C.gold, parent = svg) {
  return el('path', { d: `M${x} ${y - r} L${x + r} ${y} L${x} ${y + r} L${x - r} ${y} Z`, fill: color }, parent);
}
// Arka plan: siyah + zümrüt ışıma (sol alt) + vurgu ışıması (sağ üst) + çift altın çerçeve. accent: 'pink' | 'purple'
function paper(accent = 'purple') {
  el('rect', { x: 0, y: 0, width: W, height: H, fill: C.bg });
  glow(0, 1350, 760, C.emerald, 0.30);
  glow(1080, 60, 620, accent === 'pink' ? C.pink : C.purple, 0.22);
  const tex = g({ opacity: 0.06 });
  for (let i = 0; i < 220; i++) {
    const r = ((i * 9301 + 49297) % 233280) / 233280, r2 = ((i * 7907 + 1031) % 104729) / 104729;
    el('circle', { cx: r * W, cy: r2 * H, r: 1 + (i % 2), fill: C.gold }, tex);
  }
  el('rect', { x: 100, y: 96, width: 880, height: 1170, fill: 'none', stroke: C.gold, 'stroke-width': 2, opacity: 0.85 });
  el('rect', { x: 112, y: 108, width: 856, height: 1146, fill: 'none', stroke: C.gold, 'stroke-width': 0.8, opacity: 0.45 });
  [[100, 96], [980, 96], [100, 1266], [980, 1266]].forEach(([x, y]) => { el('rect', { x: x - 9, y: y - 9, width: 18, height: 18, fill: C.bg }); diamond(x, y, 9); });
}
function footer(page) {
  text('@teknikbilgekoc', 150, 1318, { size: 26, weight: 700, color: C.gold, ls: 2 }).dataset.free = 1;
  if (page) text(page, 66, 132, { size: 24, weight: 700, color: C.gold, anchor: 'middle' }).dataset.free = 1;  // sol kenar boşluğu
}
// Etiket hapı (ör. "CLAUDE İPUCU · 11 EKİM 2026")
function chip(str, x, y, color = C.gold, fill = false) {
  const t = text(str, x + 28, y + 8, { size: TS.label, weight: 700, color: fill ? C.bg : color, ls: 3 });
  const w = t.getComputedTextLength() + 56;
  const r = el('rect', { x, y: y - 30, width: w, height: 52, rx: 26, fill: fill ? color : 'none', stroke: color, 'stroke-width': 2 });
  svg.insertBefore(r, t);
  return w;
}
// Profil rozeti (kapakta): yuvarlak fotoğraf + altın halka + ad + unvan. profil.png motor/ klasöründe.
function profil(x, y, d = 104) {
  const id = 'pf' + sd(), r = d / 2, cx = x + r, cy = y + r;
  const defs = svg.querySelector('defs') || el('defs');
  const cp = el('clipPath', { id }, defs); el('circle', { cx, cy, r }, cp);
  el('image', { href: 'profil.png', x, y, width: d, height: d, 'clip-path': `url(#${id})`, preserveAspectRatio: 'xMidYMid slice' });
  el('circle', { cx, cy, r: r + 5, fill: 'none', stroke: C.gold, 'stroke-width': 3 });
  el('circle', { cx, cy, r: r + 13, fill: 'none', stroke: C.gold, 'stroke-width': 1, opacity: 0.5 });
  const tx = x + d + 40;
  serif('Bilge Gül Koç', tx, cy - 4, { size: 44, weight: 700, color: C.ivory });
  text('YAPAY ZEKA EĞİTMENİ', tx, cy + 38, { size: TS.label, weight: 700, color: C.gold, ls: 4 });
}
// Kart: koyu zemin, ince altın kenar, solda vurgu rengi şeridi
function card(x, y, w, h, accent = C.gold) {
  el('rect', { x, y, width: w, height: h, rx: 20, fill: C.card, stroke: C.gold, 'stroke-opacity': 0.35, 'stroke-width': 1.5 });
  el('rect', { x, y: y + 18, width: 6, height: h - 36, rx: 3, fill: accent });
}
// Altın ayraç (ortasında elmas)
function divider(x1, x2, y) {
  const m = (x1 + x2) / 2;
  el('line', { x1, y1: y, x2: m - 22, y2: y, stroke: C.gold, 'stroke-width': 1.6, opacity: 0.8 });
  el('line', { x1: m + 22, y1: y, x2, y2: y, stroke: C.gold, 'stroke-width': 1.6, opacity: 0.8 });
  diamond(m, y, 7);
}
function bullet(x, y, color = C.emerald) { diamond(x, y, 8, color); }
function star(x, y, k = 1, color = C.goldHi) {
  add(rc.path(`M${x} ${y - 16 * k} L${x + 4 * k} ${y - 4 * k} L${x + 16 * k} ${y} L${x + 4 * k} ${y + 4 * k} L${x} ${y + 16 * k} L${x - 4 * k} ${y + 4 * k} L${x - 16 * k} ${y} L${x - 4 * k} ${y - 4 * k} Z`, S({ stroke: color, fill: color, fillStyle: 'solid', strokeWidth: 1, roughness: 0.3 })));
}
async function fontsReady() {
  for (const f of ['700 48px "Playfair Display"', '600 48px "Playfair Display"', 'italic 600 48px "Playfair Display"', '600 48px Caveat', '700 38px Montserrat', '500 38px Montserrat']) await document.fonts.load(f, 'ığüşöçĞÜŞİÖÇâ');
  await document.fonts.ready;
}
// Kontrol: güvenli alan dışı, küçük yazı, üst üste binme (shot.js UYARI olarak gösterir)
function check() {
  const ts = [...svg.querySelectorAll('text')].filter(t => t.textContent.trim() && !t.dataset.free);
  const boxes = ts.map(t => { const r = t.getBoundingClientRect(); return { t: t.textContent, x1: r.left, y1: r.top, x2: r.right, y2: r.bottom, s: +t.getAttribute('font-size'), f: t.getAttribute('font-family') }; });
  boxes.forEach(b => {
    if (b.x1 < SAFE.l - 40 || b.x2 > SAFE.r + 2 || b.y1 < SAFE.t - 10 || b.y2 > SAFE.b) console.log(`UYARI güvenli alan dışı: "${b.t}" [${b.x1 | 0},${b.y1 | 0} – ${b.x2 | 0},${b.y2 | 0}]`);
    if (b.s < (b.f === 'Caveat' ? 40 : 26)) console.log(`UYARI küçük yazı (${b.f} ${b.s}px): "${b.t}"`);
  });
  for (let i = 0; i < boxes.length; i++) for (let j = i + 1; j < boxes.length; j++) {
    const a = boxes[i], b = boxes[j], ox = Math.min(a.x2, b.x2) - Math.max(a.x1, b.x1), oy = Math.min(a.y2, b.y2) - Math.max(a.y1, b.y1);
    if (ox > 4 && oy > Math.min(a.y2 - a.y1, b.y2 - b.y1) * 0.35) console.log(`UYARI üst üste: "${a.t}" / "${b.t}"`);
  }
}
function done() { check(); window.READY = true; }
