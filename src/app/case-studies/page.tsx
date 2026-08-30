import type { Metadata } from 'next';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import { CASE_STUDIES } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'SEO and digital marketing case studies with real results and metrics.',
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <Badge>PROOF</Badge>
          <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">Results, with the numbers</h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--color-graphite)]">Every case study below includes the actual metrics. No estimated ranges, no vague &quot;improved rankings&quot; — just the numbers.</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.map((cs) => (
              <Link key={cs.slug} href={`/case-studies/${cs.slug}`}>
                <Card hover className="h-full">
                  <Badge variant="signal">{cs.market}</Badge>
                  <h2 className="mt-3 font-display text-lg text-[var(--color-forest)]">{cs.client}</h2>
                  <p className="mt-1 text-sm text-[var(--color-graphite)]">{cs.type}</p>
                  <div className="mt-4 font-data text-2xl font-medium text-[var(--color-signal-dk)]">
                    {Object.values(cs.metrics)[0]}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-forest)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
          <h2 className="font-display text-3xl">Want results like these?</h2>
          <p className="mt-4 text-lg text-white/80">Book a free 30-minute strategy call. I will show you the roadmap to similar outcomes for your business.</p>
          <Link href="/contact" className="mt-8 inline-block rounded-[var(--radius-card)] bg-[var(--color-signal)] px-8 py-4 text-sm font-medium text-white hover:bg-[var(--color-signal-dk)] transition-colors">Book a free call</Link>
        </div>
      </section>
    </>
  );
}
