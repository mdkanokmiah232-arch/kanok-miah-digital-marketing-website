import type { Metadata } from 'next';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Digital Marketing',
  description: 'Digital marketing services: SEO, SEM, social media, and paid advertising.',
};

const subservices = [
  { title: 'Social Media Marketing', description: 'Facebook, Instagram, and YouTube marketing.', href: '/services/digital-marketing/social-media-marketing' },
  { title: 'Search Engine Marketing', description: 'Google Ads and paid search campaigns.', href: '/services/digital-marketing/search-engine-marketing' },
  { title: 'Branding', description: 'Brand identity and positioning.', href: '/services/branding' },
];

export default function DigitalMarketingPage() {
  return (
    <>
      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="max-w-3xl">
            <Badge>SCOPE</Badge>
            <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">Digital marketing services</h1>
            <p className="mt-4 text-lg text-[var(--color-graphite)]">SEO is the long game. But sometimes you need results this month. Digital marketing covers the full spectrum: organic, paid, and social — working together.</p>
          </div>
          <div className="mt-8 rounded-[var(--radius-card)] border border-[var(--color-signal)]/20 bg-[var(--color-signal)]/5 p-6">
            <h2 className="font-display text-xl text-[var(--color-forest)]">Quick answer</h2>
            <p className="mt-2 text-[var(--color-graphite)]">Digital marketing services combine organic search, paid advertising, and social media to drive traffic, leads, and revenue across all channels.</p>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <h2 className="font-display text-2xl text-[var(--color-forest)]">Services</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subservices.map((s) => (
              <Link key={s.href} href={s.href}>
                <Card hover className="h-full">
                  <h3 className="font-display text-lg text-[var(--color-forest)]">{s.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-graphite)]">{s.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[var(--color-forest)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
          <h2 className="font-display text-3xl">Need a full strategy?</h2>
          <p className="mt-4 text-lg text-white/80">Book a free 30-minute call. I will assess your current channels and recommend the right mix.</p>
          <Link href="/contact" className="mt-8 inline-block rounded-[var(--radius-card)] bg-[var(--color-signal)] px-8 py-4 text-sm font-medium text-white hover:bg-[var(--color-signal-dk)] transition-colors">Book a free call</Link>
        </div>
      </section>
    </>
  );
}
