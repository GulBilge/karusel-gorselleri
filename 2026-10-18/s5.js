const suslemeler = () => {
  kaleydoskop(svg, 1010, 130, 230, 0.22);
  dal(135, 1235, 170, 12, 1, C.emerald).setAttribute('opacity', 0.5);
  dal(945, 1235, 160, -14, -1, C.emerald).setAttribute('opacity', 0.5);
};
let MARK = 0;
const baslik = (k, t, col) => { profil(150, 112, 88); chip(k, 150, 250, col); serif(t, 150, 345, { size: 64, color: C.ivory }); MARK = svg.childNodes.length; };
const kaydir = () => { const G = g({ transform: 'translate(0,0)' }); [...svg.childNodes].slice(MARK, -1).forEach(n => G.appendChild(n)); };
async function build() {
  await fontsReady(); paper('pink'); footer('5 / 8'); suslemeler();
  baslik('SENİN İŞİNDE', 'Kontrol edebildiğin işte', C.emerald);
  text('Bunlar sadece örnek, gerçekten yaşanmış şeyler değil.', 150, 460, { size: 26, weight: 600, color: C.muted });
  const ornek = [['SALON', 'Randevu düzenini kısalt, boş saati say.', C.pink], ['MUHASEBE', 'Ay sonu adımlarını azalt, toplam tutsun.', C.gold], ['MAĞAZA', 'Sipariş hazırlamayı kısalt, süreyi ölç.', C.emerald]];
  ornek.forEach(([k, t, col], i) => { const y = 490 + i * 165; card(150, y, 820, 145, col); text(k, 200, y + 50, { size: 26, weight: 700, color: col, ls: 3 }); para(t, 200, y + 100, { size: 31, weight: 700, color: C.ivory, width: 720 }); });
  card(150, 995, 820, 120, C.gold);
  para('Sonucu kontrol edebiliyorsan Claude bu işi daha iyi yapıyor.', 200, 1040, { size: 29, weight: 700, italic: true, color: C.goldHi, width: 720 });
  kaydir();
  done();
}
build();
