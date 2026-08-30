import type { Metadata } from 'next';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'E-commerce SEO',
  description: 'E-commerce SEO services: more organic traffic, more sales for your online store.',
};

export default function EcommerceSEOPage() {
  return (
    <>
      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="max-w-3xl">
            <Badge>SCOPE</Badge>
            <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">E-commerce SEO services</h1>
            <p className="mt-4 text-lg text-[var(--color-graphite)]">Your product pages are competing with thousands of similar listings. E-commerce SEO ensures the right customers find your products — not your competitor&apos;s.</p>
          </div>
          <div className="mt-8 rounded-[var(--radius-card)] border border-[var(--color-signal)]/20 bg-[var(--color-signal)]/5 p-6">
            <h2 className="font-display text-xl text-[var(--color-forest)]">Quick answer</h2>
            <p className="mt-2 text-[var(--color-graphite)]">E-commerce SEO optimizes your product pages, category structure, and technical setup so your products rank higher in Google Shopping and organic results, driving more qualified traffic and sales.</p>
          </div>
        </div>
      </section>
      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <h2 className="font-display text-2xl text-[var(--color-forest)]">How the work runs</h2>
          <div className="mt-6 space-y-4 text-[var(--color-graphite)]">
            <p>I optimize product pages for search intent, implement structured data (Product schema), fix crawl issues specific to e-commerce (faceted navigation, duplicate content), and build category authority through content and internal linking.</p>
            <p>The focus is on revenue per organic session, not just traffic volume. I track which products drive profit and optimize those pages first.</p>
          </div>
        </div>
      </section>
      <section className="bg-[var(--color-forest)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
          <h2 className="font-display text-3xl">More organic sales</h2>
          <p className="mt-4 text-lg text-white/80">Book a free e-commerce SEO audit. I will show you the technical issues and content gaps costing you sales.</p>
          <Link href="/contact" className="mt-8 inline-block rounded-[var(--radius-card)] bg-[var(--color-signal)] px-8 py-4 text-sm font-medium text-white hover:bg-[var(--color-signal-dk)] transition-colors">Book a free audit</Link>
        </div>
      </section>
    </>
  );
}
