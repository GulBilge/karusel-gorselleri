async function build() {
  await fontsReady(); paper('purple'); footer('1 / 2');
  profil(150, 124, 112);
  chip('KAÇIRDIYSANIZ · 6 EKİM 2026', 150, 292, C.gold);

  serif('Claude artık', 150, 410, { size: 84, color: C.ivory });
  serif('Docs, Sheets ve', 150, 496, { size: 84, color: C.goldHi });
  serif('Slides içinde', 150, 582, { size: 84, color: C.ivory, italic: true, weight: 600 });

  sahneTek(170, 620, 780, 490, { figur: 'kadin', tip: 'sacli', zemin: 'zumrut', halo: 'gunes', olcek: 1.7, dy: 90,
    ek: (cx, cy, k) => {
      [['Docs', '#4C8DF6', k.x + 90, k.y + 150], ['Sheets', C.emerald, k.x + k.w - 250, k.y + 120], ['Slides', C.gold, k.x + k.w / 2 - 80, k.y + 40]].forEach(([n, c, px, py], i) => {
        const gg = g({ transform: `rotate(${[-8, 7, -5][i]} ${px + 80} ${py + 50})` });
        el('rect', { x: px, y: py, width: 160, height: 100, rx: 16, fill: '#131316', stroke: c, 'stroke-width': 4 }, gg);
        el('rect', { x: px, y: py, width: 160, height: 22, rx: 11, fill: c }, gg);
        text(n, px + 80, py + 72, { size: 30, weight: 700, color: C.ivory, anchor: 'middle', font: 'Montserrat' });
      });
    } });

  card(150, 1136, 820, 112, C.pink);
  serif('Google dosyalarınızda', 190, 1190, { size: 38, weight: 600, italic: true, color: C.ivory });
  serif('yardımcı olsa?', 190, 1236, { size: 38, weight: 600, italic: true, color: C.goldHi });
  text('kaydır →', 950, 1318, { size: 52, font: 'Caveat', weight: 700, color: C.gold, anchor: 'end' }).dataset.free = 1;
  done();
}
build();
