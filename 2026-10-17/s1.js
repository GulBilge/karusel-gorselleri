// 17 Ekim 2026 kapak — metafor: başörtülü Zeid yüzü yukarı bakıyor, başının üstünde parlayan altın anahtar ("buldum!" anı); mozaik yakut örtü, sakin gece zemin.
// Not (Bilge, 17 Ekim 2026): tek göz simgesi kullanılmaz. Açık kalkık avuç da (nazar/el simgesi çağrışımı) kullanılmadı.
TOHUM = 20261017;
const ANAHTAR = 'M-200 -62 a62 62 0 1 0 0.1 0 Z M-200 -26 a26 26 0 1 1 -0.1 0 Z M-140 -16 H190 L214 0 L190 16 H170 V56 H140 V16 H112 V44 H84 V16 H-140 Z';
async function build() {
  await fontsReady(); paper('purple'); footer('1 / 8');
  sanatSahne(112, 108, 856, 1146, { cerceve: 'tam', duzen: 'gece', palet: 'ametist', merkez: [540, 500] }, () => {
    glow(540, 320, 360, C.goldHi, 0.28);
    el('circle', { cx: 540, cy: 600, r: 400, fill: '#0B0710', opacity: 0.75 });
    zeidYuz(540, 640, 1.0, { bas: 'basortu', palet: 'yakut', ten: '#D9A07E', bakis: [0.1, -0.9], gulumse: true });
    // ışık huzmeleri
    for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6; el('path', { d: `M${540 + 190 * Math.cos(a)} ${300 + 110 * Math.sin(a)} L${540 + 250 * Math.cos(a)} ${300 + 150 * Math.sin(a)}`, stroke: C.goldHi, 'stroke-width': 8, 'stroke-linecap': 'round', opacity: 0.7 }); }
    const G = g({ transform: 'translate(560 300) rotate(-8) scale(0.85)' });
    el('path', { d: ANAHTAR, fill: OUT, 'fill-rule': 'evenodd', transform: 'translate(8 10)' }, G);
    el('path', { d: ANAHTAR, fill: C.gold, 'fill-rule': 'evenodd', stroke: OUT, 'stroke-width': 6, 'stroke-linejoin': 'round' }, G);
    el('path', { d: 'M-130 -8 H180', stroke: C.goldHi, 'stroke-width': 5, 'stroke-linecap': 'round' }, G);
    [[250, 240], [850, 280], [820, 760]].forEach(([x, y], i) => star(x, y, 0.8 - i * 0.15, C.goldHi));
  });
  perde(720, 1250);
  rozetZemin(); profil(150, 124, 112);
  chip('CLAUDE YAPAY ZEKASI · 16 EKİM', 150, 905, C.gold);
  serif('Yıllarca takıldığın', 150, 1010, { size: 72, color: C.ivory });
  serif('soruyu yapay zeka', 150, 1094, { size: 72, color: C.goldHi });
  serif('çözseydi ne olurdu?', 150, 1178, { size: 72, color: C.ivory, italic: true, weight: 600 });
  text('kaydır →', 950, 1318, { size: 52, font: 'Caveat', weight: 700, color: C.gold, anchor: 'end' }).dataset.free = 1;
  done();
}
build();
