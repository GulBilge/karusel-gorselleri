async function build() {
  await fontsReady(); sayfa('YAPAY ZEKA HABERİ · 16 EKİM', '1 / 3');
  let y = baslik('Claude\'u yapan şirkette çalışan bir satışçı, her gün tekrar eden işlerini artık Claude\'a yaptırıyor.', 520);
  y = para('Şirketin Japonya\'daki satış ekibinden biri, gününü nasıl geçirdiğini kendisi anlattı.', 90, y + 50, { size: 40, color: C.muted, lh: 1.45 });
  gorsel('hikaye-gorsel.png', 90, y + 70, 900, 145, 'Claude\'un yazdığı e-posta cevabı. Satışçı okuyup onaylamadan gitmiyor. Görsel: Anthropic');
  done();
}
build();
