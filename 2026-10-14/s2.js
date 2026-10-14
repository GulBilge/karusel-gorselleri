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
  await fontsReady(); paper("pink"); footer("2 / 6"); suslemeler();
  baslik('NE OLDU?', 'Uber bir kural önerdi', C.pink);
  card(150, 380, 820, 300, C.pink);
  kisi(290, 520, C.goldHi, 1.3);
  text('Philip Martin', 400, 485, { size: 44, weight: 700, color: C.ivory });
  text('Uber\'in bilgi güvenliği', 400, 540, { size: 34, color: C.goldHi });
  text('sorumlusu (CISO)', 400, 585, { size: 34, color: C.goldHi });
  text('Claude\'un sitesindeki söyleşide', 400, 640, { size: 28, color: C.muted });
  card(150, 720, 820, 270, C.gold);
  text('Fikir:', 200, 800, { size: 36, weight: 700, color: C.gold });
  text('Çalışanlara olduğu gibi', 200, 865, { size: 46, weight: 700, color: C.ivory });
  text('yapay zekaya da bir', 200, 925, { size: 46, weight: 700, color: C.ivory });
  text('"iç tehdit" programı.', 200, 975, { size: 46, weight: 700, italic: true, color: C.goldHi });
  text('Yani: izleme, kayıt, müdahale planı.', 540, 1080, { size: 32, italic: true, color: C.muted, anchor: 'middle' });
  kaydir();
  done();
}
build();
