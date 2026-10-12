# Karusel motoru (statik PNG, 1080x1350)

## MARKA STİLİ: KOYU PREMİUM (Bilge'nin isteği, 11 Ekim 2026) — bundan sonraki bütün karusel, Reels ve videolarda geçerli
Aşağıdaki eski "açık defter" kuralları yerine bu bölüm geçerlidir. Motor varsayılan olarak koyu temayı çizer (`lib-koyu.js` + `tpl-koyu.html`); eski tema yalnızca `node shot.js 1 2 3 --acik` ile.
- Renkler (`C`): siyah zemin `#09090B`, kart `#131316`, gold `#D8B45A` (açık `#F0D58A`), zümrüt yeşili `#12A67C` (koyu `#0A5F49`), vurgu: pembe `#EC5B97` ya da mor `#9B6CFF` (sayfa başına biri; `paper('pink'|'purple')`). Metin: fildişi `#F4EFE4`, soluk `#A9A39A`.
- Zemin: siyah + sol altta zümrüt ışıma + sağ üstte pembe/mor ışıma + çift ince altın çerçeve ve köşe elmasları. Krem defter, spiral, şeftali/nane bantları ve rough.js "karalama" görünümü KULLANMA.
- Yazı: başlıklar Playfair Display (700, vurgu satırı italik 600, gold/fildişi), gövde Montserrat 500 (36 px, satır aralığı 1.45), etiket hapları Montserrat 700 (26 px, geniş harf aralığı), el yazısı (Caveat) yalnızca "kaydır →" gibi küçük altın notlarda.
- Bileşenler: `chip()` etiket hapı, `card()` koyu kart + solda vurgu şeridi, `divider()` altın ayraç, `bullet()` elmas madde imi, `serif()` başlık. İllüstrasyonlar ince altın çizgi sanatı (`L` stili, düşük pürüz) + dolgu renkleri zümrüt/gold/pembe/mor.
- Yerleşim kuralları aynı: imza sol altta (`footer()`), sayfa numarası sol kenar boşluğunda, sağ üst boş, metinler kenardan en az 110 px içeride, `UYARI` satırı kalmayana dek düzelt.
- KAPAK PROFİL ROZETİ (Bilge'nin isteği, 11 Ekim 2026): her karusel kapağının en üstünde `profil(150, 124, 112)` çağrılır: yuvarlak profil fotoğrafı (`motor/profil.png`) + altın halka + yanında "Bilge Gül Koç" ve "YAPAY ZEKA EĞİTMENİ". Bunun dışında kapakta takipçi/gönderi sayısı vb. profil bilgisi gösterme. Etiket hapı (tarih) rozetin altına gelir. Diğer sayfalarda fotoğraf yok.
- KAPAK İLLÜSTRASYONU (Bilge'nin isteği, 11 Ekim 2026): kapakta büyük, sıcak, masalsı karakter illüstrasyonu kullanılır (`illus-koyu.js`: `sahneKapak(x, y, w, h, { kisi: 'kadin' | 'adam' })`; `kadin()`, `adam()`, `kedi()`, `tilki()`, `baykus()` özgün karakterleri; kemerli pencere içinde). Ana karakter ÖNCELİKLE KADIN (Bilge'nin tercihi, 12 Ekim 2026): içeriğe göre `tip` seç ('basortulu', 'sacli', 'kiz', 'anne', 'yasli'; anne/yaşlı için `basortu: true`), başörtülü ve saçlı dönüşümlü olsun. Erkek (`kisi: 'adam'`) yalnızca içerik erkek karaktere özellikle uygunsa. Hayvan karakterler eşlik edebilir, istenirse konuya göre (klinik, ofis, stüdyo) sahne öğelerini değiştir. Hiçbir gerçek illüstratörün işini kopyalama; karakterler özgündür. Konuya göre sahneyi değiştir (kadın eğitmen + hayvan öğrenciler), logo/telifli karakter yok.
- İÇERİK KURALI (Bilge, 12 Ekim 2026): kapakta büyük başlık KİMLİK KANCASI (okuyanın kendini bulduğu soru/durum), alt kart haber bağlamı. 2. sayfa şema DEĞİL, okunur detay sayfası: kısa renkli kartlar (NE OLDU? / ana noktalar / ÖRNEK (varsayımsal ise belirt) / BUGÜN YAPIN), `para()` ile en az 29 px. Her haber okuyana fayda ya da farkındalık vermeli, jargon yok. Örnek: `../2026-10-12-v3/s1.js`, `s2.js`.\n- FORMAT: karusel 2 sayfa = 1 kapak (illüstrasyonlu) + 2 şema sayfası; ayrıntılar caption'a yazılır, ayrı detay sayfası yok. Örnekler: `ornek-koyu-s1.js` (kapak), `ornek-koyu-s2.js` (şema). `node shot.js 1 2`.
- İLHAM (Bilge'nin isteği, 12 Ekim 2026): yaşayan sanatçıdan değil, yaşamayan Türk kadın ressam Fahrelnissa Zeid'den (1901–1991) esinlenilir: mücevher tonları (zümrüt, gold, pembe, mor), koyu hatlarla bölünmüş yüzeyler, kaleydoskopik/mozaik süsleme, minyatür tarzı yaprak dalları. Eserleri birebir kopyalanmaz (telif hakkı 2061'e kadar sürer); yalnızca bu ilkeler kullanılır. Çizimler bilerek ayrıntılıdır (gözde iris ve parıltı, kumaş desenleri, takılar, saç parıltısı, kaleydoskop `kaleydoskop()`, `dal()`, `desenler()`): Bilge'nin Claude ile üretildiğini bilen izleyicilere yeteneği sergilemek için.
- DURDURUCU KANCA (Bilge'nin isteği, 12 Ekim 2026): kapakta ÇOKLU karakter/sahne yerine TEK bir büyük figür kullan: tercihen bir yüz (kadın karakter) ya da tek bir hayvan. `sahneTek(x, y, w, h, { figur: 'kadin'|'adam'|'kedi'|'tilki'|'baykus', olcek, zemin, halo: 'kaleydoskop'|'gunes'|'yok', ek: (cx, cy, ctx) => ... })`. Konuya uygun, çarpıcı, kaydırmayı durduran bir kanca kur (ör. şaşkın yüz + büyük ekran/grafik, gözlüklü baykuş + ampul, tilki + kilit/kalkan); `ek` geri çağrısıyla konuya özel aksesuar çiz. Her gün figür, zemin, halo ve aksesuar değişsin. Eski çok figürlü `sahneKapak` artık varsayılan değil.
- ÇEŞİTLİLİK (Bilge'nin isteği, 12 Ekim 2026): kapak illüstrasyonu her gün FARKLI görünmeli, hep aynı sahne olmaz. `sahneKapak(..., { tip, zemin: 'mor'|'zumrut'|'bordo'|'lacivert'|'altin', kaleydoskop: 'sol'|'sag'|'yok', sutunlar: true|false, hayvanlar: ['kedi','tilki','baykus'] alt kümesi/sırası ya da [], ay: true|false })`. Her gün `yayinlanan.md`'ye ve önceki klasörlerin s1.js dosyasına bakıp zemin, düzen, hayvan seçimi ve karakter tipini bir önceki günlerden farklı seç; haberin konusuna uygun sahne öğesi de ekle.\n- Kapak statiktir; animasyon istenmiyor (Bilge, 11 Ekim 2026).
- Örnek: `ornek-koyu-s1.js … ornek-koyu-s3.js` (11 Ekim "Claude ipucu" içeriğinin koyu hali). Değiştirme, kopyala.
- Reels/video: aynı palet ve yazı tipleri (siyah zemin, gold çizgiler, zümrüt vurgu, pembe/mor ışıma); açık defter/kâğıt zemin kullanma.

## (ESKİ) Açık defter teması — yalnızca `--acik` ile
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
