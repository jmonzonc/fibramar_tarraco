'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useLocale, useTranslations } from 'next-intl';
import { MessageCircle, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WHATSAPP_NUMBER = '34609874869';
const WHATSAPP_MESSAGE = 'Hola, me interesa un presupuesto';

export function HeroSection() {
  const locale = useLocale();
  const t = useTranslations('home.hero');

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section - Fibramar Tarraco composite and marine painting specialists"
    >
      <Image
        src="/images/hero-yacht.jpg"
        alt="Luxury yacht at sea"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/80 to-[#0A1628]/40" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <p className="text-[#C9A96E] text-sm font-medium uppercase tracking-[0.3em] mb-6">
            {t('eyebrow')}
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
            {t('title')}
          </h1>

          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
            {t('description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#C9A96E] text-[#0A1628] hover:bg-[#D4B87A] font-semibold text-base h-14 px-8"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                {t('cta')}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/50 text-white bg-transparent hover:bg-white/10 hover:border-white font-semibold text-base h-14 px-8"
            >
              <Link href={`/${locale}/proyectos`}>{t('ctaSecondary')}</Link>
            </Button>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer group"
        aria-label="Scroll to content"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </button>
    </section>
  );
}
