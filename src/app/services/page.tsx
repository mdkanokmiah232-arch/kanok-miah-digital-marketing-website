import type { Metadata } from 'next';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import Metric from '@/components/ui/Metric';

export const metadata: Metadata = {
  title: 'Services',
  description: 'SEO, AI SEO, Local SEO, E-commerce SEO, Facebook Ads, Google Ads, Social Media Marketing, and SMM Panel SEO services.',
};

const pillars = [
  { title: 'SEO Services', description: 'On-page, off-page, technical, and semantic SEO that drives revenue.', href: '/services/seo' },
  { title: 'AI SEO', description: 'Get cited by ChatGPT, Perplexity, and AI Overviews.', href: '/services/ai-seo' },
  { title: 'Local SEO', description: 'Dominate Google Maps and local search results.', href: '/services/local-seo' },
  { title: 'E-commerce SEO', description: 'More organic traffic, more sales for your store.', href: '/services/ecommerce-seo' },
  { title: 'SMM Panel SEO', description: 'Rank your SMM panel globally.', href: '/services/smm-panel-seo' },
  { title: 'Industrial SEO', description: 'B2B and manufacturing SEO that generates leads.', href: '/services/industrial-seo' },
  { title: 'International SEO', description: 'Multi-country site architecture and hreflang.', href: '/services/international-seo' },
  { title: 'SEO Consulting', description: 'Audits, strategy, and hands-on guidance.', href: '/services/seo-consulting' },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <Badge>SCOPE</Badge>
          <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">
            SEO & digital growth services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--color-graphite)]">
            Every service is designed to move a measurable number. I do not sell packages of activity — I sell outcomes tied to your business metrics.
          </p>
          <div className="mt-8 flex gap-4">
            <Metric value="210+" label="SEO Projects" />
            <Metric value="350+" label="Total Projects" />
            <Metric value="6+" label="Years Experience" />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <h2 className="font-display text-2xl text-[var(--color-forest)]">Service pillars</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <Link key={p.href} href={p.href}>
                <Card hover className="h-full">
                  <h3 className="font-display text-lg text-[var(--color-forest)]">{p.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-graphite)]">{p.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-forest)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
          <h2 className="font-display text-3xl">Not sure what you need?</h2>
          <p className="mt-4 text-lg text-white/80">Book a free 30-minute strategy call. I will audit your current situation and recommend the right service mix.</p>
          <Link href="/contact" className="mt-8 inline-block rounded-[var(--radius-card)] bg-[var(--color-signal)] px-8 py-4 text-sm font-medium text-white hover:bg-[var(--color-signal-dk)] transition-colors">
            Book a free call
          </Link>
        </div>
      </section>
    </>
  );
}
