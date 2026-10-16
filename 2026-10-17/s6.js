const suslemeler = () => {
  kaleydoskop(svg, 1010, 130, 230, 0.22);
  dal(135, 1235, 170, 12, 1, C.emerald).setAttribute('opacity', 0.5);
  dal(945, 1235, 160, -14, -1, C.emerald).setAttribute('opacity', 0.5);
};
let MARK = 0;
const baslik = (k, t, col) => { profil(150, 112, 88); chip(k, 150, 250, col); serif(t, 150, 345, { size: 64, color: C.ivory }); MARK = svg.childNodes.length; };
const kaydir = () => { const G = g({ transform: 'translate(0,60)' }); [...svg.childNodes].slice(MARK, -1).forEach(n => G.appendChild(n)); };
async function build() {
  await fontsReady(); paper('purple'); footer('6 / 8'); suslemeler();
  baslik('DİKKAT', 'Şifreler kırılmadı', C.pink);
  card(150, 380, 820, 280, C.pink);
  para('Anthropic\'e göre şifreler kırılmadı, sistem hâlâ güvenli. Sadece sayıların nereden geldiği anlaşıldı.', 200, 460, { size: 34, weight: 700, color: C.ivory, width: 720 });
  card(150, 700, 820, 320, C.gold);
  para('Bunu yapan, Claude\'un henüz herkese açılmamış bir sürümü. Haberi şirketin kendisi verdi; nasıl yaptıklarını da açıkladılar, isteyen bakabilir.', 200, 780, { size: 32, weight: 600, color: C.ivory, width: 720 });
  kaydir();
  done();
}
build();
