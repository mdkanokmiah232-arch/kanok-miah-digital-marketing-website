import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Search Engine Marketing',
  description: 'SEM and Google Ads services: paid search campaigns.',
};

export default function SEMPage() {
  return (
    <section className="bg-[var(--color-paper)]">
      <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
        <p className="text-sm text-[var(--color-signal-dk)]"><Link href="/services/digital-marketing" className="hover:underline">Digital Marketing</Link> / SEM</p>
        <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">Search engine marketing (SEM) services</h1>
        <div className="mt-6 rounded-[var(--radius-card)] border border-[var(--color-signal)]/20 bg-[var(--color-signal)]/5 p-6">
          <h2 className="font-display text-xl text-[var(--color-forest)]">Quick answer</h2>
          <p className="mt-2 text-[var(--color-graphite)]">SEM puts your business at the top of Google search results through paid advertising. You pay per click, but only from people actively searching for your service.</p>
        </div>
        <div className="mt-8 space-y-4 text-[var(--color-graphite)]">
          <p>Google Ads is the fastest way to get in front of high-intent buyers. I build campaigns that target the right keywords, with the right ad copy, landing on pages that convert.</p>
          <p>From keyword research to bid management to landing page optimization — I handle the full stack.</p>
        </div>
        <div className="mt-12">
          <Link href="/contact" className="inline-block rounded-[var(--radius-card)] bg-[var(--color-signal)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--color-signal-dk)] transition-colors">Get a free audit</Link>
        </div>
      </div>
    </section>
  );
}
