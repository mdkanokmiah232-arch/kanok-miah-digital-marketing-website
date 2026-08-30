import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Technical SEO',
  description: 'Technical SEO services: crawlability, indexation, Core Web Vitals, and site architecture.',
};

export default function TechnicalSEOPage() {
  return (
    <section className="bg-[var(--color-paper)]">
      <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
        <p className="text-sm text-[var(--color-signal-dk)]"><Link href="/services/seo" className="hover:underline">SEO Services</Link> / Technical SEO</p>
        <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">Technical SEO services</h1>
        <div className="mt-6 rounded-[var(--radius-card)] border border-[var(--color-signal)]/20 bg-[var(--color-signal)]/5 p-6">
          <h2 className="font-display text-xl text-[var(--color-forest)]">Quick answer</h2>
          <p className="mt-2 text-[var(--color-graphite)]">Technical SEO ensures search engines can crawl, index, and render your site correctly. This includes site speed, Core Web Vitals, structured data, crawl budget, and indexation issues.</p>
        </div>
        <div className="mt-8 space-y-4 text-[var(--color-graphite)]">
          <p>If Google cannot crawl your site, nothing else matters. Technical SEO fixes the infrastructure problems that prevent your content from ranking — slow load times, broken links, duplicate content, and poor mobile experience.</p>
          <p>I audit your site with Screaming Frog, Google Search Console, and PageSpeed Insights, then fix every issue in priority order.</p>
        </div>
        <div className="mt-12">
          <Link href="/contact" className="inline-block rounded-[var(--radius-card)] bg-[var(--color-signal)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--color-signal-dk)] transition-colors">Get a free audit</Link>
        </div>
      </div>
    </section>
  );
}
