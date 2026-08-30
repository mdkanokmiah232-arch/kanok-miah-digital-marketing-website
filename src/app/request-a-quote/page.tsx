import type { Metadata } from 'next';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Request a Quote',
  description: 'Get a scoped proposal for SEO, AI SEO, or digital marketing services. Tell us about your business and goals.',
};

const services = [
  'SEO Services',
  'AI SEO (AEO + GEO)',
  'Local SEO',
  'E-commerce SEO',
  'Facebook Ads',
  'Google Ads',
  'Social Media Marketing',
  'SMM Panel SEO',
  'SEO Consulting',
  'Digital Marketing',
];

export default function RequestQuotePage() {
  return (
    <section className="bg-[var(--color-paper)]">
      <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
        <Badge>GET STARTED</Badge>
        <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">
          Get a scoped proposal
        </h1>
        <p className="mt-4 text-lg text-[var(--color-graphite)]">
          Tell me about your business, goals, and budget. I will review your details and respond within 24 hours with a clear scope, timeline, and price — no surprises.
        </p>

        <form className="mt-12 space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-[var(--color-forest)]">Name</label>
              <input type="text" required className="mt-1 block w-full rounded-lg border border-[var(--color-forest)]/12 bg-[var(--color-surface)] px-4 py-3 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-forest)]">Email</label>
              <input type="email" required className="mt-1 block w-full rounded-lg border border-[var(--color-forest)]/12 bg-[var(--color-surface)] px-4 py-3 text-sm" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-forest)]">Company / Website</label>
            <input type="text" className="mt-1 block w-full rounded-lg border border-[var(--color-forest)]/12 bg-[var(--color-surface)] px-4 py-3 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-forest)]">Services interested in</label>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {services.map((s) => (
                <label key={s} className="flex items-center gap-2 text-sm text-[var(--color-graphite)]">
                  <input type="checkbox" className="rounded" />
                  {s}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-forest)]">Monthly budget (BDT)</label>
            <select className="mt-1 block w-full rounded-lg border border-[var(--color-forest)]/12 bg-[var(--color-surface)] px-4 py-3 text-sm">
              <option>25,000 — Standard</option>
              <option>35,000 — Professional</option>
              <option>55,000 — Premium</option>
              <option>Custom — let me know</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-forest)]">Tell me about your goals</label>
            <textarea rows={4} className="mt-1 block w-full rounded-lg border border-[var(--color-forest)]/12 bg-[var(--color-surface)] px-4 py-3 text-sm" placeholder="What does success look like for you?" />
          </div>
          <button type="submit" className="rounded-[var(--radius-card)] bg-[var(--color-signal)] px-8 py-3 text-sm font-medium text-white hover:bg-[var(--color-signal-dk)] transition-colors">
            Send request
          </button>
        </form>

        <div className="mt-12 rounded-[var(--radius-card)] border border-[var(--color-forest)]/12 bg-[var(--color-surface)] p-6">
          <h3 className="font-display text-lg text-[var(--color-forest)]">Prefer a quick call?</h3>
          <p className="mt-2 text-sm text-[var(--color-graphite)]">
            Book a free 30-minute strategy call instead. No forms, no commitment — just a conversation about your business.
          </p>
          <Link href="/contact" className="mt-4 inline-block text-sm font-medium text-[var(--color-signal-dk)] hover:underline">
            Book a free call →
          </Link>
        </div>
      </div>
    </section>
  );
}
