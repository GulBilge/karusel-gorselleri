async function build() {
  await fontsReady(); paper(); footer('1 / 3');

  tape(146, 108, 520, 58, C.mint, -1.5);
  text('CLAUDE İPUCU · 11 EKİM 2026', 166, 148, { size: TS.label, font: 'Montserrat', weight: 700, color: C.plum, ls: 2 });

  text('Aynı dersi', 150, 290, { size: TS.title, weight: 700, color: C.plum, rot: -1 });
  marker(150, 400, 600, C.peach, 40);
  text('3 seviyeye uyarlayın', 160, 420, { size: TS.title, weight: 700, color: C.plum, rot: -1 });
  star(850, 372, 1.1); star(890, 410, 0.6);

  body('Elinizdeki ders notu tek; öğrencileriniz farklı. Claude ile her gruba göre yeniden yazdırabilirsiniz.', 152, 510, { width: 800 });

  // İLLÜSTRASYON: ders notu -> üç basamak
  const doc = g({ transform: 'rotate(-4 300 850)' });
  add(rc.rectangle(190, 690, 250, 320, S({ ...I, fill: '#FFFFFF', fillStyle: 'solid' })), doc);
  add(rc.rectangle(190, 690, 250, 52, S({ fill: C.peach, fillStyle: 'solid', stroke: 'none' })), doc);
  text('DERS NOTU', 214, 726, { size: TS.label, font: 'Montserrat', weight: 700, color: C.plum, ls: 2, parent: doc });
  [785, 830, 875, 920, 965].forEach((y, i) => add(rc.line(214, y, 214 + 150 + (i % 2) * 40, y, S({ ...P, strokeWidth: 2.2 })), doc));

  // oklar
  add(rc.path('M470 850 Q520 830 570 850', S({ ...I, strokeWidth: 4 })));
  add(rc.linearPath([[552, 830], [572, 850], [548, 864]], S({ ...I, strokeWidth: 4 })));

  // üç basamak
  const steps = [[600, 930, 110, C.mint, 'temel'], [720, 870, 170, C.pink, 'orta'], [840, 810, 230, C.peach, 'ileri']];
  steps.forEach(([x, y, h, c, lab]) => {
    add(rc.rectangle(x, y, 110, h, S({ ...I, fill: c, fillStyle: 'solid', strokeWidth: 3 })));
    text(lab, x + 55, y + h + 52, { size: 46, weight: 700, color: C.plum, anchor: 'middle' });
  });
  star(895, 770, 1.3);
  sprig(1000, 1080, 0.9, 8);

  tape(146, 1120, 824, 150, C.pink, -0.6);
  text('Notlarınızı tekrar tekrar', 558, 1180, { size: TS.sub, weight: 700, color: C.plum, anchor: 'middle' });
  text('baştan yazıyor musunuz?', 558, 1256, { size: TS.sub, weight: 700, color: C.plum, anchor: 'middle' });
  text('kaydır', 880, 1325, { size: 52, weight: 700, color: C.gold, anchor: 'end' }).dataset.free = 1;
  add(rc.path('M896 1311 L956 1311 M938 1295 L958 1311 L938 1327', S({ ...I, stroke: C.gold, strokeWidth: 3.4, roughness: 0.6 })));
  done();
}
build();
