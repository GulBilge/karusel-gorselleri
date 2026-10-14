const suslemeler = () => {
  kaleydoskop(svg, 1010, 130, 230, 0.22);
  dal(135, 1235, 170, 12, 1, C.emerald).setAttribute('opacity', 0.5);
  dal(945, 1235, 160, -14, -1, C.emerald).setAttribute('opacity', 0.5);
};
let MARK = 0;
const baslik = (k, t, col) => { profil(150, 112, 88); chip(k, 150, 250, col); serif(t, 150, 345, { size: 64, color: C.ivory }); MARK = svg.childNodes.length; };
const kaydir = () => { const G = g({ transform: 'translate(0,60)' }); [...svg.childNodes].slice(MARK, -1).forEach(n => G.appendChild(n)); };
const kisi = (x, y, col, s = 1) => { C2(svg, x, y - 30 * s, 26 * s, '#1B0F24', { stroke: col, 'stroke-width': 6 }); P(svg, `M${x - 46 * s} ${y + 50 * s} Q${x} ${y - 20 * s} ${x + 46 * s} ${y + 50 * s} Z`, '#1B0F24', { stroke: col, 'stroke-width': 6, 'stroke-linejoin': 'round' }); };
const robot = (x, y, col, s = 1) => { el('rect', { x: x - 44 * s, y: y - 56 * s, width: 88 * s, height: 70 * s, rx: 18, fill: '#1B0F24', stroke: col, 'stroke-width': 6 }); C2(svg, x - 18 * s, y - 24 * s, 8 * s, col); C2(svg, x + 18 * s, y - 24 * s, 8 * s, col); P(svg, `M${x} ${y - 56 * s} v-22 `, 'none', { stroke: col, 'stroke-width': 6 }); C2(svg, x, y - 84 * s, 7 * s, col); el('rect', { x: x - 50 * s, y: y + 24 * s, width: 100 * s, height: 40 * s, rx: 14, fill: '#1B0F24', stroke: col, 'stroke-width': 6 }); };
const anahtar = (x, y, col, s = 1) => { C2(svg, x, y, 26 * s, 'none', { stroke: col, 'stroke-width': 7 }); P(svg, `M${x + 26 * s} ${y} h${80 * s} m${-18 * s} 0 v${24 * s} m${-24 * s} -${24 * s} v${18 * s}`, 'none', { stroke: col, 'stroke-width': 7, 'stroke-linecap': 'round' }); };
const kalkan = (x, y, col, s = 1) => { P(svg, `M${x} ${y - 60 * s} L${x + 52 * s} ${y - 40 * s} V${y + 10 * s} Q${x + 52 * s} ${y + 50 * s} ${x} ${y + 72 * s} Q${x - 52 * s} ${y + 50 * s} ${x - 52 * s} ${y + 10 * s} V${y - 40 * s} Z`, '#1B0F24', { stroke: col, 'stroke-width': 7, 'stroke-linejoin': 'round' }); P(svg, `M${x - 22 * s} ${y + 4 * s} l16 16 l30 -34`, 'none', { stroke: col, 'stroke-width': 8, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }); };
async function build() {
  await fontsReady(); paper("pink"); footer("6 / 6"); suslemeler();
  baslik('BUGÜN YAPIN', '3 soruyu kendinize sorun', C.pink);
  [['1', 'Hangi araçlara', 'yapay zekayı bağladım?', C.emerald], ['2', 'Ne yaptığını', 'görebiliyor muyum?', C.gold], ['3', 'Veri üzerinde', 'son sözü ben mi söylüyorum?', C.pink]].forEach(([n, a, b, col], i) => {
    const y = 370 + i * 215;
    card(150, y, 820, 185, col);
    text(n, 205, y + 118, { size: 90, font: 'Playfair Display', weight: 700, color: col });
    text(a, 310, y + 85, { size: 40, weight: 700, color: C.ivory });
    text(b, 310, y + 140, { size: 38, color: C.goldHi });
  });
  card(150, 1030, 820, 110, C.purple);
  el('path', { d: 'M190 1050 h28 v50 l-14 -11 l-14 11 z', fill: C.gold });
  serif('Kaydedin, meslektaşınıza gönderin.', 244, 1100, { size: 36, weight: 600, italic: true, color: C.goldHi });
  kaydir();
  done();
}
build();
