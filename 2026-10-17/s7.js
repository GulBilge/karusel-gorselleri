const suslemeler = () => {
  kaleydoskop(svg, 1010, 130, 230, 0.22);
  dal(135, 1235, 170, 12, 1, C.emerald).setAttribute('opacity', 0.5);
  dal(945, 1235, 160, -14, -1, C.emerald).setAttribute('opacity', 0.5);
};
let MARK = 0;
const baslik = (k, t, col) => { profil(150, 112, 88); chip(k, 150, 250, col); serif(t, 150, 345, { size: 64, color: C.ivory }); MARK = svg.childNodes.length; };
const kaydir = () => { const G = g({ transform: 'translate(0,60)' }); [...svg.childNodes].slice(MARK, -1).forEach(n => G.appendChild(n)); };
async function build() {
  await fontsReady(); paper('pink'); footer('7 / 8'); suslemeler();
  baslik('BUGÜN YAP', 'Beş dakikanı ayır', C.emerald);
  card(150, 380, 820, 330, C.emerald);
  para('Claude uygulamasını aç ya da claude.ai\'ye gir. Aylardır takıldığın bir soruyu, elindeki bilgilerle birlikte yaz.', 200, 460, { size: 35, weight: 700, color: C.ivory, width: 720 });
  card(150, 750, 820, 230, C.gold);
  para('Sonuna ekle: "Cevabı nasıl kontrol edeceğimi de göster."', 200, 830, { size: 34, weight: 700, color: C.goldHi, width: 720 });
  kaydir();
  done();
}
build();
