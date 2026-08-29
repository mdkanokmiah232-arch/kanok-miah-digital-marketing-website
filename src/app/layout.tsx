import type { Metadata } from 'next';
import { Archivo_Expanded, Public_Sans, JetBrains_Mono, Anek_Bangla } from 'next/font/google';
import './globals.css';

const archivoExpanded = Archivo_Expanded({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: '700',
});

const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-data',
  display: 'swap',
  weight: '500',
});

const anekBangla = Anek_Bangla({
  subsets: ['bengali'],
  variable: '--font-bengali',
  display: 'swap',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Kanok Miah | Digital Growth & AI SEO Consultant',
  description: 'Kanok Miah — a results-driven digital marketing expert in Dhaka, Bangladesh. Specializing in SEO, Facebook Ads, Google Ads, Social Media Marketing, Content Marketing, and Web Development.',
  keywords: [
    'digital marketing expert bangladesh',
    'SEO specialist dhaka',
    'facebook ads expert',
    'google ads specialist',
    'social media marketing bangladesh',
    'kanok miah',
  ],
  openGraph: {
    title: 'Kanok Miah | Digital Growth & AI SEO Consultant',
    description: 'Transform your business with data-driven digital marketing strategies. SEO, Ads, Social Media, and Web Development.',
    url: 'https://kanokmiah.com',
    siteName: 'Kanok Miah Digital Marketing',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kanok Miah | Digital Growth & AI SEO Consultant',
    description: 'Transform your business with data-driven digital marketing strategies.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivoExpanded.variable} ${publicSans.variable} ${jetbrainsMono.variable} ${anekBangla.variable}`}>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
