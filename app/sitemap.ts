import type { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';

const routes = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/servicios', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/proyectos', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/nosotros', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/contacto', priority: 0.8, changeFrequency: 'monthly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fibramartarraco.com';
  const sitemap: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      sitemap.push({
        url: `${baseUrl}/${locale}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}${route.path}`])
          ),
        },
      });
    }
  }

  return sitemap;
}
