"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="anasayfa"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background layers */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700"
        style={{ transform: `translateY(${offset * 0.3}px)` }}
      />

      {/* Animated marble texture pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{ transform: `translateY(${offset * 0.15}px)` }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.65%22%20numOctaves%3D%223%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20filter%3D%22url(%23n)%22%20opacity%3D%221%22%2F%3E%3C%2Fsvg%3E')] bg-repeat" />
      </div>

      {/* Floating geometric shapes */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ transform: `translateY(${offset * 0.1}px)` }}
      >
        {/* Large diamond */}
        <div className="absolute top-[15%] right-[10%] w-64 h-64 border border-white/[0.06] rotate-45 rounded-3xl animate-float-slow" />
        {/* Small diamond */}
        <div className="absolute bottom-[25%] left-[8%] w-32 h-32 border border-white/[0.08] rotate-12 rounded-2xl animate-float-medium" />
        {/* Circle */}
        <div className="absolute top-[60%] right-[25%] w-48 h-48 border border-white/[0.05] rounded-full animate-float-reverse" />
        {/* Accent line */}
        <div className="absolute top-[35%] left-[15%] w-px h-40 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="absolute top-[20%] right-[35%] w-px h-32 bg-gradient-to-b from-transparent via-white/[0.07] to-transparent" />
      </div>

      {/* Radial light effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(255,255,255,0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(255,255,255,0.05)_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(44,95,138,0.3)_0%,transparent_50%)]" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{
          transform: `translateY(${offset * 0.15}px)`,
          opacity: Math.max(0, 1 - offset / 600),
        }}
      >
        <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium mb-8 border border-white/20">
          20+ Yıllık Deneyim
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Doğanın Eşsiz
          <br />
          <span className="text-navy-100">Güzelliğini Taşa İşliyoruz</span>
        </h1>
        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Mermer, granit ve doğal taş işçiliğinde kalite ve estetiği bir araya
          getiriyoruz. Yaşam alanlarınıza değer katan çözümler sunuyoruz.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#hizmetler"
            className="bg-white text-navy-900 px-8 py-4 rounded-lg text-base font-semibold hover:bg-gray-100 transition-colors"
          >
            Hizmetlerimiz
          </a>
          <a
            href="#iletisim"
            className="border-2 border-white/30 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-white/10 transition-colors"
          >
            Bize Ulaşın
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs tracking-widest uppercase">
          Keşfet
        </span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2.5 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
