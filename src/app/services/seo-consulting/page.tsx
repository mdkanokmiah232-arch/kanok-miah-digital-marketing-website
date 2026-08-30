import type { Metadata } from 'next';
import Link from 'next/link';
import Badge from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'SEO Consulting',
  description: 'SEO consulting and audit services: strategy, audits, and hands-on guidance.',
};

export default function SEOConsultingPage() {
  return (
    <>
      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block rounded-[var(--radius-pill)] bg-[var(--color-signal)]/10 px-3 py-1 text-xs font-medium text-[var(--color-signal-dk)]">SCOPE</span>
            <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">SEO consulting & audit services</h1>
            <p className="mt-4 text-lg text-[var(--color-graphite)]">Sometimes you do not need someone to do the work — you need someone who knows what work to do. I provide the strategy, the audit, and the roadmap. Your team executes.</p>
          </div>
          <div className="mt-8 rounded-[var(--radius-card)] border border-[var(--color-signal)]/20 bg-[var(--color-signal)]/5 p-6">
            <h2 className="font-display text-xl text-[var(--color-forest)]">Quick answer</h2>
            <p className="mt-2 text-[var(--color-graphite)]">SEO consulting provides expert analysis, strategic direction, and actionable recommendations for your SEO program. You get a clear roadmap, not a vague report.</p>
          </div>
        </div>
      </section>
      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <h2 className="font-display text-2xl text-[var(--color-forest)]">How the work runs</h2>
          <div className="mt-6 space-y-4 text-[var(--color-graphite)]">
            <p>I start with a comprehensive audit covering technical health, content gaps, competitive positioning, and authority signals. Then I build a prioritized roadmap: what to fix first, what to build next, and what to ignore.</p>
            <p>Consulting engagements are scoped per project. You get a clear deliverable — an audit document, a strategy deck, or a technical specification — not ongoing retainers unless you need them.</p>
          </div>
        </div>
      </section>
      <section className="bg-[var(--color-forest)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
          <h2 className="font-display text-3xl">Get expert direction</h2>
          <p className="mt-4 text-lg text-white/80">Book a free 30-minute consultation. I will listen to your situation and tell you honestly whether you need consulting, execution, or both.</p>
          <Link href="/contact" className="mt-8 inline-block rounded-[var(--radius-card)] bg-[var(--color-signal)] px-8 py-4 text-sm font-medium text-white hover:bg-[var(--color-signal-dk)] transition-colors">Book a free call</Link>
        </div>
      </section>
    </>
  );
}
