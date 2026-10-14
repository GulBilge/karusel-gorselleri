TOHUM = 20261013;
async function build() {
  await fontsReady(); paper('pink'); footer('1 / 8');
  sanatSahne(112, 108, 856, 1146, { cerceve: 'kemer', duzen: 'isinlar', palet: 'yakut', merkez: [540, 470] }, () => {
    zeidYuz(540, 520, 1.05, { bas: 'sac', palet: 'ametist', kapali: true, gulumse: true });
    nesne('balon', 270, 260, 0.38, { palet: 'safran' });
    nesne('zarf', 830, 330, 0.3, { palet: 'zumrut' });
    nesne('kitap', 250, 560, 0.3, { palet: 'lapis' });
  });
  perde(700, 1250);
  rozetZemin(); profil(150, 124, 112);
  chip('META · YENİ', 150, 905, C.pink);
  serif('Meta\'nın yapay zekası', 150, 1010, { size: 72, color: C.ivory });
  serif('artık sizi', 150, 1094, { size: 72, color: C.goldHi });
  serif('hatırlıyor.', 150, 1178, { size: 72, color: C.ivory, italic: true, weight: 600 });
  text('kaydır →', 950, 1318, { size: 52, font: 'Caveat', weight: 700, color: C.gold, anchor: 'end' }).dataset.free = 1;
  done();
}
build();
