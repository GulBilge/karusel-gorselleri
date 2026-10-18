async function build() {
  await fontsReady(); sayfa('YAPAY ZEKA HABERİ', '1 / 3');
  const y = baslik('Bir satışçı, her sabah yaptığı e-posta işini artık yapay zekaya yaptırıyor.', 560, { size: 80 });
  para('Claude\'u yapan Anthropic şirketinde çalışıyor. Bunu kendisi anlattı.', 90, y + 60, { size: 42, color: C.muted, lh: 1.45 });
  done();
}
build();
