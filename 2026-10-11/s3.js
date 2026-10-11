async function build() {
  await fontsReady(); paper(); footer('3 / 3');
  text('4 adımda hazır', 150, 210, { size: TS.title, weight: 700, color: C.plum, rot: -1 });
  marker(150, 228, 560, C.mint, 18);

  const LH = Math.round(TS.body * TS.lh);
  function box(n, str, y, color) {
    const x = 150, w = 820, pad = 30, tw = w - 2 * pad - 70;
    const end = body(str, x + pad + 70, y + pad + 40, { dry: true, width: tw, weight: 700 });
    const h = end - LH - y + 18 + pad;
    add(rc.rectangle(x, y, w, h, S({ ...I, fill: color, fillStyle: 'solid', strokeWidth: 3, roughness: 1.1 })));
    body(str, x + pad + 70, y + pad + 40, { width: tw, weight: 700, color: C.plum });
    add(rc.circle(x + 56, y + h / 2, 56, S({ ...I, stroke: C.gold, fill: '#FBF6EA', fillStyle: 'solid', strokeWidth: 3 })));
    text(n, x + 56, y + h / 2 + 15, { size: 46, weight: 700, color: C.gold, anchor: 'middle' });
    return y + h;
  }
  function down(y1, y2) {
    add(rc.line(560, y1, 560, y2, S({ ...I, strokeWidth: 3 })));
    add(rc.linearPath([[548, y2 - 16], [560, y2], [572, y2 - 16]], S({ ...I, strokeWidth: 3 })));
  }
  const L = [
    ['1', 'Ders notunu yapıştır', C.peach],
    ['2', 'Kitleyi ve süreyi yaz', C.mint],
    ['3', 'Üç sürüm iste', C.pink],
    ['4', 'Kendi sesinle düzelt', C.peach]
  ];
  let y = 290;
  L.forEach(([n, s, c], i) => { y = box(n, s, y, c); if (i < 3) { down(y, y + 80); y += 80; } });

  text('Not: Yayımlamadan önce çıktıyı mutlaka kontrol edin.', 150, y + 62, { size: TS.note, color: C.soft });

  tape(146, 1214, 824, 76, C.pink, -0.8);
  add(rc.path('M176 1226 h36 v50 l-18 -13 l-18 13 z', S({ ...I, fill: C.plum, fillStyle: 'solid', strokeWidth: 2 })));
  text('Kaydedin, meslektaşınıza gönderin.', 232, 1270, { size: 60, weight: 700, color: C.plum });
  done();
}
build();
