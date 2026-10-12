// Karakter illüstrasyonları (özgün, düz renkli, yumuşak hatlı masalsı stil). Yerel koordinatlar: kafa/gövde merkezi (0,0).
const SK = { skin: '#F3C7A6', ink: '#2B1B2E', blush: '#EC5B97', ginger: '#F2B67A', fox: '#E8743B', owl: '#8B6AD6' };
// Fahrelnissa Zeid'den (1901–1991) esinlenen ilkeler (eserleri kopyalanmaz): mücevher tonları, koyu hatlarla bölünmüş yüzeyler, kaleydoskopik süsleme.
const OUT = '#1B0F24';
const ol = (fill, o) => (fill && fill !== 'none' && !o.stroke ? { stroke: OUT, 'stroke-width': 2.4, 'stroke-linejoin': 'round' } : {});
function P(parent, d, fill, o = {}) { return el('path', Object.assign({ d, fill: fill || 'none' }, ol(fill, o), o), parent); }
function C2(parent, cx, cy, r, fill, o = {}) { return el('circle', Object.assign({ cx, cy, r, fill }, ol(fill, o), o), parent); }
function E(parent, cx, cy, rx, ry, fill, o = {}) { return el('ellipse', Object.assign({ cx, cy, rx, ry, fill }, ol(fill, o), o), parent); }
// Desenler (kumaş, mozaik): defs içine bir kez eklenir
function desenler() {
  const defs = svg.querySelector('defs') || el('defs');
  if (defs.querySelector('#dsn-elmas')) return;
  const a = el('pattern', { id: 'dsn-elmas', width: 26, height: 26, patternUnits: 'userSpaceOnUse' }, defs);
  el('path', { d: 'M13 3 L23 13 L13 23 L3 13 Z', fill: 'none', stroke: C.goldHi, 'stroke-width': 1.6 }, a); el('circle', { cx: 13, cy: 13, r: 2, fill: C.goldHi }, a);
  const b = el('pattern', { id: 'dsn-nokta', width: 18, height: 18, patternUnits: 'userSpaceOnUse' }, defs);
  el('circle', { cx: 9, cy: 9, r: 2.4, fill: C.goldHi, opacity: 0.8 }, b);
  const c = el('pattern', { id: 'dsn-mozaik', width: 40, height: 40, patternUnits: 'userSpaceOnUse' }, defs);
  el('path', { d: 'M0 20 L20 0 L40 20 L20 40 Z', fill: 'none', stroke: C.goldHi, 'stroke-width': 1.4, opacity: 0.55 }, c); el('circle', { cx: 20, cy: 20, r: 4, fill: 'none', stroke: C.goldHi, 'stroke-width': 1.4, opacity: 0.55 }, c);
}
// Kumaş deseni bindirmesi
function desenli(parent, d, dsn, op = 0.5) { return el('path', { d, fill: `url(#${dsn})`, stroke: 'none', opacity: op }, parent); }
// İnsan yüzü: gözler beyaz + iris + parıltı + üst kapak, isteğe bağlı gözlük
function faceHuman(p, dx = 22, y = 0, glasses = false, iris = '#6B4226') {
  [-dx, dx].forEach((x, i) => {
    E(p, x, y, 10, 8.5, '#fff', { 'stroke-width': 1.6 });
    C2(p, x + (i ? -1 : 1), y + 0.5, 6.4, iris, { stroke: 'none' }); C2(p, x + (i ? -1 : 1), y + 0.5, 3.2, SK.ink, { stroke: 'none' }); C2(p, x + 2.5, y - 2.5, 2, '#fff', { stroke: 'none' });
    P(p, `M${x - 11} ${y - 2} Q${x} ${y - 15} ${x + 11} ${y - 2}`, 'none', { stroke: SK.ink, 'stroke-width': 3.4, 'stroke-linecap': 'round' });
    P(p, `M${x + (i ? 9 : -9)} ${y - 3} l${i ? 5 : -5} -4`, 'none', { stroke: SK.ink, 'stroke-width': 2.4, 'stroke-linecap': 'round' });
  });
  if (glasses) { [-dx, dx].forEach(x => C2(p, x, y, 19, 'none', { stroke: C.goldHi, 'stroke-width': 3.6 })); el('line', { x1: -dx + 19, y1: y, x2: dx - 19, y2: y, stroke: C.goldHi, 'stroke-width': 3.6 }, p); }
}
function face(p, dx = 22, y = 0, glasses = false) {
  [-dx, dx].forEach(x => { E(p, x, y, 5, 7, SK.ink); C2(p, x + 1.5, y - 2.5, 1.8, '#fff'); });
  if (glasses) { [-dx, dx].forEach(x => C2(p, x, y, 19, 'none', { stroke: C.goldHi, 'stroke-width': 4 })); el('line', { x1: -dx + 19, y1: y, x2: dx - 19, y2: y, stroke: C.goldHi, 'stroke-width': 4 }, p); }
}
// Kadın karakter (ilk tercih). tip: 'basortulu' (varsayılan) | 'sacli' | 'kiz' (kız çocuğu) | 'anne' (kucağında bebek) | 'yasli'
// o.basortu = true ise anne/yaşlı başörtülü çizilir. Konuya göre seç: çocuk/okul → kiz, aile/ebeveyn → anne, deneyim/usta → yasli, iş/uzman → basortulu ya da sacli.
function kadin(x, y, s = 1, o = {}) {
  const tip = o.tip || 'basortulu';
  const scarf = tip === 'basortulu' || (!!o.basortu && (tip === 'anne' || tip === 'yasli'));
  const hair = tip === 'yasli' ? '#D4D2DC' : tip === 'kiz' ? '#4A2C2A' : '#5A3A2E';
  const cloth = { basortulu: C.pink, sacli: '#12A67C', kiz: C.purple, anne: '#0FA3A3', yasli: '#8E7AB5' }[tip];
  const scarfC = tip === 'yasli' ? '#BFA8E8' : tip === 'anne' ? C.pink : '#E2BC62', scarfD = tip === 'yasli' ? '#A58DD0' : tip === 'anne' ? '#D04A82' : '#C79F45';
  const gg = g({ transform: `translate(${x} ${y}) scale(${s})` });
  const w = tip === 'kiz' ? 104 : 140;
  desenler();
  // saç arkası / sarkan saç / topuz
  if (!scarf) {
    if (tip === 'sacli') P(gg, 'M-86 -10 Q-96 90 -120 190 L120 190 Q96 90 86 -10 Z', hair);
    if (tip === 'kiz') { C2(gg, -90, 44, 30, hair); C2(gg, 90, 44, 30, hair); C2(gg, -86, 14, 9, C.pink); C2(gg, 86, 14, 9, C.pink); }
    if (tip === 'anne') C2(gg, 0, -96, 34, hair);
    if (tip === 'yasli') C2(gg, 0, -100, 34, hair);
    E(gg, 0, -6, 76, 82, hair);
  }
  const bodyD = `M-${w} 190 Q-${w - 10} 108 -60 98 L60 98 Q${w - 10} 108 ${w} 190 L${w + 10} 330 L-${w + 10} 330 Z`;
  P(gg, bodyD, cloth); desenli(gg, bodyD, tip === 'kiz' ? 'dsn-nokta' : 'dsn-elmas', 0.32);
  P(gg, 'M-' + w + ' 190 Q-' + (w - 10) + ' 108 -60 98', 'none', { stroke: C.goldHi, 'stroke-width': 3, opacity: 0.8 });
  P(gg, 'M-22 56 L-26 116 Q0 134 26 116 L22 56 Z', SK.skin); P(gg, 'M-24 84 Q0 118 24 84 L26 116 Q0 134 -26 116 Z', '#D9A07E', { stroke: 'none', opacity: 0.6 });
  if (tip === 'yasli') P(gg, 'M-120 150 Q0 200 120 150 L124 330 L90 330 Q0 230 -90 330 L-124 330 Z', '#A793CC', { opacity: 0.8 });
  if (scarf) {
    P(gg, 'M-80 40 Q-125 110 -142 178 Q0 215 142 178 Q125 110 80 40 Z', scarfC); desenli(gg, 'M-80 40 Q-125 110 -142 178 Q0 215 142 178 Q125 110 80 40 Z', 'dsn-nokta', 0.45);
    P(gg, 'M-60 100 Q0 140 60 100 L50 150 Q0 175 -50 150 Z', scarfD, { opacity: 0.55 });
    E(gg, 0, 0, 86, 92, scarfC); E(gg, 0, 0, 86, 92, `url(#dsn-nokta)`, { stroke: 'none', opacity: 0.4 });
  }
  E(gg, 0, 8, 58, 66, SK.skin);
  P(gg, 'M-52 28 Q-44 62 -10 67 Q-46 64 -54 28 Z', '#D9A07E', { stroke: 'none', opacity: 0.45 });
  if (scarf) E(gg, 0, 8, 61, 69, 'none', { stroke: C.goldHi, 'stroke-width': 3.2 });
  if (!scarf) {
    P(gg, tip === 'sacli' ? 'M-60 -6 Q-66 -82 0 -86 Q66 -82 60 -6 Q50 -34 12 -52 Q-30 -34 -60 -6 Z' : 'M-60 -10 Q-64 -80 0 -84 Q64 -80 60 -10 Q40 -50 0 -46 Q-40 -50 -60 -10 Z', hair);
  }
  faceHuman(gg, 22, 2, tip !== 'kiz', tip === 'yasli' ? '#5E7C8A' : tip === 'kiz' ? '#3E7C5A' : '#6B4226');
  P(gg, 'M-30 -14 q8 -8 16 -2 M14 -16 q8 -6 16 2', 'none', { stroke: tip === 'yasli' ? '#9C9AA8' : '#8A5A3C', 'stroke-width': 3, 'stroke-linecap': 'round' });
  P(gg, 'M0 12 q-5 10 3 12', 'none', { stroke: '#C98F6B', 'stroke-width': 3, 'stroke-linecap': 'round' });
  P(gg, 'M-17 37 Q0 56 17 37 Q0 44 -17 37 Z', '#D4546F', { stroke: '#9B3D4F', 'stroke-width': 2 });
  if (tip === 'yasli') {
    P(gg, 'M-44 -2 q-8 4 -10 12 M44 -2 q8 4 10 12 M-30 -30 q30 -8 60 0 M-26 -40 q26 -6 52 0', 'none', { stroke: '#C98F6B', 'stroke-width': 2.4, 'stroke-linecap': 'round', opacity: 0.8 });
    P(gg, 'M-30 38 q-4 8 -2 14 M30 38 q4 8 2 14', 'none', { stroke: '#C98F6B', 'stroke-width': 2.4, 'stroke-linecap': 'round', opacity: 0.7 });
  }
  C2(gg, -38, 26, 10, SK.blush, { opacity: 0.35, stroke: 'none' }); C2(gg, 38, 26, 10, SK.blush, { opacity: 0.35, stroke: 'none' });
  if (!scarf) P(gg, 'M-30 -60 Q-6 -78 22 -66 M-46 -40 Q-36 -52 -26 -56', 'none', { stroke: tip === 'yasli' ? '#fff' : '#9A6C5A', 'stroke-width': 5, 'stroke-linecap': 'round', opacity: 0.55 });
  if (tip !== 'kiz') {
    P(gg, 'M-50 116 Q0 160 50 116', 'none', { stroke: C.gold, 'stroke-width': 4 });
    C2(gg, 0, 146, 9, C.emerald, { stroke: C.gold, 'stroke-width': 3 }); C2(gg, 0, 146, 3, C.goldHi, { stroke: 'none' });
    [-60, 60].forEach(xx => { C2(gg, xx, 44, 5, C.gold); C2(gg, xx, 58, 7, '#F4EFE4'); });
  }
  if (tip === 'anne') {
    // kucakta bebek
    E(gg, -70, 238, 54, 64, '#F6E7D6'); E(gg, -70, 238, 54, 64, 'none', { stroke: C.gold, 'stroke-width': 3 });
    C2(gg, -70, 196, 28, SK.skin); P(gg, 'M-98 190 Q-70 160 -42 190 Q-70 176 -98 190 Z', C.pink);
    P(gg, 'M-80 198 q6 5 12 0 M-62 198 q6 5 12 0', 'none', { stroke: SK.ink, 'stroke-width': 2.4, 'stroke-linecap': 'round' });
    C2(gg, -86, 208, 5, SK.blush, { opacity: 0.4 }); C2(gg, -54, 208, 5, SK.blush, { opacity: 0.4 });
    E(gg, -30, 258, 20, 17, SK.skin); E(gg, -112, 262, 18, 15, SK.skin);
    return gg;
  }
  const pg = g({ transform: `translate(0 ${tip === 'kiz' ? 232 : 222}) rotate(-4)` }, gg);
  const pw = tip === 'kiz' ? 150 : 184;
  el('rect', { x: -pw / 2, y: -64, width: pw, height: 128, rx: 10, fill: C.ivory }, pg);
  el('rect', { x: -pw / 2, y: -64, width: pw, height: 26, rx: 10, fill: tip === 'kiz' ? C.pink : C.emerald }, pg);
  [-16, 8, 32].forEach((yy, k) => el('line', { x1: -pw / 2 + 24, y1: yy, x2: pw / 2 - 40 - k * 14, y2: yy, stroke: '#B9B1A2', 'stroke-width': 4, 'stroke-linecap': 'round' }, pg));
  E(gg, -pw / 2, 232, 20, 17, SK.skin); E(gg, pw / 2, 214, 20, 17, SK.skin);
  return gg;
}
// Erkek uzman: kısa saçlı, sakallı, yuvarlak gözlüklü, zümrüt blazerli, elinde not kâğıdı
function adam(x, y, s = 1) {
  const gg = g({ transform: `translate(${x} ${y}) scale(${s})` });
  desenler();
  P(gg, 'M-140 190 Q-130 108 -60 98 L60 98 Q130 108 140 190 L150 330 L-150 330 Z', '#0F7F63'); desenli(gg, 'M-140 190 Q-130 108 -60 98 L60 98 Q130 108 140 190 L150 330 L-150 330 Z', 'dsn-nokta', 0.22);
  E(gg, 0, 92, 26, 30, '#E9B992');
  P(gg, 'M-36 98 L0 176 L36 98 Z', C.ivory); P(gg, 'M0 122 l-9 14 l9 46 l9 -46 z', C.gold); P(gg, 'M70 150 l24 -8 l5 22 l-26 5 z', C.pink); P(gg, 'M-70 150 l-18 4 l2 12', 'none', { stroke: C.goldHi, 'stroke-width': 3 });
  E(gg, -58, 12, 9, 15, '#E9B992'); E(gg, 58, 12, 9, 15, '#E9B992');
  E(gg, 0, 8, 56, 66, SK.skin);
  P(gg, 'M-62 -4 Q-72 -80 0 -82 Q72 -80 62 -4 Q54 -46 0 -50 Q-54 -46 -62 -4 Z', '#2B1B2E');
  P(gg, 'M-52 28 Q-46 84 0 86 Q46 84 52 28 Q40 62 0 66 Q-40 62 -52 28 Z', '#3A2A33');
  faceHuman(gg, 22, 2, true, '#4A3A2A');
  P(gg, 'M-30 -14 q8 -8 16 -2 M14 -16 q8 -6 16 2', 'none', { stroke: '#2B1B2E', 'stroke-width': 4, 'stroke-linecap': 'round' });
  P(gg, 'M-16 40 Q0 54 16 40', 'none', { stroke: '#F3C7A6', 'stroke-width': 4, 'stroke-linecap': 'round' });
  const pg = g({ transform: 'translate(0 232) rotate(-4)' }, gg);
  el('rect', { x: -92, y: -64, width: 184, height: 128, rx: 10, fill: C.ivory }, pg);
  el('rect', { x: -92, y: -64, width: 184, height: 26, rx: 10, fill: C.purple }, pg);
  [-16, 8, 32].forEach((yy, i) => el('line', { x1: -68, y1: yy, x2: 52 - i * 14, y2: yy, stroke: '#B9B1A2', 'stroke-width': 4, 'stroke-linecap': 'round' }, pg));
  E(gg, -92, 242, 20, 17, '#E9B992'); E(gg, 92, 224, 20, 17, '#E9B992');
  return gg;
}
function kedi(x, y, s = 1) {
  const gg = g({ transform: `translate(${x} ${y}) scale(${s})` });
  P(gg, 'M24 70 Q76 70 66 20 Q64 6 54 12', 'none', { stroke: SK.ginger, 'stroke-width': 14, 'stroke-linecap': 'round' });
  E(gg, 0, 52, 32, 36, SK.ginger); E(gg, 0, 60, 18, 24, '#FBE3C4');
  P(gg, 'M-34 -14 L-30 -52 L-6 -34 Z M34 -14 L30 -52 L6 -34 Z', SK.ginger);
  P(gg, 'M-28 -20 L-27 -42 L-14 -32 Z M28 -20 L27 -42 L14 -32 Z', SK.blush, { opacity: 0.7 });
  C2(gg, 0, 0, 36, SK.ginger);
  P(gg, 'M-10 -34 l0 12 M0 -36 l0 14 M10 -34 l0 12', 'none', { stroke: '#C9824A', 'stroke-width': 3, 'stroke-linecap': 'round' }); P(gg, 'M-30 48 l12 -4 M-30 60 l12 -2 M30 48 l-12 -4 M30 60 l-12 -2', 'none', { stroke: '#C9824A', 'stroke-width': 3, 'stroke-linecap': 'round' });
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
  P(gg, 'M-44 10 l-12 2 l8 5 l-10 6 M44 10 l12 2 l-8 5 l10 6', SK.fox, { 'stroke-width': 2 });
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
  P(gg, 'M-48 0 l-4 14 M-46 10 l-4 14 M48 0 l4 14 M46 10 l4 14', 'none', { stroke: '#C9B4FF', 'stroke-width': 2.4, 'stroke-linecap': 'round' });
  return gg;
}
// Kaleydoskop süsleme: mücevher tonlu, koyu hatlarla bölünmüş halkalar (arka plan)
function kaleydoskop(parent, cx, cy, R, op = 0.55) {
  const pal = [C.emerald, C.gold, C.pink, C.purple, '#0FA3A3'];
  const gg = g({ opacity: op }, parent);
  const N = 18, pt = (r, a) => [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  for (let i = 0; i < 4; i++) {
    const r0 = R * (1 - i * 0.2), r1 = R * (1 - (i + 1) * 0.2);
    for (let j = 0; j < N; j++) {
      const a0 = (j + (i % 2) * 0.5) * 2 * Math.PI / N, a1 = a0 + 2 * Math.PI / N, am = (a0 + a1) / 2;
      const [x0, y0] = pt(r0, a0), [x1, y1] = pt(r0, a1), [x2, y2] = pt(r1, am);
      el('path', { d: `M${x0} ${y0} L${x1} ${y1} L${x2} ${y2} Z`, fill: pal[(i * 2 + j) % pal.length], stroke: OUT, 'stroke-width': 2, 'stroke-linejoin': 'round' }, gg);
      const [x3, y3] = pt(r0 * 0.93, am);
      el('circle', { cx: x3, cy: y3, r: 3, fill: C.goldHi, opacity: 0.9 }, gg);
    }
  }
  el('circle', { cx, cy, r: R * 0.2, fill: C.gold, stroke: OUT, 'stroke-width': 2.4 }, gg);
  el('circle', { cx, cy, r: R * 0.1, fill: C.pink, stroke: OUT, 'stroke-width': 2 }, gg);
}
// Minyatür tarzı yaprak dalı: yapraklar iki yanda, uçta çiçek
function dal(x, y, len, rot, flip = 1, color = C.emerald) {
  const gg = g({ transform: `translate(${x} ${y}) rotate(${rot}) scale(${flip} 1)` });
  P(gg, `M0 0 Q${len * 0.2} ${-len * 0.5} ${len * 0.05} ${-len}`, 'none', { stroke: C.gold, 'stroke-width': 3.4, 'stroke-linecap': 'round' });
  for (let i = 1; i <= 6; i++) {
    const t = i / 7, yy = -len * t, side = i % 2 ? 1 : -1, L = 46 - i * 3;
    P(gg, `M${len * 0.12 * t} ${yy} q${side * L} ${-8} ${side * L * 1.1} ${-L * 0.9} q${-side * L * 0.9} ${-2} ${-side * L * 1.1} ${L * 0.9} z`, i % 3 === 0 ? C.emeraldDeep : color, { 'stroke-width': 2 });
    P(gg, `M${len * 0.12 * t} ${yy} q${side * L * 0.5} ${-L * 0.2} ${side * L * 0.9} ${-L * 0.8}`, 'none', { stroke: C.goldHi, 'stroke-width': 1.6, opacity: 0.8 });
  }
  const tx = len * 0.05, ty = -len - 6;
  [0, 72, 144, 216, 288].forEach(a => E(gg, tx + 13 * Math.cos(a * Math.PI / 180), ty + 13 * Math.sin(a * Math.PI / 180), 10, 6.5, C.pink, { transform: `rotate(${a} ${tx + 13 * Math.cos(a * Math.PI / 180)} ${ty + 13 * Math.sin(a * Math.PI / 180)})` }));
  C2(gg, tx, ty, 6.5, C.goldHi);
  return gg;
}
// Kemerli pencere + sahne: kadın eğitmen ve üç basamakta üç hayvan öğrenci (temel · orta · ileri)
// o.kisi: 'kadin' (varsayılan, ilk tercih) | 'adam' (yalnızca içerik erkek karaktere özellikle uygunsa). Kadın için o.tip: 'basortulu' | 'sacli' | 'kiz' | 'anne' | 'yasli' (+ o.basortu).
// Çeşitlilik (Bilge: "hep aynı görsel olmasın"): o.zemin 'mor'|'zumrut'|'bordo'|'lacivert'|'altin', o.kaleydoskop 'sol'|'sag'|'yok',
// o.sutunlar true|false (false: hayvanlar zeminde), o.hayvanlar ['kedi','tilki','baykus'] alt kümesi/sırası (boş dizi = hayvansız, karakter büyür), o.ay true|false, o.kisi/o.tip karakter.
function sahneKapak(x, y, w, h, o = {}) {
  const id = 'arch' + sd(), bg = 'abg' + sd(), defs = svg.querySelector('defs') || el('defs');
  const ZM = { mor: ['#2E1B55', '#0B4A3C'], zumrut: ['#0B4A3C', '#2E1B55'], bordo: ['#4A1230', '#1B2A55'], lacivert: ['#12275A', '#4A1B55'], altin: ['#5A3F12', '#2E1B55'] };
  const zc = ZM[o.zemin] || ZM.mor;
  const lg = el('linearGradient', { id: bg, x1: 0, y1: 0, x2: 0.8, y2: 1 }, defs);
  el('stop', { offset: '0%', 'stop-color': zc[0] }, lg); el('stop', { offset: '100%', 'stop-color': zc[1] }, lg);
  const R = 220, d = `M${x} ${y + h} L${x} ${y + R} A${R} ${R} 0 0 1 ${x + R} ${y} L${x + w - R} ${y} A${R} ${R} 0 0 1 ${x + w} ${y + R} L${x + w} ${y + h} Z`;
  el('path', { d }, el('clipPath', { id }, defs));
  const n0 = svg.childNodes.length;
  el('path', { d, fill: `url(#${bg})` });
  desenler();
  const ks = o.kaleydoskop || 'sol', ksx = ks === 'sag' ? x + w - 250 : x + 250;
  if (ks !== 'yok') { kaleydoskop(svg, ksx, y + 260, 300, 0.78); C2(svg, ksx, y + 300, 150, '#1B0F24', { opacity: 0.28, stroke: 'none' }); }
  if (o.ay !== false) { const ax = ks === 'sag' ? x + 120 : x + 480; C2(svg, ax, y + 120, 44, C.goldHi, { opacity: 0.95 }); C2(svg, ax + 18, y + 110, 40, zc[0], { stroke: 'none' }); }
  [[x + 90, y + 260], [x + 360, y + 60], [x + 600, y + 80]].forEach(([a, b], i) => star(a, b, 0.7 + (i % 2) * 0.3, C.goldHi));
  const sut = o.sutunlar !== false, hay = o.hayvanlar || ['kedi', 'tilki', 'baykus'];
  if (sut) [[x + 410, y + 400, 120, '#4F3487'], [x + 530, y + 340, 110, '#6544A6'], [x + 640, y + 280, 140, '#7B58C2']].forEach(([a, b, ww, c]) => { el('rect', { x: a, y: b, width: ww, height: 400, rx: 14, fill: c, stroke: OUT, 'stroke-width': 2.4 }); el('rect', { x: a, y: b, width: ww, height: 400, rx: 14, fill: 'url(#dsn-mozaik)' }); el('rect', { x: a + 6, y: b + 6, width: ww - 12, height: 12, rx: 6, fill: C.goldHi, opacity: 0.5 }); });
  const k = o.kisi === 'adam' ? adam : kadin, kx = hay.length ? (ks === 'sag' ? x + 250 : x + 195) : x + w / 2 - 40;
  k(kx, y + 190, hay.length ? 1.18 : 1.3, o);
  const POS = sut ? { kedi: [470, 312, 1], tilki: [585, 250, 1], baykus: [690, 194, 1.05] } : { kedi: [500, 430, 1.1], tilki: [610, 400, 1.15], baykus: [700, 330, 1.1] };
  hay.forEach(n => { const p = POS[n]; if (p) ({ kedi, tilki, baykus })[n](x + p[0], y + p[1], p[2]); });
  star(x + 470, y + 232, 0.9);
  star(x + 565, y + 150, 0.9); star(x + 605, y + 138, 0.9);
  star(x + 650, y + 96, 0.9); star(x + 690, y + 84, 0.9); star(x + 730, y + 96, 0.9);
  dal(x + 20, y + h + 10, 190, 12, 1); dal(x + w - 20, y + h + 10, 170, -14, -1, '#17B488');
  const gg = g({ 'clip-path': `url(#${id})` });
  [...svg.childNodes].slice(n0, -1).forEach(n => gg.appendChild(n));
  el('path', { d, fill: 'none', stroke: C.gold, 'stroke-width': 3 });
}
