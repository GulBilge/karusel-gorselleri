const suslemeler = () => {
  kaleydoskop(svg, 1010, 130, 230, 0.22);
  dal(135, 1235, 170, 12, 1, C.emerald).setAttribute('opacity', 0.5);
  dal(945, 1235, 160, -14, -1, C.emerald).setAttribute('opacity', 0.5);
};
let MARK = 0;
const baslik = (k, t, col) => { profil(150, 112, 88); chip(k, 150, 250, col); serif(t, 150, 345, { size: 64, color: C.ivory }); MARK = svg.childNodes.length; };
const kaydir = () => { const G = g({ transform: 'translate(0,60)' }); [...svg.childNodes].slice(MARK, -1).forEach(n => G.appendChild(n)); };
const kilitI = (x, y, col, acik) => { P(svg, acik ? `M${x - 30} ${y - 20} V${y - 55} A30 30 0 0 1 ${x + 30} ${y - 55} V${y - 45}` : `M${x - 30} ${y - 20} V${y - 55} A30 30 0 0 1 ${x + 30} ${y - 55} V${y - 20}`, 'none', { stroke: col, 'stroke-width': 8, 'stroke-linecap': 'round', transform: acik ? `rotate(-20 ${x + 30} ${y - 20})` : '' }); el('rect', { x: x - 48, y: y - 22, width: 96, height: 80, rx: 14, fill: '#1B0F24', stroke: col, 'stroke-width': 6 }); C2(svg, x, y + 14, 9, col); };
async function build() {
  await fontsReady(); paper('pink'); footer('3 / 8'); suslemeler();
  baslik('NE DEĞİŞTİ?', 'Yıllarca çözülemedi', C.gold);
  card(150, 380, 820, 300, C.muted);
  kilitI(270, 540, C.muted, false);
  text('ESKİDEN', 400, 445, { size: 26, weight: 700, color: C.muted, ls: 3 });
  para('Uzmanlar bu sayıların nereden geldiğini yıllarca merak etti. 2023\'te bulana ödül bile koydular.', 400, 500, { size: 33, weight: 700, color: C.ivory, width: 530 });
  card(150, 720, 820, 350, C.emerald);
  kilitI(270, 890, C.emerald, true);
  text('ŞİMDİ', 400, 785, { size: 26, weight: 700, color: C.emerald, ls: 3 });
  para('Claude yarım saatte buldu. Meğer sayıları üretirken bilgisayarın saatini kullanmışlar. Bu kadar basitmiş.', 400, 840, { size: 33, weight: 700, color: C.ivory, width: 530 });
  kaydir();
  done();
}
build();
