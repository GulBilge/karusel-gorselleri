// Kapak: statik olarak da animasyonlu (shot-anim.js) olarak da çizilir. Süre ≈ 7,5 sn, sonra son hal sabit kalır.
async function build() {
  await fontsReady(); paper('purple'); footer('1 / 3');
  const up = (y = 36) => [{ opacity: 0, transform: `translateY(${y}px)` }, { opacity: 1, transform: 'translateY(0)' }];
  const pop = [{ opacity: 0, transform: 'scale(0.4)' }, { opacity: 1, transform: 'scale(1.08)', offset: 0.7 }, { opacity: 1, transform: 'scale(1)' }];

  anim(grp(() => profil(150, 124, 112)), pop, 100, 800, 'ease-out', { origin: '10% 50%' });
  anim(grp(() => chip('CLAUDE İPUCU · 11 EKİM 2026', 150, 292, C.gold)), up(24), 900, 600);

  anim(serif('Aynı dersi', 150, 420, { size: 84, color: C.ivory }), up(50), 1400, 700);
  anim(serif('3 seviyeye', 150, 508, { size: 84, color: C.goldHi }), up(50), 1900, 700);
  anim(serif('uyarlayın', 150, 596, { size: 84, color: C.ivory, italic: true, weight: 600 }), up(50), 2400, 700);
  anim(grp(() => divider(150, 520, 634)), [{ opacity: 0, transform: 'scaleX(0)' }, { opacity: 1, transform: 'scaleX(1)' }], 2900, 700, 'ease-out', { origin: '0% 50%' });
  const sub = grp(() => body('Ders notu tek; öğrencileriniz farklı. Claude her gruba göre yeniden yazabilir.', 150, 696, { width: 800, color: C.muted }));
  anim(sub, up(20), 3200, 700);

  // İLLÜSTRASYON: ders notu -> üç basamak (0.86 ölçek)
  const n0 = svg.childNodes.length;
  const doc = g({ transform: 'rotate(-4 300 880)' });
  const docIn = g({}, doc);
  add(rc.rectangle(170, 750, 250, 300, S({ ...L, fill: C.card2, fillStyle: 'solid' })), docIn);
  add(rc.rectangle(170, 750, 250, 52, S({ fill: C.emeraldDeep, fillStyle: 'solid', stroke: 'none' })), docIn);
  text('DERS NOTU', 192, 785, { size: TS.label, weight: 700, color: C.goldHi, ls: 2, parent: docIn });
  anim(docIn, [{ opacity: 0, transform: 'translateY(60px)' }, { opacity: 1, transform: 'translateY(0)' }], 3600, 800);
  [845, 885, 925, 965, 1005].forEach((y, i) => {
    const ln = add(rc.line(192, y, 192 + 150 + (i % 2) * 36, y, S({ ...L, strokeWidth: 2, stroke: C.muted })), doc);
    anim(ln, [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], 4200 + i * 220, 450, 'ease-out', { origin: '0% 50%' });
  });
  const arr = g();
  add(rc.path('M450 900 Q500 875 560 900', S({ ...L, strokeWidth: 3.4 })), arr);
  add(rc.linearPath([[540, 878], [562, 900], [536, 916]], S({ ...L, strokeWidth: 3.4 })), arr);
  anim(arr, [{ opacity: 0, transform: 'translateX(-30px)' }, { opacity: 1, transform: 'translateX(0)' }], 5300, 600, 'ease-out');
  [[600, 930, 100, C.emerald, 'temel'], [716, 870, 160, C.gold, 'orta'], [832, 810, 220, C.pink, 'ileri']].forEach(([x, y, h, c, lab], i) => {
    const b = el('rect', { x, y, width: 100, height: h, rx: 10, fill: c, opacity: 0.9 });
    anim(b, [{ transform: 'scaleY(0)' }, { transform: 'scaleY(1.06)', offset: 0.75 }, { transform: 'scaleY(1)' }], 5700 + i * 350, 700, 'ease-out', { origin: '50% 100%' });
    anim(text(lab, x + 50, y + h + 44, { size: 32, weight: 700, color: C.ivory, anchor: 'middle' }), up(12), 6100 + i * 350, 400);
  });
  const st = star(882, 766, 1.4);
  anim(st, [{ opacity: 0, transform: 'scale(0) rotate(-90deg)' }, { opacity: 1, transform: 'scale(1.3) rotate(0deg)', offset: 0.6 }, { opacity: 1, transform: 'scale(1) rotate(0deg)' }], 6900, 700, 'ease-out');
  const ill = g({ transform: 'translate(200 790) scale(0.86) translate(-150 -750)' });
  [...svg.childNodes].slice(n0, -1).forEach(n => ill.appendChild(n));

  anim(grp(() => {
    card(150, 1130, 820, 120, C.pink);
    serif('Notlarınızı tekrar tekrar', 190, 1186, { size: 40, weight: 600, italic: true, color: C.ivory });
    serif('baştan mı yazıyorsunuz?', 190, 1234, { size: 40, weight: 600, italic: true, color: C.goldHi });
  }), up(60), 7300, 700);
  const ks = text('kaydır →', 950, 1318, { size: 52, font: 'Caveat', weight: 700, color: C.gold, anchor: 'end' });
  ks.dataset.free = 1;
  anim(ks, [{ opacity: 0 }, { opacity: 1 }], 7800, 400);
  done();
}
build();
