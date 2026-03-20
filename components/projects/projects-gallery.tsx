'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight, Paintbrush, Wrench, RefreshCw, Cog } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Category = 'all' | 'painting' | 'repair' | 'restoration' | 'custom';

export function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState<Category>('all');
  const t = useTranslations();
  const locale = useLocale();

  const filters: { id: Category; label: string; icon: typeof Paintbrush }[] = [
    { id: 'all', label: t('projects.filters.all'), icon: RefreshCw },
    { id: 'painting', label: t('projects.filters.painting'), icon: Paintbrush },
    { id: 'repair', label: t('projects.filters.repair'), icon: Wrench },
    { id: 'restoration', label: t('projects.filters.restoration'), icon: RefreshCw },
    { id: 'custom', label: t('projects.filters.custom'), icon: Cog },
  ];

  const projects = [
    {
      id: 1,
      title: t('projects.gallery.project1.title'),
      category: 'restoration' as Category,
      categoryLabel: t('projects.gallery.project1.category'),
      description: t('projects.gallery.project1.description'),
    },
    {
      id: 2,
      title: t('projects.gallery.project2.title'),
      category: 'painting' as Category,
      categoryLabel: t('projects.gallery.project2.category'),
      description: t('projects.gallery.project2.description'),
    },
    {
      id: 3,
      title: t('projects.gallery.project3.title'),
      category: 'repair' as Category,
      categoryLabel: t('projects.gallery.project3.category'),
      description: t('projects.gallery.project3.description'),
    },
    {
      id: 4,
      title: t('projects.gallery.project4.title'),
      category: 'repair' as Category,
      categoryLabel: t('projects.gallery.project4.category'),
      description: t('projects.gallery.project4.description'),
    },
    {
      id: 5,
      title: t('projects.gallery.project5.title'),
      category: 'custom' as Category,
      categoryLabel: t('projects.gallery.project5.category'),
      description: t('projects.gallery.project5.description'),
    },
    {
      id: 6,
      title: t('projects.gallery.project6.title'),
      category: 'restoration' as Category,
      categoryLabel: t('projects.gallery.project6.category'),
      description: t('projects.gallery.project6.description'),
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? 'default' : 'outline'}
              onClick={() => setActiveFilter(filter.id)}
              className={activeFilter === filter.id 
                ? 'bg-primary text-primary-foreground' 
                : 'hover:bg-accent/10 hover:text-accent hover:border-accent'
              }
            >
              <filter.icon className="mr-2 h-4 w-4" />
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-xl"
            >
              {/* Image Placeholder */}
              <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-accent/20 flex items-center justify-center">
                      <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-muted-foreground text-xs">
                      Imagen del proyecto
                    </p>
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                    {t('projects.gallery.viewDetails')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full mb-3">
                  {project.categoryLabel}
                </span>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            ¿Le gustaría ver su embarcación transformada?
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href={`/${locale}/contacto`}>
              {t('nav.requestQuote')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
