import type { Metadata } from 'next';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'SEO Consultant UAE',
  description: 'SEO and digital growth consultant for UAE businesses.',
};

export default function UAEPage() {
  return (
    <>
      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="max-w-3xl">
            <Badge>🇦🇪 UAE</Badge>
            <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">SEO & digital growth consultant for UAE businesses</h1>
            <p className="mt-4 text-lg text-[var(--color-graphite)]">I serve UAE and Dubai businesses. The Middle Eastern market has unique search patterns, multilingual audiences, and mobile-first behavior.</p>
          </div>
          <div className="mt-8 rounded-[var(--radius-card)] border border-[var(--color-signal)]/20 bg-[var(--color-signal)]/5 p-6">
            <h2 className="font-display text-xl text-[var(--color-forest)]">Quick answer</h2>
            <p className="mt-2 text-[var(--color-graphite)]">Kanok Miah provides SEO and digital marketing services to UAE businesses, with a data-driven approach tailored to local search behavior and competition.</p>
          </div>
        </div>
      </section>
      <section className="bg-[var(--color-forest)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
          <h2 className="font-display text-3xl">Grow your UAE business</h2>
          <Link href="/contact" className="mt-8 inline-block rounded-[var(--radius-card)] bg-[var(--color-signal)] px-8 py-4 text-sm font-medium text-white hover:bg-[var(--color-signal-dk)] transition-colors">Book a free call</Link>
        </div>
      </section>
    </>
  );
}
