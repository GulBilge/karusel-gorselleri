const suslemeler = () => {
  kaleydoskop(svg, 1010, 130, 230, 0.22);
  dal(135, 1235, 170, 12, 1, C.emerald).setAttribute('opacity', 0.5);
  dal(945, 1235, 160, -14, -1, C.emerald).setAttribute('opacity', 0.5);
};
let MARK = 0;
const baslik = (k, t, col) => { profil(150, 112, 88); chip(k, 150, 250, col); serif(t, 150, 345, { size: 64, color: C.ivory }); MARK = svg.childNodes.length; };
const kaydir = () => { const G = g({ transform: 'translate(0,0)' }); [...svg.childNodes].slice(MARK, -1).forEach(n => G.appendChild(n)); };
async function build() {
  await fontsReady(); paper('purple'); footer('4 / 8'); suslemeler();
  baslik('NASIL YAPTI?', 'Üç adımda anlatayım', C.pink);
  const adim = [['1', 'Talimat verildi', 'Claude\'a her liste günlük dille, kısaca anlatıldı.', C.gold], ['2', 'Denedi, kontrol edildi', 'Claude liste yazdı. Ayrı bir program listenin doğru olup olmadığına baktı.', C.emerald], ['3', 'En kısası seçildi', 'En uzun işte Claude 53 saat boyunca, araya kimse girmeden çalıştı.', C.pink]];
  adim.forEach(([n, b, t, col], i) => { const y = 440 + i * 215; card(150, y, 820, 190, col); C2(svg, 235, y + 95, 38, '#1B0F24', { stroke: col, 'stroke-width': 6 }); text(n, 235, y + 111, { size: 44, weight: 700, color: col, anchor: 'middle' }); text(b, 310, y + 62, { size: 34, weight: 700, color: col }); para(t, 310, y + 112, { size: 29, weight: 600, color: C.ivory, width: 620 }); });
  kaydir();
  done();
}
build();
