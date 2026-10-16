const suslemeler = () => {
  kaleydoskop(svg, 1010, 130, 230, 0.22);
  dal(135, 1235, 170, 12, 1, C.emerald).setAttribute('opacity', 0.5);
  dal(945, 1235, 160, -14, -1, C.emerald).setAttribute('opacity', 0.5);
};
let MARK = 0;
const baslik = (k, t, col) => { profil(150, 112, 88); chip(k, 150, 250, col); serif(t, 150, 345, { size: 64, color: C.ivory }); MARK = svg.childNodes.length; };
const kaydir = () => { const G = g({ transform: 'translate(0,60)' }); [...svg.childNodes].slice(MARK, -1).forEach(n => G.appendChild(n)); };
async function build() {
  await fontsReady(); paper('purple'); footer('2 / 8'); suslemeler();
  baslik('NE OLDU? · 16 EKİM', '25 yıllık gizem çözüldü', C.pink);
  card(150, 380, 820, 330, C.pink);
  para('Claude\'u yapan şirket Anthropic duyurdu: Yapay zeka asistanı Claude, uzmanların 25 yıldır çözemediği bir gizemi yarım saatte çözdü.', 200, 460, { size: 36, weight: 700, color: C.ivory, width: 720 });
  card(150, 750, 820, 270, C.gold);
  para('İnternette bilgilerimizi koruyan en yaygın sistemlerden birinde bazı sayıların nereden geldiğini kimse bilmiyordu.', 200, 830, { size: 34, weight: 600, color: C.ivory, width: 720 });
  kaydir();
  done();
}
build();
