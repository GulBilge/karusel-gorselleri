// 18 Ekim 2026 kapak — metafor: dolaşık mozaik ip yumağından tek bir düz altın ip çıkıyor (uzun iş kısalıyor); lapis, sakin gece zemin.
TOHUM = 20261018;
async function build() {
  await fontsReady(); paper('pink'); footer('1 / 8');
  sanatSahne(112, 108, 856, 1146, { cerceve: 'tam', duzen: 'gece', palet: 'lapis', merkez: [540, 520] }, () => {
    glow(540, 480, 380, C.goldHi, 0.16);
    el('circle', { cx: 470, cy: 500, r: 330, fill: '#0B0710', opacity: 0.8 });
    // yumak
    const R = 230, cx = 450, cy = 500;
    mozaik(`M${cx - R} ${cy} a${R} ${R} 0 1 0 ${2 * R} 0 a${R} ${R} 0 1 0 ${-2 * R} 0 Z`, { palet: 'lapis', boy: 44, hat: 3, noktalar: 0.1, isik: [cx - 80, cy - 100] });
    el('circle', { cx, cy, r: R, fill: 'none', stroke: OUT, 'stroke-width': 10 });
    for (let i = 0; i < 7; i++) {
      const a = -0.5 + i * 0.55, rx = R * (0.55 + 0.07 * (i % 3)), ry = R * 0.95;
      el('ellipse', { cx, cy, rx, ry, transform: `rotate(${a * 57} ${cx} ${cy})`, fill: 'none', stroke: i % 2 ? C.goldHi : '#EC5B97', 'stroke-width': 7, opacity: 0.9 });
    }
    // çıkan düz altın ip
    el('path', { d: `M${cx + 190} ${cy - 150} Q${cx + 260} ${cy - 220} ${cx + 330} ${cy - 215} L880 ${cy - 215}`, fill: 'none', stroke: OUT, 'stroke-width': 20, 'stroke-linecap': 'round' });
    el('path', { d: `M${cx + 190} ${cy - 150} Q${cx + 260} ${cy - 220} ${cx + 330} ${cy - 215} L880 ${cy - 215}`, fill: 'none', stroke: C.gold, 'stroke-width': 11, 'stroke-linecap': 'round' });
    star(850, cy - 215, 1.3, C.goldHi);
    [[260, 250], [820, 260], [760, 760], [240, 800]].forEach(([x, y], i) => star(x, y, 0.8 - i * 0.12, C.goldHi));
  });
  perde(720, 1250);
  rozetZemin(); profil(150, 124, 112);
  chip('KAÇIRDIYSANIZ · CLAUDE', 150, 905, C.gold);
  serif('Günlerini alan işi', 150, 1010, { size: 72, color: C.ivory });
  serif('yapay zeka kısaltsa', 150, 1094, { size: 72, color: C.goldHi });
  serif('ne olurdu?', 150, 1178, { size: 72, color: C.ivory, italic: true, weight: 600 });
  text('kaydır →', 950, 1318, { size: 52, font: 'Caveat', weight: 700, color: C.gold, anchor: 'end' }).dataset.free = 1;
  done();
}
build();
