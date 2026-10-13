async function build() {
  await fontsReady(); paper('purple'); footer('1 / 2');
  sahneTek(110, 110, 860, 1130, { figur: 'kadin', tip: 'sacli', zemin: 'bordo', halo: 'gunes', yildizlar: [[200, 430], [870, 360], [800, 250]], olcek: 2.3, dy: -110,
    ek: (cx, cy) => {
      // hafıza balonları: kadının çevresinde süzülen sohbet kartları
      [[-330, -150, 150, C.goldHi], [200, -230, 170, C.pink], [230, 60, 130, C.goldHi]].forEach(([dx, dy, w, col], i) => {
        const x = cx + dx, y = cy + dy;
        el('rect', { x, y, width: w, height: 80, rx: 30, fill: '#1B0F24', stroke: col, 'stroke-width': 5 });
        [0, 1, 2].forEach(k => C2(svg, x + 34 + k * 30, y + 40, 9, col));
        P(svg, `M${x + 30} ${y + 80} l-12 26 l36 -22`, '#1B0F24', { stroke: col, 'stroke-width': 5, 'stroke-linejoin': 'round' });
      });
      P(svg, `M${cx - 180} ${cy - 70} Q${cx} ${cy - 330} ${cx + 190} ${cy - 160}`, 'none', { stroke: C.goldHi, 'stroke-width': 5, 'stroke-dasharray': '4 16', 'stroke-linecap': 'round' });
    } });
  const defs = svg.querySelector('defs') || el('defs');
  const lg = el('linearGradient', { id: 'perde', x1: 0, y1: 0, x2: 0, y2: 1 }, defs);
  el('stop', { offset: '0%', 'stop-color': '#09090B', 'stop-opacity': 0 }, lg);
  el('stop', { offset: '35%', 'stop-color': '#09090B', 'stop-opacity': 0.7 }, lg);
  el('stop', { offset: '100%', 'stop-color': '#09090B', 'stop-opacity': 0.94 }, lg);
  el('rect', { x: 112, y: 660, width: 856, height: 580, fill: 'url(#perde)' });
  profil(150, 124, 112);
  chip('YENİ · 13 EKİM 2026', 150, 905, C.gold);
  serif('Yapay zeka sizi', 150, 1010, { size: 80, color: C.ivory });
  serif('her konuşmada', 150, 1094, { size: 80, color: C.goldHi });
  serif('hatırlasa?', 150, 1178, { size: 80, color: C.ivory, italic: true, weight: 600 });
  text('kaydır →', 950, 1318, { size: 52, font: 'Caveat', weight: 700, color: C.gold, anchor: 'end' }).dataset.free = 1;
  done();
}
build();
