async function build() {
  await fontsReady(); paper('purple'); footer('1 / 3');
  profil(150, 124, 112);
  chip('CLAUDE İPUCU · 11 EKİM 2026', 150, 292, C.gold);

  serif('Aynı dersi', 150, 420, { size: 84, color: C.ivory });
  serif('3 seviyeye', 150, 508, { size: 84, color: C.goldHi });
  serif('uyarlayın', 150, 596, { size: 84, color: C.ivory, italic: true, weight: 600 });
  divider(150, 520, 634);
  body('Ders notu tek; öğrencileriniz farklı. Claude her gruba göre yeniden yazabilir.', 150, 696, { width: 800, color: C.muted });

  // İLLÜSTRASYON: ders notu -> üç basamak (0.86 ölçek)
  const n0 = svg.childNodes.length;
  const doc = g({ transform: 'rotate(-4 300 880)' });
  add(rc.rectangle(170, 750, 250, 300, S({ ...L, fill: C.card2, fillStyle: 'solid' })), doc);
  add(rc.rectangle(170, 750, 250, 52, S({ fill: C.emeraldDeep, fillStyle: 'solid', stroke: 'none' })), doc);
  text('DERS NOTU', 192, 785, { size: TS.label, weight: 700, color: C.goldHi, ls: 2, parent: doc });
  [845, 885, 925, 965, 1005].forEach((y, i) => add(rc.line(192, y, 192 + 150 + (i % 2) * 36, y, S({ ...L, strokeWidth: 2, stroke: C.muted })), doc));
  add(rc.path('M450 900 Q500 875 560 900', S({ ...L, strokeWidth: 3.4 })));
  add(rc.linearPath([[540, 878], [562, 900], [536, 916]], S({ ...L, strokeWidth: 3.4 })));
  [[600, 930, 100, C.emerald, 'temel'], [716, 870, 160, C.gold, 'orta'], [832, 810, 220, C.pink, 'ileri']].forEach(([x, y, h, c, lab]) => {
    el('rect', { x, y, width: 100, height: h, rx: 10, fill: c, opacity: 0.9 });
    text(lab, x + 50, y + h + 44, { size: 32, weight: 700, color: C.ivory, anchor: 'middle' });
  });
  star(882, 766, 1.4);
  const ill = g({ transform: 'translate(200 790) scale(0.86) translate(-150 -750)' });
  [...svg.childNodes].slice(n0, -1).forEach(n => ill.appendChild(n));

  card(150, 1130, 820, 120, C.pink);
  serif('Notlarınızı tekrar tekrar', 190, 1186, { size: 40, weight: 600, italic: true, color: C.ivory });
  serif('baştan mı yazıyorsunuz?', 190, 1234, { size: 40, weight: 600, italic: true, color: C.goldHi });
  text('kaydır →', 950, 1318, { size: 52, font: 'Caveat', weight: 700, color: C.gold, anchor: 'end' }).dataset.free = 1;
  done();
}
build();
