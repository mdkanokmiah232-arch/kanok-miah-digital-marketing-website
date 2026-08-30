import type { Metadata } from 'next';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Locations',
  description: 'SEO consultant serving Bangladesh, UK, USA, Canada, UAE, and Australia.',
};

const countries = [
  { name: 'Bangladesh', href: '/locations/bangladesh', flag: '🇧🇩' },
  { name: 'United Kingdom', href: '/locations/uk', flag: '🇬🇧' },
  { name: 'United States', href: '/locations/usa', flag: '🇺🇸' },
  { name: 'Canada', href: '/locations/canada', flag: '🇨🇦' },
  { name: 'UAE', href: '/locations/uae', flag: '🇦🇪' },
  { name: 'Australia', href: '/locations/australia', flag: '🇦🇺' },
];

export default function LocationsPage() {
  return (
    <>
      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <Badge>WHERE I WORK</Badge>
          <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">Where I work</h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--color-graphite)]">
            I serve clients across six countries. Each market has different search behavior, competition, and customer expectations. I adapt the strategy to the market — not the other way around.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {countries.map((c) => (
              <Link key={c.href} href={c.href}>
                <Card hover className="h-full">
                  <span className="text-3xl">{c.flag}</span>
                  <h2 className="mt-3 font-display text-xl text-[var(--color-forest)]">{c.name}</h2>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-forest)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
          <h2 className="font-display text-3xl">Not sure which market applies?</h2>
          <p className="mt-4 text-lg text-white/80">Book a free call. I will help you identify the right market and strategy for your business.</p>
          <Link href="/contact" className="mt-8 inline-block rounded-[var(--radius-card)] bg-[var(--color-signal)] px-8 py-4 text-sm font-medium text-white hover:bg-[var(--color-signal-dk)] transition-colors">Book a free call</Link>
        </div>
      </section>
    </>
  );
}
