# Karusel motoru (statik PNG, 1080x1350)
- `npm install` → `cp ornek-s1.js s1.js` (vb.) → içerikleri değiştir → `node shot.js 1 2 3` (4. sayfa varsa `1 2 3 4`) → `out/01.png`...
- `ornek-s1..s4.js`: 8 Ekim 2026 "Claude'un kuralları değişiyor" karuseli. Tasarım dili ve yazı ölçeği örneği; değiştirme, kopyala.
- Kurallar: krem çizgili defter, el yazısı (Caveat) başlık ve gövde, Montserrat yalnızca bant etiketleri, şeftali/nane/pembe bantlar, botanik dallar.
  İmza sol altta, sayfa no sol kenarda (footer()), sağ üst boş. Metinler kenardan en az 110 px içeride (`SAFE`).
- Açıklama (caption) etiketleri SABİT: her gönderide yalnızca `#teknikbilgekoc #gunlukyapayzekahaberi` kullanılır, başka hashtag eklenmez.

## Yazı ölçeği (lib.js içindeki `TS`, Bilge'nin isteği, 9 Ekim 2026)
- Bütün yazılar EL YAZISI (Caveat): okuyan, Bilge'nin defterine aldığı notu görüyormuş gibi hissetmeli.
  Montserrat yalnızca bant etiketlerinde (tarih bandı, SINAV, KAPSAMDA gibi) ve imzada kullanılır.
- Ana başlık: **100 px** Caveat 700 (`TS.title`). İki satırsa satır aralığı 130 px.
- Gövde: **52 px** Caveat 600, vurgu 700 (`TS.body`). **Satır aralığı 1.3** (≈ 68 px).
  (Caveat'in küçük harfleri dar; 52 px Caveat, 38 px düz yazı tipi kadar okunur.)
- Ara başlık / soru satırı / kapanış çağrısı: 60–66 px Caveat (`TS.sub` = 66).
- Dipnot, kaynak satırı: en az **42 px** Caveat (`TS.note`). Bant etiketleri en az 30 px Montserrat (`TS.label`).
- Gövde metnini elle satıra bölme: `body(metin, x, y, {width})` kelime kaydırır ve sonraki y'yi döndürür.
  `{dry: true}` yalnızca ölçer (kutu yüksekliği hesaplamak için). `text(..., {max})` ile gövde sıkıştırma YAPMA.

## Sığmazsa
- Önce anlamı ve kapsamı koruyarak metni kısalt (aynı bilgiyi daha az kelimeyle).
- Yine sığmıyorsa içeriği yeni bir sayfaya böl: genelde detaylar iki sayfaya yayılır →
  1 kapak, 2–3 detaylar, 4 şema (en fazla 5 sayfa). `footer('2 / 4')` gibi sayfa numaralarını güncelle.
  "Detaylar ve kaynaklar açıklamada" son detay sayfasında; "Kaydedin, meslektaşınıza gönderin." + kaynak satırı şema sayfasında.
- JPEG adları sırayla: `01-kapak.jpg`, `02-detaylar.jpg`, (`03-detaylar-2.jpg`), son sayfa `NN-sema.jpg`. Yayında tüm linkler bu sırayla verilir.
- `node shot.js` çıktısındaki `UYARI` satırları (güvenli alan dışı, küçük yazı, üst üste binme) sıfırlanmadan yayınlama; yine de her PNG'yi gözle kontrol et.
