// 21 Ekim 2026 kapak — metafor: gece boyu nöbet tutan mozaik zümrüt kalkan (yazılımı sürekli koruyan nöbetçi); sakin yıldızlı gece zemini, kemer çerçeve.
TOHUM = 20261021;
async function build() {
  await fontsReady(); paper('purple'); footer('1 / 8');
  sanatSahne(112, 108, 856, 1146, { cerceve: 'kemer', duzen: 'gece', palet: 'zumrut', merkez: [540, 520] }, () => {
    glow(540, 560, 360, C.goldHi, 0.12);
    el('circle', { cx: 540, cy: 560, r: 320, fill: '#0B0710', opacity: 0.85 });
    nesne('kalkan', 540, 560, 1.2, { palet: 'zumrut' });
    [[270, 260], [820, 250], [800, 760], [260, 780]].forEach(([x, y], i) => star(x, y, 0.8 - i * 0.1, C.goldHi));
  });
  perde(720, 1250);
  rozetZemin(); profil(150, 124, 112);
  chip('CLAUDE · GÜVENLİK · YENİ SÜRÜM', 150, 905, C.gold);
  serif('Sen uyurken biri', 150, 1010, { size: 72, color: C.ivory });
  serif('siteni hırsıza karşı', 150, 1094, { size: 72, color: C.goldHi });
  serif('kontrol etse ne olurdu?', 150, 1178, { size: 72, color: C.ivory, italic: true, weight: 600 });
  text('kaydır →', 950, 1318, { size: 52, font: 'Caveat', weight: 700, color: C.gold, anchor: 'end' }).dataset.free = 1;
  done();
}
build();
