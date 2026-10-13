let MARK = 0;
const baslik = (k, t, col) => { profil(150, 112, 88); chip(k, 150, 250, col); serif(t, 150, 345, { size: 64, color: C.ivory }); MARK = svg.childNodes.length; };
const kaydir = () => { const G = g({ transform: 'translate(0,60)' }); [...svg.childNodes].slice(MARK, -1).forEach(n => G.appendChild(n)); };
const balon = (x, y, w, col, n = 3, ok = 'sol') => {
  el('rect', { x, y, width: w, height: 90, rx: 34, fill: '#1B0F24', stroke: col, 'stroke-width': 5 });
  for (let k = 0; k < n; k++) C2(svg, x + 40 + k * 34, y + 45, 10, col);
  P(svg, ok === 'sol' ? `M${x + 36} ${y + 90} l-14 30 l42 -24` : `M${x + w - 36} ${y + 90} l14 30 l-42 -24`, '#1B0F24', { stroke: col, 'stroke-width': 5, 'stroke-linejoin': 'round' });
};
async function build() {
  await fontsReady(); paper('pink'); footer('4 / 6');
  baslik('AKTİF ODAK', 'Takılınca pes etmiyor', C.emerald);
  // yol: başla -> engel -> alternatif -> onay -> hedef
  const y0 = 640;
  P(svg, `M200 ${y0} H420`, 'none', { stroke: C.goldHi, 'stroke-width': 8, 'stroke-linecap': 'round' });
  el('rect', { x: 420, y: y0 - 60, width: 50, height: 120, rx: 10, fill: C.pink });
  text('ENGEL', 335, y0 - 40, { size: 28, weight: 700, color: C.pink, anchor: 'middle', ls: 3 });
  P(svg, `M420 ${y0} Q420 ${y0 - 200} 560 ${y0 - 200} T 700 ${y0}`, 'none', { stroke: C.emerald, 'stroke-width': 8, 'stroke-dasharray': '3 18', 'stroke-linecap': 'round' });
  P(svg, `M420 ${y0} Q420 ${y0 + 200} 560 ${y0 + 200} T 700 ${y0}`, 'none', { stroke: C.emerald, 'stroke-width': 8, 'stroke-dasharray': '3 18', 'stroke-linecap': 'round' });
  P(svg, `M700 ${y0} H780`, 'none', { stroke: C.goldHi, 'stroke-width': 8, 'stroke-linecap': 'round' });
  C2(svg, 190, y0, 24, C.goldHi); C2(svg, 860, y0, 52, '#1B0F24', { stroke: C.goldHi, 'stroke-width': 6 });
  star(860, y0, 1.6, C.goldHi);
  text('Başlangıç', 190, y0 + 70, { size: 28, color: C.muted, anchor: 'middle' });
  text('Hedef', 860, y0 + 110, { size: 28, color: C.muted, anchor: 'middle' });
  text('Başka yol dener', 560, y0 + 290, { size: 34, weight: 700, color: C.emerald, anchor: 'middle' });
  card(150, 1000, 820, 170, C.gold);
  text('Önemli adımdan önce', 200, 1070, { size: 40, weight: 700, color: C.ivory });
  text('sizi bilgilendirir, gerekirse sorar.', 200, 1125, { size: 36, color: C.goldHi });
  kaydir();
  done();
}
build();
