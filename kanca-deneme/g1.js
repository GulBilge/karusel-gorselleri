// 16 Ekim 2026 kapak — metafor: gece çalışan yapay zeka; mozaik hilal ay, ucunda küçük işaretli yapılacaklar listesi, sakin yıldızlı zemin.
TOHUM = 20261016;
async function build() {
  await fontsReady(); paper('purple'); footer('1 / 8');
  sanatSahne(112, 108, 856, 1146, { cerceve: 'tam', duzen: 'gece', palet: 'lapis', merkez: [540, 540] }, () => {
        const AY = 'M490 330 A230 230 0 1 1 489.9 330 Z';
    el('path', { d: AY, fill: OUT, stroke: OUT, 'stroke-width': 18 });
    mozaik(AY, { palet: 'lapis', boy: 34, noktalar: 0.15, isik: [400, 450] });
        el('circle', { cx: 610, cy: 510, r: 200, fill: '#0B0710' });
    // yapılacaklar listesi (ayın kucağında)
    el('rect', { x: 560, y: 470, width: 170, height: 200, rx: 14, fill: '#F4EFE4', stroke: OUT, 'stroke-width': 6, transform: 'rotate(6 645 570)' });
    [510, 565, 620].forEach((y, i) => { el('path', { d: `M585 ${y} l12 12 l22 -24`, fill: 'none', stroke: i < 2 ? '#0A5F49' : '#B9B1A2', 'stroke-width': 8, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', transform: 'rotate(6 645 570)' }); el('path', { d: `M635 ${y + 4} h70`, stroke: '#8F7228', 'stroke-width': 8, 'stroke-linecap': 'round', transform: 'rotate(6 645 570)' }); });
    [[760, 380], [800, 470], [720, 330]].forEach(([x, y], i) => star(x, y, 0.9 - i * 0.2, C.goldHi));
  });
  perde(720, 1250);
  rozetZemin(); profil(150, 124, 112);
  chip('GOOGLE GEMINI · YENİ SÜRÜM', 150, 905, C.gold);
  serif('Gece boyu yapay', 150, 1010, { size: 72, color: C.ivory });
  serif('zeka senin yerine', 150, 1094, { size: 72, color: C.goldHi });
  serif('çalışsaydı ne olurdu?', 150, 1178, { size: 68, color: C.ivory, italic: true, weight: 600 });
  text('kaydır →', 950, 1318, { size: 52, font: 'Caveat', weight: 700, color: C.gold, anchor: 'end' }).dataset.free = 1;
  done();
}
build();
