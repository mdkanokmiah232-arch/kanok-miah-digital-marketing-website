import type { Metadata } from 'next';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'International SEO',
  description: 'International SEO services: multi-country site architecture and hreflang.',
};

export default function InternationalSEOPage() {
  return (
    <>
      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="max-w-3xl">
            <Badge>SCOPE</Badge>
            <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">International SEO services</h1>
            <p className="mt-4 text-lg text-[var(--color-graphite)]">Expanding to multiple countries is not just translating pages. It requires a technical architecture that tells Google which page serves which market — and a content strategy that earns authority in each one.</p>
          </div>
          <div className="mt-8 rounded-[var(--radius-card)] border border-[var(--color-signal)]/20 bg-[var(--color-signal)]/5 p-6">
            <h2 className="font-display text-xl text-[var(--color-forest)]">Quick answer</h2>
            <p className="mt-2 text-[var(--color-graphite)]">International SEO builds the technical infrastructure (hreflang, URL structure, CDN) and content strategy needed to rank in multiple countries without cannibalizing your own pages.</p>
          </div>
        </div>
      </section>
      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <h2 className="font-display text-2xl text-[var(--color-forest)]">How the work runs</h2>
          <div className="mt-6 space-y-4 text-[var(--color-graphite)]">
            <p>I design the URL structure, implement hreflang annotations, configure geo-targeting signals, and build a content strategy that creates genuinely different value for each market.</p>
            <p>The goal is not to create 10 versions of the same page. It is to create 10 pages that each serve a specific market with relevant content, pricing, and proof — then tell Google exactly which page is for whom.</p>
          </div>
        </div>
      </section>
      <section className="bg-[var(--color-forest)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
          <h2 className="font-display text-3xl">Scale globally</h2>
          <p className="mt-4 text-lg text-white/80">Book a free international SEO consultation. I will review your current setup and recommend the right architecture for your target markets.</p>
          <Link href="/contact" className="mt-8 inline-block rounded-[var(--radius-card)] bg-[var(--color-signal)] px-8 py-4 text-sm font-medium text-white hover:bg-[var(--color-signal-dk)] transition-colors">Book a free call</Link>
        </div>
      </section>
    </>
  );
}
