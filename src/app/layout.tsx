import type { Metadata } from 'next';
import { Public_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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

export const metadata: Metadata = {
  title: {
    template: '%s | Kanok Miah',
    default: 'Kanok Miah | Digital Growth & AI SEO Consultant',
  },
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Expanded:wght@700;800;900&family=Anek+Bangla:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${publicSans.variable} ${jetbrainsMono.variable} font-body`}>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
