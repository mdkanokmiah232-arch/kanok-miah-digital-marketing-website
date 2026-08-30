import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'YouTube Marketing',
  description: 'YouTube marketing and ads services: video SEO and advertising.',
};

export default function YouTubeMarketingPage() {
  return (
    <section className="bg-[var(--color-paper)]">
      <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
        <p className="text-sm text-[var(--color-signal-dk)]"><Link href="/services/digital-marketing" className="hover:underline">Digital Marketing</Link> / <Link href="/services/digital-marketing/social-media-marketing" className="hover:underline">Social Media</Link> / YouTube</p>
        <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">YouTube marketing & ads services</h1>
        <div className="mt-6 rounded-[var(--radius-card)] border border-[var(--color-signal)]/20 bg-[var(--color-signal)]/5 p-6">
          <h2 className="font-display text-xl text-[var(--color-forest)]">Quick answer</h2>
          <p className="mt-2 text-[var(--color-graphite)]">YouTube marketing combines video SEO, content strategy, and YouTube Ads to build audience, drive traffic, and generate leads through the world&apos;s second-largest search engine.</p>
        </div>
        <div className="mt-8 space-y-4 text-[var(--color-graphite)]">
          <p>YouTube is the second-largest search engine. I optimize video titles, descriptions, and tags for search, build content calendars, and manage YouTube Ads campaigns for maximum reach and engagement.</p>
        </div>
        <div className="mt-12">
          <Link href="/contact" className="inline-block rounded-[var(--radius-card)] bg-[var(--color-signal)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--color-signal-dk)] transition-colors">Get a free audit</Link>
        </div>
      </div>
    </section>
  );
}
