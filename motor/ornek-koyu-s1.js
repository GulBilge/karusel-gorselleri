async function build() {
  await fontsReady(); paper('purple'); footer('1 / 2');
  profil(150, 124, 112);
  chip('CLAUDE İPUCU · 11 EKİM 2026', 150, 292, C.gold);

  serif('Aynı dersi', 150, 410, { size: 84, color: C.ivory });
  serif('3 seviyeye', 150, 496, { size: 84, color: C.goldHi });
  serif('uyarlayın', 150, 582, { size: 84, color: C.ivory, italic: true, weight: 600 });

  sahneKapak(170, 620, 780, 490);

  card(150, 1136, 820, 112, C.pink);
  serif('Notlarınızı tekrar tekrar', 190, 1190, { size: 38, weight: 600, italic: true, color: C.ivory });
  serif('baştan mı yazıyorsunuz?', 190, 1236, { size: 38, weight: 600, italic: true, color: C.goldHi });
  text('kaydır →', 950, 1318, { size: 52, font: 'Caveat', weight: 700, color: C.gold, anchor: 'end' }).dataset.free = 1;
  done();
}
build();
