async function build() {
  await fontsReady(); paper(); footer('2 / 3');
  text('Resmi duyuru: 7 Ekim 2026', 150, 140, { size: 56, weight: 700, color: C.gold, rot: -1.5 });

  const sections = [
    { h: 'Ne değişti?', c: C.peach, icon: 'spark', items: [
      ['Max ve Team abonelerine her ay API', 'kredisi tanımlanıyor.'],
      ['Max 5x: 100 $, Max 20x: 200 $ / ay.'],
      ['Team: Standart koltuk 20 $, Premium 100 $.', 'Toplam tek havuzda, en çok 500 $.'] ] },
    { h: 'Kimler yararlanabilir?', c: C.mint, icon: 'cap', items: [
      ['Yalnızca Max ve Team planları.', 'Free, Pro ve Enterprise dışında.'],
      ['Planınızda en az 7 gün olmanız gerekiyor.'],
      ['Talep için bir Claude Console hesabı bağlayın:', 'Ayarlar > Faturalandırma'] ] },
    { h: 'Dikkat!', c: C.pink, icon: 'warn', items: [
      ['Krediler devretmez; dönem sonunda silinir.'],
      ['Claude Code’un kendi kullanımını kapsamaz.'] ] }
  ];
  let y = 236;
  sections.forEach((s, si) => {
    const hw = Math.min(820, s.h.length * 25 + 60);
    tape(146, y - 44, hw, 60, s.c, si % 2 ? 0.8 : -0.8);
    text(s.h, 166, y, { size: 52, weight: 700, color: C.plum });
    const ix = 146 + hw + 50, iy = y - 18;
    if (s.icon === 'spark') { star(ix, iy, 1.3); star(ix + 34, iy - 22, 0.6); }
    if (s.icon === 'cap') {
      add(rc.polygon([[ix - 40, iy], [ix, iy - 20], [ix + 40, iy], [ix, iy + 20]], S({ ...I, fill: C.plum, fillStyle: 'solid', strokeWidth: 2 })));
      add(rc.path(`M${ix - 22} ${iy + 10} L${ix - 22} ${iy + 30} Q${ix} ${iy + 44} ${ix + 22} ${iy + 30} L${ix + 22} ${iy + 10}`, S({ ...I, strokeWidth: 2.4 })));
    }
    if (s.icon === 'warn') {
      add(rc.polygon([[ix, iy - 30], [ix + 34, iy + 28], [ix - 34, iy + 28]], S({ ...I, stroke: C.red, fill: 'rgba(212,90,85,0.15)', fillStyle: 'solid' })));
      text('!', ix, iy + 22, { size: 44, weight: 700, color: C.red, anchor: 'middle' });
    }
    y += 64;
    s.items.forEach(lines => {
      add(rc.circle(176, y - 14, 14, S({ ...I, fill: C.plum, fillStyle: 'solid', strokeWidth: 1.5 })));
      lines.forEach((L, li) => text(L, 200, y + li * 46, { size: 40, color: C.ink, max: 800 }));
      y += lines.length * 46 + 10;
    });
    y += 26;
  });
  sprig(1030, 1200, 0.7, 10);
  marker(260, 1262, 830, C.peach, 34);
  text('Detaylar ve kaynaklar açıklamada', 545, 1272, { size: 48, weight: 700, color: C.plum, anchor: 'middle' });
  done();
}
build();
