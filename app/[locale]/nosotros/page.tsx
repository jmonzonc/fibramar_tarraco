import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { Award, Heart, Lightbulb, Target, Users, Building2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.about' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
  };
}

export default async function NosotrosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();

  const values = [
    {
      icon: Award,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description'),
    },
    {
      icon: Target,
      title: t('about.values.integrity.title'),
      description: t('about.values.integrity.description'),
    },
    {
      icon: Lightbulb,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description'),
    },
    {
      icon: Heart,
      title: t('about.values.passion.title'),
      description: t('about.values.passion.description'),
    },
  ];

  const teamMembers = [
    { name: 'Carlos Martínez', role: 'Fundador y Director', years: '29 años' },
    { name: 'Ana García', role: 'Jefa de Pintura', years: '18 años' },
    { name: 'Miguel Sánchez', role: 'Especialista en Composite', years: '15 años' },
    { name: 'Laura Fernández', role: 'Coordinadora de Proyectos', years: '12 años' },
  ];

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
            {t('about.hero.title')}
          </h1>
          <p className="mt-6 text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            {t('about.hero.subtitle')}
          </p>
          <div className="mt-4 w-20 h-1 bg-accent mx-auto" />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            {/* Image Placeholder */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted border border-border">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                      <Building2 className="w-10 h-10 text-accent" />
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Imagen de las instalaciones de Fibramar Tarraco
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-6 -left-6 w-full h-full rounded-2xl bg-accent/10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground tracking-tight mb-8">
                {t('about.story.title')}
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  {t('about.story.content')}
                </p>
                <p>
                  {t('about.story.content2')}
                </p>
                <p>
                  {t('about.story.content3')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
              {t('about.values.title')}
            </h2>
            <div className="mt-4 w-20 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-card rounded-2xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
              {t('about.team.title')}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('about.team.description')}
            </p>
            <div className="mt-4 w-20 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group text-center"
              >
                {/* Avatar Placeholder */}
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="w-full h-full rounded-full bg-muted border-4 border-background shadow-lg overflow-hidden flex items-center justify-center group-hover:border-accent transition-colors">
                    <Users className="w-16 h-16 text-muted-foreground/50" />
                  </div>
                  {/* Accent ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-accent/0 group-hover:border-accent/50 transition-colors scale-110" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-accent font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.years} de experiencia</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-primary-foreground tracking-tight mb-8">
                {t('about.facilities.title')}
              </h2>
              <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
                {t('about.facilities.description')}
              </p>
              <ul className="space-y-4">
                {[
                  'Cabina de pintura climatizada de 25 metros',
                  'Zona de laminado con control de humedad',
                  'Área de acabados y pulido',
                  'Taller de carpintería náutica',
                  'Almacén de materiales premium',
                  'Oficinas y sala de reuniones con clientes',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-primary-foreground/90">
                    <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href={`/${locale}/contacto`}>
                    Visitar nuestras instalaciones
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-primary-foreground/5 border border-primary-foreground/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                      <Building2 className="w-10 h-10 text-accent" />
                    </div>
                    <p className="text-primary-foreground/60 text-sm">
                      Vista de las instalaciones
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
