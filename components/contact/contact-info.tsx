import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ContactInfo() {
  const t = useTranslations('contact');

  const whatsappNumber = '34977123456';
  const whatsappMessage = encodeURIComponent('Hola, me gustaría solicitar información sobre sus servicios de pintura náutica.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const contactItems = [
    {
      icon: MapPin,
      label: t('info.address.label'),
      value: t('info.address.value'),
      href: 'https://maps.google.com/?q=Puerto+de+Tarragona',
    },
    {
      icon: Phone,
      label: t('info.phone.label'),
      value: t('info.phone.value'),
      href: 'tel:+34977123456',
    },
    {
      icon: Mail,
      label: t('info.email.label'),
      value: t('info.email.value'),
      href: 'mailto:info@fibramartarraco.com',
    },
    {
      icon: Clock,
      label: t('info.hours.label'),
      value: t('info.hours.value'),
      href: null,
    },
  ];

  return (
    <div>
      <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-8">
        {t('info.title')}
      </h2>

      <div className="space-y-6">
        {contactItems.map((item, index) => (
          <div key={index} className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
              <item.icon className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-foreground hover:text-accent transition-colors whitespace-pre-line"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-foreground whitespace-pre-line">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* WhatsApp CTA */}
      <div className="mt-10 p-6 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20">
        <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
          {t('whatsapp.title')}
        </h3>
        <p className="text-muted-foreground mb-4">
          {t('whatsapp.description')}
        </p>
        <Button
          asChild
          className="w-full bg-[#25D366] hover:bg-[#22c55e] text-white"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" />
            {t('whatsapp.button')}
          </a>
        </Button>
      </div>
    </div>
  );
}
