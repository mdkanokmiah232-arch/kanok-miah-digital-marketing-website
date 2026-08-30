import type { Metadata } from 'next';
import Link from 'next/link';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Social Media Marketing',
  description: 'Social media marketing services: Facebook, Instagram, and YouTube.',
};

const platforms = [
  { title: 'Facebook Marketing', description: 'Facebook Ads and organic growth.', href: '/services/digital-marketing/social-media-marketing/facebook-marketing' },
  { title: 'Instagram Marketing', description: 'Instagram Ads and content strategy.', href: '/services/digital-marketing/social-media-marketing/instagram-marketing' },
  { title: 'YouTube Marketing', description: 'YouTube Ads and video SEO.', href: '/services/digital-marketing/social-media-marketing/youtube-marketing' },
];

export default function SocialMediaMarketingPage() {
  return (
    <section className="bg-[var(--color-paper)]">
      <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
        <p className="text-sm text-[var(--color-signal-dk)]"><Link href="/services/digital-marketing" className="hover:underline">Digital Marketing</Link> / Social Media</p>
        <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">Social media marketing services</h1>
        <div className="mt-6 rounded-[var(--radius-card)] border border-[var(--color-signal)]/20 bg-[var(--color-signal)]/5 p-6">
          <h2 className="font-display text-xl text-[var(--color-forest)]">Quick answer</h2>
          <p className="mt-2 text-[var(--color-graphite)]">Social media marketing builds brand presence and generates leads through paid and organic strategies on Facebook, Instagram, and YouTube.</p>
        </div>
        <div className="mt-8 grid gap-4">
          {platforms.map((p) => (
            <Link key={p.href} href={p.href}><Card hover><h3 className="font-display text-lg text-[var(--color-forest)]">{p.title}</h3><p className="mt-2 text-sm text-[var(--color-graphite)]">{p.description}</p></Card></Link>
          ))}
        </div>
        <div className="mt-12">
          <Link href="/contact" className="inline-block rounded-[var(--radius-card)] bg-[var(--color-signal)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--color-signal-dk)] transition-colors">Get a free audit</Link>
        </div>
      </div>
    </section>
  );
}
