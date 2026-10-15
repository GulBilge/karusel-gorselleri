// 16 Ekim 2026 deneme kapağı — metafor: konuşmayı not eden arı (Bee); mozaik arı, ayağında küçük not kâğıdı, sakin gece zemini.
TOHUM = 20261016;
async function build() {
  await fontsReady(); paper('purple'); footer('1 / 8');
  sanatSahne(112, 108, 856, 1146, { cerceve: 'kemer', duzen: 'gece', palet: 'zumrut', merkez: [540, 520] }, () => {
    el('circle', { cx: 540, cy: 560, r: 290, fill: '#0B0710', opacity: 0.85 });
    el('circle', { cx: 540, cy: 560, r: 290, fill: 'none', stroke: C.gold, 'stroke-width': 3, opacity: 0.6 });
    // uçuş izi
    el('path', { d: 'M220 790 Q300 680 380 730 T500 690', fill: 'none', stroke: C.goldHi, 'stroke-width': 6, 'stroke-dasharray': '4 18', 'stroke-linecap': 'round', opacity: 0.8 });
    const G = g({ transform: 'translate(570 560) rotate(-12) scale(0.85)' });
    // kanatlar
    [[-60, -120, -20], [40, -130, 20]].forEach(([dx, dy, r]) => el('ellipse', { cx: dx, cy: dy, rx: 85, ry: 120, transform: `rotate(${r} ${dx} ${dy})`, fill: '#F4EFE4', 'fill-opacity': 0.22, stroke: C.goldHi, 'stroke-width': 5 }, G));
    // gövde
    const GOVDE = 'M-150 0 Q-150 -95 0 -95 Q170 -95 200 0 Q170 95 0 95 Q-150 95 -150 0 Z';
    el('path', { d: GOVDE, fill: OUT, stroke: OUT, 'stroke-width': 18 }, G);
    mozaik(GOVDE, { palet: 'safran', boy: 34, noktalar: 0.1, isik: [-60, -60] }, G);
    [-50, 30, 110].forEach(x => el('path', { d: `M${x} -92 Q${x + 25} 0 ${x} 92`, fill: 'none', stroke: '#0B0710', 'stroke-width': 26, 'stroke-linecap': 'round' }, G));
    el('path', { d: GOVDE, fill: 'none', stroke: C.goldHi, 'stroke-width': 5 }, G);
    // baş, göz, antenler
    el('circle', { cx: -190, cy: -10, r: 62, fill: '#1B0F24', stroke: C.goldHi, 'stroke-width': 5 }, G);
    el('circle', { cx: -215, cy: -25, r: 12, fill: C.goldHi }, G);
    [[-200, -70, -250, -150], [-170, -68, -175, -160]].forEach(([x1, y1, x2, y2]) => { el('path', { d: `M${x1} ${y1} Q${(x1 + x2) / 2 - 20} ${(y1 + y2) / 2} ${x2} ${y2}`, fill: 'none', stroke: C.goldHi, 'stroke-width': 6, 'stroke-linecap': 'round' }, G); el('circle', { cx: x2, cy: y2, r: 10, fill: C.goldHi }, G); });
    // not kâğıdı
    el('path', { d: 'M-40 95 L-60 150 M40 95 L50 150', stroke: C.goldHi, 'stroke-width': 5 }, G);
    el('rect', { x: -110, y: 145, width: 210, height: 150, rx: 10, fill: '#F4EFE4', stroke: OUT, 'stroke-width': 6, transform: 'rotate(8 0 220)' }, G);
    [180, 215, 250].forEach((y, i) => el('path', { d: `M-80 ${y} h${i === 2 ? 90 : 150}`, stroke: '#8F7228', 'stroke-width': 8, 'stroke-linecap': 'round', transform: 'rotate(8 0 220)' }, G));
  });
  perde(720, 1250);
  rozetZemin(); profil(150, 124, 112);
  chip('AMAZON · YENİ CİHAZ', 150, 905, C.gold);
  serif('Konuşmaları not alan', 150, 1010, { size: 72, color: C.ivory });
  serif('iki yeni Amazon', 150, 1094, { size: 72, color: C.goldHi });
  serif('cihazı çıktı.', 150, 1178, { size: 72, color: C.ivory, italic: true, weight: 600 });
  text('kaydır →', 950, 1318, { size: 52, font: 'Caveat', weight: 700, color: C.gold, anchor: 'end' }).dataset.free = 1;
  done();
}
build();
