async function build() {
  await fontsReady(); paper(); footer('4 / 4');
  text('Kapsama giriyor mu?', 150, 210, { size: TS.title, weight: 700, color: C.plum, rot: -1 });
  marker(150, 228, 560, C.mint, 18);

  const LH = Math.round(TS.body * TS.lh);
  // Soru kutusu: metni kaydırır, yüksekliği metne göre ayarlar; sağda "Hayır → Kapsam dışı"
  function qbox(n, str, y) {
    const x = 150, w = 570, pad = 30, tw = w - 2 * pad - 10;
    const end = body(str, x + pad + 10, y + pad + 34, { dry: true, width: tw, weight: 700 });
    const h = end - LH - y + 12 + pad;
    add(rc.rectangle(x, y, w, h, S({ ...I, fill: '#FFFFFF', fillStyle: 'solid', strokeWidth: 3, roughness: 1.1 })));
    body(str, x + pad + 10, y + pad + 34, { width: tw, weight: 700, color: C.plum });
    add(rc.circle(x + 2, y + 2, 50, S({ ...I, stroke: C.gold, fill: '#FBF6EA', fillStyle: 'solid', strokeWidth: 3 })));
    text(n, x + 2, y + 16, { size: 42, weight: 700, color: C.gold, anchor: 'middle' });
    const my = y + h / 2, ax = x + w;
    add(rc.line(ax, my + 10, 820, my + 10, S({ ...I, strokeWidth: 3 })));
    add(rc.linearPath([[804, my - 2], [820, my + 10], [804, my + 22]], S({ ...I, strokeWidth: 3 })));
    text('Hayır', (ax + 820) / 2, my - 8, { size: TS.label, font: 'Montserrat', weight: 700, color: C.soft, anchor: 'middle' });
    add(rc.rectangle(820, my - 50, 150, 120, S({ ...I, fill: C.mint, fillStyle: 'solid', strokeWidth: 3 })));
    text('Kapsam', 895, my + 2, { size: 44, weight: 700, color: C.plum, anchor: 'middle' });
    text('dışı ✓', 895, my + 46, { size: 44, weight: 700, color: C.plum, anchor: 'middle' });
    return y + h;
  }
  function down(y1, y2) {
    add(rc.line(435, y1, 435, y2, S({ ...I, strokeWidth: 3 })));
    add(rc.linearPath([[423, y2 - 16], [435, y2], [447, y2 - 16]], S({ ...I, strokeWidth: 3 })));
    text('Evet', 458, (y1 + y2) / 2 + 11, { size: TS.label, font: 'Montserrat', weight: 700, color: C.soft });
  }

  let y = qbox('1', 'Claude’un çıktısı bir kişi hakkında karar mı? (not, sıralama)', 300);
  down(y, y + 54); y += 54;
  y = qbox('2', 'Bu karar sertifika, mezuniyet, kabul ya da disiplini belirliyor mu?', y);
  down(y, y + 54); y += 54;

  // Sonuç
  const top = y;
  add(rc.rectangle(150, top, 820, 316, S({ ...I, fill: C.peach, fillStyle: 'solid', strokeWidth: 3.4 })));
  text('Yüksek riskli kullanım', 180, top + 70, { size: TS.sub, weight: 700, color: C.plum });
  add(rc.circle(206, top + 120, 40, S({ ...I, fill: '#FFFFFF', fillStyle: 'solid' })));
  add(rc.line(219, top + 133, 236, top + 150, S({ ...I, strokeWidth: 6 })));
  const yy = body('Bir insan sonucu kontrol etsin, gerekirse değiştirsin.', 250, top + 134, { width: 690, weight: 700, color: C.plum });
  add(rc.path(`M184 ${yy - 22} h44 q8 0 8 8 v24 q0 8 -8 8 h-24 l-12 12 v-12 h-8 q-8 0 -8 -8 v-24 q0 -8 8 -8 z`, S({ ...I, fill: '#FFFFFF', fillStyle: 'solid' })));
  body('Kişiye yapay zeka kullanıldığını açıkça söyleyin.', 250, yy + 12, { width: 690, weight: 700, color: C.plum });

  text('Kaynak: anthropic.com/legal/aup · Hukuki tavsiye değildir.', 150, top + 362, { size: TS.label, font: 'Montserrat', weight: 500, color: C.soft, max: 820 });

  // kapanış: kaydet
  tape(146, 1196, 824, 76, C.pink, -0.8);
  add(rc.path('M176 1208 h36 v50 l-18 -13 l-18 13 z', S({ ...I, fill: C.plum, fillStyle: 'solid', strokeWidth: 2 })));
  text('Kaydedin, meslektaşınıza gönderin.', 232, 1252, { size: 56, weight: 700, color: C.plum, max: 730 });
  done();
}
build();
