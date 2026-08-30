import type { Metadata } from 'next';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'SEO Services in Bangladesh',
  description: 'SEO Services in Bangladesh — Kanok Miah provides SEO and digital marketing services tailored to the Bangladesh market.',
};

export default function SeoBangladeshPage() {
  return (
    <section className="bg-[var(--color-paper)]">
      <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
        <p className="text-sm text-[var(--color-signal-dk)]">
          <Link href="/services" className="hover:underline">Services</Link> / <Link href="/services/seo" className="hover:underline">Seo</Link> / Bangladesh
        </p>
        <span className="inline-block mt-4 rounded-[var(--radius-pill)] bg-[var(--color-signal)]/10 px-3 py-1 text-xs font-medium text-[var(--color-signal-dk)]">BANGLADESH</span>
        <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">SEO Services in Bangladesh</h1>
        <div className="mt-6 rounded-[var(--radius-card)] border border-[var(--color-signal)]/20 bg-[var(--color-signal)]/5 p-6">
          <h2 className="font-display text-xl text-[var(--color-forest)]">Quick answer</h2>
          <p className="mt-2 text-[var(--color-graphite)]">
            Kanok Miah provides seo services to Bangladesh businesses, with strategies adapted to local search behavior and competition.
          </p>
        </div>
        <div className="mt-8 space-y-4 text-[var(--color-graphite)]">
          <p>The Bangladesh market has specific search patterns, competitive dynamics, and customer expectations. I tailor the strategy to what works in this market — not a generic template.</p>
        </div>
        <div className="mt-12">
          <Link href="/contact" className="inline-block rounded-[var(--radius-card)] bg-[var(--color-signal)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--color-signal-dk)] transition-colors">Get a free audit</Link>
        </div>
      </div>
    </section>
  );
}
