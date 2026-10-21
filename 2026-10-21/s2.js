const suslemeler = () => {
  kaleydoskop(svg, 1010, 130, 230, 0.22);
  dal(135, 1235, 170, 12, 1, C.emerald).setAttribute('opacity', 0.5);
  dal(945, 1235, 160, -14, -1, C.emerald).setAttribute('opacity', 0.5);
};
let MARK = 0;
const baslik = (k, t, col) => { profil(150, 112, 88); chip(k, 150, 250, col); serif(t, 150, 345, { size: 64, color: C.ivory }); MARK = svg.childNodes.length; };
const kaydir = () => { const G = g({ transform: 'translate(0,0)' }); [...svg.childNodes].slice(MARK, -1).forEach(n => G.appendChild(n)); };
async function build() {
  await fontsReady(); paper('purple'); footer('2 / 8'); suslemeler();
  baslik('NE OLDU? · 21 EKİM', 'Claude sürekli bakıyor', C.pink);
  card(150, 440, 820, 330, C.pink);
  para('Claude\'u yapan şirket Anthropic, yazılımlardaki güvenlik boşluklarını (hırsızın girebileceği delikleri) arayan programı Claude Security\'nin yeni sürümünü çıkardı.', 200, 520, { size: 36, weight: 700, color: C.ivory, width: 720 });
  card(150, 810, 820, 250, C.gold);
  para('Program zaten vardı. Yeni sürümde yazılım değiştikçe kendisi yeniden kontrol ediyor.', 200, 890, { size: 34, weight: 600, color: C.ivory, width: 720 });
  kaydir();
  done();
}
build();
