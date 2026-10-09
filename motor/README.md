# Karusel motoru (statik PNG, 1080x1350)
- `npm install` → `cp ornek-s1.js s1.js` (vb.) → içerikleri değiştir → `node shot.js 1 2 3` (4. sayfa varsa `1 2 3 4`) → `out/01.png`...
- `ornek-s1..s4.js`: 8 Ekim 2026 "Claude'un kuralları değişiyor" karuseli. Tasarım dili ve yazı ölçeği örneği; değiştirme, kopyala.
- Kurallar: krem çizgili defter, Caveat başlıklar, Montserrat gövde ve etiketler, şeftali/nane/pembe bantlar, botanik dallar.
  İmza sol altta, sayfa no sol kenarda (footer()), sağ üst boş. Metinler kenardan en az 110 px içeride (`SAFE`).
- Açıklama (caption) etiketleri SABİT: her gönderide yalnızca `#teknikbilgekoc #gunlukyapayzekahaberi` kullanılır, başka hashtag eklenmez.

## Yazı ölçeği (lib.js içindeki `TS`, Bilge'nin isteği, 9 Ekim 2026)
- Ana başlık: **100 px** Caveat 700 (`TS.title`). İki satırsa satır aralığı 130 px.
- Gövde: **38 px** Montserrat 500, bold vurgu 700 (`TS.body`). **Satır aralığı 1.3** (≈ 49 px).
- Ara başlık / soru satırı / kapanış çağrısı: 56–64 px Caveat (`TS.sub` = 62).
- Etiket bandı, kaynak satırı, dipnot: en az **30 px** Montserrat (`TS.label`). 30 px altı yazı kullanma.
- Gövde metnini elle satıra bölme: `body(metin, x, y, {width})` kelime kaydırır ve sonraki y'yi döndürür.
  `{dry: true}` yalnızca ölçer (kutu yüksekliği hesaplamak için). `text(..., {max})` ile gövde sıkıştırma YAPMA.

## Sığmazsa
- Önce anlamı ve kapsamı koruyarak metni kısalt (aynı bilgiyi daha az kelimeyle).
- Yine sığmıyorsa içeriği yeni bir sayfaya böl: genelde detaylar iki sayfaya yayılır →
  1 kapak, 2–3 detaylar, 4 şema (en fazla 5 sayfa). `footer('2 / 4')` gibi sayfa numaralarını güncelle.
  "Detaylar ve kaynaklar açıklamada" son detay sayfasında; "Kaydedin, meslektaşınıza gönderin." + kaynak satırı şema sayfasında.
- JPEG adları sırayla: `01-kapak.jpg`, `02-detaylar.jpg`, (`03-detaylar-2.jpg`), son sayfa `NN-sema.jpg`. Yayında tüm linkler bu sırayla verilir.
- `node shot.js` çıktısındaki `UYARI` satırları (güvenli alan dışı, 30 px altı yazı, üst üste binme) sıfırlanmadan yayınlama; yine de her PNG'yi gözle kontrol et.
