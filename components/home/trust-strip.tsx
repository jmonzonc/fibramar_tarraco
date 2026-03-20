'use client';

import { useTranslations } from 'next-intl';

export function TrustStrip() {
  const t = useTranslations('home.trustStrip');

  const stats = [
    { value: t('years'), label: t('yearsLabel') },
    { value: t('yachts'), label: t('yachtsLabel') },
    { value: t('international'), label: t('internationalLabel') },
    { value: t('location'), label: t('locationLabel') },
  ];

  return (
    <section 
      className="bg-[#060E1A] py-8"
      aria-label="Company statistics and trust indicators"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center ${
                index < stats.length - 1 ? 'lg:border-r lg:border-white/10' : ''
              }`}
            >
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#C9A96E]">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-white/70 mt-1 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
