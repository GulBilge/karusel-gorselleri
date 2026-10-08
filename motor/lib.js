// Statik defter sayfası yardımcıları (haber karuselleri için)
const W = 1080, H = 1350;
const C = {
  paper: '#FBF6EA', line: '#D5E0EC', margin: '#E8A09C',
  plum: '#4B2448', ink: '#3E3A44', soft: '#8E8796', gold: '#C9973B',
  peach: 'rgba(247,186,150,0.62)', mint: 'rgba(160,214,190,0.62)', pink: 'rgba(242,170,190,0.55)',
  red: '#D45A55', leaf: '#7FA68C'
};
const NS = 'http://www.w3.org/2000/svg';
const svg = document.getElementById('s');
const rc = rough.svg(svg);
let SEED = 10;
const sd = () => (SEED += 7);
const P = { roughness: 1.3, bowing: 1.2, stroke: C.ink, strokeWidth: 2.6 };
const I = { roughness: 0.9, bowing: 0.8, stroke: C.plum, strokeWidth: 3 };
const S = (o, extra = {}) => Object.assign({}, o, { seed: sd() }, extra);

function el(tag, a = {}, parent = svg) { const e = document.createElementNS(NS, tag); for (const k in a) e.setAttribute(k, a[k]); parent.appendChild(e); return e; }
function g(a = {}, parent = svg) { return el('g', a, parent); }
function add(node, parent = svg) { parent.appendChild(node); return node; }

function text(str, x, y, o = {}) {
  const t = el('text', {
    x, y, fill: o.color || C.plum, 'font-family': o.font || 'Caveat', 'font-weight': o.weight || 600,
    'font-size': o.size || 48, 'text-anchor': o.anchor || 'start', 'letter-spacing': o.ls || 0,
    transform: o.rot ? `rotate(${o.rot} ${x} ${y})` : ''
  }, o.parent || svg);
  t.textContent = str;
  if (o.max && t.getComputedTextLength() > o.max) { t.setAttribute('textLength', o.max); t.setAttribute('lengthAdjust', 'spacingAndGlyphs'); }
  return t;
}
// Bant vurgusu (washi tape)
function tape(x, y, w, h, color, rot = 0) {
  const gg = g({ transform: `rotate(${rot} ${x + w / 2} ${y + h / 2})` });
  add(rc.polygon([[x, y + 3], [x + 8, y], [x + w - 6, y + 2], [x + w, y - 1], [x + w - 4, y + h], [x + 4, y + h + 2], [x - 2, y + h - 2]], S({ fill: color, fillStyle: 'solid', stroke: 'none', roughness: 0.6 })), gg);
  return gg;
}
// Fosforlu kalem altı çizgisi
function marker(x1, y, x2, color, w = 24) { add(rc.line(x1, y, x2, y - 2, S({ stroke: color, strokeWidth: w, roughness: 0.7 }))); }

function paper(opts = {}) {
  el('rect', { x: 0, y: 0, width: W, height: H, fill: C.paper });
  const tex = g({ opacity: 0.05 });
  for (let i = 0; i < 260; i++) {
    const r = ((i * 9301 + 49297) % 233280) / 233280, r2 = ((i * 7907 + 1031) % 104729) / 104729;
    el('circle', { cx: r * W, cy: r2 * H, r: 1 + (i % 3), fill: '#8a7a5a' }, tex);
  }
  for (let y = opts.firstLine || 170; y < H - 30; y += 56) el('line', { x1: 0, y1: y, x2: W, y2: y, stroke: C.line, 'stroke-width': 2 });
  el('line', { x1: 112, y1: 0, x2: 112, y2: H, stroke: C.margin, 'stroke-width': 2.4 });
  el('line', { x1: 118, y1: 0, x2: 118, y2: H, stroke: C.margin, 'stroke-width': 1, opacity: 0.6 });
  for (let x = 54; x < W; x += 64) {
    el('circle', { cx: x, cy: 52, r: 9, fill: '#E9E1D0' });
    add(rc.ellipse(x, 30, 18, 46, { roughness: 0.6, stroke: '#8B8794', strokeWidth: 2.2, seed: x }));
  }
}
function footer(page) {
  text('@teknikbilgekoc', 150, 1318, { size: 20, font: 'Montserrat', weight: 700, color: C.soft });
  if (page) text(page, 73, 128, { size: 22, font: 'Montserrat', weight: 700, color: C.soft, anchor: 'middle' });  // sol kenar boşluğunda (profil kırpmasının ve IG sayacının dışında)
}
// İnce botanik dal
function sprig(x, y, scale = 1, rot = 0, color = C.leaf) {
  const gg = g({ transform: `translate(${x} ${y}) rotate(${rot}) scale(${scale})` });
  const st = { roughness: 0.8, stroke: color, strokeWidth: 2.2, seed: sd() };
  add(rc.path('M0 0 Q10 -70 4 -150', st), gg);
  [[-30, 0.3], [-60, 0.5], [-95, 0.7], [-125, 0.85]].forEach(([yy, k], i) => {
    const side = i % 2 ? 1 : -1;
    add(rc.path(`M${3 * k} ${yy} q${side * 30} -6 ${side * 40} -28 q${-side * 26} -2 ${-side * 40} 28`, { ...st, seed: sd(), fill: 'rgba(127,166,140,0.18)', fillStyle: 'solid' }), gg);
  });
  add(rc.ellipse(4, -158, 14, 20, { ...st, seed: sd(), fill: 'rgba(242,170,190,0.5)', fillStyle: 'solid' }), gg);
  return gg;
}
function star(x, y, k = 1, color = C.gold) {
  add(rc.path(`M${x} ${y - 16 * k} L${x + 4 * k} ${y - 4 * k} L${x + 16 * k} ${y} L${x + 4 * k} ${y + 4 * k} L${x} ${y + 16 * k} L${x - 4 * k} ${y + 4 * k} L${x - 16 * k} ${y} L${x - 4 * k} ${y - 4 * k} Z`, S({ stroke: color, fill: color, fillStyle: 'solid', strokeWidth: 1.5, roughness: 0.5 })));
}
async function fontsReady() {
  for (const f of ['600 48px Caveat', '700 48px Caveat', '700 20px Montserrat', '500 20px Montserrat']) await document.fonts.load(f, 'ığüşöçĞÜŞİÖÇâ');
  await document.fonts.ready;
}
function done() { window.READY = true; }
