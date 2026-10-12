// 2. sayfa = ikinci kapak: Instagram ikinci sayfayı da ayrıca gösterir. Az yazı, büyük görsel unsur, merak. Asıl değer 3. sayfada.
async function build() {
  await fontsReady(); paper('pink'); footer('2 / 3');
  chip('SEKTÖR YÖNETİCİLERİ ANLATIYOR', 150, 215, C.gold);
  serif('Sesli asistanın', 150, 350, { size: 84, color: C.ivory });
  serif('3 zayıf noktası var', 150, 438, { size: 84, color: C.goldHi, italic: true, weight: 600 });
  glow(540, 810, 300, C.pink, 0.35);
  // dev rakam
  serif('3', 540, 1045, { size: 560, color: C.gold, anchor: 'middle' });
  el('circle', { cx: 540, cy: 810, r: 300, fill: 'none', stroke: C.gold, 'stroke-width': 3, opacity: 0.45 });
  el('circle', { cx: 540, cy: 810, r: 322, fill: 'none', stroke: C.goldHi, 'stroke-width': 1.5, opacity: 0.3 });
  [[540, 488], [540, 1132], [218, 810], [862, 810]].forEach(([x, y]) => diamond(x, y, 10, C.goldHi));
  text('Hangileri? Kaydırın →', 950, 1236, { size: 56, font: 'Caveat', weight: 700, color: C.gold, anchor: 'end' }).dataset.free = 1;
  done();
}
build();
