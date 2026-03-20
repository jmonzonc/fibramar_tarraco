import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { locales } from './config';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  
  if (!locale || !hasLocale(locales, locale)) {
    locale = 'es';
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
