'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Menu, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { LanguageSwitcher } from '@/components/layout/language-switcher';

const WHATSAPP_NUMBER = '34609874869';
const WHATSAPP_MESSAGE = 'Hola, me interesa un presupuesto';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: t('services'), href: `/${locale}/servicios` },
    { name: t('projects'), href: `/${locale}/proyectos` },
    { name: t('about'), href: `/${locale}/nosotros` },
    { name: t('contact'), href: `/${locale}/contacto` },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname.startsWith(href);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A1628]/95 backdrop-blur-md shadow-lg'
          : 'bg-[#0A1628]/80 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center group">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#C9A96E] transition-colors group-hover:text-[#D4B87A]">
              FIBRAMAR TARRACO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-[#C9A96E] ${
                  isActive(item.href)
                    ? 'text-[#C9A96E]'
                    : 'text-white/80'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA & Language */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <LanguageSwitcher />
            <Button
              asChild
              className="bg-[#C9A96E] text-[#0A1628] hover:bg-[#D4B87A] font-semibold"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                {t('requestQuote')}
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-3 lg:hidden">
            <LanguageSwitcher />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                  aria-label="Abrir menú"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-80 bg-[#0A1628] border-[#C9A96E]/20"
              >
                <SheetHeader>
                  <SheetTitle className="font-serif text-xl text-[#C9A96E]">
                    FIBRAMAR TARRACO
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-2">
                  <Link
                    href={`/${locale}`}
                    className={`px-4 py-3 text-base font-medium uppercase tracking-wider transition-colors rounded-lg ${
                      pathname === `/${locale}` || pathname === `/${locale}/`
                        ? 'text-[#C9A96E] bg-[#C9A96E]/10'
                        : 'text-white/80 hover:text-white hover:bg-white/5'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {t('home')}
                  </Link>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`px-4 py-3 text-base font-medium uppercase tracking-wider transition-colors rounded-lg ${
                        isActive(item.href)
                          ? 'text-[#C9A96E] bg-[#C9A96E]/10'
                          : 'text-white/80 hover:text-white hover:bg-white/5'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="mt-6 px-4">
                    <Button
                      asChild
                      className="w-full bg-[#C9A96E] text-[#0A1628] hover:bg-[#D4B87A] font-semibold"
                    >
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                        onClick={() => setIsOpen(false)}
                      >
                        <MessageCircle className="h-4 w-4" />
                        {t('requestQuote')}
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
