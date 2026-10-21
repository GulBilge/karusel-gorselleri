const suslemeler = () => {
  kaleydoskop(svg, 1010, 130, 230, 0.22);
  dal(135, 1235, 170, 12, 1, C.emerald).setAttribute('opacity', 0.5);
  dal(945, 1235, 160, -14, -1, C.emerald).setAttribute('opacity', 0.5);
};
let MARK = 0;
const baslik = (k, t, col) => { profil(150, 112, 88); chip(k, 150, 250, col); serif(t, 150, 345, { size: 64, color: C.ivory }); MARK = svg.childNodes.length; };
const kaydir = () => { const G = g({ transform: 'translate(0,0)' }); [...svg.childNodes].slice(MARK, -1).forEach(n => G.appendChild(n)); };
const dolasik = (x, y, col) => P(svg, `M${x - 70} ${y + 20} C${x - 30} ${y - 70} ${x + 20} ${y + 80} ${x + 50} ${y - 30} S${x - 60} ${y - 60} ${x - 20} ${y + 30} S${x + 70} ${y + 40} ${x + 70} ${y - 10}`, 'none', { stroke: col, 'stroke-width': 7, 'stroke-linecap': 'round' });
const duz = (x, y, col) => { P(svg, `M${x - 70} ${y} H${x + 60}`, 'none', { stroke: col, 'stroke-width': 8, 'stroke-linecap': 'round' }); P(svg, `M${x + 38} ${y - 20} L${x + 66} ${y} L${x + 38} ${y + 20}`, 'none', { stroke: col, 'stroke-width': 8, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }); };
async function build() {
  await fontsReady(); paper('pink'); footer('3 / 8'); suslemeler();
  baslik('NE DEĞİŞTİ?', 'Artık sürekli gözcülük', C.gold);
  card(150, 440, 820, 290, C.muted);
  dolasik(270, 585, C.muted);
  text('ESKİDEN', 400, 505, { size: 26, weight: 700, color: C.muted, ls: 3 });
  para('Biri kontrolü başlatınca Claude yazılıma bakıyordu.', 400, 560, { size: 33, weight: 700, color: C.ivory, width: 530 });
  card(150, 770, 820, 330, C.emerald);
  duz(270, 935, C.emerald);
  text('ŞİMDİ', 400, 835, { size: 26, weight: 700, color: C.emerald, ls: 3 });
  para('Yazılım değiştikçe Claude kendisi yeniden kontrol ediyor. Boşluk giderilince "düzeldi" yazıyor.', 400, 890, { size: 33, weight: 700, color: C.ivory, width: 530 });
  kaydir();
  done();
}
build();
