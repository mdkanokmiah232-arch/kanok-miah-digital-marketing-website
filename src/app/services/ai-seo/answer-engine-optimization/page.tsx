import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Answer Engine Optimization',
  description: 'AEO services: optimize for AI-powered answer engines.',
};

export default function AEOPage() {
  return (
    <section className="bg-[var(--color-paper)]">
      <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
        <p className="text-sm text-[var(--color-signal-dk)]"><Link href="/services/ai-seo" className="hover:underline">AI SEO</Link> / AEO</p>
        <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">Answer engine optimization (AEO)</h1>
        <div className="mt-6 rounded-[var(--radius-card)] border border-[var(--color-signal)]/20 bg-[var(--color-signal)]/5 p-6">
          <h2 className="font-display text-xl text-[var(--color-forest)]">Quick answer</h2>
          <p className="mt-2 text-[var(--color-graphite)]">AEO optimizes your content to be extracted and cited by AI-powered search engines like Google AI Overviews, Perplexity, and ChatGPT.</p>
        </div>
        <div className="mt-8 space-y-4 text-[var(--color-graphite)]">
          <p>Answer engines do not rank pages — they extract answers. AEO focuses on content structure, entity signals, and citation formats that AI models use to generate responses.</p>
          <p>I optimize your content for the specific formats that answer engines extract from: FAQ schemas, definition blocks, comparison tables, and structured data.</p>
        </div>
        <div className="mt-12">
          <Link href="/contact" className="inline-block rounded-[var(--radius-card)] bg-[var(--color-signal)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--color-signal-dk)] transition-colors">Get a free audit</Link>
        </div>
      </div>
    </section>
  );
}
