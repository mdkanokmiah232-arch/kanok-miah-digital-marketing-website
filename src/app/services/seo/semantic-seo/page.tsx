import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Semantic SEO',
  description: 'Semantic SEO services: topical maps, entity SEO, and topical authority building.',
};

export default function SemanticSEOPage() {
  return (
    <section className="bg-[var(--color-paper)]">
      <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
        <p className="text-sm text-[var(--color-signal-dk)]"><Link href="/services/seo" className="hover:underline">SEO Services</Link> / Semantic SEO</p>
        <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">Semantic SEO & topical authority</h1>
        <div className="mt-6 rounded-[var(--radius-card)] border border-[var(--color-signal)]/20 bg-[var(--color-signal)]/5 p-6">
          <h2 className="font-display text-xl text-[var(--color-forest)]">Quick answer</h2>
          <p className="mt-2 text-[var(--color-graphite)]">Semantic SEO builds topical authority through entity optimization, content architecture, and structured data — telling Google you are the definitive source on a topic.</p>
        </div>
        <div className="mt-8 space-y-4 text-[var(--color-graphite)]">
          <p>Google does not rank pages — it ranks entities. Semantic SEO builds your entity&apos;s authority through topical maps, internal linking clusters, and content that covers every angle of a topic.</p>
          <p>I build topical maps that define the complete knowledge graph for your service area, then create content that fills every gap.</p>
        </div>
        <div className="mt-12">
          <Link href="/contact" className="inline-block rounded-[var(--radius-card)] bg-[var(--color-signal)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--color-signal-dk)] transition-colors">Get a free audit</Link>
        </div>
      </div>
    </section>
  );
}
