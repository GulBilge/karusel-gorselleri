async function build() {
  await fontsReady(); paper(); footer('2 / 3');
  text('Nasıl yapılır?', 150, 215, { size: TS.title, weight: 700, color: C.plum, rot: -1 });
  marker(150, 233, 560, C.mint, 18);

  function section(h, color, items, y, icon) {
    const hw = h.length * 27 + 60;
    tape(146, y - 54, hw, 74, color, -0.8);
    text(h, 166, y, { size: TS.sub, weight: 700, color: C.plum });
    if (icon) icon(146 + hw + 56, y - 22);
    y += 84;
    items.forEach(it => {
      add(rc.circle(172, y - 16, 14, S({ ...I, fill: C.plum, fillStyle: 'solid', strokeWidth: 1.5 })));
      y = body(it, 200, y, { width: 770 }) + 8;
    });
    return y + 40;
  }
  let y = 350;
  y = section('Ne yazmalı?', C.peach, [
    'Ders notunuzu sohbete yapıştırın.',
    'Kitleyi yazın: seviye ve süre.',
    'Üç ayrı sürüm isteyin.'
  ], y, (ix, iy) => { star(ix, iy, 1.4); star(ix + 38, iy - 24, 0.7); });
  y = section('Örnek istek', C.mint, [
    '“Bu notu başlangıç, orta ve ileri seviye için üç sade sürüme çevir.”'
  ], y);
  section('Dikkat!', C.pink, [
    'Öğrenci adı gibi kişisel bilgi yapıştırmayın.',
    'Çıktıyı okuyup düzeltin; son söz sizin.'
  ], y, (ix, iy) => {
    add(rc.polygon([[ix, iy - 32], [ix + 36, iy + 30], [ix - 36, iy + 30]], S({ ...I, stroke: C.red, fill: 'rgba(212,90,85,0.15)', fillStyle: 'solid' })));
    text('!', ix, iy + 24, { size: 48, weight: 700, color: C.red, anchor: 'middle' });
  });
  marker(200, 1262, 940, C.peach, 30);
  text('Detaylar ve kaynaklar açıklamada', 570, 1276, { size: 56, weight: 700, color: C.plum, anchor: 'middle' });
  done();
}
build();
