const suslemeler = () => {
  kaleydoskop(svg, 1010, 130, 230, 0.22);
  dal(135, 1235, 170, 12, 1, C.emerald).setAttribute('opacity', 0.5);
  dal(945, 1235, 160, -14, -1, C.emerald).setAttribute('opacity', 0.5);
};
let MARK = 0;
const baslik = (k, t, col) => { profil(150, 112, 88); chip(k, 150, 250, col); serif(t, 150, 345, { size: 64, color: C.ivory }); MARK = svg.childNodes.length; };
const kaydir = () => { const G = g({ transform: 'translate(0,60)' }); [...svg.childNodes].slice(MARK, -1).forEach(n => G.appendChild(n)); };
async function build() {
  await fontsReady(); paper('pink'); footer('5 / 8'); suslemeler();
  baslik('SENİN İŞİNDE', 'Senin takıldığın soru ne?', C.emerald);
  text('Bunlar sadece örnek, gerçekten yaşanmış şeyler değil.', 150, 400, { size: 26, weight: 600, color: C.muted });
  const ornek = [['SALON', 'Müşteriler neden hep salı günü iptal ediyor?', C.pink], ['MUHASEBE', 'Bu iki tablo neden bir türlü tutmuyor?', C.gold], ['MAĞAZA', 'Satışlar neden her ayın ortasında düşüyor?', C.emerald]];
  ornek.forEach(([k, t, col], i) => { const y = 430 + i * 165; card(150, y, 820, 145, col); text(k, 200, y + 50, { size: 26, weight: 700, color: col, ls: 3 }); para(t, 200, y + 100, { size: 31, weight: 700, color: C.ivory, width: 720 }); });
  card(150, 935, 820, 120, C.gold);
  para('Defterini ver, "Hep aynı şey mi oluyor, bunun bir sebebi var mı?" diye sor.', 200, 980, { size: 29, weight: 700, italic: true, color: C.goldHi, width: 720 });
  kaydir();
  done();
}
build();
