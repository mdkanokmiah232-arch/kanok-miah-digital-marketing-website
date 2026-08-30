import type { Metadata } from 'next';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'SEO Consultant UK',
  description: 'SEO and digital growth consultant for UK businesses.',
};

export default function UKPage() {
  return (
    <>
      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="max-w-3xl">
            <Badge>🇬🇧 UNITED KINGDOM</Badge>
            <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">SEO & digital growth consultant for UK businesses</h1>
            <p className="mt-4 text-lg text-[var(--color-graphite)]">
              I have worked with UK businesses across locksmith, compliance, transport, and e-commerce sectors. UK search behavior is competitive — the strategy has to be precise.
            </p>
          </div>
          <div className="mt-8 rounded-[var(--radius-card)] border border-[var(--color-signal)]/20 bg-[var(--color-signal)]/5 p-6">
            <h2 className="font-display text-xl text-[var(--color-forest)]">Quick answer</h2>
            <p className="mt-2 text-[var(--color-graphite)]">Kanok Miah provides SEO and digital marketing services to UK businesses, with proven results in local SEO, B2B lead generation, and e-commerce optimization.</p>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <h2 className="font-display text-2xl text-[var(--color-forest)]">UK case studies</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {['locksmith-dundee', 'landlord-certificates', 'das-taxis', 'stealth-windshield', 'fixzoo'].map((slug) => (
              <Link key={slug} href={`/case-studies/${slug}`}><Card hover><h3 className="font-display text-lg text-[var(--color-forest)]">{slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h3></Card></Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[var(--color-forest)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
          <h2 className="font-display text-3xl">Grow your UK business</h2>
          <Link href="/contact" className="mt-8 inline-block rounded-[var(--radius-card)] bg-[var(--color-signal)] px-8 py-4 text-sm font-medium text-white hover:bg-[var(--color-signal-dk)] transition-colors">Book a free call</Link>
        </div>
      </section>
    </>
  );
}
