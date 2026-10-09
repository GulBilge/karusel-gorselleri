async function build() {
  await fontsReady(); paper(); footer('3 / 4');
  text('Eğitimcileri', 150, 240, { size: TS.title, weight: 700, color: C.plum, rot: -1 });
  marker(150, 350, 600, C.mint, 36);
  text('nasıl etkiliyor?', 160, 370, { size: TS.title, weight: 700, color: C.plum, rot: -1 });
  // kep ikonu
  const ix = 800, iy = 200;
  add(rc.polygon([[ix - 70, iy], [ix, iy - 36], [ix + 70, iy], [ix, iy + 36]], S({ ...I, fill: C.plum, fillStyle: 'solid', strokeWidth: 2 })));
  add(rc.path(`M${ix - 40} ${iy + 18} L${ix - 40} ${iy + 54} Q${ix} ${iy + 78} ${ix + 40} ${iy + 54} L${ix + 40} ${iy + 18}`, S({ ...I, strokeWidth: 2.6 })));
  add(rc.line(ix + 60, iy + 5, ix + 60, iy + 60, S({ stroke: C.gold, strokeWidth: 3.4 })));

  function group(label, color, items, y) {
    tape(146, y - 44, label.length * 22 + 50, 60, color, -0.6);
    text(label, 166, y, { size: TS.label, font: 'Montserrat', weight: 700, color: C.plum, ls: 1.5 });
    y += 70;
    items.forEach(it => {
      add(rc.circle(172, y - 13, 14, S({ ...I, fill: C.plum, fillStyle: 'solid', strokeWidth: 1.5 })));
      y = body(it, 200, y) + 14;
    });
    return y + 40;
  }
  let y = 500;
  y = group('KAPSAMDA', C.peach, [
    'Sertifika, mezuniyet ya da kabul kararını belirleyen notlandırma*',
    'Başvuru kabul/ret ve sıralama; kopya ve disiplin kararları'
  ], y);
  y = group('KAPSAM DIŞI', C.mint, [
    'Genel eğitim içeriği, iç taslaklar ve araştırma çalışmaları'
  ], y);
  body('* Çoktan seçmeli testler hariç', 150, y + 10, { size: TS.label, color: C.soft });

  marker(200, 1222, 940, C.peach, 34);
  text('Detaylar ve kaynaklar açıklamada', 570, 1236, { size: 56, weight: 700, color: C.plum, anchor: 'middle' });
  done();
}
build();
