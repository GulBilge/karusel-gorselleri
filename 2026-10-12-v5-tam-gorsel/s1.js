// DENEME: tam görselli kapak. Sahne tüm çerçeveyi doldurur, başlık üstüne bindirilir; okunabilirlik için koyu degrade perde + kalın tipografi.
async function build() {
  await fontsReady(); paper('purple'); footer('1 / 2');
  sahneTek(110, 110, 860, 1130, { figur: 'kadin', tip: 'basortulu', zemin: 'lacivert', halo: 'kaleydoskop', olcek: 2.5, dy: 330,
    ek: (cx, cy) => {
      const hy = cy - 40 - 8;
      P(svg, `M${cx - 160} ${hy} A160 160 0 0 1 ${cx + 160} ${hy}`, 'none', { stroke: C.goldHi, 'stroke-width': 16, 'stroke-linecap': 'round' });
      [-1, 1].forEach(k => el('rect', { x: cx + k * 160 - 24, y: hy - 12, width: 48, height: 100, rx: 22, fill: C.pink, stroke: '#1B0F24', 'stroke-width': 3 }));
      P(svg, `M${cx - 160} ${hy + 84} Q${cx - 150} ${hy + 160} ${cx - 50} ${hy + 140}`, 'none', { stroke: C.goldHi, 'stroke-width': 7, 'stroke-linecap': 'round' });
      C2(svg, cx - 44, hy + 140, 14, C.goldHi);
      [0, 1, 2].forEach(i => { const r = 46 + i * 38; P(svg, `M${cx + 230 + i * 6} ${hy + 30 - r} A${r} ${r} 0 0 1 ${cx + 230 + i * 6} ${hy + 30 + r}`, 'none', { stroke: i % 2 ? C.pink : C.goldHi, 'stroke-width': 7, 'stroke-linecap': 'round', opacity: 1 - i * 0.2 }); });
    } });
  // okunabilirlik perdesi
  const defs = svg.querySelector('defs') || el('defs');
  const lg = el('linearGradient', { id: 'perde', x1: 0, y1: 0, x2: 0, y2: 1 }, defs);
  el('stop', { offset: '0%', 'stop-color': '#09090B', 'stop-opacity': 0.8 }, lg);
  el('stop', { offset: '70%', 'stop-color': '#09090B', 'stop-opacity': 0.66 }, lg);
  el('stop', { offset: '100%', 'stop-color': '#09090B', 'stop-opacity': 0 }, lg);
  el('rect', { x: 112, y: 112, width: 856, height: 560, fill: 'url(#perde)' });
  profil(150, 124, 112);
  chip('SESLİ ASİSTAN · 11 EKİM 2026', 150, 292, C.gold);
  serif('Aramaları yapay zeka', 150, 410, { size: 80, color: C.ivory });
  serif('karşılasa müşteri', 150, 494, { size: 80, color: C.goldHi });
  serif('fark eder mi?', 150, 578, { size: 80, color: C.ivory, italic: true, weight: 600 });
  text('kaydır →', 950, 1318, { size: 52, font: 'Caveat', weight: 700, color: C.gold, anchor: 'end' }).dataset.free = 1;
  done();
}
build();
