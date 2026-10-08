# Yapay Zekayla Her Sabah Otomatik İçerik: Adım Adım Rehber

Bu rehber, "her sabah güncel bir haberi bulup doğrulayan, görselini hazırlayan ve Instagram'da karusel olarak yayınlayan" bir otomasyonun nasıl kurulduğunu anlatır. Teknik bilginiz olması gerekmez; ama her adımda neyin neden yapıldığını bilmeniz önemli.

## 0. Büyük resim

```
Zamanlayıcı (her sabah)
   -> Claude: haber bul + resmi kaynakta doğrula
   -> Claude: 3 slaytlık görseli ve açıklama metnini üret
   -> GitHub: görselleri herkese açık bir adrese koy
   -> Windsor.ai: Instagram'a gönder
   -> Claude: rapor yaz, size bildirim gönder
```

Dört parça gerekir:

| Parça | Görevi | Bu projedeki karşılığı |
|---|---|---|
| Zamanlanmış çalışma | Claude'u her gün aynı saatte kendiliğinden başlatır | Claude Code'da zamanlanmış rutin (routine) |
| Görsel motoru | Aynı tasarımla her gün yeni görsel üretir | `motor/` klasörü (JavaScript, rough.js, Playwright) |
| Herkese açık depo | Instagram'ın görseli indirebileceği internet adresi | GitHub deposu + raw linkler |
| Yayın köprüsü | Instagram'a gönderme izni | Windsor.ai bağlayıcısı |

## 1. Başlamadan önce hazırlık

1. **Instagram hesabı:** İşletme (Business) veya Oluşturucu (Creator) hesabı olmalı. Kişisel hesap API ile paylaşım yapamaz. Hesabınızı Facebook sayfasına bağlamanız gerekebilir.
2. **GitHub hesabı** ve boş bir **herkese açık (public)** depo. Neden herkese açık: Instagram görseli bir internet adresinden kendisi indirir; adres giriş istememeli. Depoya kişisel veri, şifre, anahtar koymayın.
3. **Windsor.ai hesabı** ve Instagram hesabınızın bağlanması.
4. **Claude Code** erişimi (web veya uygulama) ve GitHub deposunun Claude'a bağlanması.
5. İçerik kimliğiniz: renkler, yazı tipleri, imza, hitap dili ("siz" mi "sen" mi), yasaklı üslup (abartı, acele ettirme vb.). Bunları yazılı hâle getirin; otomasyonun en önemli girdisi budur.

## 2. Görsel motorunu kurun

Amaç: Her gün aynı tasarım dilini koruyup yalnızca içeriği değiştirmek.

1. Depoda `motor/` klasörü açın. İçinde bir ortak yardımcı dosya (renkler, defter zemini, bant, imza, sayfa numarası), her slayt için bir örnek dosya ve bir "ekran görüntüsü alma" betiği olsun.
2. Claude'dan ilk örnek karuseli tasarlamasını isteyin; beğenene kadar sohbetle düzeltin. Bu örnekler "tasarım dilinin referansı" olur.
3. Kuralları README'ye yazın: boyut (1080x1350), kenar boşlukları, yazı tipleri, neyin değiştirilmeyeceği.
4. Güvenli alan kuralı koyun: Instagram profil ızgarasında kapak kenarlardan kırpılır, bu yüzden metinleri kenardan en az yaklaşık 110 piksel içeride tutun.
5. Her slaytı PNG olarak üretip JPEG'e çevirin (Instagram JPEG ister, her biri 8 MB altında olmalı).

Pratik ipucu: Örnek dosyaları rutine "değiştirme, kopyala" diye tarif edin. Aksi hâlde Claude her gün tasarımı biraz değiştirir.

## 3. Haber seçim kurallarını yazın

Rutinin en kritik bölümü budur. Şunları açıkça yazın:

- **Kaynak önceliği:** Önce resmi duyurular (şirket blogları, sürüm notları), sonra güvenilir basın. Bültenleri yalnızca keşif için kullanın.
- **Tazelik:** Yalnızca son 24 saat. 24-48 saat arası ise "Kaçırdıysanız" etiketiyle. Daha eskisi hiç.
- **Doğrulama:** Tarih, rakam, koşul ve kimlerin yararlanabildiği resmi kaynakta bulunmalı. Doğrulanamayan bilgi görsele de metne de yazılmaz.
- **Kitle uygunluğu:** Hedef kitleniz için somut anlamı olan haber. Çok teknik olan, ancak seçenek yoksa.
- **Haber yoksa:** Yedek plan (örneğin "ipucu" karuseli). Eski haberi yeni gibi sunmak yasak.
- **Tekrar önleme:** Depoda bir `yayinlanan.md` dosyası tutun; rutin her sabah ona bakıp aynı haberi seçmesin. Elle yayınladıklarınızı da oraya ekleyin.

## 4. Görselleri herkese açık adrese koyun

1. Her gün `YYYY-AA-GG/` adında klasör açılır; içine 3 JPEG, açıklama metni ve o günün slayt dosyaları konur.
2. Klasör doğrudan `main` dalına gönderilir (commit + push).
3. Görsel adresi şu kalıptadır:
   `https://raw.githubusercontent.com/KULLANICI/DEPO/main/YYYY-AA-GG/01-kapak.jpg`
4. Her adres için kontrol: sunucu "200" ve "image/jpeg" dönmeli. Dönmüyorsa birkaç dakika sonra yeniden deneyin.
5. `node_modules`, geçici çıktılar gibi dosyaları depoya koymayın.

## 5. Instagram'a yayın köprüsü (Windsor.ai)

1. Windsor.ai'de Instagram hesabınızı bağlayın; hesap kimliğini not edin.
2. Claude'un Windsor.ai bağlayıcısına erişimi olsun. Claude önce o bağlayıcının sunduğu eylemlerin listesini okur.
3. Karusel için eylem 2 ile 10 arası herkese açık JPEG linki ve isteğe bağlı açıklama metni kabul eder. Açıklama en fazla 2200 karakterdir.
4. Bu eylem müzik veya konum etiketi kabul etmez; bunları isterseniz yayından sonra Instagram uygulamasında elle eklersiniz.
5. **Çift yayın koruması:** Yayından sonra yanıtı `yayin.json` olarak kaydettirin; rutin yayın yapmadan önce bu dosya var mı diye baksın. Yoksa her yeniden çalıştırmada tekrar paylaşabilir.

## 6. Rutini (zamanlanmış görevi) yazın

Rutin, Claude'a her sabah verilen kalıcı bir talimat metnidir. İyi bir talimat şunları içerir:

1. **Rol ve kitle:** Kim için, hangi dilde, hangi üslupla.
2. **Adımlar:** Tarih kontrolü, haber arama, doğrulama, görsel üretme, yükleme, yayın, rapor. Numaralı yazın.
3. **Kurallar:** Doğrulanamayanı yazma, abartma, aciliyet baskısı yapma, İngilizce terimin Türkçesini ver.
4. **Yedek planlar:** Haber yoksa ne olacak, push başarısızsa ne olacak, aynı gün tekrar çalışırsa ne olacak.
5. **Rapor:** Her gün ne yayınlandığını, nedenini, elenen haberleri ve doğrulanamayanları bir dosyaya yazması; son mesajın kısa olması (telefondan okunacak).
6. **Bildirim:** Yayınlandı veya yayınlanamadı bilgisini telefonunuza göndermesi.
7. **Elle çalıştırma notu:** "Şimdi çalıştır"da verdiğiniz ek talimatlardan hangilerine uyulacağı (örneğin "yayınlama", "bekleme").

Zamanı İstanbul saatine göre verin ve yayın saatini rutinin içinde tanımlayın (bu projede 07:45; rutin daha erken başlayıp saati bekler).

## 7. Güvenlik ve güvenilirlik katmanları

- **Gece boyunca kimse izlemiyor:** Bu yüzden "emin olmadığın iddiayı çıkar" kuralı şarttır. Az ama doğru bilgi, çok ama şüpheli bilgiden iyidir.
- **Sabah kontrolü:** Otomatik yayından sonra uyanınca gönderiyi kontrol edip gerekirse kaldırabileceğinizi baştan kabul edin.
- **Yetki sınırı:** GitHub'a yalnızca bu depo için, Windsor.ai'ye yalnızca bu Instagram hesabı için izin verin.
- **Gizli bilgiler:** Parola ve anahtarları depoya ve talimat metnine yazmayın.
- **Marka ve kişi hakları:** Görsellerde gerçek kişi, marka logosu, telifli karakter kullanmayın; illüstrasyonları kendiniz çizdirin.
- **Hukuki not:** Haberi yorumladığınız yerde "bu hukuki tavsiye değildir" gibi bir not ekleyin.

## 8. Önce deneme, sonra otomatik

1. **Kuru çalıştırma:** "Yayınlama" talimatıyla çalıştırın. Görseller ve metin üretilir, Instagram'a gönderilmez. Görselleri ve metni gözle kontrol edin.
2. **Bir kez elle yayın:** Aynı çıktıyı onayınızla bir kez yayınlatın; Instagram'da nasıl göründüğüne bakın (kırpma, satır sonları, hashtag).
3. **Birkaç gün yarı otomatik:** Rutin çalışsın ama sizi bildirimle uyarsın; siz kontrol edin.
4. **Tam otomatik:** Güvendiğinizde yayın adımını açık bırakın.

## 9. Sık karşılaşılan sorunlar

| Sorun | Neden | Çözüm |
|---|---|---|
| Motor klasörü bulunamadı | Dosyalar `main` dalına gitmemiş | Dosyaları `main`'e gönderin |
| Görsel linki 404 | Push henüz tamamlanmadı veya dosya adı yanlış | Birkaç dakika sonra tekrar deneyin, adı kontrol edin |
| Instagram görseli reddetti | JPEG değil, 8 MB üstü veya oran uygunsuz | 1080x1350 JPEG, kalite 92 |
| Aynı haber tekrar çıktı | Önceki haberler kayıtlı değil | `yayinlanan.md` tutun, rutine okuttun |
| Haber çok teknik | Kitle kuralı yok | Seçim kurallarına "teknik olmayan kitle" ekleyin |
| Metinler taşıyor | Türkçe karakter veya uzun metin | Her görseli açıp bakın, gerekirse kısaltın |
| Yayın iki kez gitti | Çift yayın koruması yok | `yayin.json` kontrolünü ekleyin |

## 10. Eğitimde işleyebileceğiniz alıştırmalar

1. Kendi tasarım kurallarınızı 10 maddeyle yazın.
2. Claude ile tek slaytlık ilk görselinizi üretin.
3. Haber seçim kurallarınızı yazın ve bir haberi elle doğrulatın.
4. Görseli GitHub'a yükleyip raw linkini kontrol edin.
5. Kuru çalıştırma yapın, çıktıyı değerlendirin.

---

Kaynaklar (resmi dokümanlar, adresleri kendiniz kontrol edin): Claude Code dokümanları, Windsor.ai dokümanları, Instagram içerik paylaşımı için Meta geliştirici dokümanları, GitHub dokümanları. Platform arayüzleri ve sınırları zamanla değişir; kurulum sırasında güncel dokümana bakın.
