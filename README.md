# Derintaş Mermer & Granit

Mermer, granit ve doğal taş işçiliğinde hizmet veren **Derintaş Mermer & Granit** firmasının kurumsal tanıtım web sitesi.

## Teknolojiler

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**

## Başlangıç

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build
npm start
```

Site varsayılan olarak [http://localhost:3000](http://localhost:3000) adresinde çalışır.

## Proje Yapısı

```
├── app/
│   ├── layout.tsx          # Root layout, SEO metadata, Open Graph
│   ├── page.tsx            # Ana sayfa (tüm bölümleri birleştirir)
│   └── globals.css         # Tailwind tema, animasyonlar
├── components/
│   ├── Navbar.tsx           # Sticky navbar, scroll efekti, aktif bölüm göstergesi
│   ├── Hero.tsx             # Paralaks hero, geometrik şekiller, scroll indicator
│   ├── About.tsx            # Hakkımızda, istatistikler
│   ├── Services.tsx         # 6 hizmet kartı
│   ├── Gallery.tsx          # Grid galeri, lightbox/modal
│   ├── Testimonials.tsx     # Müşteri yorumları
│   ├── References.tsx       # Referans kurum logoları
│   ├── Contact.tsx          # İletişim bilgileri, doğrulamalı form
│   ├── Footer.tsx           # Alt bilgi, sosyal medya, tıklanabilir linkler
│   ├── WhatsAppButton.tsx   # Floating WhatsApp butonu
│   └── FadeInOnScroll.tsx   # Scroll animasyonu wrapper
└── public/
    ├── egesel-insaat.png    # Egesel İnşaat logosu
    └── manisa-belediyesi.png # Manisa Büyükşehir Belediyesi logosu
```

## Bölümler

| Bölüm | Açıklama |
|-------|----------|
| **Navbar** | Şeffaf → beyaz scroll geçişi, mobil hamburger menü |
| **Hero** | Paralaks arka plan, floating geometrik şekiller, CTA butonları |
| **Hakkımızda** | Firma tanıtımı, 20+ yıl deneyim, 1500+ proje istatistikleri |
| **Hizmetler** | Mermer kesim, granit tezgah, doğal taş kaplama, zemin döşeme vb. |
| **Galeri** | Grid düzen, hover efekt, tam ekran lightbox (klavye destekli) |
| **Müşteri Yorumları** | 4 referans yorum kartı |
| **Referanslar** | Manisa Büyükşehir Belediyesi, Egesel İnşaat logoları |
| **İletişim** | Form doğrulama, tıklanabilir tel/e-posta, çalışma saatleri |
| **WhatsApp** | Floating buton, pulse animasyonu |

## Özelleştirme

### İletişim Bilgileri
Telefon, adres ve e-posta bilgileri şu dosyalarda güncellenir:
- `components/Contact.tsx` — İletişim bölümü
- `components/Footer.tsx` — Alt bilgi
- `components/WhatsAppButton.tsx` — WhatsApp numarası (`PHONE_NUMBER`)

### Renk Paleti
`app/globals.css` dosyasındaki `@theme inline` bloğunda tanımlıdır:
- `navy-900`: #0f2440 (en koyu)
- `navy-800`: #1e3a5f
- `navy-700`: #2c5f8a
- `navy-600`: #3a7cb8
- `navy-100`: #dce8f5
- `navy-50`: #eef4fb (en açık)

### Yeni Referans Ekleme
`components/References.tsx` dosyasındaki `references` dizisine yeni obje ekleyin ve logoyu `public/` klasörüne koyun.

### Galeri Görselleri
`components/Gallery.tsx` dosyasındaki `galleryItems` dizisinde placeholder gradientler gerçek görsellerle değiştirilebilir.

## Deployment

Vercel üzerinde deploy etmek için:

```bash
npx vercel
```

Veya [Vercel Dashboard](https://vercel.com/new) üzerinden GitHub reposunu bağlayabilirsiniz.

## İletişim

**Derintaş Mermer & Granit**
- Adres: Aşık Veysel, 5733/3. Sk. No: 36/A, 35130 Karabağlar/İzmir
- Telefon: +90 (533) 030 62 37
- E-posta: info@derintasmermer.com
