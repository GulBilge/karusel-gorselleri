let MARK = 0;
const baslik = (k, t, col) => { profil(150, 112, 88); chip(k, 150, 250, col); serif(t, 150, 345, { size: 64, color: C.ivory }); MARK = svg.childNodes.length; };
const kaydir = () => { const G = g({ transform: 'translate(0,60)' }); [...svg.childNodes].slice(MARK, -1).forEach(n => G.appendChild(n)); };
const balon = (x, y, w, col, n = 3, ok = 'sol') => {
  el('rect', { x, y, width: w, height: 90, rx: 34, fill: '#1B0F24', stroke: col, 'stroke-width': 5 });
  for (let k = 0; k < n; k++) C2(svg, x + 40 + k * 34, y + 45, 10, col);
  P(svg, ok === 'sol' ? `M${x + 36} ${y + 90} l-14 30 l42 -24` : `M${x + w - 36} ${y + 90} l14 30 l-42 -24`, '#1B0F24', { stroke: col, 'stroke-width': 5, 'stroke-linejoin': 'round' });
};
async function build() {
  await fontsReady(); paper('pink'); footer('2 / 6');
  baslik('ŞİMDİYE KADAR', 'Hep sıfırdan başlardı', C.pink);
  // tekrar eden balonlar + sıfırlama oku
  [0, 1, 2].forEach(i => { balon(i % 2 ? 460 : 170, 420 + i * 190, 330, i === 1 ? C.pink : C.goldHi, 3, i % 2 ? 'sag' : 'sol'); });
  P(svg, 'M830 520 a70 70 0 1 1 -30 -58', 'none', { stroke: C.pink, 'stroke-width': 12, 'stroke-linecap': 'round' });
  P(svg, 'M770 440 l38 30 l-52 20 z', C.pink, {});
  text('Aynı bilgi, yine ve yine.', 540, 1090, { size: 46, weight: 700, color: C.goldHi, anchor: 'middle' });
  text('Her yeni sohbette baştan anlatırdınız.', 540, 1160, { size: 34, color: C.muted, anchor: 'middle' });
  kaydir();
  done();
}
build();
