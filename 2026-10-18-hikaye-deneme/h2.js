async function build() {
  await fontsReady(); sayfa('NASIL?', '2 / 3');
  const y = baslik('O daha işe başlamadan, yapay zeka gelen e-postaları okuyup cevapları yazıyor.', 560, { size: 80 });
  para('Cevaplar gönderilmeden bekliyor. O sadece okuyor, düzeltiyor ve "gönder" diyor.', 90, y + 60, { size: 42, color: C.muted, lh: 1.45 });
  done();
}
build();
