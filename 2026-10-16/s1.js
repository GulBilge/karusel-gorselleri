// 16 Ekim 2026 kapak — metafor: aralık kapı, içeriden altın ışık sızıyor (dışarıdan gelen göz içeri bakıyor); zümrüt zemin, sakin.
TOHUM = 20261016;
async function build() {
  await fontsReady(); paper('pink'); footer('1 / 8');
  sanatSahne(112, 108, 856, 1146, { cerceve: 'tam', duzen: 'gece', palet: 'zumrut', merkez: [540, 520] }, () => {
    el('circle', { cx: 540, cy: 520, r: 380, fill: '#0B0710', opacity: 0.85 });
    // ışık huzmesi
    el('path', { d: 'M540 300 L900 900 L180 900 Z', fill: C.goldHi, opacity: 0.16 });
    nesne('kapi', 540, 540, 1.15, { palet: 'zumrut' });
    [[250, 330], [830, 300], [790, 720]].forEach(([x, y], i) => star(x, y, 0.8 - i * 0.15, C.goldHi));
  });
  perde(720, 1250);
  rozetZemin(); profil(150, 124, 112);
  chip('CLAUDE\'U YAPAN ANTHROPIC', 150, 905, C.gold);
  serif('İşini emanet ettiğin', 150, 1010, { size: 72, color: C.ivory });
  serif('yapay zekayı', 150, 1094, { size: 72, color: C.goldHi });
  serif('kim denetliyor?', 150, 1178, { size: 72, color: C.ivory, italic: true, weight: 600 });
  text('kaydır →', 950, 1318, { size: 52, font: 'Caveat', weight: 700, color: C.gold, anchor: 'end' }).dataset.free = 1;
  done();
}
build();
