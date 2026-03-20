'use client';

import { useTranslations } from 'next-intl';
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const testimonialKeys = ['testimonial1', 'testimonial2', 'testimonial3'] as const;

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`Rating: ${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? 'fill-[#C9A96E] text-[#C9A96E]' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const t = useTranslations('home.testimonials');

  const testimonials = testimonialKeys.map((key) => ({
    key,
    name: t(`${key}.author`),
    initials: t(`${key}.author`).split(' ').map((n) => n[0]).join(''),
    role: t(`${key}.role`),
    text: t(`${key}.text`),
    rating: 5,
  }));

  const reviewsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Fibramar Tarraco',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: testimonials.length.toString(),
    },
    review: testimonials.map((item) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: item.name },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: item.rating.toString(),
        bestRating: '5',
      },
      reviewBody: item.text,
    })),
  };

  return (
    <section 
      className="py-24 bg-[#F8F6F2]"
      aria-label="Customer testimonials and reviews"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-4">
            {t('title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.key}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="h-14 w-14 bg-[#0A1628]">
                  <AvatarFallback className="bg-[#0A1628] text-[#C9A96E] font-semibold text-lg">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-[#0A1628]">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-[#0A1628]/60">{testimonial.role}</p>
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>
              <p className="text-[#0A1628]/70 leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
