async function build() {
  await fontsReady(); paper(); footer('3 / 3');
  text('Kapsama giriyor mu?', 150, 150, { size: 76, weight: 700, color: C.plum, rot: -1 });
  marker(150, 166, 520, C.mint, 18);
  text('2 soruda kontrol edin', 1040, 214, { size: 40, color: C.gold, anchor: 'end', rot: -2 });

  function box(x, y, w, h, fill, lines, o = {}) {
    add(rc.rectangle(x, y, w, h, S({ ...I, fill, fillStyle: 'solid', strokeWidth: 3, roughness: 1.1 })));
    const lh = o.lh || 46, top = y + h / 2 - (lines.length - 1) * lh / 2 + (o.size || 42) * 0.32;
    lines.forEach((L, i) => text(L, o.anchor === 'start' ? x + 30 : x + w / 2, top + i * lh, { size: o.size || 42, weight: o.weight || 700, color: C.plum, anchor: o.anchor || 'middle', max: w - 40 }));
  }
  function arrowR(x1, y, x2, label) {
    add(rc.line(x1, y, x2, y, S({ ...I, strokeWidth: 3 })));
    add(rc.linearPath([[x2 - 16, y - 12], [x2, y], [x2 - 16, y + 12]], S({ ...I, strokeWidth: 3 })));
    text(label, (x1 + x2) / 2, y - 14, { size: 32, weight: 700, color: C.soft, anchor: 'middle' });
  }
  function arrowD(x, y1, y2, label) {
    add(rc.line(x, y1, x, y2, S({ ...I, strokeWidth: 3 })));
    add(rc.linearPath([[x - 12, y2 - 16], [x, y2], [x + 12, y2 - 16]], S({ ...I, strokeWidth: 3 })));
    text(label, x + 22, (y1 + y2) / 2 + 12, { size: 34, weight: 700, color: C.soft });
  }
  function okBox(x, y, w, h) {
    add(rc.rectangle(x, y, w, h, S({ ...I, fill: C.mint, fillStyle: 'solid', strokeWidth: 3 })));
    text('Kapsam', x + 26, y + h / 2 - 6, { size: 42, weight: 700, color: C.plum });
    text('dışı', x + 26, y + h / 2 + 36, { size: 42, weight: 700, color: C.plum });
    add(rc.linearPath([[x + w - 70, y + h / 2], [x + w - 52, y + h / 2 + 20], [x + w - 22, y + h / 2 - 22]], S({ stroke: C.plum, strokeWidth: 5, roughness: 0.5 })));
  }
  function num(n, x, y) {
    add(rc.circle(x, y, 50, S({ ...I, stroke: C.gold, fill: '#FBF6EA', fillStyle: 'solid', strokeWidth: 3 })));
    text(n, x, y + 13, { size: 40, weight: 700, color: C.gold, anchor: 'middle' });
  }

  // Soru 1
  box(150, 248, 590, 130, '#FFFFFF', ['Claude’un çıktısı bir kişi', 'hakkında karar mı? (not, sıralama)'], { size: 40 });
  num('1', 152, 250);
  arrowR(740, 313, 845, 'Hayır');
  okBox(845, 263, 195, 100);

  arrowD(445, 378, 466, 'Evet');

  // Soru 2
  box(150, 466, 590, 170, '#FFFFFF', ['Bu karar sertifika, mezuniyet,', 'kabul ya da disiplini', 'belirliyor mu?'], { size: 40 });
  num('2', 152, 468);
  arrowR(740, 551, 845, 'Hayır');
  okBox(845, 501, 195, 100);

  arrowD(445, 636, 726, 'Evet');

  // Sonuç
  add(rc.rectangle(150, 726, 890, 330, S({ ...I, fill: C.peach, fillStyle: 'solid', strokeWidth: 3.4 })));
  text('Yüksek riskli kullanım', 180, 790, { size: 58, weight: 700, color: C.plum });
  text('Yapmanız gerekenler:', 180, 840, { size: 40, color: C.ink });
  // adım 1: göz/büyüteç
  add(rc.circle(222, 908, 56, S({ ...I, fill: '#FFFFFF', fillStyle: 'solid' })));
  add(rc.line(240, 926, 262, 948, S({ ...I, strokeWidth: 7 })));
  text('Bir insan sonucu kontrol etsin,', 280, 906, { size: 44, color: C.plum, weight: 700, max: 730 });
  text('gerekirse değiştirsin.', 280, 952, { size: 44, color: C.plum, weight: 700 });
  // adım 2: konuşma balonu
  add(rc.path('M196 978 h56 q10 0 10 10 v28 q0 10 -10 10 h-30 l-14 14 v-14 h-12 q-10 0 -10 -10 v-28 q0 -10 10 -10 z', S({ ...I, fill: '#FFFFFF', fillStyle: 'solid' })));
  text('AI', 224, 1012, { size: 22, font: 'Montserrat', weight: 700, color: C.plum, anchor: 'middle' });
  text('Kişiye yapay zeka kullanıldığını', 280, 1006, { size: 44, color: C.plum, weight: 700, max: 730 });
  text('açıkça söyleyin.', 280, 1046, { size: 44, color: C.plum, weight: 700 });

  text('Not: Çoktan seçmeli testlerin notlandırılması bu kuralın dışında.', 150, 1112, { size: 36, color: C.ink, max: 890 });
  text('Kaynak: anthropic.com/legal/aup · Bu bir hukuki tavsiye değildir.', 150, 1156, { size: 32, color: C.soft, max: 890 });

  // kapanış: kaydet
  tape(146, 1196, 800, 64, C.pink, -0.8);
  add(rc.path('M180 1206 h34 v46 l-17 -12 l-17 12 z', S({ ...I, fill: C.plum, fillStyle: 'solid', strokeWidth: 2 })));
  text('Kaydedin, meslektaşınıza gönderin.', 236, 1244, { size: 50, weight: 700, color: C.plum, max: 690 });
  sprig(1030, 1330, 0.75, 6);
  done();
}
build();
