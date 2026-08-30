import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Stealth Windshield Case Study',
  description: 'Stealth Windshield — E-commerce / schema case study. +285% organic sales | +38% SERP CTR.',
};

export default function StealthWindshieldPage() {
  return (
    <section className="bg-[var(--color-paper)]">
      <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
        <p className="text-sm text-[var(--color-signal-dk)]"><Link href="/case-studies" className="hover:underline">Case Studies</Link> / Stealth Windshield</p>
        <span className="inline-block mt-4 rounded-[var(--radius-pill)] bg-[var(--color-signal)]/10 px-3 py-1 text-xs font-medium text-[var(--color-signal-dk)]">UK</span>
        <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">Stealth Windshield</h1>
        <p className="mt-2 text-[var(--color-graphite)]">E-commerce / schema</p>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="rounded-[var(--radius-card)] border border-[var(--color-forest)]/12 bg-[var(--color-surface)] p-4"><div className="font-data text-2xl font-medium text-[var(--color-signal-dk)]">+285% organic sales</div><div className="mt-1 text-xs text-[var(--color-graphite)]">Sales</div></div><div className="rounded-[var(--radius-card)] border border-[var(--color-forest)]/12 bg-[var(--color-surface)] p-4"><div className="font-data text-2xl font-medium text-[var(--color-signal-dk)]">+38% SERP CTR</div><div className="mt-1 text-xs text-[var(--color-graphite)]">Ctr</div></div>
        </div>

        <div className="mt-8 space-y-4 text-[var(--color-graphite)]">
          <h2 className="font-display text-2xl text-[var(--color-forest)]">The challenge</h2>
          <p>An e-commerce store needed more organic sales. Product schema, category optimization, and content strategy drove a 285% increase in organic revenue.</p>

          <h2 className="font-display text-2xl text-[var(--color-forest)]">The result</h2>
          <p>+285% organic sales | +38% SERP CTR — achieved through a systematic approach tailored to Stealth Windshield&apos;s specific market and competition.</p>
        </div>

        <div className="mt-12">
          <Link href="/contact" className="inline-block rounded-[var(--radius-card)] bg-[var(--color-signal)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--color-signal-dk)] transition-colors">Get similar results</Link>
        </div>
      </div>
    </section>
  );
}
