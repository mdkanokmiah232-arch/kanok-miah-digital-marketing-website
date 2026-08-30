import type { Metadata } from 'next';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Industrial SEO',
  description: 'Industrial and manufacturing SEO services for B2B companies.',
};

export default function IndustrialSEOPage() {
  return (
    <>
      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="max-w-3xl">
            <Badge>SCOPE</Badge>
            <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">Industrial & manufacturing SEO</h1>
            <p className="mt-4 text-lg text-[var(--color-graphite)]">Industrial buyers research online before they contact a supplier. If your website does not appear when they search, you lose the bid before it starts.</p>
          </div>
          <div className="mt-8 rounded-[var(--radius-card)] border border-[var(--color-signal)]/20 bg-[var(--color-signal)]/5 p-6">
            <h2 className="font-display text-xl text-[var(--color-forest)]">Quick answer</h2>
            <p className="mt-2 text-[var(--color-graphite)]">Industrial SEO optimizes your website to rank for B2B manufacturing and industrial queries, targeting the technical keywords and procurement terms that industrial buyers use.</p>
          </div>
        </div>
      </section>
      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <h2 className="font-display text-2xl text-[var(--color-forest)]">How the work runs</h2>
          <div className="mt-6 space-y-4 text-[var(--color-graphite)]">
            <p>Industrial SEO is different from consumer SEO. The search volume is lower, but each lead is worth significantly more. I target the technical specifications, material types, and application queries that procurement teams search for.</p>
            <p>Content is built around use cases, compliance standards, and technical documentation — the information industrial buyers need before they send an RFQ.</p>
          </div>
        </div>
      </section>
      <section className="bg-[var(--color-forest)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
          <h2 className="font-display text-3xl">Generate B2B leads</h2>
          <p className="mt-4 text-lg text-white/80">Book a free industrial SEO audit. I will show you the keywords your competitors rank for that you are missing.</p>
          <Link href="/contact" className="mt-8 inline-block rounded-[var(--radius-card)] bg-[var(--color-signal)] px-8 py-4 text-sm font-medium text-white hover:bg-[var(--color-signal-dk)] transition-colors">Book a free audit</Link>
        </div>
      </section>
    </>
  );
}
