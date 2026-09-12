import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gościniec w Ratuszu — Ogrodzieniec | Koncepcja strony',
  description:
    'Demonstracyjna propozycja strony Gościńca w Ratuszu: pokoje gościnne, przyjęcia i wypoczynek na Jurze Krakowsko-Częstochowskiej.',
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
