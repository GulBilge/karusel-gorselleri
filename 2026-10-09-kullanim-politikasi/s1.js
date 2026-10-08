async function build() {
  await fontsReady(); paper(); footer('1 / 3');

  tape(146, 112, 430, 50, C.peach, -1.5);
  text('GÜNCELLEME · 8 EKİM 2026', 166, 146, { size: 24, font: 'Montserrat', weight: 700, color: C.plum, ls: 2 });

  text('Claude’un kuralları', 150, 300, { size: 104, weight: 700, color: C.plum, rot: -1, max: 820 });
  marker(150, 378, 560, C.mint, 40);
  text('değişiyor', 160, 400, { size: 112, weight: 700, color: C.plum, rot: -1 });
  star(610, 352, 1.1); star(650, 392, 0.6);

  text('Anthropic, Claude’un kullanım politikasını yeniledi.', 152, 492, { size: 46, color: C.ink, max: 860 });
  text('Yeni kurallar 12 Kasım’da yürürlüğe giriyor.', 152, 548, { size: 46, color: C.ink, max: 860 });

  // ---- İLLÜSTRASYON: sınav kâğıdı + yapay zeka parıltısı + büyüteç + takvim ----
  const ex = g({ transform: 'rotate(-5 340 820)' });
  add(rc.rectangle(200, 640, 300, 380, S({ ...I, fill: '#FFFFFF', fillStyle: 'solid', strokeWidth: 3 })), ex);
  add(rc.rectangle(200, 640, 300, 56, S({ fill: C.pink, fillStyle: 'solid', stroke: 'none' })), ex);
  text('SINAV', 222, 680, { size: 26, font: 'Montserrat', weight: 700, color: C.plum, ls: 3, parent: ex });
  [730, 790, 850, 910, 970].forEach((y, i) => {
    add(rc.rectangle(222, y - 14, 20, 20, S({ ...P, strokeWidth: 2 })), ex);
    add(rc.line(256, y - 4, 256 + 150 + (i % 3) * 40, y - 4, S({ ...P, strokeWidth: 2.2 })), ex);
    if (i < 3) add(rc.linearPath([[224, y - 6], [232, y + 2], [246, y - 18]], S({ stroke: C.red, strokeWidth: 3, roughness: 0.5 })), ex);
  });
  add(rc.circle(450, 760, 74, S({ stroke: C.red, strokeWidth: 3, roughness: 1.2 })), ex);
  text('85', 450, 774, { size: 44, weight: 700, color: C.red, anchor: 'middle', parent: ex });

  // yapay zeka parıltıları (kâğıdın üstünde)
  star(520, 640, 1.5, C.gold); star(560, 690, 0.8, C.gold); star(180, 620, 0.9, C.gold);
  text('yapay zeka', 548, 628, { size: 36, color: C.gold, rot: -6 });

  // büyüteç = insan kontrolü
  const mg = g({});
  add(rc.circle(640, 860, 150, S({ ...I, strokeWidth: 5, fill: 'rgba(255,255,255,0.45)', fillStyle: 'solid' })), mg);
  add(rc.line(694, 914, 770, 990, S({ ...I, strokeWidth: 14, roughness: 0.5 })), mg);
  add(rc.linearPath([[598, 862], [628, 892], [684, 826]], S({ stroke: C.gold, strokeWidth: 7, roughness: 0.5 })), mg); // onay
  text('insan kontrolü', 600, 1060, { size: 40, weight: 700, color: C.plum, rot: -3 });

  // takvim yaprağı
  const cal = g({ transform: 'rotate(4 900 760)' });
  add(rc.rectangle(820, 650, 170, 190, S({ ...I, fill: '#FFFFFF', fillStyle: 'solid' })), cal);
  add(rc.rectangle(820, 650, 170, 50, S({ fill: C.peach, fillStyle: 'solid', stroke: 'none' })), cal);
  [850, 905, 960].forEach(x => add(rc.line(x, 636, x, 664, S({ ...I, strokeWidth: 4 })), cal));
  text('KASIM', 905, 690, { size: 24, font: 'Montserrat', weight: 700, color: C.plum, anchor: 'middle', ls: 2, parent: cal });
  text('12', 905, 800, { size: 100, weight: 700, color: C.plum, anchor: 'middle', parent: cal });

  sprig(1010, 1100, 1.1, 8); sprig(170, 1150, 0.7, -14);

  // ---- SORU + KAYDIR ----
  tape(146, 1118, 820, 120, C.pink, -0.6);
  text('Sertifika verdiğiniz sınavları', 556, 1168, { size: 52, weight: 700, color: C.plum, anchor: 'middle' });
  text('Claude’a mı okutuyorsunuz?', 556, 1222, { size: 52, weight: 700, color: C.plum, anchor: 'middle' });
  text('kaydır', 940, 1310, { size: 48, weight: 700, color: C.gold, anchor: 'end' });
  add(rc.path('M954 1296 L1010 1296 M992 1280 L1012 1296 L992 1312', S({ ...I, stroke: C.gold, strokeWidth: 3.4, roughness: 0.6 })));
  done();
}
build();
