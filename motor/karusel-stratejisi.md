# Haber karuseli stratejisi (araştırma notu, 14 Ekim 2026)

Amaç: günlük yapay zeka haberini, iş sahibi ve uzman kitlenin KAYDEDİP GÖNDERECEĞİ bir karusele çevirmek.
Kural: aşağıda "RESMİ" diye işaretli olanlar Instagram/Meta kaynaklıdır; "İKİNCİL" olanlar pazarlama bloglarıdır ve kesin değildir.

## 1. Instagram'ın bilinen kuralları (2025–2026)

| Bulgu | Durum | Bize etkisi |
|---|---|---|
| En ağırlıklı sinyaller: izlenme süresi, erişim başına beğeni, erişim başına GÖNDERİM (send). Gönderim, takip etmeyenlere ulaşmada biraz daha ağır. (Mosseri, Ocak 2025) | RESMİ (Mosseri video serisi; ikincil kaynaklarda aktarılıyor) | Karusel "birine gönderilecek" şekilde kurulur: son slayt "Bunu kime göndermelisin?" |
| Karusel, ilk slaytla etkileşmeyen kişiye SONRAKİ slaytlarla yeniden gösterilir; bu yüzden tek görselden daha fazla erişim alır. (Mosseri, Temmuz 2025 aktarımı) | RESMİ söz, ikincil aktarım | 2. slayt "ikinci kapak" olmalı: tek başına görüldüğünde de anlaşılır ve merak uyandırır. |
| 30 Nisan 2026: özgünlük kuralı fotoğraf ve karusellere genişledi. Başkasının içeriğini anlamlı katkı olmadan paylaşan hesaplar öneriden çıkar. | RESMİ (creators.instagram.com) | Görseller tamamen özgün çizilir; haber ekran görüntüsü/logo kullanılmaz; Bilge'nin yorumu ("sizin işinizde anlamı") her karuselde bulunur. |
| Etiket sınırı: gönderi başına en çok 5 hashtag (Aralık 2025). | RESMİ (@creators duyurusu, ikincil aktarım) | Mevcut 2 sabit etiket uygun. |
| Profesyonel hesapların herkese açık gönderileri varsayılan olarak Google'da dizinlenebilir (Temmuz 2025). | İKİNCİL | Caption'ın ilk cümlesi aranacak kelimeleri (ör. "Claude", "yapay zeka asistanı") içersin. |
| Karusel en çok 20 slayt (uygulamada). API ile yayında en çok 10 öğe; tüm görseller ilk görselin oranına göre kırpılır. | RESMİ (Meta geliştirici dokümanı) | En çok 10 slayt; tüm slaytlar 1080×1350 (4:5) kalır. 3:4 (1080×1440) API'de kırpılabilir, kullanma. |
| Karuselin müzik eklenince Reels sekmesinde gösterildiği | İKİNCİL (2024 Mosseri aktarımı) | Windsor.ai API'si müzik desteklemiyor; uygulanmıyor. |

## 2. Haber karuseli iskeleti (6–8 slayt, her slayt tek fikir)

1. **KAPAK, durdurucu.** Konuyla güçlü bağlı, özgün kavram görseli (bkz. README "KAVRAM KAPAĞI") + özne (şirket/ürün) + okuyana değişen şey. 2 saniyede "bu benimle ilgili" dedirtmeli.
2. **İKİNCİ KAPAK, haberin tek cümlesi.** Ne oldu, kim yaptı, ne zaman. Büyük yazı + küçük görsel. Instagram bu slaytı tek başına da gösterebilir: kapak görülmemiş gibi anlaşılır olmalı.
3. **ÖNCE / SONRA.** Dün nasıldı, bugün ne değişti (iki sütun, ikonla).
4. **NASIL ÇALIŞIYOR.** 3 adımlık akış (ok, ikon, en çok 3 kısa etiket).
5. **SENİN İŞİNDE.** 2–3 meslekten tek satırlık kullanım (klinik, eğitim, danışmanlık, e-ticaret). Varsayımsal ise "Örneğin (varsayımsal)" yaz.
6. **DİKKAT / SINIR.** Türkiye'de geçerli mi, ücretli mi, risk ne. (Güven: abartısız, doğrulanmış.)
7. **BUGÜN YAP.** Tek, somut, 5 dakikalık adım.
8. **KAPANIŞ, gönderim çağrısı.** "Bunu kime göndermelisin?" + kaydet ikonu. Tek eylem.

Habere göre 3–6 arasından biri çıkarılabilir (en az 6 slayt). Kaynaklar yalnızca caption'da.

## 3. Yazı ve tasarım ilkeleri

- Kapak başlığı: özne + değişim, en çok 3 satır (bkz. `kanca-formatlari.md`).
- Slayt başına en çok ~25 kelime; büyük başlık + tek görsel; paragraf yok.
- Açık döngü: kapakta açılan soru 5.–7. slaytta cevaplanır (okuyan sona kadar kaydırır: izlenme süresi).
- Her slayt aynı çerçeve, yazı tipi ve renk sisteminde; sayfa numarası "N / T".
- Tasarımda kaydırma işareti: kapakta "kaydır →", ara slaytlarda sağ kenara taşan görsel ya da ok.

## Kaynaklar
- creators.instagram.com/blog/rewarding-original-creators-on-instagram/ (özgünlük, 30 Nisan 2026)
- developers.facebook.com/docs/instagram-platform/content-publishing/ (API: en çok 10 öğe, ilk görsele göre kırpma, yalnızca JPEG)
- storyboard18.com/brand-marketing/beyond-total-likes-instagram-tests-per-frame-engagement-for-carousels-75876.htm (Mosseri: karusellerin yeniden gösterilmesi, 22 Temmuz 2025)
- keywordseverywhere.com/news/instagram-algorithm-updates/ (onaylı değişiklikler listesi; hashtag sınırı, Google dizinleme)
- mobileanddigitaljournalism.substack.com/p/the-carousel-post-an-overview (BBC News: açıklayıcı gönderi + görsel üstü metin; 31 Mart 2025)
- metricool.com/press-release-instagram-study-2026/ (karusel kaydetme verisi, İKİNCİL)
