// 15 Ekim 2026 kapak (sade sürüm) — metafor: tek mozaik telefon ahizesi, sakin gece zemini, iki yana altın ses dalgaları.
TOHUM = 20261015;
const AHIZE = 'M-300 40 L-300 -20 Q-300 -60 -260 -72 Q-150 -150 0 -150 Q150 -150 260 -72 Q300 -60 300 -20 L300 40 Q300 84 256 84 L176 84 Q132 84 132 40 L132 4 Q132 -36 92 -48 Q0 -72 -92 -48 Q-132 -36 -132 4 L-132 40 Q-132 84 -176 84 L-256 84 Q-300 84 -300 40 Z';
async function build() {
  await fontsReady(); paper('pink'); footer('1 / 8');
  sanatSahne(112, 108, 856, 1146, { cerceve: 'tam', duzen: 'gece', palet: 'gece', merkez: [540, 500] }, () => {
    // figürün arkasında koyu yuvarlak alan + ince altın halka
    el('circle', { cx: 540, cy: 560, r: 290, fill: '#0B0710', opacity: 0.85 });
    el('circle', { cx: 540, cy: 560, r: 290, fill: 'none', stroke: C.gold, 'stroke-width': 3, opacity: 0.6 });
    // ses dalgaları: tek renk altın
    [-1, 1].forEach(k => { for (let i = 1; i <= 3; i++) el('path', { d: `M${540 + k * (250 + i * 45)} ${560 - i * 55} Q${540 + k * (275 + i * 65)} 560 ${540 + k * (250 + i * 45)} ${560 + i * 55}`, fill: 'none', stroke: C.goldHi, 'stroke-width': 12, 'stroke-linecap': 'round', opacity: 1 - i * 0.22 }); });
    const G = g({ transform: 'translate(540 580) rotate(-14) scale(0.84)' });
    el('path', { d: AHIZE, fill: OUT, stroke: OUT, 'stroke-width': 18, 'stroke-linejoin': 'round' }, G);
    mozaik(AHIZE, { palet: 'safran', boy: 40, noktalar: 0.1, isik: [-120, -120] }, G);
    el('path', { d: AHIZE, fill: 'none', stroke: C.goldHi, 'stroke-width': 5, 'stroke-linejoin': 'round' }, G);
  });
  perde(720, 1250);
  rozetZemin(); profil(150, 124, 112);
  chip('TELEFONDA MÜŞTERİ HİZMETİ', 150, 905, C.gold);
  serif('Musk\'ın yapay zekası', 150, 1010, { size: 72, color: C.ivory });
  serif('10 aramadan 7\'sini', 150, 1094, { size: 72, color: C.goldHi });
  serif('kendisi çözüyor.', 150, 1178, { size: 72, color: C.ivory, italic: true, weight: 600 });
  text('kaydır →', 950, 1318, { size: 52, font: 'Caveat', weight: 700, color: C.gold, anchor: 'end' }).dataset.free = 1;
  done();
}
build();
