// Şema sayfası (2 / 2): haberi/ipucunu adım adım gösteren diyagram + dikkat notu + kaydet çağrısı. Detaylar caption'da.
async function build() {
  await fontsReady(); paper('pink'); footer('2 / 2');
  serif('Kurmadan önce bakın', 150, 215, { size: 84 });
  divider(150, 520, 255);
  const steps = [['Cevap geç mi geliyor?', C.emerald], ['İsim, rakam yanlış mı?', C.gold], ['Yapay zekâ olduğunu söylüyor mu?', C.pink], ['Önce kendiniz arayıp deneyin', C.purple]];
  let y = 300;
  steps.forEach(([s, c], i) => {
    card(150, y, 820, 118, c);
    el('circle', { cx: 236, cy: y + 59, r: 38, fill: 'none', stroke: c, 'stroke-width': 3 });
    serif(String(i + 1), 236, y + 78, { size: 48, color: c, anchor: 'middle' });
    serif(s, 304, y + 76, { size: 38, weight: 600, color: C.ivory });
    if (i < 3) el('path', { d: `M550 ${y + 128} l12 14 l12 -14`, fill: 'none', stroke: C.gold, 'stroke-width': 3 });
    y += 152;
  });
  // dikkat notu
  card(150, y + 4, 820, 120, C.pink);
  text('DİKKAT', 190, y + 52, { size: TS.label, weight: 700, color: C.pink, ls: 4 });
  text('Yönetici görüşlerine dayanır (TechCrunch).', 190, y + 100, { size: 31, color: C.ivory });
  // kaydet çağrısı
  card(150, y + 148, 820, 92, C.emerald);
  el('path', { d: `M190 ${y + 166} h28 v50 l-14 -11 l-14 11 z`, fill: C.gold });
  serif('Kaydedin, meslektaşınıza gönderin.', 244, y + 208, { size: 36, weight: 600, italic: true, color: C.goldHi });
  serif('Detaylar ve kaynaklar açıklamada', 560, y + 288, { size: 32, weight: 600, italic: true, color: C.muted, anchor: 'middle' });
  done();
}
build();
