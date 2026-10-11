async function build() {
  await fontsReady(); paper('pink'); footer('2 / 3');
  serif('Nasıl yapılır?', 150, 220, { size: 84 });
  divider(150, 520, 262);

  function section(h, accent, items, y) {
    const x = 150, w = 820, tx = x + 64, tw = w - 64 - 36;
    let yy = y + 120;
    const ends = items.map(it => { const y0 = yy; yy = body(it, tx, yy, { dry: true, width: tw }) + 6; return y0; });
    const hgt = yy - y - 18;
    card(x, y, w, hgt, accent);
    text(h.toUpperCase(), x + 36, y + 58, { size: TS.label + 2, weight: 700, color: accent, ls: 4 });
    items.forEach((it, i) => { bullet(x + 38, ends[i] - 12, accent); body(it, tx, ends[i], { width: tw }); });
    return y + hgt + 26;
  }
  let y = 300;
  y = section('Ne yazmalı?', C.emerald, ['Ders notunuzu sohbete yapıştırın.', 'Kitleyi yazın: seviye ve süre.', 'Üç ayrı sürüm isteyin.'], y);
  y = section('Örnek istek', C.gold, ['“Bu notu başlangıç, orta ve ileri seviye için üç sade sürüme çevir.”'], y);
  y = section('Dikkat!', C.pink, ['Öğrenci adı gibi kişisel bilgi yapıştırmayın.', 'Çıktıyı okuyup düzeltin; son söz sizin.'], y);
  serif('Detaylar ve kaynaklar açıklamada', 560, y + 40, { size: 40, weight: 600, italic: true, color: C.goldHi, anchor: 'middle' });
  done();
}
build();
