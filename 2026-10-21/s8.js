const suslemeler = () => {
  kaleydoskop(svg, 1010, 130, 230, 0.22);
  dal(135, 1235, 170, 12, 1, C.emerald).setAttribute('opacity', 0.5);
  dal(945, 1235, 160, -14, -1, C.emerald).setAttribute('opacity', 0.5);
};
let MARK = 0;
const baslik = (k, t, col) => { profil(150, 112, 88); chip(k, 150, 250, col); serif(t, 150, 345, { size: 64, color: C.ivory }); MARK = svg.childNodes.length; };
const kaydir = () => { const G = g({ transform: 'translate(0,0)' }); [...svg.childNodes].slice(MARK, -1).forEach(n => G.appendChild(n)); };
const kisi = (x, y, col, s = 1) => { C2(svg, x, y - 30 * s, 26 * s, '#1B0F24', { stroke: col, 'stroke-width': 6 }); P(svg, `M${x - 46 * s} ${y + 50 * s} Q${x} ${y - 20 * s} ${x + 46 * s} ${y + 50 * s} Z`, '#1B0F24', { stroke: col, 'stroke-width': 6, 'stroke-linejoin': 'round' }); };
async function build() {
  await fontsReady(); paper('purple'); footer('8 / 8'); suslemeler();
  baslik('GÖNDERİYİ KAYDET', 'Bunu kime gönderirsin?', C.gold);
  card(150, 450, 820, 420, C.purple);
  [[320, C.emerald], [540, C.goldHi], [760, C.pink]].forEach(([x, col]) => kisi(x, 620, col, 1.5));
  text('Siteni başkasına yaptıran', 540, 780, { size: 38, weight: 700, color: C.ivory, anchor: 'middle' });
  text('biri var mı?', 540, 835, { size: 38, weight: 700, italic: true, color: C.goldHi, anchor: 'middle' });
  card(150, 920, 820, 120, C.gold);
  el('path', { d: 'M195 945 h28 v52 l-14 -11 l-14 11 z', fill: C.gold });
  serif('Kaydet, ona gönder.', 250, 998, { size: 40, weight: 600, italic: true, color: C.goldHi });
  kaydir();
  done();
}
build();
