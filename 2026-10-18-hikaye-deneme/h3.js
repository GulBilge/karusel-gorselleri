async function build() {
  await fontsReady(); sayfa('SENİN İŞİNE YARAR MI?', '3 / 3');
  let y = baslik('Yazılımcı değil, yine de kendisi ayarlamış.', 480);
  y = para('Ama kolay olmamış. Yazılanlar istediği gibi olana kadar yüzlerce kez düzeltmiş, bazı adımlar teknik bilgi istemiş. Sistem hâlâ deneme sürümünde.', 90, y + 50, { size: 40, color: C.muted, lh: 1.45 });
  el('rect', { x: 90, y: y + 80, width: 900, height: 300, rx: 28, fill: C.card, stroke: C.gold, 'stroke-width': 2 });
  para('Sen hangi işini yapay zekaya bırakmak isterdin? Yaz bana.', 140, y + 190, { font: 'Playfair Display', weight: 700, italic: true, size: 56, color: C.goldHi, width: 800, lh: 1.25 });
  done();
}
build();
