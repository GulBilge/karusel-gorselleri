// 15 Ekim 2026 kapak — metafor: dev mozaik telefon ahizesi, kendi kendine konuşuyor (ses dalgaları), ahizenin içinde minik yapay zeka yüzü.
TOHUM = 20261015;
const AHIZE = 'M-300 40 L-300 -20 Q-300 -60 -260 -72 Q-150 -150 0 -150 Q150 -150 260 -72 Q300 -60 300 -20 L300 40 Q300 84 256 84 L176 84 Q132 84 132 40 L132 4 Q132 -36 92 -48 Q0 -72 -92 -48 Q-132 -36 -132 4 L-132 40 Q-132 84 -176 84 L-256 84 Q-300 84 -300 40 Z';
async function build() {
  await fontsReady(); paper('pink'); footer('1 / 8');
  sanatSahne(112, 108, 856, 1146, { cerceve: 'tam', duzen: 'halkalar', palet: 'gece', merkez: [540, 520] }, () => {
    kaleydoskop(svg, 540, 520, 420, 0.25);
    // ses dalgaları iki yana
    [-1, 1].forEach(k => { for (let i = 1; i <= 4; i++) el('path', { d: `M${540 + k * (300 + i * 55)} ${520 - i * 70} Q${540 + k * (330 + i * 85)} 520 ${540 + k * (300 + i * 55)} ${520 + i * 70}`, fill: 'none', stroke: i % 2 ? C.goldHi : C.pink, 'stroke-width': 14, 'stroke-linecap': 'round', opacity: 1 - i * 0.17 }); });
    const G = g({ transform: 'translate(540 470) rotate(-14) scale(1.25)' });
    el('path', { d: AHIZE, fill: OUT, transform: 'translate(10 14)' }, G);
    mozaik(AHIZE, { palet: 'safran', boy: 34, noktalar: 0.18, isik: [-120, -120] }, G);
    // kulaklık ve mikrofon delikleri
    [-216, 216].forEach(cx => { el('ellipse', { cx, cy: 70, rx: 62, ry: 16, fill: '#0B0710', stroke: C.goldHi, 'stroke-width': 3 }, G); for (let j = -2; j <= 2; j++) el('circle', { cx: cx + j * 22, cy: 70, r: 4, fill: C.goldHi }, G); });
    // kordon
    let d = 'M216 84'; for (let i = 0; i < 9; i++) d += ` q${10} ${26} ${-12} ${34}`; el('path', { d, fill: 'none', stroke: C.gold, 'stroke-width': 7, 'stroke-linecap': 'round' }, G);
    // minik ayrıntı: ahizenin ortasında yapay zeka yüzü (madalyon)
    el('circle', { cx: 540, cy: 360, r: 78, fill: '#0B0710', stroke: C.goldHi, 'stroke-width': 5 });
    nesne('ajan', 540, 372, 0.42, { renk: C.goldHi });
  });
  perde(700, 1250);
  rozetZemin(); profil(150, 124, 112);
  chip('xAI · GROK VOICE 3.0', 150, 905, C.gold);
  serif('xAI\'ın sesli ajanı', 150, 1010, { size: 72, color: C.ivory });
  serif('10 aramanın 7\'sini', 150, 1094, { size: 72, color: C.goldHi });
  serif('insansız çözüyor.', 150, 1178, { size: 72, color: C.ivory, italic: true, weight: 600 });
  text('kaydır →', 950, 1318, { size: 52, font: 'Caveat', weight: 700, color: C.gold, anchor: 'end' }).dataset.free = 1;
  done();
}
build();
