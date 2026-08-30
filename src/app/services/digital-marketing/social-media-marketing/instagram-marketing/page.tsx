import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Instagram Marketing',
  description: 'Instagram marketing services: content strategy and Ads.',
};

export default function InstagramMarketingPage() {
  return (
    <section className="bg-[var(--color-paper)]">
      <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
        <p className="text-sm text-[var(--color-signal-dk)]"><Link href="/services/digital-marketing" className="hover:underline">Digital Marketing</Link> / <Link href="/services/digital-marketing/social-media-marketing" className="hover:underline">Social Media</Link> / Instagram</p>
        <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">Instagram marketing services</h1>
        <div className="mt-6 rounded-[var(--radius-card)] border border-[var(--color-signal)]/20 bg-[var(--color-signal)]/5 p-6">
          <h2 className="font-display text-xl text-[var(--color-forest)]">Quick answer</h2>
          <p className="mt-2 text-[var(--color-graphite)]">Instagram marketing combines visual content strategy with targeted advertising to build brand awareness and drive conversions on Instagram.</p>
        </div>
        <div className="mt-8 space-y-4 text-[var(--color-graphite)]">
          <p>Instagram is where visual brands win. I build content strategies, manage ad campaigns, and optimize for the metrics that matter — engagement, saves, and conversions.</p>
        </div>
        <div className="mt-12">
          <Link href="/contact" className="inline-block rounded-[var(--radius-card)] bg-[var(--color-signal)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--color-signal-dk)] transition-colors">Get a free audit</Link>
        </div>
      </div>
    </section>
  );
}
