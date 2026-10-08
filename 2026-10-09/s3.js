async function build() {
  await fontsReady(); paper(); footer('3 / 3');
  text('Krediyi nasıl alırsınız?', 150, 150, { size: 76, weight: 700, color: C.plum, rot: -1 });
  marker(150, 166, 560, C.mint, 18);
  text('4 adımda', 970, 214, { size: 40, color: C.gold, anchor: 'end', rot: -2 });

  function box(x, y, w, h, fill, lines, o = {}) {
    add(rc.rectangle(x, y, w, h, S({ ...I, fill, fillStyle: 'solid', strokeWidth: 3, roughness: 1.1 })));
    const lh = 46, top = y + h / 2 - (lines.length - 1) * lh / 2 + 13;
    lines.forEach((L, i) => text(L, x + 120, top + i * lh, { size: 40, weight: 700, color: C.plum, max: w - 150 }));
  }
  function num(n, x, y) {
    add(rc.circle(x, y, 64, S({ ...I, stroke: C.gold, fill: '#FBF6EA', fillStyle: 'solid', strokeWidth: 3 })));
    text(n, x, y + 15, { size: 46, weight: 700, color: C.gold, anchor: 'middle' });
  }
  function arrowD(x, y1, y2) {
    add(rc.line(x, y1, x, y2, S({ ...I, strokeWidth: 3 })));
    add(rc.linearPath([[x - 12, y2 - 16], [x, y2], [x + 12, y2 - 16]], S({ ...I, strokeWidth: 3 })));
  }
  const steps = [
    [['Max veya Team planınız', 'en az 7 gündür aktif olsun.'], '#FFFFFF'],
    [['claude.ai’yi tarayıcıdan açın:', 'Ayarlar > Faturalandırma.'], '#FFFFFF'],
    [['Bir Claude Console hesabı bağlayın', '(Team için sahip/yönetici girer).'], '#FFFFFF'],
    [['Kredi her ay otomatik tanımlanır;', 'API’de ilk bu kredi kullanılır.'], C.peach]
  ];
  let y = 262;
  steps.forEach(([lines, fill], i) => {
    box(150, y, 820, 150, fill, lines);
    num(String(i + 1), 208, y + 75);
    if (i < 3) arrowD(560, y + 150, y + 192);
    y += 192;
  });
  // y = 1030
  text('Kapsam: API, Playground, Agent SDK.', 150, 1080, { size: 34, color: C.ink, max: 820 });
  text('Claude Code’un kendi kullanımı kapsam dışı.', 150, 1120, { size: 34, color: C.ink, max: 820 });
  text('Kaynak: support.claude.com · Ücretli plan fiyatları ayrıdır.', 150, 1160, { size: 30, color: C.soft, max: 820 });

  tape(146, 1190, 800, 64, C.pink, -0.8);
  add(rc.path('M180 1200 h34 v46 l-17 -12 l-17 12 z', S({ ...I, fill: C.plum, fillStyle: 'solid', strokeWidth: 2 })));
  text('Kaydedin, meslektaşınıza gönderin.', 236, 1238, { size: 50, weight: 700, color: C.plum, max: 690 });
  sprig(1030, 1330, 0.75, 6);
  done();
}
build();
