async function build() {
  await fontsReady(); paper('purple'); footer('3 / 3');
  serif('4 adımda hazır', 150, 220, { size: 84 });
  divider(150, 520, 262);
  const steps = [['Ders notunu yapıştır', C.emerald], ['Kitleyi ve süreyi yaz', C.gold], ['Üç sürüm iste', C.pink], ['Kendi sesinle düzelt', C.purple]];
  let y = 310;
  steps.forEach(([s, c], i) => {
    card(150, y, 820, 130, c);
    el('circle', { cx: 236, cy: y + 65, r: 38, fill: 'none', stroke: c, 'stroke-width': 3 });
    serif(String(i + 1), 236, y + 84, { size: 48, color: c, anchor: 'middle' });
    serif(s, 304, y + 82, { size: 44, weight: 600, color: C.ivory });
    if (i < 3) { el('path', { d: `M550 ${y + 142} l12 14 l12 -14`, fill: 'none', stroke: C.gold, 'stroke-width': 3 }); }
    y += 170;
  });
  body('Not: Yayımlamadan önce çıktıyı mutlaka kontrol edin.', 150, y + 20, { size: TS.note, color: C.muted });
  card(150, 1150, 820, 100, C.emerald);
  el('path', { d: 'M190 1172 h30 v54 l-15 -12 l-15 12 z', fill: C.gold });
  serif('Kaydedin, meslektaşınıza gönderin.', 244, 1214, { size: 38, weight: 600, italic: true, color: C.goldHi });
  done();
}
build();
