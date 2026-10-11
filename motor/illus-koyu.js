// Karakter illüstrasyonları (özgün, düz renkli, yumuşak hatlı masalsı stil). Yerel koordinatlar: kafa/gövde merkezi (0,0).
const SK = { skin: '#F3C7A6', ink: '#2B1B2E', blush: '#EC5B97', ginger: '#F2B67A', fox: '#E8743B', owl: '#8B6AD6' };
function P(parent, d, fill, o = {}) { return el('path', Object.assign({ d, fill: fill || 'none' }, o), parent); }
function C2(parent, cx, cy, r, fill, o = {}) { return el('circle', Object.assign({ cx, cy, r, fill }, o), parent); }
function E(parent, cx, cy, rx, ry, fill, o = {}) { return el('ellipse', Object.assign({ cx, cy, rx, ry, fill }, o), parent); }
function face(p, dx = 22, y = 0, glasses = false) {
  [-dx, dx].forEach(x => { E(p, x, y, 5, 7, SK.ink); C2(p, x + 1.5, y - 2.5, 1.8, '#fff'); });
  if (glasses) { [-dx, dx].forEach(x => C2(p, x, y, 19, 'none', { stroke: C.goldHi, 'stroke-width': 4 })); el('line', { x1: -dx + 19, y1: y, x2: dx - 19, y2: y, stroke: C.goldHi, 'stroke-width': 4 }, p); }
}
// Kadın eğitmen: altın başörtülü, yuvarlak gözlüklü, elinde not kâğıdı
function kadin(x, y, s = 1) {
  const gg = g({ transform: `translate(${x} ${y}) scale(${s})` });
  P(gg, 'M-140 190 Q-130 108 -60 98 L60 98 Q130 108 140 190 L150 330 L-150 330 Z', C.pink);
  P(gg, 'M-80 40 Q-125 110 -142 178 Q0 215 142 178 Q125 110 80 40 Z', '#E2BC62');
  P(gg, 'M-60 100 Q0 140 60 100 L50 150 Q0 175 -50 150 Z', '#C79F45', { opacity: 0.55 });
  E(gg, 0, 0, 86, 92, '#E2BC62');
  E(gg, 0, 8, 58, 66, SK.skin);
  face(gg, 22, 2, true);
  P(gg, 'M-30 -14 q8 -8 16 -2 M14 -16 q8 -6 16 2', 'none', { stroke: '#8A5A3C', 'stroke-width': 3, 'stroke-linecap': 'round' });
  P(gg, 'M0 12 q-5 10 3 12', 'none', { stroke: '#C98F6B', 'stroke-width': 3, 'stroke-linecap': 'round' });
  P(gg, 'M-18 36 Q0 52 18 36', 'none', { stroke: '#9B3D4F', 'stroke-width': 4, 'stroke-linecap': 'round' });
  C2(gg, -38, 26, 10, SK.blush, { opacity: 0.35 }); C2(gg, 38, 26, 10, SK.blush, { opacity: 0.35 });
  const pg = g({ transform: 'translate(0 222) rotate(-4)' }, gg);
  el('rect', { x: -92, y: -64, width: 184, height: 128, rx: 10, fill: C.ivory }, pg);
  el('rect', { x: -92, y: -64, width: 184, height: 26, rx: 10, fill: C.emerald }, pg);
  [-16, 8, 32].forEach((yy, i) => el('line', { x1: -68, y1: yy, x2: 52 - i * 14, y2: yy, stroke: '#B9B1A2', 'stroke-width': 4, 'stroke-linecap': 'round' }, pg));
  E(gg, -92, 232, 20, 17, SK.skin); E(gg, 92, 214, 20, 17, SK.skin);
  return gg;
}
function kedi(x, y, s = 1) {
  const gg = g({ transform: `translate(${x} ${y}) scale(${s})` });
  P(gg, 'M24 70 Q76 70 66 20 Q64 6 54 12', 'none', { stroke: SK.ginger, 'stroke-width': 14, 'stroke-linecap': 'round' });
  E(gg, 0, 52, 32, 36, SK.ginger); E(gg, 0, 60, 18, 24, '#FBE3C4');
  P(gg, 'M-34 -14 L-30 -52 L-6 -34 Z M34 -14 L30 -52 L6 -34 Z', SK.ginger);
  P(gg, 'M-28 -20 L-27 -42 L-14 -32 Z M28 -20 L27 -42 L14 -32 Z', SK.blush, { opacity: 0.7 });
  C2(gg, 0, 0, 36, SK.ginger);
  face(gg, 14, -2);
  P(gg, 'M-4 8 L4 8 L0 14 Z', SK.blush); P(gg, 'M-8 18 Q0 24 8 18', 'none', { stroke: SK.ink, 'stroke-width': 2.5, 'stroke-linecap': 'round' });
  [[-34, 8, -50, 4], [-34, 14, -50, 16], [34, 8, 50, 4], [34, 14, 50, 16]].forEach(([a, b, c, d]) => el('line', { x1: a, y1: b, x2: c, y2: d, stroke: '#FBE3C4', 'stroke-width': 2 }, gg));
  C2(gg, -22, 14, 7, SK.blush, { opacity: 0.4 }); C2(gg, 22, 14, 7, SK.blush, { opacity: 0.4 });
  return gg;
}
function tilki(x, y, s = 1) {
  const gg = g({ transform: `translate(${x} ${y}) scale(${s})` });
  P(gg, 'M30 78 Q110 80 96 14 Q80 36 40 40 Z', SK.fox); P(gg, 'M96 14 Q86 32 74 38 Q96 42 100 24 Z', C.ivory);
  E(gg, 0, 56, 34, 38, SK.fox); E(gg, 0, 64, 20, 26, C.ivory);
  P(gg, 'M-44 -8 L-38 -58 L-12 -32 L12 -32 L38 -58 L44 -8 Q42 36 0 46 Q-42 36 -44 -8 Z', SK.fox);
  P(gg, 'M-36 -14 L-34 -44 L-18 -30 Z M36 -14 L34 -44 L18 -30 Z', '#4B2A1F', { opacity: 0.55 });
  P(gg, 'M-30 12 Q0 -8 30 12 Q12 46 0 46 Q-12 46 -30 12 Z', C.ivory);
  face(gg, 17, -4); E(gg, 0, 22, 6, 4.5, SK.ink);
  C2(gg, -28, 12, 6, SK.blush, { opacity: 0.35 }); C2(gg, 28, 12, 6, SK.blush, { opacity: 0.35 });
  return gg;
}
function baykus(x, y, s = 1) {
  const gg = g({ transform: `translate(${x} ${y}) scale(${s})` });
  P(gg, 'M-34 -50 L-44 -86 L-14 -62 Z M34 -50 L44 -86 L14 -62 Z', SK.owl);
  E(gg, 0, 0, 46, 58, SK.owl); E(gg, 0, 18, 28, 34, '#C9B4FF', { opacity: 0.85 });
  [8, 22, 36].forEach(yy => P(gg, `M-14 ${yy} q7 8 14 0 q7 8 14 0`, 'none', { stroke: SK.owl, 'stroke-width': 3, 'stroke-linecap': 'round' }));
  [-18, 18].forEach(xx => { C2(gg, xx, -18, 17, '#fff'); C2(gg, xx, -17, 7, SK.ink); C2(gg, xx + 2, -20, 2.5, '#fff'); });
  P(gg, 'M-6 -4 L6 -4 L0 8 Z', C.gold);
  P(gg, 'M-30 -58 L0 -76 L30 -58 L0 -44 Z', C.bg, { stroke: C.gold, 'stroke-width': 2 }); P(gg, 'M24 -56 L28 -34', 'none', { stroke: C.gold, 'stroke-width': 3 }); C2(gg, 28, -32, 4, C.gold);
  E(gg, -46, 14, 10, 28, '#7A58C4'); E(gg, 46, 14, 10, 28, '#7A58C4');
  return gg;
}
// Kemerli pencere + sahne: kadın eğitmen ve üç basamakta üç hayvan öğrenci (temel · orta · ileri)
function sahneKapak(x, y, w, h) {
  const id = 'arch' + sd(), bg = 'abg' + sd(), defs = svg.querySelector('defs') || el('defs');
  const lg = el('linearGradient', { id: bg, x1: 0, y1: 0, x2: 0.8, y2: 1 }, defs);
  el('stop', { offset: '0%', 'stop-color': '#2E1B55' }, lg); el('stop', { offset: '100%', 'stop-color': '#0B4A3C' }, lg);
  const R = 220, d = `M${x} ${y + h} L${x} ${y + R} A${R} ${R} 0 0 1 ${x + R} ${y} L${x + w - R} ${y} A${R} ${R} 0 0 1 ${x + w} ${y + R} L${x + w} ${y + h} Z`;
  el('path', { d }, el('clipPath', { id }, defs));
  const n0 = svg.childNodes.length;
  el('path', { d, fill: `url(#${bg})` });
  C2(svg, x + 215, y + 300, 190, C.pink, { opacity: 0.16 });
  C2(svg, x + 480, y + 120, 44, C.goldHi, { opacity: 0.9 }); C2(svg, x + 498, y + 110, 40, '#2E1B55');
  [[x + 90, y + 260], [x + 360, y + 60], [x + 600, y + 80]].forEach(([a, b], i) => star(a, b, 0.7 + (i % 2) * 0.3, C.goldHi));
  [[x + 410, y + 400, 120, '#4F3487'], [x + 530, y + 340, 110, '#6544A6'], [x + 640, y + 280, 140, '#7B58C2']].forEach(([a, b, ww, c]) => el('rect', { x: a, y: b, width: ww, height: 400, rx: 14, fill: c }));
  kadin(x + 195, y + 190, 1.18);
  kedi(x + 470, y + 312, 1);
  tilki(x + 585, y + 250, 1);
  baykus(x + 690, y + 194, 1.05);
  star(x + 470, y + 232, 0.9);
  star(x + 565, y + 150, 0.9); star(x + 605, y + 138, 0.9);
  star(x + 650, y + 96, 0.9); star(x + 690, y + 84, 0.9); star(x + 730, y + 96, 0.9);
  const gg = g({ 'clip-path': `url(#${id})` });
  [...svg.childNodes].slice(n0, -1).forEach(n => gg.appendChild(n));
  el('path', { d, fill: 'none', stroke: C.gold, 'stroke-width': 3 });
}
