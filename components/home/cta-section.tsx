'use client';

import { useTranslations } from 'next-intl';
import { MessageCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WHATSAPP_NUMBER = '34609874869';
const WHATSAPP_MESSAGE = 'Hola, me interesa un presupuesto';

export function CTASection() {
  const t = useTranslations('home');
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section 
      className="relative py-24 bg-[#0A1628] overflow-hidden"
      aria-label="Contact call to action section"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0D1B2A] to-[#0A1628]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIiBmaWxsPSJyZ2JhKDIwMSwyMTEsMjMwLDAuMDUpIi8+Cjwvc3ZnPg==')] opacity-50" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          {t('cta.title')}
        </h2>
        <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t('cta.description')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              {t('cta.whatsapp')}
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/30 text-white bg-transparent hover:bg-white/10 hover:border-white font-semibold text-base h-14 px-8"
          >
            <a
              href="mailto:info@fibramartarraco.com"
              className="flex items-center gap-2"
            >
              <Mail className="h-5 w-5" />
              {t('cta.email')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
