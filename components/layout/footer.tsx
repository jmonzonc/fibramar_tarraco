'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  const services = [
    { name: 'Composite Avanzado', href: `/${locale}/servicios#composite` },
    { name: 'Pintura y Tratamientos', href: `/${locale}/servicios#pintura` },
  ];

  const company = [
    { name: t('nav.about'), href: `/${locale}/nosotros` },
    { name: t('nav.projects'), href: `/${locale}/proyectos` },
    { name: t('nav.contact'), href: `/${locale}/contacto` },
  ];

  return (
    <footer className="relative bg-[#060E1A] text-white">
      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href={`/${locale}`} className="inline-block mb-6">
              <span className="font-serif text-2xl font-bold text-[#C9A96E]">
                FIBRAMAR TARRACO
              </span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              Especialistas en composite y pintura náutica de lujo desde 1995. 
              Puerto de Tarragona.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-[#C9A96E] hover:text-[#0A1628]"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-[#C9A96E] hover:text-[#0A1628]"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#C9A96E] mb-6">
              {t('footer.services')}
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-white/70 hover:text-[#C9A96E] transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#C9A96E] mb-6">
              Empresa
            </h3>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[#C9A96E] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#C9A96E] mb-6">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-[#C9A96E] shrink-0" />
                <span className="text-sm text-white/70">
                  Puerto de Tarragona<br />
                  Muelle de Lérida B1 local 15
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#C9A96E] shrink-0" />
                <a
                  href="tel:+34609874869"
                  className="text-sm text-white/70 hover:text-[#C9A96E] transition-colors"
                >
                  (+34) 609 874 869
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#C9A96E] shrink-0" />
                <a
                  href="mailto:info@fibramartarraco.com"
                  className="text-sm text-white/70 hover:text-[#C9A96E] transition-colors"
                >
                  info@fibramartarraco.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} Fibramar Tarraco. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link
                href={`/${locale}/privacidad`}
                className="text-sm text-white/50 hover:text-white/80 transition-colors"
              >
                Política de privacidad
              </Link>
              <Link
                href={`/${locale}/aviso-legal`}
                className="text-sm text-white/50 hover:text-white/80 transition-colors"
              >
                Aviso legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
