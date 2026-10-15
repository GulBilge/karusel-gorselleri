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
async function build() {
  await fontsReady(); paper('purple'); footer('4 / 8'); suslemeler();
  baslik('ZATEN NE YAPIYORDU?', 'Starlink\'te neler yapıyor?', C.emerald);
  const adim = [['Müşteri bilgilerini kontrol eder', C.emerald], ['Bozuk cihazla ilgilenir', C.gold], ['Gerekirse parasını geri öder', C.pink], ['Yeni cihaz gönderir', C.purple]];
  adim.forEach(([t, col], i) => {
    const y = 390 + i * 135;
    card(150, y, 820, 110, col);
    el('circle', { cx: 225, cy: y + 55, r: 34, fill: '#1B0F24', stroke: col, 'stroke-width': 5 });
    text(String(i + 1), 225, y + 70, { size: 40, font: 'Playfair Display', weight: 700, color: col, anchor: 'middle' });
    text(t, 290, y + 70, { size: 40, weight: 700, color: C.ivory });
  });
  text('Her gün yaklaşık 20 bin kişiyle konuşuyor.', 540, 990, { size: 30, weight: 700, color: C.goldHi, anchor: 'middle' });
  text('Starlink: Musk\'ın uydu internet şirketi', 540, 1040, { size: 28, italic: true, color: C.muted, anchor: 'middle' });
  kaydir();
  done();
}
build();
