import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n/config';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: '#0A1628',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const metadataByLocale = {
  es: {
    title: {
      default: 'Fibramar Tarraco | Composite y Pintura Náutica de Lujo en Tarragona',
      template: '%s | Fibramar Tarraco',
    },
    description: 'Especialistas en composite con fibra de carbono, kevlar y pintura náutica desde 1995. Yates de lujo, regatas y grandes esloras. Puerto de Tarragona.',
    keywords: ['composite náutico', 'pintura náutica Tarragona', 'fibra de carbono barcos', 'antifouling', 'gel-coat', 'reparación yates Tarragona', 'yacht repair Spain', 'refit veleros'],
    ogTitle: 'Composite y Pintura Náutica de Lujo | Fibramar Tarraco',
    ogDescription: '30 años de experiencia en composite avanzado y pintura náutica para yates de lujo. Puerto de Tarragona.',
    locale: 'es_ES',
  },
  ca: {
    title: {
      default: 'Fibramar Tarraco | Composite i Pintura Nàutica de Luxe a Tarragona',
      template: '%s | Fibramar Tarraco',
    },
    description: 'Especialistes en composite amb fibra de carboni, kevlar i pintura nàutica des de 1995. Iots de luxe, regates i grans eslores. Port de Tarragona.',
    keywords: ['composite nàutic', 'pintura nàutica Tarragona', 'fibra de carboni vaixells', 'antifouling', 'gel-coat', 'reparació iots Tarragona', 'yacht repair Spain', 'refit velers'],
    ogTitle: 'Composite i Pintura Nàutica de Luxe | Fibramar Tarraco',
    ogDescription: '30 anys d\'experiència en composite avançat i pintura nàutica per a iots de luxe. Port de Tarragona.',
    locale: 'ca_ES',
  },
  en: {
    title: {
      default: 'Fibramar Tarraco | Luxury Composite and Marine Painting in Tarragona',
      template: '%s | Fibramar Tarraco',
    },
    description: 'Specialists in carbon fiber composite, kevlar and marine painting since 1995. Luxury yachts, racing and large vessels. Port of Tarragona.',
    keywords: ['marine composite', 'marine painting Tarragona', 'carbon fiber boats', 'antifouling', 'gel-coat', 'yacht repair Tarragona', 'yacht repair Spain', 'sailboat refit'],
    ogTitle: 'Luxury Composite and Marine Painting | Fibramar Tarraco',
    ogDescription: '30 years of experience in advanced composite and marine painting for luxury yachts. Port of Tarragona.',
    locale: 'en_US',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = 'https://fibramartarraco.com';
  const localeData = metadataByLocale[locale as keyof typeof metadataByLocale] || metadataByLocale.es;

  return {
    metadataBase: new URL(baseUrl),
    title: localeData.title,
    description: localeData.description,
    keywords: localeData.keywords,
    authors: [{ name: 'Fibramar Tarraco' }],
    creator: 'Fibramar Tarraco',
    publisher: 'Fibramar Tarraco',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    robots: { index: true, follow: true },
    alternates: {
      canonical: `${baseUrl}/${locale}/`,
      languages: {
        es: `${baseUrl}/es/`,
        ca: `${baseUrl}/ca/`,
        en: `${baseUrl}/en/`,
      },
    },
    openGraph: {
      type: 'website',
      locale: localeData.locale,
      url: `${baseUrl}/${locale}/`,
      siteName: 'Fibramar Tarraco',
      title: localeData.ogTitle,
      description: localeData.ogDescription,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Fibramar Tarraco - Pintura Náutica de Lujo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: localeData.ogTitle,
      description: localeData.ogDescription,
      images: ['/og-image.jpg'],
    },
  };
}

function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'BoatRepairShop'],
        '@id': 'https://fibramartarraco.com/#business',
        name: 'Fibramar Tarraco',
        description: 'Especialistas en composite avanzado y pintura náutica de lujo desde 1995. Fibra de carbono, kevlar, antifouling, gel-coat. Yates y regatas.',
        url: 'https://fibramartarraco.com',
        telephone: '+34609874869',
        email: 'info@fibramartarraco.com',
        foundingDate: '1995',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Muelle de Lérida B1 local 15',
          addressLocality: 'Tarragona',
          addressRegion: 'Cataluña',
          postalCode: '43004',
          addressCountry: 'ES',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '41.1189',
          longitude: '1.2445',
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '18:00',
        },
        sameAs: [
          'https://instagram.com/fibramar_tarraco_sl',
          'https://facebook.com/fibramartarraco',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Servicios Náuticos',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Composite Avanzado',
                description: 'Fabricación a medida con fibra de carbono, kevlar y fibra de vidrio para náutica de lujo',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Pintura y Tratamientos Náuticos',
                description: 'Antifouling, gel-coat original y acabados especializados para embarcaciones',
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
