import type { Metadata } from 'next';
import Link from 'next/link';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Off-Page SEO',
  description: 'Off-page SEO and link building services: authority signals and digital PR.',
};

export default function OffPageSEOPage() {
  return (
    <section className="bg-[var(--color-paper)]">
      <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
        <p className="text-sm text-[var(--color-signal-dk)]"><Link href="/services/seo" className="hover:underline">SEO Services</Link> / Off-Page SEO</p>
        <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">Off-page SEO & link building services</h1>
        <div className="mt-6 rounded-[var(--radius-card)] border border-[var(--color-signal)]/20 bg-[var(--color-signal)]/5 p-6">
          <h2 className="font-display text-xl text-[var(--color-forest)]">Quick answer</h2>
          <p className="mt-2 text-[var(--color-graphite)]">Off-page SEO builds your website&apos;s authority through high-quality backlinks, brand mentions, and digital PR — signals that tell Google other sites trust yours.</p>
        </div>
        <div className="mt-8 space-y-4 text-[var(--color-graphite)]">
          <h2 className="font-display text-2xl text-[var(--color-forest)]">How the work runs</h2>
          <p>I build links through genuine outreach, content marketing, and digital PR — not spammy directories or PBNs. Every link comes from a real site with real traffic.</p>
        </div>
        <div className="mt-8">
          <Link href="/services/seo/off-page-seo/digital-pr">
            <Card hover>
              <h3 className="font-display text-lg text-[var(--color-forest)]">Digital PR Services</h3>
              <p className="mt-2 text-sm text-[var(--color-graphite)]">Authority and brand mentions through media coverage.</p>
            </Card>
          </Link>
        </div>
        <div className="mt-12">
          <Link href="/contact" className="inline-block rounded-[var(--radius-card)] bg-[var(--color-signal)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--color-signal-dk)] transition-colors">Get a free audit</Link>
        </div>
      </div>
    </section>
  );
}
