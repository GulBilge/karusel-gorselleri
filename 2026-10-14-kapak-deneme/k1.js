TOHUM = 20261014;
async function build() {
  await fontsReady(); paper('purple'); footer('1 / 8');
  sanatSahne(112, 108, 856, 1146, { cerceve: 'tam', duzen: 'halkalar', palet: 'lapis', merkez: [540, 520] }, () => {
    zeidGoz(540, 540, 700, { iris: 'zumrut', bakis: [0, 0.1], kasKalk: 0.06,
      yansima: (x, y, r, gp) => { const t = g({ transform: `translate(${x} ${y}) scale(${r / 170})` }, gp); const n0 = svg.childNodes.length; nesne('ajan', 0, 10, 0.75, { renk: C.goldHi }); [...svg.childNodes].slice(n0).forEach(n => t.appendChild(n)); } });
  });
  perde(700, 1250);
  rozetZemin(); profil(150, 124, 112);
  chip('UBER · GÜVENLİK', 150, 905, C.gold);
  serif('Uber\'in güvenlik şefi:', 150, 1010, { size: 72, color: C.ivory });
  serif('yapay zekayı da', 150, 1094, { size: 72, color: C.goldHi });
  serif('çalışan gibi izleyin.', 150, 1178, { size: 72, color: C.ivory, italic: true, weight: 600 });
  text('kaydır →', 950, 1318, { size: 52, font: 'Caveat', weight: 700, color: C.gold, anchor: 'end' }).dataset.free = 1;
  done();
}
build();
