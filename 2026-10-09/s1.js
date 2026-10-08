async function build() {
  await fontsReady(); paper(); footer('1 / 3');

  tape(146, 112, 560, 50, C.peach, -1.5);
  text('KAÇIRDIYSANIZ · 7 EKİM 2026', 166, 146, { size: 24, font: 'Montserrat', weight: 700, color: C.plum, ls: 2 });

  text('Max ve Team planına', 150, 290, { size: 96, weight: 700, color: C.plum, rot: -1, max: 820 });
  marker(150, 372, 640, C.mint, 40);
  text('aylık API kredisi', 160, 392, { size: 108, weight: 700, color: C.plum, rot: -1, max: 820 });
  star(800, 350, 1.1); star(840, 392, 0.6);

  text('Kendi uygulamalarınızı ve yapay zeka ajanlarınızı', 152, 490, { size: 44, color: C.ink, max: 860 });
  text('çalıştırmak için her ay kredi tanımlanıyor.', 152, 544, { size: 44, color: C.ink, max: 860 });

  // ---- İLLÜSTRASYON: madeni para kavanozu + takvim + küçük robot ----
  const jar = g({ transform: 'rotate(-3 330 830)' });
  add(rc.path('M220 680 L220 640 L440 640 L440 680 Q480 720 480 800 L480 960 Q480 1010 430 1010 L230 1010 Q180 1010 180 960 L180 800 Q180 720 220 680 Z', S({ ...I, fill: 'rgba(255,255,255,0.7)', fillStyle: 'solid', strokeWidth: 3.4 })), jar);
  add(rc.rectangle(205, 620, 250, 34, S({ ...I, fill: C.peach, fillStyle: 'solid' })), jar);
  [[260, 960], [340, 970], [410, 955], [300, 915], [380, 910], [335, 865]].forEach(([x, y]) => {
    add(rc.circle(x, y, 62, S({ stroke: C.gold, fill: 'rgba(201,151,59,0.35)', fillStyle: 'solid', strokeWidth: 3, roughness: 0.8 })), jar);
    text('$', x, y + 12, { size: 38, weight: 700, color: C.gold, anchor: 'middle', parent: jar });
  });
  text('her ay yenilenir', 330, 1070, { size: 40, weight: 700, color: C.plum, anchor: 'middle', rot: -3 });

  // robot (uygulama / ajan)
  const rb = g({ transform: 'rotate(3 700 820)' });
  add(rc.rectangle(590, 700, 220, 170, S({ ...I, fill: C.mint, fillStyle: 'solid' })), rb);
  add(rc.circle(650, 770, 36, S({ ...I, fill: '#FFFFFF', fillStyle: 'solid', strokeWidth: 2.4 })), rb);
  add(rc.circle(750, 770, 36, S({ ...I, fill: '#FFFFFF', fillStyle: 'solid', strokeWidth: 2.4 })), rb);
  add(rc.line(655, 835, 745, 835, S({ ...I, strokeWidth: 3 })), rb);
  add(rc.line(700, 700, 700, 665, S({ ...I, strokeWidth: 3 })), rb);
  add(rc.circle(700, 655, 20, S({ ...I, fill: C.pink, fillStyle: 'solid', strokeWidth: 2.4 })), rb);
  add(rc.rectangle(620, 880, 160, 110, S({ ...I, fill: C.peach, fillStyle: 'solid' })), rb);
  add(rc.line(620, 910, 575, 960, S({ ...I, strokeWidth: 4 })), rb);
  add(rc.line(780, 910, 825, 960, S({ ...I, strokeWidth: 4 })), rb);
  text('ajanınız', 700, 1070, { size: 40, weight: 700, color: C.plum, anchor: 'middle', rot: 2 });
  // kavanozdan robota ok
  add(rc.path('M495 800 Q540 760 580 790', S({ ...I, stroke: C.gold, strokeWidth: 3.4 })));
  add(rc.linearPath([[562, 770], [582, 792], [556, 802]], S({ stroke: C.gold, strokeWidth: 3.4, roughness: 0.5 })));

  star(900, 700, 1.3); star(940, 760, 0.7);
  sprig(1010, 1100, 1.1, 8); sprig(170, 1150, 0.7, -14);

  tape(146, 1118, 820, 120, C.pink, -0.6);
  text('Aboneliğinizde böyle bir', 556, 1168, { size: 52, weight: 700, color: C.plum, anchor: 'middle' });
  text('kredi sizi bekliyor olabilir mi?', 556, 1222, { size: 52, weight: 700, color: C.plum, anchor: 'middle' });
  text('kaydır', 940, 1310, { size: 48, weight: 700, color: C.gold, anchor: 'end' });
  add(rc.path('M954 1296 L1010 1296 M992 1280 L1012 1296 L992 1312', S({ ...I, stroke: C.gold, strokeWidth: 3.4, roughness: 0.6 })));
  done();
}
build();
