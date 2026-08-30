import type { Metadata } from 'next';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'SMM Panel SEO',
  description: 'SMM panel SEO services: rank your panel globally.',
};

export default function SMMPannelSEOPage() {
  return (
    <>
      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="max-w-3xl">
            <Badge>SCOPE</Badge>
            <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">SMM panel SEO services</h1>
            <p className="mt-4 text-lg text-[var(--color-graphite)]">The SMM panel industry is competitive and global. I have ranked panels like SMMSun, SMMGen, and MoreThanPanel in multiple countries. The playbook is specific — and it works.</p>
          </div>
          <div className="mt-8 rounded-[var(--radius-card)] border border-[var(--color-signal)]/20 bg-[var(--color-signal)]/5 p-6">
            <h2 className="font-display text-xl text-[var(--color-forest)]">Quick answer</h2>
            <p className="mt-2 text-[var(--color-graphite)]">SMM panel SEO combines technical optimization, programmatic content, and international targeting to rank your panel for high-intent keywords across multiple markets.</p>
          </div>
        </div>
      </section>
      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <h2 className="font-display text-2xl text-[var(--color-forest)]">How the work runs</h2>
          <div className="mt-6 space-y-4 text-[var(--color-graphite)]">
            <p>SMM panel SEO requires a different approach than traditional SEO. The keywords are transactional, the competition is global, and the margins are thin. I focus on high-intent, low-competition long-tail keywords that drive sign-ups, not just impressions.</p>
            <p>Programmatic SEO generates targeted landing pages for each service type and country combination. Technical optimization ensures crawl budget is spent on pages that convert.</p>
          </div>
        </div>
      </section>
      <section className="bg-[var(--color-forest)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
          <h2 className="font-display text-3xl">Rank your panel</h2>
          <p className="mt-4 text-lg text-white/80">Book a free SMM panel SEO audit. I will show you the keywords and technical fixes that will move your panel up.</p>
          <Link href="/contact" className="mt-8 inline-block rounded-[var(--radius-card)] bg-[var(--color-signal)] px-8 py-4 text-sm font-medium text-white hover:bg-[var(--color-signal-dk)] transition-colors">Book a free audit</Link>
        </div>
      </section>
    </>
  );
}
