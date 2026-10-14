const kisi = (x, y, col, s = 1) => { C2(svg, x, y - 30 * s, 26 * s, '#1B0F24', { stroke: col, 'stroke-width': 6 }); P(svg, `M${x - 46 * s} ${y + 50 * s} Q${x} ${y - 20 * s} ${x + 46 * s} ${y + 50 * s} Z`, '#1B0F24', { stroke: col, 'stroke-width': 6, 'stroke-linejoin': 'round' }); };
const robot = (x, y, col, s = 1) => { el('rect', { x: x - 44 * s, y: y - 56 * s, width: 88 * s, height: 70 * s, rx: 18, fill: '#1B0F24', stroke: col, 'stroke-width': 6 }); C2(svg, x - 18 * s, y - 24 * s, 8 * s, col); C2(svg, x + 18 * s, y - 24 * s, 8 * s, col); P(svg, `M${x} ${y - 56 * s} v-22 `, 'none', { stroke: col, 'stroke-width': 6 }); C2(svg, x, y - 84 * s, 7 * s, col); el('rect', { x: x - 50 * s, y: y + 24 * s, width: 100 * s, height: 40 * s, rx: 14, fill: '#1B0F24', stroke: col, 'stroke-width': 6 }); };
const anahtar = (x, y, col, s = 1) => { C2(svg, x, y, 26 * s, 'none', { stroke: col, 'stroke-width': 7 }); P(svg, `M${x + 26 * s} ${y} h${80 * s} m${-18 * s} 0 v${24 * s} m${-24 * s} -${24 * s} v${18 * s}`, 'none', { stroke: col, 'stroke-width': 7, 'stroke-linecap': 'round' }); };
const kalkan = (x, y, col, s = 1) => { P(svg, `M${x} ${y - 60 * s} L${x + 52 * s} ${y - 40 * s} V${y + 10 * s} Q${x + 52 * s} ${y + 50 * s} ${x} ${y + 72 * s} Q${x - 52 * s} ${y + 50 * s} ${x - 52 * s} ${y + 10 * s} V${y - 40 * s} Z`, '#1B0F24', { stroke: col, 'stroke-width': 7, 'stroke-linejoin': 'round' }); P(svg, `M${x - 22 * s} ${y + 4 * s} l16 16 l30 -34`, 'none', { stroke: col, 'stroke-width': 8, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }); };
async function build() {
  await fontsReady(); paper('purple'); footer('1 / 6');
  sahneTek(110, 110, 860, 1130, { figur: 'kadin', tip: 'basortulu', zemin: 'lacivert', halo: 'kaleydoskop', yildizlar: [[190, 400], [880, 330], [790, 230]], olcek: 2.3, dy: -110,
    ek: (cx, cy) => {
      const x = cx + 120, y = cy - 250;
      kalkan(x, y, C.goldHi, 1.5);
      anahtar(cx - 330, cy - 120, C.pink, 1.2);
      P(svg, `M${cx - 180} ${cy - 70} Q${cx} ${cy - 330} ${cx + 60} ${cy - 200}`, 'none', { stroke: C.goldHi, 'stroke-width': 5, 'stroke-dasharray': '4 16', 'stroke-linecap': 'round' });
    } });
  const defs = svg.querySelector('defs') || el('defs');
  const lg = el('linearGradient', { id: 'perde', x1: 0, y1: 0, x2: 0, y2: 1 }, defs);
  el('stop', { offset: '0%', 'stop-color': '#09090B', 'stop-opacity': 0 }, lg);
  el('stop', { offset: '35%', 'stop-color': '#09090B', 'stop-opacity': 0.7 }, lg);
  el('stop', { offset: '100%', 'stop-color': '#09090B', 'stop-opacity': 0.94 }, lg);
  el('rect', { x: 112, y: 660, width: 856, height: 580, fill: 'url(#perde)' });
  profil(150, 124, 112);
  chip('UBER · GÜVENLİK', 150, 905, C.gold);
  serif('Uber\'in güvenlik şefi:', 150, 1010, { size: 72, color: C.ivory });
  serif('yapay zekayı da', 150, 1094, { size: 72, color: C.goldHi });
  serif('çalışan gibi izleyin.', 150, 1178, { size: 72, color: C.ivory, italic: true, weight: 600 });
  text('kaydır →', 950, 1318, { size: 52, font: 'Caveat', weight: 700, color: C.gold, anchor: 'end' }).dataset.free = 1;
  done();
}
build();
