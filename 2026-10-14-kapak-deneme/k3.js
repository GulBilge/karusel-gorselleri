TOHUM = 20261011;
async function build() {
  await fontsReady(); paper('purple'); footer('1 / 8');
  sanatSahne(112, 108, 856, 1146, { cerceve: 'ikiz', duzen: 'gece', palet: 'zumrut' }, () => {
    kaleydoskop(svg, 540, 470, 380, 0.35);
    zeidEl(520, 820, 1.2, -6, { palet: 'yakut' });
    nesne('telefon', 510, 440, 0.85, { palet: 'zumrut' });
    nesne('dalga', 600, 420, 1.0);
    nesne('ajan', 510, 440, 0.45, { renk: C.goldHi });
  });
  perde(700, 1250);
  rozetZemin(); profil(150, 124, 112);
  chip('SESLİ ASİSTAN', 150, 905, C.gold);
  serif('Aramanızı yapay zeka', 150, 1010, { size: 72, color: C.ivory });
  serif('açarsa müşteri', 150, 1094, { size: 72, color: C.goldHi });
  serif('fark eder mi?', 150, 1178, { size: 72, color: C.ivory, italic: true, weight: 600 });
  text('kaydır →', 950, 1318, { size: 52, font: 'Caveat', weight: 700, color: C.gold, anchor: 'end' }).dataset.free = 1;
  done();
}
build();
