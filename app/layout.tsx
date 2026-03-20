import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fibramar Tarraco | Especialistas en Composite y Pintura Náutica de Lujo',
  description: 'Desde 1995, líderes en reparación de fibra de vidrio, pintura náutica premium y trabajos de composite para yates y embarcaciones de lujo en el Puerto de Tarragona.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
