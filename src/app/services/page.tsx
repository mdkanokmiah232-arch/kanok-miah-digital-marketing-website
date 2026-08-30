import type { Metadata } from 'next';
import Link from 'next/link';
import { PACKAGES } from '@/lib/site';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'SEO, AI SEO & Digital Marketing Services | Kanok Miah',
  description: 'Comprehensive SEO, AI SEO, local SEO, e-commerce SEO, and digital marketing services for businesses worldwide.',
};

const servicePillars = [
  { title: 'SEO Services', description: 'On-page, off-page, technical, and semantic SEO.', href: '/services/seo' },
  { title: 'AI SEO', description: 'Get cited by ChatGPT, Perplexity, and AI Overviews.', href: '/services/ai-seo' },
  { title: 'Local SEO', description: 'Rank on Google Maps and local search.', href: '/services/local-seo' },
  { title: 'E-commerce SEO', description: 'More organic traffic, more sales.', href: '/services/ecommerce-seo' },
  { title: 'SMM Panel SEO', description: 'Rank your SMM panel globally.', href: '/services/smm-panel-seo' },
  { title: 'Industrial SEO', description: 'B2B and manufacturing SEO.', href: '/services/industrial-seo' },
  { title: 'International SEO', description: 'Multi-country site architecture.', href: '/services/international-seo' },
  { title: 'SEO Consulting', description: 'Audits and strategic planning.', href: '/services/seo-consulting' },
  { title: 'Digital Marketing', description: 'Full-service digital marketing.', href: '/services/digital-marketing' },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <Badge>SCOPE</Badge>
          <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">
            SEO & digital growth services
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-[var(--color-graphite)]">
            Everything your business needs to rank higher on Google and get cited by AI search engines. From technical SEO audits to full-service digital marketing.
          </p>
        </div>
      </section>

      {/* Service Grid */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicePillars.map((service) => (
              <Link key={service.title} href={service.href}>
                <Card hover className="h-full">
                  <h3 className="font-display text-lg text-[var(--color-forest)]">{service.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-graphite)]">{service.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="text-center">
            <Badge>PRICE</Badge>
            <h2 className="mt-4 font-display text-3xl text-[var(--color-forest)]">Packages</h2>
            <p className="mt-2 text-[var(--color-graphite)]">Starting from BDT 25,000/month. Custom scope, no long-term contract.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PACKAGES.map((pkg) => (
              <Card key={pkg.name} className="text-center">
                <h3 className="font-display text-xl text-[var(--color-forest)]">{pkg.name}</h3>
                <div className="mt-4 font-data text-3xl font-medium text-[var(--color-signal-dk)]">
                  {pkg.price.toLocaleString()} {pkg.currency}
                </div>
                <div className="mt-1 text-sm text-[var(--color-graphite)]">/month</div>
                <ul className="mt-6 space-y-2 text-left text-sm text-[var(--color-graphite)]">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="text-[var(--color-signal-dk)]">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-6 block rounded-[var(--radius-card)] bg-[var(--color-signal)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--color-signal-dk)] transition-colors"
                >
                  Get started
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-signal)]">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
          <h2 className="font-display text-3xl text-white">
            Not sure which service you need?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Book a free 30-minute call. We&apos;ll figure out what your business actually needs.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-[var(--radius-card)] bg-[var(--color-forest)] px-8 py-4 text-sm font-medium text-white hover:bg-[var(--color-forest)]/90 transition-colors"
          >
            Book a free call
          </Link>
        </div>
      </section>
    </>
  );
}
