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
              Kaliteli İşçilik,
              <br />
              Güvenilir Hizmet
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
            <div className="bg-gradient-to-br from-gray-50 to-navy-50 rounded-2xl p-8 mb-8">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-navy-800 to-navy-600 flex items-center justify-center">
                <div className="text-center text-white/80">
                  <svg
                    className="w-16 h-16 mx-auto mb-3 opacity-60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                    />
                  </svg>
                  <p className="text-sm">Atölye Fotoğrafı</p>
                </div>
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
