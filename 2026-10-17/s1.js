// 17 Ekim 2026 kapak — metafor: dev Zeid gözü, gözbebeğinde parlayan minik altın anahtar (yıllardır kilitli soruyu "gören" yapay zeka); ametist iris, sakin gece zemin.
TOHUM = 20261017;
async function build() {
  await fontsReady(); paper('purple'); footer('1 / 8');
  sanatSahne(112, 108, 856, 1146, { cerceve: 'tam', duzen: 'gece', palet: 'ametist', merkez: [540, 500] }, () => {
    glow(540, 500, 460, C.purple, 0.35);
    el('circle', { cx: 540, cy: 540, r: 410, fill: '#0B0710', opacity: 0.8 });
    zeidGoz(540, 560, 760, { iris: 'ametist', bakis: [0, 0.05], kas: false,
      yansima: (x, y, r, gp) => {
        const k = r / 60, G = g({ transform: `translate(${x} ${y}) scale(${k}) rotate(-30)` }, gp);
        el('circle', { cx: -26, cy: 0, r: 16, fill: 'none', stroke: C.goldHi, 'stroke-width': 7 }, G);
        el('path', { d: 'M-10 0 H38 M24 0 v12 M34 0 v9', fill: 'none', stroke: C.goldHi, 'stroke-width': 7, 'stroke-linecap': 'round' }, G);
      } });
    [[250, 260], [840, 300], [800, 760]].forEach(([x, y], i) => star(x, y, 0.8 - i * 0.15, C.goldHi));
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
