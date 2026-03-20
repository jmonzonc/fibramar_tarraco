'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function ContactForm() {
  const t = useTranslations('contact.form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setStatus('success');
  };

  const serviceOptions = [
    { value: 'painting', label: t('serviceOptions.painting') },
    { value: 'fiberglass', label: t('serviceOptions.fiberglass') },
    { value: 'gelcoat', label: t('serviceOptions.gelcoat') },
    { value: 'osmosis', label: t('serviceOptions.osmosis') },
    { value: 'polishing', label: t('serviceOptions.polishing') },
    { value: 'custom', label: t('serviceOptions.custom') },
    { value: 'other', label: t('serviceOptions.other') },
  ];

  return (
    <div className="bg-card rounded-2xl border border-border p-8 lg:p-10">
      <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-8">
        {t('title')}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">{t('name')}</Label>
            <Input
              id="name"
              name="name"
              required
              placeholder="Juan García"
              className="h-12"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">{t('email')}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="juan@ejemplo.com"
              className="h-12"
            />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="phone">{t('phone')}</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+34 600 000 000"
              className="h-12"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="service">{t('service')}</Label>
            <Select name="service">
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Seleccionar servicio" />
              </SelectTrigger>
              <SelectContent>
                {serviceOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="boatType">{t('boatType')}</Label>
            <Input
              id="boatType"
              name="boatType"
              placeholder="Ej: Sunseeker Manhattan 60"
              className="h-12"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="boatLength">{t('boatLength')}</Label>
            <Input
              id="boatLength"
              name="boatLength"
              type="number"
              placeholder="Ej: 18"
              className="h-12"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">{t('message')}</Label>
          <Textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Describa su proyecto o consulta..."
            className="resize-none"
          />
        </div>

        {status === 'success' && (
          <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-800">
            {t('success')}
          </div>
        )}

        {status === 'error' && (
          <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800">
            {t('error')}
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          size="lg"
          className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
        >
          {isSubmitting ? (
            <>
              <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              {t('submitting')}
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              {t('submit')}
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
