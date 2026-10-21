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
  baslik('SENİN İŞİNDE', 'Siten varsa', C.emerald);
  text('Bunlar sadece örnek, gerçekten yaşanmış şeyler değil.', 150, 460, { size: 26, weight: 600, color: C.muted });
  const ornek = [['RANDEVU UYGULAMASI', 'Müşterilerin telefon ve adres bilgilerini koruyan kısım sürekli kontrol ediliyor.', C.pink], ['ONLİNE MAĞAZA', 'Ödeme kısmında boşluk varsa, site değiştikçe aranıyor.', C.gold], ['EĞİTİM SİTESİ', 'Üyelerin şifreyle girdiği yerde sorun varsa listede çıkıyor.', C.emerald]];
  ornek.forEach(([k, t, col], i) => { const y = 490 + i * 190; card(150, y, 820, 175, col); text(k, 200, y + 45, { size: 26, weight: 700, color: col, ls: 3 }); para(t, 200, y + 92, { size: 31, weight: 700, color: C.ivory, width: 720 }); });
  kaydir();
  done();
}
build();
