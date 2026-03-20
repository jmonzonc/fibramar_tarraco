'use client';

import { useTranslations } from 'next-intl';
import { Anchor, Award, Globe, Layers, Shield, Zap } from 'lucide-react';

const featureIcons = [
  { key: 'experience', icon: Award },
  { key: 'materials', icon: Layers },
  { key: 'team', icon: Anchor },
  { key: 'facilities', icon: Globe },
  { key: 'racing', icon: Zap },
  { key: 'warranty', icon: Shield },
];

export function WhyChooseUs() {
  const t = useTranslations('home.whyUs');

  return (
    <section 
      className="py-24 bg-white"
      aria-label="Why choose us - Company advantages"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-4">
            {t('title')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureIcons.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.key}
                className="group p-8 rounded-2xl bg-[#F8F6F2] hover:bg-[#0A1628] transition-colors duration-300"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#C9A96E]/10 group-hover:bg-[#C9A96E] transition-colors mb-6">
                  <Icon className="h-7 w-7 text-[#C9A96E] group-hover:text-[#0A1628] transition-colors" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#0A1628] group-hover:text-white transition-colors mb-3">
                  {t(`${feature.key}.title`)}
                </h3>
                <p className="text-[#0A1628]/70 group-hover:text-white/80 transition-colors leading-relaxed">
                  {t(`${feature.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
