import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Generative Engine Optimization',
  description: 'GEO services: get cited in AI-generated responses.',
};

export default function GEOPage() {
  return (
    <section className="bg-[var(--color-paper)]">
      <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
        <p className="text-sm text-[var(--color-signal-dk)]"><Link href="/services/ai-seo" className="hover:underline">AI SEO</Link> / GEO</p>
        <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">Generative engine optimization (GEO)</h1>
        <div className="mt-6 rounded-[var(--radius-card)] border border-[var(--color-signal)]/20 bg-[var(--color-signal)]/5 p-6">
          <h2 className="font-display text-xl text-[var(--color-forest)]">Quick answer</h2>
          <p className="mt-2 text-[var(--color-graphite)]">GEO optimizes your content to be cited, referenced, and recommended by generative AI models when they create responses about your industry.</p>
        </div>
        <div className="mt-8 space-y-4 text-[var(--color-graphite)]">
          <p>Generative AI models like ChatGPT, Claude, and Gemini build responses from their training data and real-time retrieval. GEO ensures your content is in the sources they pull from — and that your brand is mentioned in the response.</p>
          <p>I build the entity authority, content structure, and citation signals that make AI models reference your brand when generating answers.</p>
        </div>
        <div className="mt-12">
          <Link href="/contact" className="inline-block rounded-[var(--radius-card)] bg-[var(--color-signal)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--color-signal-dk)] transition-colors">Get a free audit</Link>
        </div>
      </div>
    </section>
  );
}
