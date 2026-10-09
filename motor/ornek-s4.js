async function build() {
  await fontsReady(); paper(); footer('4 / 4');
  text('Kapsama giriyor mu?', 150, 210, { size: TS.title, weight: 700, color: C.plum, rot: -1 });
  marker(150, 228, 560, C.mint, 18);

  const LH = Math.round(TS.body * TS.lh);
  // Soru kutusu: metni kaydırır, yüksekliği metne göre ayarlar; sağda "Hayır → Kapsam dışı"
  function qbox(n, str, y) {
    const x = 150, w = 570, pad = 30, tw = w - 2 * pad - 10;
    const end = body(str, x + pad + 10, y + pad + 44, { dry: true, width: tw, weight: 700 });
    const h = end - LH - y + 18 + pad;
    add(rc.rectangle(x, y, w, h, S({ ...I, fill: '#FFFFFF', fillStyle: 'solid', strokeWidth: 3, roughness: 1.1 })));
    body(str, x + pad + 10, y + pad + 44, { width: tw, weight: 700, color: C.plum });
    add(rc.circle(x + 2, y + 2, 50, S({ ...I, stroke: C.gold, fill: '#FBF6EA', fillStyle: 'solid', strokeWidth: 3 })));
    text(n, x + 2, y + 16, { size: 42, weight: 700, color: C.gold, anchor: 'middle' });
    const my = y + h / 2, ax = x + w;
    add(rc.line(ax, my + 10, 820, my + 10, S({ ...I, strokeWidth: 3 })));
    add(rc.linearPath([[804, my - 2], [820, my + 10], [804, my + 22]], S({ ...I, strokeWidth: 3 })));
    text('Hayır', (ax + 820) / 2, my - 4, { size: 44, weight: 700, color: C.soft, anchor: 'middle' });
    add(rc.rectangle(820, my - 50, 150, 120, S({ ...I, fill: C.mint, fillStyle: 'solid', strokeWidth: 3 })));
    text('Kapsam', 895, my + 2, { size: 44, weight: 700, color: C.plum, anchor: 'middle' });
    text('dışı ✓', 895, my + 46, { size: 44, weight: 700, color: C.plum, anchor: 'middle' });
    return y + h;
  }
  function down(y1, y2) {
    add(rc.line(435, y1, 435, y2, S({ ...I, strokeWidth: 3 })));
    add(rc.linearPath([[423, y2 - 16], [435, y2], [447, y2 - 16]], S({ ...I, strokeWidth: 3 })));
    text('Evet', 458, (y1 + y2) / 2 + 14, { size: 44, weight: 700, color: C.soft });
  }

  let y = qbox('1', 'Çıktı bir kişi hakkında karar mı? (not, sıralama)', 290);
  down(y, y + 50); y += 50;
  y = qbox('2', 'Sertifika, mezuniyet, kabul ya da disiplini belirliyor mu?', y);
  down(y, y + 50); y += 50;

  // Sonuç: kutu yüksekliği metne göre
  const top = y, bx = 236, bw = 970 - bx - 24;
  const items = ['Bir insan kontrol edip değiştirebilsin.', 'Kişiye yapay zeka kullanıldığını açıkça söyleyin.'];
  let yy = top + 140;
  const ys = items.map(it => { const y0 = yy; yy = body(it, bx, yy, { dry: true, width: bw, weight: 700 }) + 6; return y0; });
  const bh = yy - LH - top + 40;
  add(rc.rectangle(150, top, 820, bh, S({ ...I, fill: C.peach, fillStyle: 'solid', strokeWidth: 3.4 })));
  text('Yüksek riskli kullanım', 180, top + 72, { size: TS.sub, weight: 700, color: C.plum });
  items.forEach((it, i) => body(it, bx, ys[i], { width: bw, weight: 700, color: C.plum }));
  // ikonlar: büyüteç ve konuşma balonu
  add(rc.circle(196, ys[0] - 16, 36, S({ ...I, fill: '#FFFFFF', fillStyle: 'solid' })));
  add(rc.line(208, ys[0] - 4, 224, ys[0] + 12, S({ ...I, strokeWidth: 6 })));
  add(rc.path(`M176 ${ys[1] - 40} h40 q8 0 8 8 v22 q0 8 -8 8 h-22 l-12 12 v-12 h-6 q-8 0 -8 -8 v-22 q0 -8 8 -8 z`, S({ ...I, fill: '#FFFFFF', fillStyle: 'solid' })));

  text('Kaynak: anthropic.com/legal/aup · Hukuki tavsiye değildir.', 150, top + bh + 50, { size: TS.note, color: C.soft });

  // kapanış: kaydet
  tape(146, 1214, 824, 76, C.pink, -0.8);
  add(rc.path('M176 1226 h36 v50 l-18 -13 l-18 13 z', S({ ...I, fill: C.plum, fillStyle: 'solid', strokeWidth: 2 })));
  text('Kaydedin, meslektaşınıza gönderin.', 232, 1270, { size: 60, weight: 700, color: C.plum });
  done();
}
build();
