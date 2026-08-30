import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Digital PR',
  description: 'Digital PR services: authority and brand mentions through media coverage.',
};

export default function DigitalPRPage() {
  return (
    <section className="bg-[var(--color-paper)]">
      <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
        <p className="text-sm text-[var(--color-signal-dk)]"><Link href="/services/seo" className="hover:underline">SEO</Link> / <Link href="/services/seo/off-page-seo" className="hover:underline">Off-Page SEO</Link> / Digital PR</p>
        <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">Digital PR services</h1>
        <div className="mt-6 rounded-[var(--radius-card)] border border-[var(--color-signal)]/20 bg-[var(--color-signal)]/5 p-6">
          <h2 className="font-display text-xl text-[var(--color-forest)]">Quick answer</h2>
          <p className="mt-2 text-[var(--color-graphite)]">Digital PR earns media coverage, brand mentions, and high-authority backlinks through newsworthy content, data studies, and journalist outreach.</p>
        </div>
        <div className="mt-8 space-y-4 text-[var(--color-graphite)]">
          <p>Digital PR is not just link building with a press release. It is creating content that journalists actually want to cover — original data, industry insights, or stories that serve their audience.</p>
        </div>
        <div className="mt-12">
          <Link href="/contact" className="inline-block rounded-[var(--radius-card)] bg-[var(--color-signal)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--color-signal-dk)] transition-colors">Get a free audit</Link>
        </div>
      </div>
    </section>
  );
}
