'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';

export function ServicesSection() {
  const locale = useLocale();
  const t = useTranslations('home');

  const services = [
    {
      id: 'composite',
      badge: t('services.composite.badge'),
      title: t('services.composite.title'),
      description: t('services.composite.description'),
      image: '/images/composite-carbon.jpg',
    },
    {
      id: 'pintura',
      badge: t('services.painting.badge'),
      title: t('services.painting.title'),
      description: t('services.painting.description'),
      image: '/images/yacht-painting.jpg',
    },
  ];

  return (
    <section 
      className="py-24 bg-[#F8F6F2]"
      aria-label="Services section - Composite and painting services"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-[#0A1628]/70 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/${locale}/servicios#${service.id}`}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-[#0A1628]/50 to-transparent transition-all duration-300 group-hover:from-[#0A1628]/80" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="inline-block self-start px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0A1628] bg-[#C9A96E] rounded-full mb-4">
                  {service.badge}
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-4 max-w-md">
                  {service.description}
                </p>

                <span className="inline-flex items-center gap-2 text-[#C9A96E] font-semibold group-hover:gap-3 transition-all">
                  {t('services.viewAll')}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
