async function build() {
  await fontsReady(); sayfa('SANA NE?', '3 / 3');
  let y = baslik('E-postalara cevap yazmak senin de saatini alıyorsa, bu iş yapay zekaya bırakılabiliyor.', 560, { size: 72 });
  y = para('Ama kurmak henüz kolay değil, biraz teknik bilgi istiyor.', 90, y + 50, { size: 42, color: C.muted, lh: 1.45 });
  el('rect', { x: 90, y: y + 70, width: 900, height: 230, rx: 28, fill: C.card, stroke: C.gold, 'stroke-width': 2 });
  para('Sen hangi işini yapay zekaya bırakırdın? Yaz bana.', 140, y + 165, { font: 'Playfair Display', weight: 700, italic: true, size: 54, color: C.goldHi, width: 800, lh: 1.25 });
  done();
}
build();
