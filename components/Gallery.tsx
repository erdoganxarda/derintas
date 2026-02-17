"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const galleryItems = [
  {
    title: "Traverten Havuz Terası",
    category: "Dış Mekan",
    image: "/traverten-teras.jpg",
    description: "Doğal traverten taşıyla kaplanan havuz terası projesi",
  },
  {
    title: "Havuz Kenarı Doğal Taş",
    category: "Dış Mekan",
    image: "/havuz-kenari.jpg",
    description: "Havuz çevresi doğal taş döşeme uygulaması",
  },
  {
    title: "Mermer Merdiven & Giriş",
    category: "Merdiven",
    image: "/mermer-merdiven.jpg",
    description: "Özel kesim mermer merdiven basamakları ve giriş tasarımı",
  },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null ? (i + 1) % galleryItems.length : null
      ),
    []
  );

  const goPrev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null
          ? (i - 1 + galleryItems.length) % galleryItems.length
          : null
      ),
    []
  );

  useEffect(() => {
    if (lightboxIndex === null) return;

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  return (
    <section id="galeri" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-navy-700 font-semibold text-sm uppercase tracking-wider">
            Galeri
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3 mb-4">
            Projelerimizden Örnekler
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tamamladığımız projelerden bazı örnekleri inceleyebilirsiniz.
          </p>
        </div>

        {/* Featured first item - full width */}
        <div
          onClick={() => setLightboxIndex(0)}
          className="group relative overflow-hidden rounded-2xl cursor-pointer mb-6"
        >
          <div className="relative w-full aspect-[21/9] overflow-hidden">
            <Image
              src={galleryItems[0].image}
              alt={galleryItems[0].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <span className="inline-block px-3 py-1 bg-white/15 backdrop-blur-sm rounded-full text-white/80 text-xs font-medium mb-3 border border-white/10">
              {galleryItems[0].category}
            </span>
            <h3 className="text-white font-bold text-xl sm:text-2xl mb-1">
              {galleryItems[0].title}
            </h3>
            <p className="text-white/60 text-sm hidden sm:block">
              {galleryItems[0].description}
            </p>
          </div>
          <div className="absolute top-4 right-4 w-10 h-10 bg-white/0 group-hover:bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>

        {/* Remaining items - two columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {galleryItems.slice(1).map((item, i) => {
            const actualIndex = i + 1;
            return (
              <div
                key={actualIndex}
                onClick={() => setLightboxIndex(actualIndex)}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/10 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-block px-3 py-1 bg-white/15 backdrop-blur-sm rounded-full text-white/80 text-xs font-medium mb-2 border border-white/10">
                    {item.category}
                  </span>
                  <h3 className="text-white font-bold text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm hidden sm:block">
                    {item.description}
                  </p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/0 group-hover:bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
            aria-label="Kapat"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 sm:left-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
            aria-label="Önceki"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="max-w-5xl w-full mx-4 sm:mx-8" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden">
              <Image
                src={galleryItems[lightboxIndex].image}
                alt={galleryItems[lightboxIndex].title}
                fill
                className="object-cover"
                sizes="90vw"
                priority
              />
            </div>
            <div className="text-center mt-6">
              <span className="text-white/50 text-sm">
                {galleryItems[lightboxIndex].category}
              </span>
              <h3 className="text-white text-xl font-semibold mt-1">
                {galleryItems[lightboxIndex].title}
              </h3>
              <p className="text-white/40 text-sm mt-2">
                {lightboxIndex + 1} / {galleryItems.length}
              </p>
            </div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 sm:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
            aria-label="Sonraki"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
