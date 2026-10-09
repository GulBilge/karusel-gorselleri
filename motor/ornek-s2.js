async function build() {
  await fontsReady(); paper(); footer('2 / 4');
  text('12 Kasım’dan itibaren', 150, 170, { size: TS.sub, weight: 700, color: C.gold, rot: -1.5 });

  // Bölüm: bant üstünde ara başlık + maddeler. y = başlığın taban çizgisi; dönen değer bir sonraki bölümün y'si
  function section(h, color, items, y, icon) {
    const hw = h.length * 27 + 60;
    tape(146, y - 54, hw, 74, color, -0.8);
    text(h, 166, y, { size: TS.sub, weight: 700, color: C.plum });
    if (icon) icon(146 + hw + 56, y - 22);
    y += 84;
    items.forEach(it => {
      add(rc.circle(172, y - 16, 14, S({ ...I, fill: C.plum, fillStyle: 'solid', strokeWidth: 1.5 })));
      y = body(it, 200, y) + 8;
    });
    return y + 50;
  }
  let y = 320;
  y = section('Ne değişti?', C.peach, [
    'Bazı kullanımlar “yüksek riskli” sayılıyor. Eğitim ve sertifika da bunların arasında.',
    'Bu alanlarda Claude’un önerisini bir insan kontrol edip değiştirebilmeli.',
    'Karardan etkilenen kişiye yapay zeka kullanıldığı açıkça söylenmeli.'
  ], y, (ix, iy) => { star(ix, iy, 1.4); star(ix + 38, iy - 24, 0.7); });

  section('Dikkat!', C.pink, [
    'Yasak: sahte hesap ya da kişilikle yanıltmak.',
    'Yasak: Claude’a sürekli, gereksiz kötü davranmak.'
  ], y, (ix, iy) => {
    add(rc.polygon([[ix, iy - 32], [ix + 36, iy + 30], [ix - 36, iy + 30]], S({ ...I, stroke: C.red, fill: 'rgba(212,90,85,0.15)', fillStyle: 'solid' })));
    text('!', ix, iy + 24, { size: 48, weight: 700, color: C.red, anchor: 'middle' });
  });

  sprig(990, 1290, 0.8, 8);
  done();
}
build();
