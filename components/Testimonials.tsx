const testimonials = [
  {
    name: "Ahmet Yılmaz",
    role: "Ev Sahibi",
    text: "Mutfak tezgahımızı Derintaş'a yaptırdık. İşçilik kalitesi ve zamanında teslimat konusunda çok memnun kaldık. Kesinlikle tavsiye ederim.",
    rating: 5,
  },
  {
    name: "Elif Kaya",
    role: "İç Mimar",
    text: "Projelerimde düzenli olarak Derintaş ile çalışıyorum. Doğal taş seçenekleri çok geniş ve her zaman en uygun çözümü sunuyorlar.",
    rating: 5,
  },
  {
    name: "Mehmet Demir",
    role: "Müteahhit",
    text: "Toplu konut projemizde merdiven ve zemin döşeme işlerini Derintaş yaptı. Profesyonel ekip, kaliteli malzeme. Sonuç mükemmeldi.",
    rating: 5,
  },
  {
    name: "Ayşe Çelik",
    role: "Restoran Sahibi",
    text: "Restoranımızın bar tezgahı ve duvar kaplaması için granit kullandık. Müşterilerimizden sürekli övgü alıyoruz. Teşekkürler Derintaş!",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-amber-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-navy-100 font-semibold text-sm uppercase tracking-wider">
            Müşteri Yorumları
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Birlikte çalıştığımız müşterilerimizin deneyimlerini dinleyin.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <StarRating count={t.rating} />
              <p className="text-white/70 text-sm leading-relaxed mt-4 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy-700 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-white font-medium text-sm">
                    {t.name}
                  </div>
                  <div className="text-white/40 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
