import Image from "next/image";

const stats = [
  { value: "20+", label: "Yıllık Deneyim" },
  { value: "1500+", label: "Tamamlanan Proje" },
  { value: "800+", label: "Mutlu Müşteri" },
  { value: "50+", label: "Taş Çeşidi" },
];

export default function About() {
  return (
    <section id="hakkimizda" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div>
            <span className="text-navy-700 font-semibold text-sm uppercase tracking-wider">
              Hakkımızda
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3 mb-6 leading-tight">
              Derintaş Mermer & Granit
              <br />
              <span className="text-navy-700">Kaliteli İşçilik, Güvenilir Hizmet</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Derintaş Mermer & Granit olarak, yılların getirdiği tecrübe ve
              uzmanlıkla doğal taş sektöründe hizmet vermekteyiz. Modern
              makineler ve uzman kadromuzla, mermer, granit ve doğal taş
              işçiliğinde en yüksek kaliteyi sunuyoruz.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Konut, ticari ve endüstriyel projeleriniz için özel çözümler
              üretiyor, müşteri memnuniyetini her zaman ön planda tutuyoruz.
              Hammaddeden nihai ürüne kadar her aşamada titizlikle çalışıyoruz.
            </p>
            <a
              href="#iletisim"
              className="inline-flex items-center gap-2 text-navy-800 font-semibold hover:text-navy-900 transition-colors"
            >
              Bizimle İletişime Geçin
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {/* Right - Stats & Visual */}
          <div>
            <div className="bg-gradient-to-br from-gray-50 to-navy-50 rounded-2xl p-4 mb-8">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src="/traverten-teras.jpg"
                  alt="Derintaş Mermer & Granit - Traverten teras projesi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4">
                  <div className="text-2xl sm:text-3xl font-bold text-navy-800">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
