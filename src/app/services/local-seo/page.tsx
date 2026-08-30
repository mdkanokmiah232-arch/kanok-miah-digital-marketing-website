import type { Metadata } from 'next';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Local SEO',
  description: 'Local SEO services: dominate Google Maps and local search results.',
};

export default function LocalSEOPage() {
  return (
    <>
      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="max-w-3xl">
            <Badge>SCOPE</Badge>
            <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">Local SEO services</h1>
            <p className="mt-4 text-lg text-[var(--color-graphite)]">When someone searches &quot;plumber near me&quot; or &quot;best restaurant in Dhaka,&quot; three businesses appear on the map. Local SEO puts you in those three results.</p>
          </div>
          <div className="mt-8 rounded-[var(--radius-card)] border border-[var(--color-signal)]/20 bg-[var(--color-signal)]/5 p-6">
            <h2 className="font-display text-xl text-[var(--color-forest)]">Quick answer</h2>
            <p className="mt-2 text-[var(--color-graphite)]">Local SEO optimizes your Google Business Profile, local citations, and on-page signals so your business appears in Google Maps and local search results for location-based queries.</p>
          </div>
        </div>
      </section>
      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <h2 className="font-display text-2xl text-[var(--color-forest)]">How the work runs</h2>
          <div className="mt-6 space-y-4 text-[var(--color-graphite)]">
            <p>I audit your Google Business Profile, fix inconsistencies across local directories, and build a citation strategy that signals authority to Google&apos;s local algorithm.</p>
            <p>I optimize your profile for the categories, attributes, and keywords that trigger the local pack for your service queries. Then I implement a review strategy that builds social proof without gaming the system.</p>
          </div>
        </div>
      </section>
      <section className="bg-[var(--color-forest)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
          <h2 className="font-display text-3xl">Show up when it matters</h2>
          <p className="mt-4 text-lg text-white/80">Book a free local SEO audit. I will show you your current Google Business Profile score and what it takes to reach the top 3.</p>
          <Link href="/contact" className="mt-8 inline-block rounded-[var(--radius-card)] bg-[var(--color-signal)] px-8 py-4 text-sm font-medium text-white hover:bg-[var(--color-signal-dk)] transition-colors">Book a free audit</Link>
        </div>
      </section>
    </>
  );
}
