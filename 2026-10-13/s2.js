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
  blok('NE OLDU?', 'Meta, yeni yapay zeka modeli Muse Wonder\'ı 12 Ekim 2026\'da tanıttı. Geliştiriciler şimdi kullanabiliyor; Muse uygulamasına önce abonelere gelecek.', C.emerald);
  blok('YENİ NE VAR?', 'Meta\'ya göre "aktif hafıza": önemli bilgileri konuşmalar boyunca taşıyıp gerektiğinde hatırlıyor. Önemli adımdan önce de soruyor.', C.gold);
  blok('ÖRNEK (VARSAYIMSAL)', 'Her görüşmede geçmiş notları yeniden anlatmak yerine asistan bağlamı kendisi hatırlıyor.', C.pink);
  blok('BUGÜN YAPIN', 'Yapay zekaya sürekli tekrar ettiğiniz 3 bilgiyi yazın; hafıza bunları tek seferde çözer mi, değerlendirin.', C.purple);
  card(150, y, 820, 92, C.emerald);
  el('path', { d: `M190 ${y + 18} h28 v50 l-14 -11 l-14 11 z`, fill: C.gold });
  serif('Kaydedin, meslektaşınıza gönderin.', 244, y + 60, { size: 36, weight: 600, italic: true, color: C.goldHi });
  serif('Detaylar ve kaynaklar açıklamada', 560, y + 134, { size: 30, weight: 600, italic: true, color: C.muted, anchor: 'middle' });
  console.log('son y', y + 140);
  done();
}
build();
