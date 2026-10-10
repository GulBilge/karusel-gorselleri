async function build() {
  await fontsReady(); paper(); footer('2 / 3');
  const X = 150, Wd = 800;
  function head(t, y, col) { marker(X, y + 10, X + 420, col, 22); text(t, X, y, { size: TS.sub, weight: 700, color: C.plum, rot: -1 }); }
  function bl(t, y) { text('•', X, y, { size: TS.body, weight: 700, color: C.gold }); return body(t, X + 40, y, { width: Wd - 40 }); }
  let y = 175;
  head('Ne değişti?', y, C.mint); y += 80;
  y = bl('Belge, Slayt ve Tasarım beta’dan çıktı: Ücretsiz dahil tüm planlarda.', y);
  y += 22;
  head('Yeni: Motion', y, C.peach); y += 80;
  y = bl('Mesaj kutusuna /motion yazın; 30 saniyelik animasyonlu anlatım hazırlanır, MP4 olarak indirilir.', y);
  y = bl('Yalnızca Team ve Enterprise planlarında (beta).', y);
  y += 22;
  head('Dikkat!', y, C.pink); y += 80;
  y = bl('Motion gerçek görüntü ya da yapay zeka kişisi üretmez.', y);
  y = bl('Claude Design’ın ayrı sitesi 14 Aralık’a kadar açık.', y);
  console.log('son y', y);
  text('Detaylar ve kaynaklar açıklamada', 150, 1262, { size: TS.note, color: C.soft });
  sprig(1010, 1240, 0.7, 8);
  done();
}
build();
