import Image from "next/image";

const references = [
  {
    name: "Manisa Büyükşehir Belediyesi",
    logo: "/manisa-belediyesi.png",
  },
  {
    name: "Egesel İnşaat",
    logo: "/egesel-insaat.png",
  },
];

export default function References() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-navy-700 font-semibold text-sm uppercase tracking-wider">
            Referanslar
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3 mb-4">
            Birlikte Çalıştığımız Kurumlar
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Güvenilir iş ortaklıklarımızla büyük ölçekli projelerde yer alıyoruz.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-20">
          {references.map((ref) => (
            <div
              key={ref.name}
              className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={ref.logo}
                alt={ref.name}
                width={160}
                height={160}
                className="object-contain max-h-28 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
