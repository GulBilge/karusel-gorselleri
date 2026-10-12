// Okunur detay sayfası (2 / 2): haberin özeti, gerçek hayattan örnek, 3 zayıf nokta, bugün yapılacak. Detaylar caption'da.
async function build() {
  await fontsReady(); paper('pink'); footer('2 / 2');
  serif('Peki bu ne demek?', 150, 215, { size: 76 });
  divider(150, 520, 255);
  let y = 280;
  const blok = (baslik, metin, renk, size = 29) => {
    const h = para(metin, 190, 0, { size, width: 740, dry: true }) - 0;
    const hh = 60 + h + 4;
    card(150, y, 820, hh, renk);
    text(baslik, 190, y + 48, { size: TS.label, weight: 700, color: renk, ls: 4 });
    para(metin, 190, y + 88, { size, width: 740, color: C.ivory });
    y += hh + 16;
  };
  blok('NE OLDU?', 'Telefonları yapay zekanın karşıladığı sesli asistanlar yaygınlaşıyor, ama sektör yöneticilerine göre henüz kusursuz değil.', C.emerald);
  blok('3 ZAYIF NOKTA', 'Cevap geç geliyor. İsim ve rakamlar yanlış anlaşılabiliyor. Arayana yapay zeka olduğu söylenmeli.', C.gold);
  blok('ÖRNEK', 'Kliniğinizin randevu hattını arayan hasta adını söylüyor; asistan yanlış anlıyor ya da uzun süre susuyor. Hasta telefonu kapatıyor.', C.pink);
  blok('BUGÜN YAPIN', 'Asistan kuruyorsanız önce kendiniz arayıp deneyin: gecikme var mı, adınızı doğru duyuyor mu?', C.purple);
  card(150, y, 820, 92, C.emerald);
  el('path', { d: `M190 ${y + 18} h28 v50 l-14 -11 l-14 11 z`, fill: C.gold });
  serif('Kaydedin, meslektaşınıza gönderin.', 244, y + 60, { size: 36, weight: 600, italic: true, color: C.goldHi });
  serif('Detaylar ve kaynaklar açıklamada', 560, y + 134, { size: 30, weight: 600, italic: true, color: C.muted, anchor: 'middle' });
  console.log('son y', y + 140);
  done();
}
build();
