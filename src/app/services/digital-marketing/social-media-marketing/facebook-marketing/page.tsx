import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Facebook Marketing',
  description: 'Facebook Ads and marketing services: high-converting campaigns.',
};

export default function FacebookMarketingPage() {
  return (
    <section className="bg-[var(--color-paper)]">
      <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
        <p className="text-sm text-[var(--color-signal-dk)]"><Link href="/services/digital-marketing" className="hover:underline">Digital Marketing</Link> / <Link href="/services/digital-marketing/social-media-marketing" className="hover:underline">Social Media</Link> / Facebook</p>
        <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">Facebook marketing & ads services</h1>
        <div className="mt-6 rounded-[var(--radius-card)] border border-[var(--color-signal)]/20 bg-[var(--color-signal)]/5 p-6">
          <h2 className="font-display text-xl text-[var(--color-forest)]">Quick answer</h2>
          <p className="mt-2 text-[var(--color-graphite)]">Facebook marketing combines paid advertising (Meta Ads) with organic content strategy to generate leads, sales, and brand awareness on the world&apos;s largest social platform.</p>
        </div>
        <div className="mt-8 space-y-4 text-[var(--color-graphite)]">
          <p>I have managed Facebook Ads for e-commerce, education, retail, and government clients. The approach is the same: test creative angles, optimize for the right objective, and scale what works.</p>
        </div>
        <div className="mt-12">
          <Link href="/contact" className="inline-block rounded-[var(--radius-card)] bg-[var(--color-signal)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--color-signal-dk)] transition-colors">Get a free audit</Link>
        </div>
      </div>
    </section>
  );
}
