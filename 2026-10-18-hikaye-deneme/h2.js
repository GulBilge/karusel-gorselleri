async function build() {
  await fontsReady(); sayfa('NE YAPIYOR?', '2 / 3');
  let y = baslik('Altı ayrı yapay zeka yardımcısı ayarlamış. Her biri tek bir işe bakıyor.', 480);
  y += 40;
  ['Gelen müşteri mesajlarını ilgili kişiye iletiyor.', 'Yeni müşterilere ilk e-postayı hazırlıyor.', 'Gelen e-postalara cevap taslağı yazıyor.', 'Müşteri kayıtlarını güncel tutuyor.', 'Gün sonunda toplantıları özetliyor.', 'Biri de diğerlerinin talimatlarını güncelliyor.']
    .forEach(m => { el('circle', { cx: 104, cy: y - 13, r: 7, fill: C.gold }); y = para(m, 136, y, { size: 38, lh: 1.35, width: 854 }) + 26; });
  para('Yapay zekanın yazdığı her şeyi önce kendisi okuyor, sonra gönderiyor.', 90, y + 40, { size: 40, weight: 700, color: C.goldHi, lh: 1.4 });
  done();
}
build();
