// KAVRAM KAPAĞI (Bilge'nin isteği, 14 Ekim 2026): her gün aynı karikatür yüz yerine, haberin FİKRİNİ anlatan özgün bir metafor görseli.
// Fahrelnissa Zeid'den (1901–1991) esinlenen ilkeler (eserleri kopyalanmaz):
//   • kaleydoskopik soyutlama: yüzeyler koyu hatlarla bölünmüş mücevher tonlu parçalara ayrılır (mozaik())
//   • geç dönem portreleri: uzun yüz, iri badem gözler, Bizans ikonası / Fayum portresi duruşu (zeidYuz(), zeidGoz())
//   • büyük jest ile minik ayrıntı aynı resimde: büyük tek figür + içinde küçük, konuyu anlatan ayrıntı (ör. gözbebeğindeki yansıma)
// Bu dosya illus-koyu.js'ten SONRA yüklenir (P, C2, E, OUT, kaleydoskop, dal fonksiyonlarını kullanır).

// Tohumlu rastgele sayı (aynı tohum = aynı resim; her gün farklı tohum = farklı mozaik)
function rnd(seed) { let a = seed >>> 0; return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
let TOHUM = 1;  // s1.js içinde günün tarihine göre ayarla: TOHUM = 20261015;

// Mücevher paletleri (Zeid: zümrüt, lapis, yakut, altın, ametist). Her gün farklı palet seç.
const PALET = {
  zumrut: ['#0A5F49', '#12A67C', '#17B488', '#D8B45A', '#F0D58A', '#0FA3A3'],
  lapis: ['#12275A', '#1E4FA8', '#3B7BD8', '#D8B45A', '#9B6CFF', '#0FA3A3'],
  yakut: ['#5A1230', '#A3194B', '#EC5B97', '#D8B45A', '#F0A35A', '#7A2E8C'],
  ametist: ['#2E1B55', '#6A3FC4', '#9B6CFF', '#EC5B97', '#D8B45A', '#1E4FA8'],
  safran: ['#8F5A12', '#D88A2A', '#F0D58A', '#D8B45A', '#A3194B', '#0A5F49'],
  gece: ['#0B1530', '#12275A', '#2E1B55', '#0A5F49', '#D8B45A', '#F0D58A']
};
const pal = p => (Array.isArray(p) ? p : PALET[p] || PALET.zumrut);
function bbox(d) { const t = el('path', { d }); const b = t.getBBox(); t.remove(); return b; }

// MOZAİK: herhangi bir SVG yolunu koyu hatlarla bölünmüş mücevher parçalarıyla doldurur.
// o.palet (ad ya da dizi), o.boy (parça boyu px, 26–90), o.hat (koyu hat kalınlığı), o.noktalar (parça ortasına altın nokta olasılığı 0–1),
// o.isik [x,y] (bu noktaya yakın parçalar açık tonlardan seçilir: hacim hissi), o.kenar (dış altın kenar), o.op (opaklık)
function mozaik(d, o = {}, parent = svg) {
  const R = rnd((o.tohum || TOHUM) + d.length * 31), P6 = pal(o.palet), b = bbox(d), s = o.boy || 48;
  const id = 'mz' + sd(), defs = svg.querySelector('defs') || el('defs');
  el('path', { d }, el('clipPath', { id }, defs));
  const gg = g({ 'clip-path': `url(#${id})`, opacity: o.op ?? 1 }, parent);
  const cols = Math.ceil(b.width / s) + 2, rows = Math.ceil(b.height / (s * 0.87)) + 2, pts = [];
  for (let r = 0; r < rows; r++) { pts.push([]); for (let c = 0; c < cols; c++) pts[r].push([b.x - s + c * s + (r % 2) * s / 2 + (R() - 0.5) * s * 0.7, b.y - s + r * s * 0.87 + (R() - 0.5) * s * 0.6]); }
  const lit = o.isik, maxD = Math.hypot(b.width, b.height);
  const tri = (a, bb, c) => {
    const mx = (a[0] + bb[0] + c[0]) / 3, my = (a[1] + bb[1] + c[1]) / 3;
    let k = Math.floor(R() * P6.length);
    if (lit) { const t = Math.hypot(mx - lit[0], my - lit[1]) / maxD; k = Math.min(P6.length - 1, Math.max(0, Math.floor((1 - t) * P6.length * 0.9 + (R() - 0.5) * 2.2))); }
    el('path', { d: `M${a[0]} ${a[1]} L${bb[0]} ${bb[1]} L${c[0]} ${c[1]} Z`, fill: P6[k], stroke: OUT, 'stroke-width': o.hat ?? 2.4, 'stroke-linejoin': 'round' }, gg);
    if (R() < (o.noktalar ?? 0.12)) el('circle', { cx: mx, cy: my, r: Math.max(2, s / 16), fill: C.goldHi, opacity: 0.85 }, gg);
  };
  for (let r = 0; r < rows - 1; r++) for (let c = 0; c < cols - 1; c++) {
    const a = pts[r][c], bb = pts[r][c + 1], c1 = pts[r + 1][c], d1 = pts[r + 1][c + 1];
    if (r % 2 === 0) { tri(a, bb, c1); tri(bb, d1, c1); } else { tri(a, bb, d1); tri(a, d1, c1); }
  }
  if (o.kenar !== false) { el('path', { d, fill: 'none', stroke: OUT, 'stroke-width': (o.hat ?? 2.4) * 2.2, 'stroke-linejoin': 'round' }, parent); el('path', { d, fill: 'none', stroke: o.kenar || C.gold, 'stroke-width': 2.4, 'stroke-linejoin': 'round' }, parent); }
  return gg;
}

// Badem göz yolu (merkez cx,cy; genişlik w; yükseklik oranı k)
const bademD = (cx, cy, w, k = 0.42) => `M${cx - w / 2} ${cy} Q${cx - w * 0.12} ${cy - w * k} ${cx + w / 2} ${cy - w * 0.02} Q${cx + w * 0.1} ${cy + w * k * 0.82} ${cx - w / 2} ${cy} Z`;

// ZEİD GÖZÜ: iri badem göz, mozaik iris, gözbebeğinde konuya özel YANSIMA (o.yansima(cx, cy, r) ile küçük nesne çiz).
// o.iris (palet), o.bakis [-1..1, -1..1], o.kirpik, o.kas (kaş), o.yas (gözyaşı/ışık damlası)
function zeidGoz(cx, cy, w, o = {}) {
  const d = bademD(cx, cy, w, o.k || 0.42), id = 'gz' + sd(), defs = svg.querySelector('defs') || el('defs');
  el('path', { d }, el('clipPath', { id }, defs));
  el('path', { d: bademD(cx, cy, w * 1.08, (o.k || 0.42) * 1.05), fill: '#1B0F24', stroke: C.gold, 'stroke-width': 3 });  // göz kapağı gölgesi
  el('path', { d, fill: '#F4EFE4', stroke: 'none' });
  const gg = g({ 'clip-path': `url(#${id})` });
  const [bx, by] = o.bakis || [0, 0], ir = w * 0.24, ix = cx + bx * w * 0.14, iy = cy - w * 0.04 + by * w * 0.06;
  el('circle', { cx: ix, cy: iy, r: ir + 6, fill: OUT }, gg);
  mozaik(`M${ix - ir} ${iy} a${ir} ${ir} 0 1 0 ${ir * 2} 0 a${ir} ${ir} 0 1 0 ${-ir * 2} 0 Z`, { palet: o.iris || 'zumrut', boy: Math.max(14, ir / 3.2), hat: 1.4, noktalar: 0.25, kenar: false, isik: [ix - ir * 0.4, iy - ir * 0.4] }, gg);
  el('circle', { cx: ix, cy: iy, r: ir * 0.48, fill: '#0B0710', stroke: C.goldHi, 'stroke-width': 2 }, gg);
  if (o.yansima) { const yg = g({}, gg); o.yansima(ix, iy, ir * 0.48, yg); }
  el('ellipse', { cx: ix + ir * 0.45, cy: iy - ir * 0.5, rx: ir * 0.16, ry: ir * 0.11, fill: '#fff', opacity: 0.9 }, gg);
  el('path', { d: `M${cx - w / 2} ${cy} Q${cx - w * 0.12} ${cy - w * 0.42} ${cx + w / 2} ${cy - w * 0.02}`, fill: 'none', stroke: '#C9B9A6', 'stroke-width': w * 0.05, opacity: 0.5 }, gg);
  // üst kapak çizgisi + kirpikler
  el('path', { d: `M${cx - w / 2 - 6} ${cy + 2} Q${cx - w * 0.12} ${cy - w * (o.k || 0.42) - 8} ${cx + w / 2 + 8} ${cy - w * 0.02}`, fill: 'none', stroke: OUT, 'stroke-width': Math.max(5, w * 0.035), 'stroke-linecap': 'round' });
  if (o.kirpik !== false) for (let i = 1; i < 8; i++) {
    const t = i / 8, x = (1 - t) * (1 - t) * (cx - w / 2) + 2 * (1 - t) * t * (cx - w * 0.12) + t * t * (cx + w / 2), y = (1 - t) * (1 - t) * cy + 2 * (1 - t) * t * (cy - w * (o.k || 0.42)) + t * t * (cy - w * 0.02);
    el('path', { d: `M${x} ${y} l${(t - 0.5) * w * 0.06} ${-w * 0.07}`, stroke: OUT, 'stroke-width': Math.max(3, w * 0.018), 'stroke-linecap': 'round' });
  }
  el('path', { d: `M${cx - w / 2 + 10} ${cy + 6} Q${cx + w * 0.1} ${cy + w * (o.k || 0.42) * 0.82 + 6} ${cx + w / 2 - 4} ${cy + 2}`, fill: 'none', stroke: C.gold, 'stroke-width': 2.4, opacity: 0.8 });
  if (o.kas !== false) el('path', { d: `M${cx - w * 0.55} ${cy - w * 0.34} Q${cx - w * 0.05} ${cy - w * (0.62 + (o.kasKalk || 0))} ${cx + w * 0.58} ${cy - w * 0.3}`, fill: 'none', stroke: OUT, 'stroke-width': Math.max(6, w * 0.05), 'stroke-linecap': 'round' });
  if (o.yas) { const tx = cx - w * 0.2, ty = cy + w * 0.3; el('path', { d: `M${tx} ${ty} q-${w * 0.05} ${w * 0.1} 0 ${w * 0.13} q${w * 0.05} -${w * 0.03} 0 -${w * 0.13} z`, fill: C.goldHi, stroke: OUT, 'stroke-width': 2 }); }
}

// ZEİD YÜZÜ: uzun yüz, iri badem gözler, ince uzun burun, küçük ağız; baş örtüsü/saç mozaik.
// o.bas: 'basortu' | 'sac' | 'sal' (omuza dökülen şal) | 'sarik' (sarılı başlık) | 'acik' (kısa saç)
// o.ten: '#E9B992' vb.; o.palet (giysi/örtü), o.iris; o.bakis; o.goz (zeidGoz'a ek seçenekler, ör. yansima); o.kapali (gözler kapalı, düşünceli)
// o.profil: true ise yüz yarım dönük (gözler kaydırılır). Ölçek s=1'de yüz ~360 px yüksek.
function zeidYuz(cx, cy, s = 1, o = {}) {
  const ten = o.ten || '#E9B992', P6 = pal(o.palet || 'yakut');
  const fw = 120 * s, fh = 175 * s;  // yarı genişlik / yarı yükseklik
  const yuzD = `M${cx} ${cy - fh} C${cx + fw * 1.05} ${cy - fh} ${cx + fw * 1.02} ${cy + fh * 0.35} ${cx + fw * 0.55} ${cy + fh * 0.85} Q${cx} ${cy + fh * 1.1} ${cx - fw * 0.55} ${cy + fh * 0.85} C${cx - fw * 1.02} ${cy + fh * 0.35} ${cx - fw * 1.05} ${cy - fh} ${cx} ${cy - fh} Z`;
  // gövde / omuzlar
  const gD = `M${cx - fw * 2.6} ${cy + fh * 3.2} Q${cx - fw * 2.4} ${cy + fh * 1.35} ${cx - fw * 0.5} ${cy + fh * 1.05} L${cx + fw * 0.5} ${cy + fh * 1.05} Q${cx + fw * 2.4} ${cy + fh * 1.35} ${cx + fw * 2.6} ${cy + fh * 3.2} Z`;
  mozaik(gD, { palet: P6, boy: 56 * s, isik: [cx, cy + fh * 1.2] });
  el('path', { d: `M${cx - fw * 0.36} ${cy + fh * 0.7} L${cx - fw * 0.4} ${cy + fh * 1.25} Q${cx} ${cy + fh * 1.45} ${cx + fw * 0.4} ${cy + fh * 1.25} L${cx + fw * 0.36} ${cy + fh * 0.7} Z`, fill: ten, stroke: OUT, 'stroke-width': 3 });
  const bas = o.bas || 'basortu';
  if (bas === 'basortu' || bas === 'sal') {
    const rr = bas === 'sal' ? 1.5 : 1.28;
    const oD = `M${cx} ${cy - fh * 1.32} C${cx + fw * 1.75} ${cy - fh * 1.3} ${cx + fw * 1.6} ${cy + fh * 0.9} ${cx + fw * rr} ${cy + fh * 1.6} Q${cx} ${cy + fh * 1.95} ${cx - fw * rr} ${cy + fh * 1.6} C${cx - fw * 1.6} ${cy + fh * 0.9} ${cx - fw * 1.75} ${cy - fh * 1.3} ${cx} ${cy - fh * 1.32} Z`;
    mozaik(oD, { palet: P6, boy: 42 * s, isik: [cx - fw, cy - fh] });
  } else if (bas === 'sac' || bas === 'acik') {
    const uz = bas === 'sac' ? 1.75 : 0.55;
    const sD = `M${cx} ${cy - fh * 1.22} C${cx + fw * 1.6} ${cy - fh * 1.25} ${cx + fw * 1.45} ${cy + fh * uz * 0.6} ${cx + fw * 1.3} ${cy + fh * uz} L${cx - fw * 1.3} ${cy + fh * uz} C${cx - fw * 1.45} ${cy + fh * uz * 0.6} ${cx - fw * 1.6} ${cy - fh * 1.25} ${cx} ${cy - fh * 1.22} Z`;
    mozaik(sD, { palet: o.sacPalet || ['#1B0F24', '#2E1B55', '#5A1230', '#6A3FC4', '#8F7228', '#0A5F49'], boy: 34 * s, noktalar: 0.08, isik: [cx - fw, cy - fh] });
  } else if (bas === 'sarik') {
    const tD = `M${cx - fw * 1.2} ${cy - fh * 0.45} C${cx - fw * 1.5} ${cy - fh * 1.7} ${cx + fw * 1.5} ${cy - fh * 1.7} ${cx + fw * 1.2} ${cy - fh * 0.45} Q${cx} ${cy - fh * 0.75} ${cx - fw * 1.2} ${cy - fh * 0.45} Z`;
    mozaik(tD, { palet: P6, boy: 38 * s });
    for (let i = 0; i < 4; i++) el('path', { d: `M${cx - fw * 1.1} ${cy - fh * (0.6 + i * 0.22)} Q${cx} ${cy - fh * (1.05 + i * 0.22)} ${cx + fw * 1.1} ${cy - fh * (0.6 + i * 0.22)}`, fill: 'none', stroke: OUT, 'stroke-width': 4 });
  }
  el('path', { d: yuzD, fill: ten, stroke: OUT, 'stroke-width': 5 });
  // yanak gölgesi (yüzeyi bölen koyu hat hissi)
  el('path', { d: `M${cx - fw * 0.8} ${cy + fh * 0.05} Q${cx - fw * 0.75} ${cy + fh * 0.6} ${cx - fw * 0.3} ${cy + fh * 0.85} Q${cx - fw * 0.8} ${cy + fh * 0.75} ${cx - fw * 0.92} ${cy + fh * 0.1} Z`, fill: '#C98F6B', opacity: 0.45 });
  // Zeid portrelerindeki renkli gölge düzlemi: yüzün bir yarısı mor/zümrüt tonla bölünür
  const yid = 'yz' + sd(); el('path', { d: yuzD }, el('clipPath', { id: yid }, svg.querySelector('defs')));
  el('path', { d: `M${cx + fw * 0.05} ${cy - fh * 1.2} L${cx + fw * 1.4} ${cy - fh * 1.2} L${cx + fw * 1.4} ${cy + fh * 1.2} L${cx + fw * 0.1} ${cy + fh * 1.2} Q${cx + fw * 0.25} ${cy + fh * 0.4} ${cx + fw * 0.05} ${cy - fh * 1.2} Z`, fill: o.golge || '#6A3FC4', opacity: 0.22, 'clip-path': `url(#${yid})` });
  el('path', { d: `M${cx + fw * 0.05} ${cy - fh * 0.95} Q${cx + fw * 0.25} ${cy + fh * 0.4} ${cx + fw * 0.1} ${cy + fh * 0.98}`, fill: 'none', stroke: OUT, 'stroke-width': 2, opacity: 0.35, 'clip-path': `url(#${yid})` });
  C2(svg, cx - fw * 0.55, cy + fh * 0.3, fw * 0.18, '#EC5B97', { opacity: 0.22, stroke: 'none' }); C2(svg, cx + fw * 0.55, cy + fh * 0.3, fw * 0.18, '#EC5B97', { opacity: 0.22, stroke: 'none' });
  if (bas === 'basortu' || bas === 'sal') el('path', { d: yuzD, fill: 'none', stroke: C.gold, 'stroke-width': 3, transform: `translate(${cx} ${cy}) scale(1.04) translate(${-cx} ${-cy})` });
  if (bas === 'acik') el('path', { d: `M${cx - fw * 0.98} ${cy - fh * 0.35} C${cx - fw * 0.9} ${cy - fh * 1.15} ${cx + fw * 0.9} ${cy - fh * 1.15} ${cx + fw * 0.98} ${cy - fh * 0.35} Q${cx + fw * 0.3} ${cy - fh * 0.75} ${cx - fw * 0.98} ${cy - fh * 0.35} Z`, fill: '#1B0F24', stroke: OUT, 'stroke-width': 3 });
  const dx = (o.profil ? 0.18 : 0) * fw, gy = cy - fh * 0.12, gw = fw * 0.82;
  if (o.kapali) {
    [-1, 1].forEach(k => { const x = cx + k * fw * 0.45 + dx; el('path', { d: `M${x - gw / 2} ${gy} Q${x} ${gy + gw * 0.28} ${x + gw / 2} ${gy}`, fill: 'none', stroke: OUT, 'stroke-width': 6 * s, 'stroke-linecap': 'round' }); el('path', { d: `M${x - gw * 0.55} ${gy - gw * 0.36} Q${x} ${gy - gw * 0.62} ${x + gw * 0.55} ${gy - gw * 0.32}`, fill: 'none', stroke: OUT, 'stroke-width': 7 * s, 'stroke-linecap': 'round' }); });
  } else {
    [-1, 1].forEach(k => zeidGoz(cx + k * fw * 0.45 + dx, gy, gw, Object.assign({ iris: o.iris, bakis: o.bakis }, o.goz || {}, k < 0 ? {} : { yansima: o.goz && o.goz.ikisi ? o.goz.yansima : null })));
  }
  // burun (uzun ince, Bizans ikonası gibi) + ağız
  el('path', { d: `M${cx - fw * 0.06 + dx} ${gy - fh * 0.1} L${cx - fw * 0.1 + dx} ${cy + fh * 0.4} Q${cx + dx} ${cy + fh * 0.47} ${cx + fw * 0.12 + dx} ${cy + fh * 0.4}`, fill: 'none', stroke: '#9C5E44', 'stroke-width': 4 * s, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' });
  const my = cy + fh * 0.64;
  el('path', { d: `M${cx - fw * 0.22 + dx} ${my} Q${cx + dx} ${my - fh * 0.06} ${cx + fw * 0.22 + dx} ${my} Q${cx + dx} ${my + fh * (o.gulumse ? 0.12 : 0.07)} ${cx - fw * 0.22 + dx} ${my} Z`, fill: '#A3194B', stroke: OUT, 'stroke-width': 3 });
  if (o.kupe !== false && bas !== 'basortu' && bas !== 'sarik') [-1, 1].forEach(k => { const x = cx + k * fw * 1.0; el('circle', { cx: x, cy: cy + fh * 0.32, r: 9 * s, fill: C.gold, stroke: OUT, 'stroke-width': 2 }); el('path', { d: `M${x} ${cy + fh * 0.36} l-${12 * s} ${30 * s} h${24 * s} z`, fill: C.emerald, stroke: OUT, 'stroke-width': 2 }); });
}

// AÇIK EL (önden, parmaklar yukarı; nesne avucun üstünde süzülür). (x,y) avuç merkezi; rot derece; o.palet (kol yeni), o.ten
// Kullanım: önce zeidEl(...), sonra nesneyi avucun ~260*s px üstüne çiz.
function zeidEl(x, y, s = 1, rot = 0, o = {}) {
  const gg = g({ transform: `translate(${x} ${y}) rotate(${rot}) scale(${s})` });
  const ten = o.ten || '#E9B992', ot = { stroke: OUT, 'stroke-width': 5, 'stroke-linejoin': 'round' };
  mozaik('M-120 120 L-150 520 L150 520 L120 120 Z', { palet: o.palet || 'lapis', boy: 46, tohum: TOHUM + 7 }, gg);
  el('path', Object.assign({ d: 'M-128 118 Q0 150 128 118 L124 150 Q0 182 -124 150 Z', fill: C.gold }, ot), gg);
  // parmaklar (kapsül): serçe → işaret
  [[-96, 150], [-34, 178], [30, 170], [90, 138]].forEach(([fx, L]) => el('rect', Object.assign({ x: fx - 27, y: -L - 10, width: 54, height: L + 60, rx: 27, fill: ten }, ot), gg));
  // başparmak
  el('rect', Object.assign({ x: -26, y: -120, width: 54, height: 150, rx: 27, fill: ten, transform: 'translate(150 40) rotate(38)' }, ot), gg);
  // avuç
  el('path', Object.assign({ d: 'M-128 -10 Q-136 120 -110 130 L110 130 Q140 110 132 -10 Q0 20 -128 -10 Z', fill: ten }, ot), gg);
  [[-96, -2], [-34, 6], [30, 6], [90, -2]].forEach(([fx, fy]) => el('path', { d: `M${fx - 16} ${fy - 40} q16 8 32 0`, fill: 'none', stroke: '#B97A5A', 'stroke-width': 3.4, 'stroke-linecap': 'round' }, gg));
  el('path', { d: 'M-70 50 Q0 80 60 40 M-40 92 Q20 100 70 80', fill: 'none', stroke: '#C98F6B', 'stroke-width': 4, 'stroke-linecap': 'round' }, gg);
  el('path', { d: 'M-128 -10 Q-136 120 -110 130 L-20 130 Q-90 90 -100 0 Z', fill: '#9B6CFF', opacity: 0.18 }, gg);  // Zeid: tende renkli gölge düzlemi
  return gg;
}

// SİMGE NESNELER: konuya bağlanacak büyük, okunur nesneler. Hepsi mozaik dolgulu, koyu hatlı.
// (cx, cy) merkez, s ölçek (s=1 ≈ 300 px), o.palet. Yeni bir nesne gerekiyorsa aynı kalıpla s1.js içinde yolunu yaz ve mozaik() ile doldur.
const NESNE = {
  kilit: (cx, cy, s, o) => { el('path', { d: `M${cx - 90 * s} ${cy - 40 * s} V${cy - 120 * s} A${90 * s} ${90 * s} 0 0 1 ${cx + 90 * s} ${cy - 120 * s} V${cy - 40 * s}`, fill: 'none', stroke: OUT, 'stroke-width': 46 * s }); el('path', { d: `M${cx - 90 * s} ${cy - 40 * s} V${cy - 120 * s} A${90 * s} ${90 * s} 0 0 1 ${cx + 90 * s} ${cy - 120 * s} V${cy - 40 * s}`, fill: 'none', stroke: C.gold, 'stroke-width': 30 * s }); mozaik(`M${cx - 150 * s} ${cy - 50 * s} H${cx + 150 * s} V${cy + 160 * s} Q${cx + 150 * s} ${cy + 190 * s} ${cx + 120 * s} ${cy + 190 * s} H${cx - 120 * s} Q${cx - 150 * s} ${cy + 190 * s} ${cx - 150 * s} ${cy + 160 * s} Z`, { palet: o.palet, boy: 40 * s }); NESNE.anahtarDeligi(cx, cy + 70 * s, s * 0.35, { renk: '#0B0710' }); },
  anahtarDeligi: (cx, cy, s, o) => el('path', { d: `M${cx} ${cy - 120 * s} a${70 * s} ${70 * s} 0 1 1 -0.1 0 Z M${cx - 34 * s} ${cy - 10 * s} L${cx - 60 * s} ${cy + 170 * s} H${cx + 60 * s} L${cx + 34 * s} ${cy - 10 * s} Z`, fill: o.renk || '#0B0710', stroke: C.gold, 'stroke-width': 4 }),
  kumSaati: (cx, cy, s, o) => { mozaik(`M${cx - 120 * s} ${cy - 190 * s} H${cx + 120 * s} Q${cx + 110 * s} ${cy - 60 * s} ${cx + 16 * s} ${cy} Q${cx + 110 * s} ${cy + 60 * s} ${cx + 120 * s} ${cy + 190 * s} H${cx - 120 * s} Q${cx - 110 * s} ${cy + 60 * s} ${cx - 16 * s} ${cy} Q${cx - 110 * s} ${cy - 60 * s} ${cx - 120 * s} ${cy - 190 * s} Z`, { palet: o.palet, boy: 34 * s, isik: [cx, cy] }); [-1, 1].forEach(k => el('rect', { x: cx - 150 * s, y: cy + k * 200 * s - 16 * s, width: 300 * s, height: 32 * s, rx: 10 * s, fill: C.gold, stroke: OUT, 'stroke-width': 4 })); },
  zarf: (cx, cy, s, o) => { const d = `M${cx - 180 * s} ${cy - 120 * s} H${cx + 180 * s} V${cy + 120 * s} H${cx - 180 * s} Z`; mozaik(d, { palet: o.palet, boy: 44 * s }); el('path', { d: `M${cx - 180 * s} ${cy - 120 * s} L${cx} ${cy + 20 * s} L${cx + 180 * s} ${cy - 120 * s}`, fill: 'none', stroke: OUT, 'stroke-width': 10 * s }); el('path', { d: `M${cx - 180 * s} ${cy - 120 * s} L${cx} ${cy + 20 * s} L${cx + 180 * s} ${cy - 120 * s}`, fill: 'none', stroke: C.goldHi, 'stroke-width': 4 * s }); },
  telefon: (cx, cy, s, o) => { mozaik(`M${cx - 100 * s} ${cy - 190 * s} Q${cx - 100 * s} ${cy - 210 * s} ${cx - 80 * s} ${cy - 210 * s} H${cx + 80 * s} Q${cx + 100 * s} ${cy - 210 * s} ${cx + 100 * s} ${cy - 190 * s} V${cy + 190 * s} Q${cx + 100 * s} ${cy + 210 * s} ${cx + 80 * s} ${cy + 210 * s} H${cx - 80 * s} Q${cx - 100 * s} ${cy + 210 * s} ${cx - 100 * s} ${cy + 190 * s} Z`, { palet: o.palet, boy: 36 * s }); el('rect', { x: cx - 76 * s, y: cy - 170 * s, width: 152 * s, height: 320 * s, rx: 12 * s, fill: '#0B0710', stroke: C.gold, 'stroke-width': 3 }); },
  kus: (cx, cy, s, o) => { mozaik(`M${cx - 160 * s} ${cy + 10 * s} Q${cx - 60 * s} ${cy - 40 * s} ${cx} ${cy + 20 * s} Q${cx + 60 * s} ${cy - 150 * s} ${cx + 200 * s} ${cy - 170 * s} Q${cx + 120 * s} ${cy - 60 * s} ${cx + 90 * s} ${cy + 40 * s} Q${cx + 40 * s} ${cy + 120 * s} ${cx - 60 * s} ${cy + 90 * s} L${cx - 200 * s} ${cy + 130 * s} Q${cx - 150 * s} ${cy + 70 * s} ${cx - 160 * s} ${cy + 10 * s} Z`, { palet: o.palet, boy: 30 * s, noktalar: 0.2 }); el('circle', { cx: cx - 110 * s, cy: cy + 10 * s, r: 10 * s, fill: '#0B0710', stroke: C.goldHi, 'stroke-width': 3 }); el('path', { d: `M${cx - 160 * s} ${cy + 10 * s} l-40 ${-6 * s} l36 ${22 * s} z`, fill: C.gold, stroke: OUT, 'stroke-width': 3 }); },
  ampul: (cx, cy, s, o) => { mozaik(`M${cx} ${cy - 200 * s} A${150 * s} ${150 * s} 0 0 1 ${cx + 80 * s} ${cy + 70 * s} V${cy + 120 * s} H${cx - 80 * s} V${cy + 70 * s} A${150 * s} ${150 * s} 0 0 1 ${cx} ${cy - 200 * s} Z`, { palet: o.palet || 'safran', boy: 34 * s, isik: [cx, cy - 80 * s] }); for (let i = 0; i < 3; i++) el('rect', { x: cx - 76 * s, y: cy + (126 + i * 30) * s, width: 152 * s, height: 22 * s, rx: 8 * s, fill: C.gold, stroke: OUT, 'stroke-width': 3 }); },
  kalkan: (cx, cy, s, o) => mozaik(`M${cx} ${cy - 220 * s} L${cx + 180 * s} ${cy - 150 * s} V${cy + 10 * s} Q${cx + 180 * s} ${cy + 160 * s} ${cx} ${cy + 240 * s} Q${cx - 180 * s} ${cy + 160 * s} ${cx - 180 * s} ${cy + 10 * s} V${cy - 150 * s} Z`, { palet: o.palet, boy: 40 * s, isik: [cx - 60 * s, cy - 120 * s] }),
  kapi: (cx, cy, s, o) => { const d = `M${cx - 150 * s} ${cy + 240 * s} V${cy - 90 * s} A${150 * s} ${150 * s} 0 0 1 ${cx + 150 * s} ${cy - 90 * s} V${cy + 240 * s} Z`; el('path', { d, fill: '#F0D58A', stroke: OUT, 'stroke-width': 6 }); mozaik(`M${cx - 150 * s} ${cy + 240 * s} V${cy - 90 * s} A${150 * s} ${150 * s} 0 0 1 ${cx - 10 * s} ${cy - 239 * s} L${cx - 60 * s} ${cy + 260 * s} Z`, { palet: o.palet, boy: 40 * s }); },
  balon: (cx, cy, s, o) => { mozaik(`M${cx - 170 * s} ${cy - 110 * s} Q${cx - 170 * s} ${cy - 150 * s} ${cx - 130 * s} ${cy - 150 * s} H${cx + 130 * s} Q${cx + 170 * s} ${cy - 150 * s} ${cx + 170 * s} ${cy - 110 * s} V${cy + 50 * s} Q${cx + 170 * s} ${cy + 90 * s} ${cx + 130 * s} ${cy + 90 * s} H${cx - 40 * s} L${cx - 110 * s} ${cy + 160 * s} L${cx - 100 * s} ${cy + 90 * s} H${cx - 130 * s} Q${cx - 170 * s} ${cy + 90 * s} ${cx - 170 * s} ${cy + 50 * s} Z`, { palet: o.palet, boy: 38 * s }); [-1, 0, 1].forEach(k => el('circle', { cx: cx + k * 80 * s, cy: cy - 30 * s, r: 22 * s, fill: '#F4EFE4', stroke: OUT, 'stroke-width': 4 })); },
  dalga: (cx, cy, s, o) => { for (let i = 1; i <= 4; i++) el('path', { d: `M${cx + i * 50 * s} ${cy - i * 60 * s} Q${cx + i * 80 * s} ${cy} ${cx + i * 50 * s} ${cy + i * 60 * s}`, fill: 'none', stroke: i % 2 ? C.goldHi : C.pink, 'stroke-width': 12 * s, 'stroke-linecap': 'round', opacity: 1 - i * 0.15 }); },
  kitap: (cx, cy, s, o) => { mozaik(`M${cx} ${cy - 120 * s} Q${cx - 100 * s} ${cy - 170 * s} ${cx - 220 * s} ${cy - 130 * s} V${cy + 130 * s} Q${cx - 100 * s} ${cy + 90 * s} ${cx} ${cy + 140 * s} Z`, { palet: o.palet, boy: 38 * s }); el('path', { d: `M${cx} ${cy - 120 * s} Q${cx + 100 * s} ${cy - 170 * s} ${cx + 220 * s} ${cy - 130 * s} V${cy + 130 * s} Q${cx + 100 * s} ${cy + 90 * s} ${cx} ${cy + 140 * s} Z`, fill: '#F4EFE4', stroke: OUT, 'stroke-width': 5 }); for (let i = 0; i < 5; i++) el('path', { d: `M${cx + 30 * s} ${cy + (-80 + i * 40) * s} Q${cx + 110 * s} ${cy + (-110 + i * 40) * s} ${cx + 190 * s} ${cy + (-90 + i * 40) * s}`, fill: 'none', stroke: '#B9B1A2', 'stroke-width': 6 * s, 'stroke-linecap': 'round' }); },
  ajan: (cx, cy, s, o) => { el('rect', { x: cx - 110 * s, y: cy - 90 * s, width: 220 * s, height: 170 * s, rx: 40 * s, fill: '#1B0F24', stroke: o.renk || C.goldHi, 'stroke-width': 10 * s }); [-1, 1].forEach(k => el('circle', { cx: cx + k * 45 * s, cy: cy - 10 * s, r: 20 * s, fill: o.renk || C.goldHi })); el('path', { d: `M${cx} ${cy - 90 * s} v${-50 * s}`, stroke: o.renk || C.goldHi, 'stroke-width': 10 * s }); el('circle', { cx, cy: cy - 150 * s, r: 16 * s, fill: C.pink }); el('path', { d: `M${cx - 40 * s} ${cy + 40 * s} h${80 * s}`, stroke: o.renk || C.goldHi, 'stroke-width': 10 * s, 'stroke-linecap': 'round' }); }
};
const nesne = (ad, cx, cy, s = 1, o = {}) => NESNE[ad](cx, cy, s, o);

// SANAT ZEMİNİ: kapak çerçevesinin içini doldurur; her gün farklı düzen seç.
// o.duzen: 'parcali' (büyük Zeid soyut parçaları, soluk) | 'halkalar' (eşmerkezli mozaik halkalar) | 'isinlar' (merkezden ışınlar) | 'izgara' (minyatür çini ızgarası) | 'gece' (koyu, yıldızlı)
// o.palet, o.merkez [x,y], o.cerceve: 'kemer' | 'tam' | 'daire' | 'ikiz' (iki kemerli pencere); geri dönüş: clip grubu içinde çizim için fonksiyon
function sanatSahne(x, y, w, h, o = {}, ciz) {
  const defs = svg.querySelector('defs') || el('defs'), id = 'ss' + sd();
  const R = Math.min(260, w / 2), cf = o.cerceve || 'kemer';
  const d = cf === 'tam' ? `M${x} ${y} H${x + w} V${y + h} H${x} Z`
    : cf === 'daire' ? `M${x + w / 2} ${y} A${w / 2} ${w / 2} 0 1 1 ${x + w / 2 - 0.1} ${y} Z`
    : cf === 'ikiz' ? `M${x} ${y + h} V${y + w / 4} A${w / 4} ${w / 4} 0 0 1 ${x + w / 2} ${y + w / 4} A${w / 4} ${w / 4} 0 0 1 ${x + w} ${y + w / 4} V${y + h} Z`
    : `M${x} ${y + h} L${x} ${y + R} A${R} ${R} 0 0 1 ${x + R} ${y} L${x + w - R} ${y} A${R} ${R} 0 0 1 ${x + w} ${y + R} L${x + w} ${y + h} Z`;
  el('path', { d }, el('clipPath', { id }, defs));
  const gg = g({ 'clip-path': `url(#${id})` });
  const P6 = pal(o.palet), [mx, my] = o.merkez || [x + w / 2, y + h * 0.4], Rn = rnd(TOHUM + 99);
  el('rect', { x, y, width: w, height: h, fill: P6[0] }, gg);
  const du = o.duzen || 'parcali';
  if (du === 'parcali') mozaik(`M${x} ${y} H${x + w} V${y + h} H${x} Z`, { palet: P6, boy: 150, hat: 5, noktalar: 0.05, kenar: false, op: 0.55, isik: [mx, my] }, gg);
  else if (du === 'halkalar') { for (let i = 7; i >= 1; i--) { const r = i * 95; mozaik(`M${mx - r} ${my} a${r} ${r} 0 1 0 ${2 * r} 0 a${r} ${r} 0 1 0 ${-2 * r} 0 Z`, { palet: [P6[i % P6.length], P6[(i + 2) % P6.length], P6[0]], boy: 60, hat: 3, noktalar: 0.08, kenar: OUT, op: 0.75 }, gg); } }
  else if (du === 'isinlar') { const N = 22; for (let i = 0; i < N; i++) { const a0 = i * 2 * Math.PI / N, a1 = a0 + 2 * Math.PI / N; el('path', { d: `M${mx} ${my} L${mx + 1600 * Math.cos(a0)} ${my + 1600 * Math.sin(a0)} L${mx + 1600 * Math.cos(a1)} ${my + 1600 * Math.sin(a1)} Z`, fill: P6[i % P6.length], stroke: OUT, 'stroke-width': 4, opacity: 0.6 }, gg); } }
  else if (du === 'izgara') { const s = 90; for (let yy = y - s; yy < y + h + s; yy += s) for (let xx = x - s; xx < x + w + s; xx += s) { el('path', { d: `M${xx + s / 2} ${yy} L${xx + s} ${yy + s / 2} L${xx + s / 2} ${yy + s} L${xx} ${yy + s / 2} Z`, fill: P6[Math.floor(Rn() * 3)], stroke: OUT, 'stroke-width': 3, opacity: 0.7 }, gg); el('circle', { cx: xx + s / 2, cy: yy + s / 2, r: 8, fill: C.goldHi, opacity: 0.6 }, gg); } }
  else if (du === 'gece') { el('rect', { x, y, width: w, height: h, fill: '#0B0710' }, gg); for (let i = 0; i < 60; i++) el('circle', { cx: x + Rn() * w, cy: y + Rn() * h, r: 1 + Rn() * 3, fill: C.goldHi, opacity: 0.3 + Rn() * 0.6 }, gg); }
  const n0 = svg.childNodes.length;
  if (ciz) ciz({ x, y, w, h, mx, my, gg });
  [...svg.childNodes].slice(n0).forEach(n => gg.appendChild(n));
  el('path', { d, fill: 'none', stroke: C.gold, 'stroke-width': 3 });
  return gg;
}

// Başlık perdesi: alttan koyulaşan degrade (kapak başlığı okunurluğu için zorunlu)
function perde(y0 = 640, y1 = 1240) {
  const defs = svg.querySelector('defs') || el('defs'), id = 'pr' + sd();
  const lg = el('linearGradient', { id, x1: 0, y1: 0, x2: 0, y2: 1 }, defs);
  el('stop', { offset: '0%', 'stop-color': '#09090B', 'stop-opacity': 0 }, lg);
  el('stop', { offset: '40%', 'stop-color': '#09090B', 'stop-opacity': 0.75 }, lg);
  el('stop', { offset: '100%', 'stop-color': '#09090B', 'stop-opacity': 0.94 }, lg);
  el('rect', { x: 112, y: y0, width: 856, height: y1 - y0, fill: `url(#${id})` });
}

// Rozet zemini: hareketli sanat zemininde profil rozeti okunur kalsın (profil()'den ÖNCE çağır)
function rozetZemin(x = 130, y = 116, w = 560, h = 150) { el('rect', { x, y, width: w, height: h, rx: h / 2, fill: '#09090B', opacity: 0.72, stroke: C.gold, 'stroke-opacity': 0.5, 'stroke-width': 1.5 }); }
