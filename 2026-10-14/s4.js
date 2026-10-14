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
  await fontsReady(); paper("pink"); footer("4 / 6"); suslemeler();
  baslik('ÖNCE Mİ, SONRA MI?', 'Sonradan değil, anında', C.pink);
  card(150, 380, 380, 520, C.pink);
  text('SONRADAN', 340, 450, { size: 28, weight: 700, color: C.pink, anchor: 'middle', ls: 3 });
  el('rect', { x: 250, y: 500, width: 180, height: 220, rx: 14, fill: 'none', stroke: C.muted, 'stroke-width': 5 });
  [540, 580, 620, 660].forEach(yy => P(svg, `M275 ${yy} h130`, 'none', { stroke: C.muted, 'stroke-width': 5, 'stroke-linecap': 'round' }));
  text('Kayıtları', 340, 790, { size: 34, color: C.muted, anchor: 'middle' });
  text('sonra inceler', 340, 835, { size: 34, color: C.muted, anchor: 'middle' });
  card(560, 380, 410, 520, C.emerald);
  text('ANINDA', 765, 450, { size: 28, weight: 700, color: C.emerald, anchor: 'middle', ls: 3 });
  kalkan(765, 590, C.emerald, 1.7);
  text('Komut girilirken,', 765, 790, { size: 34, weight: 700, color: C.ivory, anchor: 'middle' });
  text('araç çağrılırken', 765, 835, { size: 34, weight: 700, color: C.ivory, anchor: 'middle' });
  text('Martin\'e göre anında müdahale daha etkili.', 540, 1000, { size: 30, italic: true, color: C.goldHi, anchor: 'middle' });
  kaydir();
  done();
}
build();
