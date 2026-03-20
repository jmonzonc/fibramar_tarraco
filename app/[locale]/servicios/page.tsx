import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { Paintbrush, Layers, Droplets, Wrench, Sparkles, Cog, Check, ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.services' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
  };
}

export default async function ServiciosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();

  const services = [
    {
      id: 'fibra-vidrio',
      icon: Layers,
      title: t('services.list.fiberglass.title'),
      description: t('services.list.fiberglass.description'),
      features: t.raw('services.list.fiberglass.features') as string[],
    },
    {
      id: 'pintura',
      icon: Paintbrush,
      title: t('services.list.painting.title'),
      description: t('services.list.painting.description'),
      features: t.raw('services.list.painting.features') as string[],
    },
    {
      id: 'gelcoat',
      icon: Droplets,
      title: t('services.list.gelcoat.title'),
      description: t('services.list.gelcoat.description'),
      features: t.raw('services.list.gelcoat.features') as string[],
    },
    {
      id: 'osmosis',
      icon: Wrench,
      title: t('services.list.osmosis.title'),
      description: t('services.list.osmosis.description'),
      features: t.raw('services.list.osmosis.features') as string[],
    },
    {
      id: 'pulido',
      icon: Sparkles,
      title: t('services.list.polishing.title'),
      description: t('services.list.polishing.description'),
      features: t.raw('services.list.polishing.features') as string[],
    },
    {
      id: 'especiales',
      icon: Cog,
      title: t('services.list.custom.title'),
      description: t('services.list.custom.description'),
      features: t.raw('services.list.custom.features') as string[],
    },
  ];

  const whatsappNumber = '34977123456';
  const whatsappMessage = encodeURIComponent('Hola, me gustaría solicitar información sobre sus servicios.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A96E' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight">
            {t('services.hero.title')}
          </h1>
          <p className="mt-6 text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            {t('services.hero.subtitle')}
          </p>
          <div className="mt-4 w-20 h-1 bg-accent mx-auto" />
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid gap-12 lg:grid-cols-2 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
                    {service.title}
                  </h2>
                  <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mt-8 space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-accent" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                      <Link href={`/${locale}/contacto`}>
                        {t('nav.requestQuote')}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Image Placeholder */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted border border-border">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                          <service.icon className="w-8 h-8 text-accent" />
                        </div>
                        <p className="text-muted-foreground text-sm">
                          Imagen de {service.title.toLowerCase()}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Decorative accent */}
                  <div className={`absolute -z-10 w-full h-full rounded-2xl bg-accent/10 ${
                    index % 2 === 0 ? 'top-4 left-4' : 'top-4 -left-4'
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
              {t('services.cta.title')}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              {t('services.cta.description')}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#25D366] hover:bg-[#22c55e] text-white"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href={`/${locale}/contacto`}>
                  {t('nav.requestQuote')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
