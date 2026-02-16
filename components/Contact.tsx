"use client";

import { useState, type FormEvent } from "react";

const contactInfo = [
  {
    label: "Adres",
    value: "Aşık Veysel, 5733/3. Sk. No: 36/A\n35130 Karabağlar/İzmir, Türkiye",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    ),
  },
  {
    label: "Telefon",
    value: "+90 (533) 030 62 37",
    href: "tel:+905330306237",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    ),
  },
  {
    label: "E-posta",
    value: "info@derintasmermer.com",
    href: "mailto:info@derintasmermer.com",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    ),
  },
  {
    label: "Çalışma Saatleri",
    value: "Pzt - Cmt: 08:00 - 18:00",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
];

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Teklif Almak İstiyorum",
    message: "",
  });

  function validate(): FormErrors {
    const errs: FormErrors = {};

    if (form.name.trim().length < 2) {
      errs.name = "Ad soyad en az 2 karakter olmalıdır.";
    }

    const phoneDigits = form.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      errs.phone = "Geçerli bir telefon numarası girin.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Geçerli bir e-posta adresi girin.";
    }

    if (form.message.trim().length < 10) {
      errs.message = "Mesajınız en az 10 karakter olmalıdır.";
    }

    return errs;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  }

  function updateField(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field as keyof FormErrors];
        return next;
      });
    }
  }

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-lg border outline-none transition-colors text-sm ${
      errors[field]
        ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
        : "border-gray-200 focus:border-navy-700 focus:ring-1 focus:ring-navy-700"
    }`;

  return (
    <section id="iletisim" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-navy-700 font-semibold text-sm uppercase tracking-wider">
            İletişim
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3 mb-4">
            Bizimle İletişime Geçin
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Projeleriniz hakkında bilgi almak veya teklif istemek için bize
            ulaşabilirsiniz.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info) => {
              const content = (
                <>
                  <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-navy-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {info.icon}
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">
                      {info.label}
                    </h3>
                    <p className="text-gray-600 text-sm whitespace-pre-line">
                      {info.value}
                    </p>
                  </div>
                </>
              );

              return info.href ? (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-start gap-4 group hover:bg-white rounded-xl p-3 -m-3 transition-colors"
                >
                  {content}
                </a>
              ) : (
                <div key={info.label} className="flex items-start gap-4 p-3 -m-3">
                  {content}
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Mesajınız Alındı!
                </h3>
                <p className="text-gray-600">
                  En kısa sürede sizinle iletişime geçeceğiz.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Ad Soyad
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      className={inputClass("name")}
                      placeholder="Adınız Soyadınız"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className={inputClass("phone")}
                      placeholder="05XX XXX XX XX"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1.5">{errors.phone}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    E-posta
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className={inputClass("email")}
                    placeholder="ornek@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Konu
                  </label>
                  <select
                    value={form.subject}
                    onChange={(e) => updateField("subject", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-navy-700 focus:ring-1 focus:ring-navy-700 outline-none transition-colors text-sm text-gray-600"
                  >
                    <option>Teklif Almak İstiyorum</option>
                    <option>Mermer Tezgah</option>
                    <option>Granit Tezgah</option>
                    <option>Doğal Taş Kaplama</option>
                    <option>Zemin Döşeme</option>
                    <option>Özel Proje</option>
                    <option>Diğer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Mesajınız
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    className={`${inputClass("message")} resize-none`}
                    placeholder="Projeniz hakkında kısaca bilgi verin..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1.5">
                      {errors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-navy-800 text-white py-3.5 rounded-lg font-semibold hover:bg-navy-900 transition-colors text-sm"
                >
                  Mesaj Gönder
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
