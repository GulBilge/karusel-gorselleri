// SADE HİKÂYE (Bilge, 18 Ekim 2026): kapak yok, süs yok; düz koyu zemin, tek altın vurgu, büyük okunur yazı. 1080x1920.
// Instagram arayüzü üstte ~250 px, altta ~270 px'i kapatır: yazılar y 250–1650 arasında, kenarlardan 90 px içeride.
const W = 1080, H = 1920;
const C = { bg: '#0B3B2E', ivory: '#F4EFE4', muted: '#BFD3C8', gold: '#D8B45A', goldHi: '#F0D58A', line: '#1F5A4A', card: '#0E4A3A' };
const SAFE = { l: 90, r: 990, t: 250, b: 1650 };
const NS = 'http://www.w3.org/2000/svg', svg = document.getElementById('s');
let SID = 1;
function el(tag, a = {}, parent = svg) { const e = document.createElementNS(NS, tag); for (const k in a) e.setAttribute(k, a[k]); parent.appendChild(e); return e; }
function text(str, x, y, o = {}) {
  const t = el('text', { x, y, fill: o.color || C.ivory, 'font-family': o.font || 'Montserrat', 'font-weight': o.weight || 500, 'font-size': o.size || 40,
    'text-anchor': o.anchor || 'start', 'letter-spacing': o.ls || 0, 'font-style': o.italic ? 'italic' : 'normal' });
  t.textContent = str; return t;
}
// Kelime kaydırmalı paragraf; sonraki satırın y'sini döndürür
function para(str, x, y, o = {}) {
  const size = o.size || 40, lh = Math.round(size * (o.lh || 1.4)), maxW = o.width || (SAFE.r - x);
  const probe = text('', x, y, o), lines = []; let cur = '';
  for (const w of str.split(' ')) { probe.textContent = cur ? cur + ' ' + w : w; if (cur && probe.getComputedTextLength() > maxW) { lines.push(cur); cur = w; } else cur = probe.textContent; }
  if (cur) lines.push(cur); probe.remove();
  lines.forEach((L, i) => text(L, x, y + i * lh, o));
  return y + lines.length * lh;
}
const baslik = (str, y, o = {}) => para(str, SAFE.l, y, Object.assign({ font: 'Playfair Display', weight: 700, size: 72, lh: 1.22 }, o));
// Zemin + üstte etiket + altta imza ve sayfa
function sayfa(etiket, no) {
  el('rect', { x: 0, y: 0, width: W, height: H, fill: C.bg });
  if (etiket) text(etiket, SAFE.l, 330, { size: 30, weight: 700, color: C.gold, ls: 4 });
  text('@teknikbilgekoc', SAFE.l, 1620, { size: 30, weight: 700, color: C.gold, ls: 2 });
  if (no) text(no, SAFE.r, 1620, { size: 30, weight: 700, color: C.muted, anchor: 'end' });
}
// Tek fikirli kare: büyük cümle + altında küçük cümle, dikeyde ortalanmış
function kare(buyuk, kucuk, no, o = {}) {
  sayfa(o.etiket, no);
  const bs = o.size || 84, ks = 44;
  const g0 = svg.childNodes.length;
  let y = baslik(buyuk, 0, { size: bs, color: o.renk || C.ivory });
  if (kucuk) y = para(kucuk, SAFE.l, y + 40, { size: ks, color: C.muted, lh: 1.45 });
  const G = el('g', {}); [...svg.childNodes].slice(g0, -1).forEach(n => G.appendChild(n));
  const b = G.getBBox(); G.setAttribute('transform', `translate(0 ${Math.round(900 - b.height / 2 - b.y)})`);
}

// Resmi görsel: yuvarlak köşeli çerçeve; kaynak yazısı altında
function gorsel(href, x, y, w, h, alt) {
  const id = 'g' + SID++, defs = svg.querySelector('defs') || el('defs');
  el('rect', { x, y, width: w, height: h, rx: 24 }, el('clipPath', { id }, defs));
  el('image', { href, x, y, width: w, height: h, 'clip-path': `url(#${id})`, preserveAspectRatio: 'xMidYMid slice' });
  el('rect', { x, y, width: w, height: h, rx: 24, fill: 'none', stroke: C.line, 'stroke-width': 2 });
  return para(alt, x, y + h + 50, { size: 28, color: C.muted, width: w });
}
async function fontsReady() {
  for (const f of ['700 48px "Playfair Display"', 'italic 600 48px "Playfair Display"', '700 38px Montserrat', '500 38px Montserrat']) await document.fonts.load(f, 'ığüşöçĞÜŞİÖÇâ');
  await document.fonts.ready;
}
function done() {
  [...svg.querySelectorAll('text')].forEach(t => { const r = t.getBoundingClientRect(); if (t.textContent.trim() && (r.left < SAFE.l - 2 || r.right > SAFE.r + 2 || r.top < SAFE.t || r.bottom > SAFE.b)) console.log(`UYARI güvenli alan dışı: "${t.textContent}"`); });
  window.READY = true;
}
