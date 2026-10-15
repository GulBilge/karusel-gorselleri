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
// klasik telefon ahizesi (çizgi ikon)
const ahize = (x, y, col, s = 1, rot = -25) => P(svg, `M-60 10 L-60 -4 Q-60 -14 -52 -16 Q-30 -32 0 -32 Q30 -32 52 -16 Q60 -14 60 -4 L60 10 Q60 18 52 18 L36 18 Q28 18 28 10 L28 2 Q28 -8 18 -10 Q0 -14 -18 -10 Q-28 -8 -28 2 L-28 10 Q-28 18 -36 18 L-52 18 Q-60 18 -60 10 Z`, '#1B0F24', { stroke: col, 'stroke-width': 5 / s, 'stroke-linejoin': 'round', transform: `translate(${x} ${y}) rotate(${rot}) scale(${s})` });
const sesDalga = (x, y, col, s = 1) => { for (let i = 1; i <= 3; i++) P(svg, `M${x + i * 18 * s} ${y - i * 20 * s} Q${x + i * 30 * s} ${y} ${x + i * 18 * s} ${y + i * 20 * s}`, 'none', { stroke: col, 'stroke-width': 6, 'stroke-linecap': 'round', opacity: 1 - i * 0.2 }); };
const ok = (x1, y, x2, col = C.gold) => { P(svg, `M${x1} ${y} H${x2}`, 'none', { stroke: col, 'stroke-width': 6, 'stroke-dasharray': '4 14', 'stroke-linecap': 'round' }); P(svg, `M${x2 - 14} ${y - 14} L${x2} ${y} L${x2 - 14} ${y + 14}`, 'none', { stroke: col, 'stroke-width': 6, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }); };
const balonI = (x, y, col) => P(svg, `M${x - 70} ${y - 50} h140 q16 0 16 16 v60 q0 16 -16 16 h-90 l-34 30 v-30 h-16 q-16 0 -16 -16 v-60 q0 -16 16 -16 z`, '#1B0F24', { stroke: col, 'stroke-width': 6, 'stroke-linejoin': 'round' });
const listeI = (x, y, col) => { el('rect', { x: x - 55, y: y - 70, width: 110, height: 140, rx: 14, fill: '#1B0F24', stroke: col, 'stroke-width': 6 }); [-35, 0, 35].forEach((d, i) => { P(svg, `M${x - 35} ${y + d} l10 10 l18 -20`, 'none', { stroke: i < 2 ? C.emerald : C.muted, 'stroke-width': 6, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }); P(svg, `M${x + 0} ${y + d + 2} h30`, 'none', { stroke: C.muted, 'stroke-width': 6, 'stroke-linecap': 'round' }); }); };
const ay = (x, y, col, s = 1) => { C2(svg, x, y, 60 * s, C.goldHi); C2(svg, x + 28 * s, y - 14 * s, 52 * s, '#131316'); };
async function build() {
  await fontsReady(); paper('pink'); footer('5 / 8'); suslemeler();
  baslik('SENİN İŞİNDE', 'Hangi işini yaptırabilirsin?', C.gold);
  [['Salon / klinik', 'Ay sonunda kim gelmiş, ne yaptırmış, düzenli liste yapar', C.emerald], ['Eğitim', 'Bir ünitenin bütün ders notunu hazırlar', C.gold], ['E-ticaret', 'Ürün açıklamalarını tek tek yazar', C.pink]].forEach(([a, b, col], i) => {
    const y = 380 + i * 200;
    card(150, y, 820, 170, col);
    listeI(235, y + 85, col);
    text(a, 320, y + 62, { size: 40, weight: 700, color: C.ivory });
    para(b, 320, y + 110, { size: 30, color: C.goldHi, width: 620 });
  });
  text('Bunlar sadece örnek, aklına bir şey gelsin diye.', 540, 1010, { size: 28, italic: true, color: C.muted, anchor: 'middle' });
  kaydir();
  done();
}
build();
