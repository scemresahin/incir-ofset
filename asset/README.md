# Görsel Varlıkları (asset)

İç sayfaların (Matbaa / Promosyon / Reklam) birebir kurulması için görselleri
aşağıdaki klasörlere, belirtilen isimlerle koyman yeterli. Kod bunları otomatik
alır (Vite `import.meta.glob`), ayrıca isim/uzantı esnek — `.jpg .jpeg .png .webp`
hepsi olur.

```
asset/
├─ background-video.mp4          ← ana ekran arka plan videosu (mevcut)
│
├─ logo/
│   └─ incirofset.svg            ← ana logo (tercihen SVG; PNG de olur, şeffaf zemin)
│
├─ matbaa/
│   ├─ hero.jpg                  ← üst (hero) görseli
│   └─ urun-1.jpg … urun-8.jpg   ← "Geniş Ürün Yelpazesi" galerisi (8 adet)
│
├─ promosyon/
│   ├─ hero.jpg
│   └─ urun-1.jpg … urun-8.jpg
│
├─ reklam/
│   ├─ hero.jpg
│   └─ urun-1.jpg … urun-8.jpg
│
└─ referanslar/                  ← "Referanslar" logoları (opsiyonel)
    ├─ porland.svg
    ├─ metyx.svg
    ├─ tekmak.svg
    ├─ siemens.svg
    ├─ kigili.svg
    └─ flormar.svg
```

## Notlar
- **Minimum başlangıç:** `logo/` + her sayfanın `hero.jpg`'si yeterli; galeriyi
  sonra ekleyebiliriz.
- **Eksik olanlar** için otomatik olarak zarif placeholder gösterilir; dosyayı
  koyunca yerine gerçek görsel geçer.
- **Süreç Deneyimi** adım görselleri gelmezse ortak koyu bir görsel/placeholder
  kullanılır.
- **Referans logoları** gelmezse metin olarak yazılır.
- Büyük fotoğrafları `.webp` verirsen site daha hızlı olur (şart değil).
