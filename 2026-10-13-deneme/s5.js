const suslemeler = () => {
  kaleydoskop(svg, 1010, 130, 230, 0.22);
  dal(135, 1235, 170, 12, 1, C.emerald).setAttribute('opacity', 0.5);
  dal(945, 1235, 160, -14, -1, C.emerald).setAttribute('opacity', 0.5);
};
let MARK = 0;
const baslik = (k, t, col) => { profil(150, 112, 88); chip(k, 150, 250, col); serif(t, 150, 345, { size: 64, color: C.ivory }); MARK = svg.childNodes.length; };
const kaydir = () => { const G = g({ transform: 'translate(0,60)' }); [...svg.childNodes].slice(MARK, -1).forEach(n => G.appendChild(n)); };
const balon = (x, y, w, col, n = 3, ok = 'sol') => {
  el('rect', { x, y, width: w, height: 90, rx: 34, fill: '#1B0F24', stroke: col, 'stroke-width': 5 });
  for (let k = 0; k < n; k++) C2(svg, x + 40 + k * 34, y + 45, 10, col);
  P(svg, ok === 'sol' ? `M${x + 36} ${y + 90} l-14 30 l42 -24` : `M${x + w - 36} ${y + 90} l14 30 l-42 -24`, '#1B0F24', { stroke: col, 'stroke-width': 5, 'stroke-linejoin': 'round' });
};
async function build() {
  await fontsReady(); paper('purple'); footer('5 / 6'); suslemeler();
  baslik('KİMLER KULLANABİLİR?', 'Önce geliştiriciler', C.gold);
  card(150, 360, 820, 270, C.emerald);
  text('ŞİMDİ', 200, 425, { size: 30, weight: 700, color: C.emerald, ls: 5 });
  text('Geliştiriciler', 200, 490, { size: 52, weight: 700, color: C.ivory });
  text('Meta Model API ve Muse Code', 200, 545, { size: 34, color: C.goldHi });
  text('(programlama arayüzü)', 200, 592, { size: 30, color: C.muted });
  P(svg, 'M560 650 v90 m-26 -26 l26 26 l26 -26', 'none', { stroke: C.gold, 'stroke-width': 8, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' });
  card(150, 770, 820, 270, C.pink);
  text('YAKINDA', 200, 835, { size: 30, weight: 700, color: C.pink, ls: 5 });
  text('Muse uygulaması', 200, 900, { size: 52, weight: 700, color: C.ivory });
  text('Önce abonelere gelecek', 200, 955, { size: 34, color: C.goldHi });
  text('Türkiye ve fiyat: resmi sayfada yok.', 200, 1002, { size: 30, color: C.muted });
  text('Kullanmadan önce kontrol edin.', 540, 1130, { size: 34, italic: true, color: C.goldHi, anchor: 'middle' });
  kaydir();
  done();
}
build();
