async function build() {
  await fontsReady(); paper(); footer('3 / 3');
  text('Sunumunuz nasıl çıkar?', 150, 175, { size: 76, weight: 700, color: C.plum, rot: -1 });
  marker(150, 191, 640, C.mint, 18);

  function box(x, y, w, h, fill, lines, size = 42) {
    add(rc.rectangle(x, y, w, h, S({ ...I, fill, fillStyle: 'solid', strokeWidth: 3, roughness: 1.1 })));
    const lh = size + 8, top = y + h / 2 - (lines.length - 1) * lh / 2 + size / 3;
    lines.forEach((L, i) => text(L, x + w / 2, top + i * lh, { size, weight: 700, color: C.plum, anchor: 'middle', max: w - 30 }));
  }
  function arrowD(x, y1, y2) {
    add(rc.line(x, y1, x, y2, S({ ...I, strokeWidth: 3 })));
    add(rc.linearPath([[x - 12, y2 - 16], [x, y2], [x + 12, y2 - 16]], S({ ...I, strokeWidth: 3 })));
  }
  // 1-2-3 akış
  box(150, 250, 820, 110, '#FFFFFF', ['1  Sohbette isteyin: “10 slaytlık ders sunumu”']);
  arrowD(560, 360, 408);
  box(150, 408, 820, 110, '#FFFFFF', ['2  Claude hazırlar; metni, rakamı siz düzenleyin']);
  arrowD(560, 518, 566);
  box(150, 566, 820, 110, C.peach, ['3  PowerPoint, PDF ya da Google Slides’a aktarın']);

  // plan ayrımı
  text('Hangi planda ne var?', 150, 770, { size: TS.sub, weight: 700, color: C.plum, rot: -1 });
  box(150, 810, 390, 250, C.mint, ['Tüm planlar', '(Ücretsiz dahil)', 'Belge · Slayt', 'Tasarım'], 42);
  text('+', 560, 950, { size: 90, weight: 700, color: C.gold, anchor: 'middle' });
  box(580, 810, 390, 250, C.pink, ['Team ve', 'Enterprise', '/motion', '30 sn. animasyon'], 42);

  text('Kaynak: claude.com · Motion beta aşamasındadır.', 150, 1120, { size: 42, color: C.soft, max: 820 });

  tape(146, 1170, 800, 80, C.pink, -0.8);
  add(rc.path('M180 1182 h34 v52 l-17 -12 l-17 12 z', S({ ...I, fill: C.plum, fillStyle: 'solid', strokeWidth: 2 })));
  text('Kaydedin, meslektaşınıza gönderin.', 236, 1230, { size: 50, weight: 700, color: C.plum, max: 690 });
  done();
}
build();
