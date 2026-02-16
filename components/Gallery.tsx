"use client";

import { useState, useEffect, useCallback } from "react";

const galleryItems = [
  { title: "Mermer Mutfak Tezgahı", category: "Tezgah", color: "from-gray-300 to-gray-400" },
  { title: "Granit Zemin Döşeme", category: "Zemin", color: "from-stone-400 to-stone-500" },
  { title: "Doğal Taş Duvar Kaplama", category: "Kaplama", color: "from-amber-200 to-amber-300" },
  { title: "Mermer Merdiven", category: "Merdiven", color: "from-gray-200 to-gray-300" },
  { title: "Granit Banyo Tezgahı", category: "Tezgah", color: "from-zinc-400 to-zinc-500" },
  { title: "Özel Tasarım Şömine", category: "Özel Proje", color: "from-stone-300 to-stone-400" },
  { title: "Traverten Dış Cephe", category: "Kaplama", color: "from-yellow-100 to-yellow-200" },
  { title: "Mermer Lavabo", category: "Özel Proje", color: "from-gray-100 to-gray-200" },
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
    <section id="galeri" className="py-24 bg-white">
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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setLightboxIndex(index)}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                index === 0 || index === 5 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <div
                className={`bg-gradient-to-br ${item.color} w-full ${
                  index === 0 || index === 5 ? "aspect-square" : "aspect-[4/3]"
                } flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}
              >
                <svg
                  className="w-12 h-12 text-white/40"
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
              </div>
              <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/70 transition-all duration-300 flex items-end">
                <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white/70 text-xs font-medium">
                    {item.category}
                  </span>
                  <h3 className="text-white font-semibold text-sm">
                    {item.title}
                  </h3>
                </div>
              </div>
              {/* Zoom icon */}
              <div className="absolute top-3 right-3 w-8 h-8 bg-white/0 group-hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
            aria-label="Kapat"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-4 sm:left-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
            aria-label="Önceki"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Image area */}
          <div
            className="max-w-4xl w-full mx-4 sm:mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`bg-gradient-to-br ${galleryItems[lightboxIndex].color} w-full aspect-[16/10] rounded-2xl flex items-center justify-center`}
            >
              <svg
                className="w-24 h-24 text-white/30"
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
            </div>
            {/* Caption */}
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

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-4 sm:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
            aria-label="Sonraki"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
