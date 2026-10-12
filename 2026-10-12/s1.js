async function build() {
  await fontsReady(); paper('pink'); footer('1 / 2');
  profil(150, 124, 112);
  chip('CLAUDE İPUCU · 12 EKİM 2026', 150, 292, C.gold);

  serif('Toplantı notunu', 150, 410, { size: 84, color: C.ivory });
  serif('e-postaya ve', 150, 496, { size: 84, color: C.goldHi });
  serif('görev listesine', 150, 582, { size: 84, color: C.ivory, italic: true, weight: 600 });

  sahneKapak(170, 620, 780, 490, { tip: 'sacli' });

  card(150, 1136, 820, 112, C.pink);
  serif('Toplantıdan sonra özet ve', 190, 1190, { size: 38, weight: 600, italic: true, color: C.ivory });
  serif('görevleri elle mi çıkarıyorsunuz?', 190, 1236, { size: 38, weight: 600, italic: true, color: C.goldHi });
  text('kaydır →', 950, 1318, { size: 52, font: 'Caveat', weight: 700, color: C.gold, anchor: 'end' }).dataset.free = 1;
  done();
}
build();
