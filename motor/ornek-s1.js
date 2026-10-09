async function build() {
  await fontsReady(); paper(); footer('1 / 4');

  tape(146, 108, 480, 58, C.peach, -1.5);
  text('GÜNCELLEME · 8 EKİM 2026', 166, 148, { size: TS.label, font: 'Montserrat', weight: 700, color: C.plum, ls: 2 });

  text('Claude’un kuralları', 150, 290, { size: TS.title, weight: 700, color: C.plum, rot: -1 });
  marker(150, 400, 540, C.mint, 40);
  text('değişiyor', 160, 420, { size: TS.title, weight: 700, color: C.plum, rot: -1 });
  star(600, 372, 1.1); star(640, 410, 0.6);

  body('Claude’un kullanım politikası yenilendi. Yeni kurallar 12 Kasım’da başlıyor.', 152, 510);

  // ---- İLLÜSTRASYON: sınav kâğıdı + yapay zeka parıltısı + büyüteç + takvim ----
  const ex = g({ transform: 'rotate(-5 330 840) translate(0 20)' });
  add(rc.rectangle(200, 680, 280, 330, S({ ...I, fill: '#FFFFFF', fillStyle: 'solid', strokeWidth: 3 })), ex);
  add(rc.rectangle(200, 680, 280, 56, S({ fill: C.pink, fillStyle: 'solid', stroke: 'none' })), ex);
  text('SINAV', 222, 720, { size: TS.label, font: 'Montserrat', weight: 700, color: C.plum, ls: 3, parent: ex });
  [775, 830, 885, 940, 990].forEach((y, i) => {
    add(rc.rectangle(222, y - 14, 20, 20, S({ ...P, strokeWidth: 2 })), ex);
    add(rc.line(256, y - 4, 256 + 120 + (i % 3) * 40, y - 4, S({ ...P, strokeWidth: 2.2 })), ex);
    if (i < 3) add(rc.linearPath([[224, y - 6], [232, y + 2], [246, y - 18]], S({ stroke: C.red, strokeWidth: 3, roughness: 0.5 })), ex);
  });
  add(rc.circle(430, 800, 70, S({ stroke: C.red, strokeWidth: 3, roughness: 1.2 })), ex);
  text('85', 430, 814, { size: 44, weight: 700, color: C.red, anchor: 'middle', parent: ex });

  star(500, 680, 1.5, C.gold); star(540, 726, 0.8, C.gold);
  text('yapay zeka', 520, 668, { size: 44, color: C.gold, rot: -6 });

  // büyüteç = insan kontrolü
  add(rc.circle(620, 880, 150, S({ ...I, strokeWidth: 5, fill: 'rgba(255,255,255,0.45)', fillStyle: 'solid' })));
  add(rc.line(674, 934, 744, 1004, S({ ...I, strokeWidth: 14, roughness: 0.5 })));
  add(rc.linearPath([[578, 882], [608, 912], [664, 846]], S({ stroke: C.gold, strokeWidth: 7, roughness: 0.5 })));
  text('insan kontrolü', 560, 1070, { size: 52, weight: 700, color: C.plum, rot: -3 });

  // takvim yaprağı
  const cal = g({ transform: 'rotate(4 870 820)' });
  add(rc.rectangle(790, 720, 160, 180, S({ ...I, fill: '#FFFFFF', fillStyle: 'solid' })), cal);
  add(rc.rectangle(790, 720, 160, 50, S({ fill: C.peach, fillStyle: 'solid', stroke: 'none' })), cal);
  [820, 870, 920].forEach(x => add(rc.line(x, 706, x, 734, S({ ...I, strokeWidth: 4 })), cal));
  text('KASIM', 870, 758, { size: TS.label, font: 'Montserrat', weight: 700, color: C.plum, anchor: 'middle', ls: 1, parent: cal });
  text('12', 870, 866, { size: 100, weight: 700, color: C.plum, anchor: 'middle', parent: cal });

  sprig(1000, 1080, 0.9, 8);

  // ---- SORU + KAYDIR ----
  tape(146, 1110, 824, 160, C.pink, -0.6);
  text('Sertifika verdiğiniz sınavları', 558, 1172, { size: TS.sub, weight: 700, color: C.plum, anchor: 'middle' });
  text('Claude’a mı okutuyorsunuz?', 558, 1172 + 76, { size: TS.sub, weight: 700, color: C.plum, anchor: 'middle' });
  text('kaydır', 880, 1320, { size: 52, weight: 700, color: C.gold, anchor: 'end' }).dataset.free = 1;
  add(rc.path('M896 1306 L956 1306 M938 1290 L958 1306 L938 1322', S({ ...I, stroke: C.gold, strokeWidth: 3.4, roughness: 0.6 })));
  done();
}
build();
