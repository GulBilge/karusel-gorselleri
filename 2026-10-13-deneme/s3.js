let MARK = 0;
const baslik = (k, t, col) => { profil(150, 112, 88); chip(k, 150, 250, col); serif(t, 150, 345, { size: 64, color: C.ivory }); MARK = svg.childNodes.length; };
const kaydir = () => { const G = g({ transform: 'translate(0,60)' }); [...svg.childNodes].slice(MARK, -1).forEach(n => G.appendChild(n)); };
const balon = (x, y, w, col, n = 3, ok = 'sol') => {
  el('rect', { x, y, width: w, height: 90, rx: 34, fill: '#1B0F24', stroke: col, 'stroke-width': 5 });
  for (let k = 0; k < n; k++) C2(svg, x + 40 + k * 34, y + 45, 10, col);
  P(svg, ok === 'sol' ? `M${x + 36} ${y + 90} l-14 30 l42 -24` : `M${x + w - 36} ${y + 90} l14 30 l-42 -24`, '#1B0F24', { stroke: col, 'stroke-width': 5, 'stroke-linejoin': 'round' });
};
async function build() {
  await fontsReady(); paper('purple'); footer('3 / 6');
  baslik('AKTİF HAFIZA', 'Meta\'nın yeni vaadi: 3 adım', C.gold);
  const adim = (y, n, bas, alt, col, ic) => {
    card(150, y, 820, 210, col);
    C2(svg, 265, y + 105, 62, '#1B0F24', { stroke: col, 'stroke-width': 5 });
    ic(265, y + 105, col);
    text(n, 360, y + 85, { size: 30, weight: 700, color: col, ls: 4 });
    text(bas, 360, y + 135, { size: 46, weight: 700, color: C.ivory });
    text(alt, 360, y + 180, { size: 31, color: C.muted });
  };
  adim(350, 'ADIM 1', 'Siz anlatırsınız', 'Bir kez, doğal şekilde.', C.emerald, (x, y, c) => { el('rect', { x: x - 30, y: y - 20, width: 60, height: 36, rx: 14, fill: 'none', stroke: c, 'stroke-width': 5 }); P(svg, `M${x - 12} ${y + 16} l-6 16 l22 -16`, 'none', { stroke: c, 'stroke-width': 5, 'stroke-linejoin': 'round' }); });
  adim(585, 'ADIM 2', 'Model saklar', 'Önemli bilgileri ayıklar.', C.gold, (x, y, c) => { P(svg, `M${x - 22} ${y - 34} h44 v68 l-22 -18 l-22 18 z`, 'none', { stroke: c, 'stroke-width': 5, 'stroke-linejoin': 'round' }); });
  adim(820, 'ADIM 3', 'Gerektiğinde hatırlatır', 'Doğru anda, doğru bilgiyi.', C.pink, (x, y, c) => { C2(svg, x, y - 8, 22, 'none', { stroke: c, 'stroke-width': 5 }); P(svg, `M${x - 12} ${y + 22} h24 M${x - 8} ${y + 34} h16`, 'none', { stroke: c, 'stroke-width': 5, 'stroke-linecap': 'round' }); });
  text('Meta\'nın tanımı: "aktif hafıza"', 540, 1120, { size: 32, italic: true, color: C.goldHi, anchor: 'middle' });
  kaydir();
  done();
}
build();
