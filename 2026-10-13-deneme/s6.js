const baslik = (k, t, col) => { chip(k, 150, 190, col); serif(t, 150, 285, { size: 64, color: C.ivory }); };
const balon = (x, y, w, col, n = 3, ok = 'sol') => {
  el('rect', { x, y, width: w, height: 90, rx: 34, fill: '#1B0F24', stroke: col, 'stroke-width': 5 });
  for (let k = 0; k < n; k++) C2(svg, x + 40 + k * 34, y + 45, 10, col);
  P(svg, ok === 'sol' ? `M${x + 36} ${y + 90} l-14 30 l42 -24` : `M${x + w - 36} ${y + 90} l14 30 l-42 -24`, '#1B0F24', { stroke: col, 'stroke-width': 5, 'stroke-linejoin': 'round' });
};
async function build() {
  await fontsReady(); paper('pink'); footer('6 / 6');
  baslik('BUGÜN YAPIN', 'Hafızaya hazırlanın', C.pink);
  card(150, 350, 820, 250, C.emerald);
  text('1', 200, 470, { size: 90, font: 'Playfair Display', weight: 700, color: C.emerald });
  text('Sürekli tekrar ettiğiniz', 300, 440, { size: 40, weight: 700, color: C.ivory });
  text('3 bilgiyi yazın.', 300, 495, { size: 40, weight: 700, color: C.goldHi });
  text('(işiniz, hedef kitleniz, üslubunuz)', 300, 550, { size: 30, color: C.muted });
  card(150, 625, 820, 250, C.gold);
  text('2', 200, 745, { size: 90, font: 'Playfair Display', weight: 700, color: C.gold });
  text('Gizlilik ayarını okuyun.', 300, 715, { size: 40, weight: 700, color: C.ivory });
  text('Müşteri bilgisi hafızaya', 300, 770, { size: 36, color: C.goldHi });
  text('girmesin.', 300, 815, { size: 36, color: C.goldHi });
  card(150, 900, 820, 120, C.purple);
  el('path', { d: 'M190 925 h28 v50 l-14 -11 l-14 11 z', fill: C.gold });
  serif('Kaydedin, meslektaşınıza gönderin.', 244, 975, { size: 36, weight: 600, italic: true, color: C.goldHi });
  text('Kaynak ve ayrıntılar açıklamada.', 540, 1100, { size: 30, italic: true, color: C.muted, anchor: 'middle' });
  done();
}
build();
