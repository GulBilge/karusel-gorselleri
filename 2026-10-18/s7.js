const suslemeler = () => {
  kaleydoskop(svg, 1010, 130, 230, 0.22);
  dal(135, 1235, 170, 12, 1, C.emerald).setAttribute('opacity', 0.5);
  dal(945, 1235, 160, -14, -1, C.emerald).setAttribute('opacity', 0.5);
};
let MARK = 0;
const baslik = (k, t, col) => { profil(150, 112, 88); chip(k, 150, 250, col); serif(t, 150, 345, { size: 64, color: C.ivory }); MARK = svg.childNodes.length; };
const kaydir = () => { const G = g({ transform: 'translate(0,0)' }); [...svg.childNodes].slice(MARK, -1).forEach(n => G.appendChild(n)); };
async function build() {
  await fontsReady(); paper('pink'); footer('7 / 8'); suslemeler();
  baslik('BUGÜN YAP', 'Beş dakikanı ayır', C.emerald);
  card(150, 440, 820, 330, C.emerald);
  para('Telefonda ya da claude.ai\'de Claude\'u aç. Her hafta tekrar eden, uzun süren bir işini adım adım yaz ve "Bunun adımlarını azalt" de.', 200, 520, { size: 35, weight: 700, color: C.ivory, width: 720 });
  card(150, 810, 820, 250, C.gold);
  para('Sonra ekle: "Kısalttığın halin doğru olduğunu nasıl anlarım?"', 200, 890, { size: 34, weight: 700, color: C.goldHi, width: 720 });
  kaydir();
  done();
}
build();
