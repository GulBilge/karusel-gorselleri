async function build() {
  await fontsReady(); paper('purple'); footer('1 / 2');
  profil(150, 124, 112);
  chip('KAÇIRDIYSANIZ · 6 EKİM 2026', 150, 292, C.gold);

  serif('Claude artık', 150, 410, { size: 84, color: C.ivory });
  serif('Docs, Sheets ve', 150, 496, { size: 84, color: C.goldHi });
  serif('Slides içinde', 150, 582, { size: 84, color: C.ivory, italic: true, weight: 600 });

  sahneKapak(170, 620, 780, 490, { tip: 'basortulu' });

  card(150, 1136, 820, 112, C.pink);
  serif('Google dosyalarınızda', 190, 1190, { size: 38, weight: 600, italic: true, color: C.ivory });
  serif('yardımcı olsa?', 190, 1236, { size: 38, weight: 600, italic: true, color: C.goldHi });
  text('kaydır →', 950, 1318, { size: 52, font: 'Caveat', weight: 700, color: C.gold, anchor: 'end' }).dataset.free = 1;
  done();
}
build();
