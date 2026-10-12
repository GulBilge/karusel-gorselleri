async function build() {
  await fontsReady(); paper('purple'); footer('1 / 2');
  profil(150, 124, 112);
  chip('SESLİ ASİSTAN · 11 EKİM 2026', 150, 292, C.gold);

  serif('Aramaları yapay zeka', 150, 410, { size: 80, color: C.ivory });
  serif('karşılasa müşteri', 150, 494, { size: 80, color: C.goldHi });
  serif('fark eder mi?', 150, 578, { size: 80, color: C.ivory, italic: true, weight: 600 });

  sahneTek(170, 620, 780, 490, { figur: 'kadin', tip: 'basortulu', zemin: 'lacivert', halo: 'kaleydoskop', olcek: 1.7, dy: 90,
    ek: (cx, cy) => {
      const hy = cy - 35;
      P(svg, `M${cx - 135} ${hy} A135 135 0 0 1 ${cx + 135} ${hy}`, 'none', { stroke: C.goldHi, 'stroke-width': 14, 'stroke-linecap': 'round' });
      [-1, 1].forEach(k => el('rect', { x: cx + k * 135 - 20, y: hy - 10, width: 40, height: 84, rx: 18, fill: C.pink, stroke: '#1B0F24', 'stroke-width': 3 }));
      P(svg, `M${cx - 135} ${hy + 70} Q${cx - 130} ${hy + 140} ${cx - 40} ${hy + 120}`, 'none', { stroke: C.goldHi, 'stroke-width': 6, 'stroke-linecap': 'round' });
      C2(svg, cx - 34, hy + 120, 12, C.goldHi);
      [0, 1, 2].forEach(i => { const r = 40 + i * 34; P(svg, `M${cx + 190 + i * 6} ${hy + 20 - r} A${r} ${r} 0 0 1 ${cx + 190 + i * 6} ${hy + 20 + r}`, 'none', { stroke: i % 2 ? C.pink : C.goldHi, 'stroke-width': 6, 'stroke-linecap': 'round', opacity: 1 - i * 0.2 }); });
    } });

  card(150, 1136, 820, 112, C.pink);
  serif('Sektör yöneticileri anlatıyor:', 190, 1190, { size: 38, weight: 600, italic: true, color: C.ivory });
  serif('sesli asistanın 3 zayıf noktası var', 190, 1236, { size: 38, weight: 600, italic: true, color: C.goldHi });
  text('kaydır →', 950, 1318, { size: 52, font: 'Caveat', weight: 700, color: C.gold, anchor: 'end' }).dataset.free = 1;
  done();
}
build();
