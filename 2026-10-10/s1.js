async function build() {
  await fontsReady(); paper(); footer('1 / 3');

  tape(146, 108, 560, 58, C.peach, -1.5);
  text('KAÇIRDIYSANIZ · 8 EKİM 2026', 166, 148, { size: TS.label, font: 'Montserrat', weight: 700, color: C.plum, ls: 2 });

  text('Belge ve slayt', 150, 290, { size: TS.title, weight: 700, color: C.plum, rot: -1 });
  marker(150, 400, 640, C.mint, 40);
  text('artık Claude’da', 160, 420, { size: TS.title, weight: 700, color: C.plum, rot: -1 });
  star(720, 372, 1.1); star(760, 410, 0.6);

  body('Belge, slayt ve tasarım beta’dan çıktı. Ücretsiz plan dahil tüm planlarda açık.', 152, 510);

  // ---- İLLÜSTRASYON: pencere + belge/slayt/tasarım kartları + /motion ----
  const w = g({ transform: 'rotate(-3 440 860)' });
  add(rc.rectangle(180, 690, 560, 340, S({ ...I, fill: '#FFFFFF', fillStyle: 'solid' })), w);
  add(rc.rectangle(180, 690, 560, 52, S({ fill: C.pink, fillStyle: 'solid', stroke: 'none' })), w);
  [210, 244, 278].forEach(x => add(rc.circle(x, 716, 14, S({ ...P, strokeWidth: 2 })), w));
  // belge
  add(rc.rectangle(210, 775, 140, 200, S({ ...P, fill: '#FFF9EE', fillStyle: 'solid' })), w);
  [805, 835, 865, 895, 925].forEach((y, i) => add(rc.line(226, y, 334 - (i % 2) * 30, y, S({ ...P, strokeWidth: 2 })), w));
  text('belge', 280, 1010, { size: 42, weight: 700, color: C.plum, anchor: 'middle', parent: w });
  // slayt
  add(rc.rectangle(375, 775, 160, 120, S({ ...P, fill: C.mint, fillStyle: 'solid' })), w);
  [[395, 30], [435, 50], [475, 70]].forEach(([x, h]) => add(rc.rectangle(x, 885 - h, 26, h, S({ ...P, strokeWidth: 2, fill: '#FFFFFF', fillStyle: 'solid' })), w));
  text('slayt', 455, 1010, { size: 42, weight: 700, color: C.plum, anchor: 'middle', parent: w });
  // tasarım (palet)
  add(rc.ellipse(625, 855, 150, 120, S({ ...P, fill: C.peach, fillStyle: 'solid' })), w);
  [[595, 830, C.red], [640, 815, C.gold], [665, 860, C.leaf]].forEach(([x, y, c]) => add(rc.circle(x, y, 22, S({ stroke: c, fill: c, fillStyle: 'solid', strokeWidth: 1.5, roughness: 0.5 })), w));
  text('tasarım', 625, 1010, { size: 42, weight: 700, color: C.plum, anchor: 'middle', parent: w });

  // /motion
  const m = g({ transform: 'rotate(5 850 860)' });
  add(rc.rectangle(770, 760, 190, 150, S({ ...I, fill: C.peach, fillStyle: 'solid' })), m);
  add(rc.polygon([[840, 800], [840, 870], [895, 835]], S({ ...I, fill: '#FFFFFF', fillStyle: 'solid', strokeWidth: 3 })), m);
  text('/motion', 865, 960, { size: 52, weight: 700, color: C.plum, anchor: 'middle', parent: m });
  text('Team ve', 855, 1000, { size: 42, color: C.ink, anchor: 'middle', parent: m });
  text('Enterprise', 855, 1042, { size: 42, color: C.ink, anchor: 'middle', parent: m });
  star(790, 740, 1.2, C.gold);
  sprig(130, 1090, 0.7, -6);

  // ---- SORU + KAYDIR ----
  tape(146, 1110, 824, 160, C.pink, -0.6);
  text('Bir sonraki dersinizin sunumunu', 558, 1172, { size: TS.sub, weight: 700, color: C.plum, anchor: 'middle' });
  text('sohbetten hazırlasanız?', 558, 1172 + 76, { size: TS.sub, weight: 700, color: C.plum, anchor: 'middle' });
  text('kaydır', 880, 1320, { size: 52, weight: 700, color: C.gold, anchor: 'end' }).dataset.free = 1;
  add(rc.path('M896 1306 L956 1306 M938 1290 L958 1306 L938 1322', S({ ...I, stroke: C.gold, strokeWidth: 3.4, roughness: 0.6 })));
  done();
}
build();
