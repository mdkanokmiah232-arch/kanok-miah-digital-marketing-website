import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'On-Page SEO',
  description: 'On-page SEO services: content optimization, meta tags, internal linking, and structure.',
};

export default function OnPageSEOPage() {
  return (
    <section className="bg-[var(--color-paper)]">
      <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
        <p className="text-sm text-[var(--color-signal-dk)]"><Link href="/services/seo" className="hover:underline">SEO Services</Link> / On-Page SEO</p>
        <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">On-page SEO services</h1>
        <div className="mt-6 rounded-[var(--radius-card)] border border-[var(--color-signal)]/20 bg-[var(--color-signal)]/5 p-6">
          <h2 className="font-display text-xl text-[var(--color-forest)]">Quick answer</h2>
          <p className="mt-2 text-[var(--color-graphite)]">On-page SEO optimizes individual pages to rank higher. This includes title tags, meta descriptions, heading structure, content quality, internal linking, and URL structure.</p>
        </div>
        <div className="mt-8 space-y-4 text-[var(--color-graphite)]">
          <h2 className="font-display text-2xl text-[var(--color-forest)]">What I do</h2>
          <p>I audit every page for keyword targeting, content depth, meta tag optimization, and internal linking. Then I rewrite or restructure pages to match search intent better than the current top results.</p>
          <p>On-page SEO is the foundation. Without it, link building and technical fixes deliver diminishing returns.</p>
        </div>
        <div className="mt-12">
          <Link href="/contact" className="inline-block rounded-[var(--radius-card)] bg-[var(--color-signal)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--color-signal-dk)] transition-colors">Get a free audit</Link>
        </div>
      </div>
    </section>
  );
}
