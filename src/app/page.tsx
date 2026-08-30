import Link from 'next/link';
import { SITE, CASE_STUDIES, TESTIMONIALS } from '@/lib/site';
import SerpSimulator from '@/components/SerpSimulator';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Metric from '@/components/ui/Metric';

const services = [
  { title: 'SEO', description: 'Rank higher on Google with data-driven strategies.', href: '/services/seo' },
  { title: 'AI SEO', description: 'Get cited by ChatGPT, Perplexity, and AI Overviews.', href: '/services/ai-seo' },
  { title: 'Local SEO', description: 'Dominate Google Maps and local search results.', href: '/services/local-seo' },
  { title: 'E-commerce SEO', description: 'More organic traffic, more sales for your store.', href: '/services/ecommerce-seo' },
  { title: 'Facebook Ads', description: 'High-converting Facebook and Instagram campaigns.', href: '/services/digital-marketing/social-media-marketing/facebook-marketing' },
  { title: 'Google Ads', description: 'Get instant visibility with Google Search campaigns.', href: '/services/digital-marketing/search-engine-marketing' },
  { title: 'Social Media', description: 'Build brand presence across all platforms.', href: '/services/digital-marketing/social-media-marketing' },
  { title: 'SMM Panel SEO', description: 'Rank your SMM panel globally.', href: '/services/smm-panel-seo' },
];

const featuredCaseStudies = CASE_STUDIES.filter((cs) =>
  ['locksmith-dundee', 'smmsun', 'stealth-windshield'].includes(cs.slug)
);

const process = [
  { step: '01', title: 'Research', description: 'I audit your current setup, analyze competitors, and study your audience. No assumptions — only data.' },
  { step: '02', title: 'Strategy', description: 'A custom plan built around your business goals. No templates, no copy-paste frameworks.' },
  { step: '03', title: 'Execution', description: 'I implement the strategy personally — or manage my team to deliver. Every task ties to a measurable outcome.' },
  { step: '04', title: 'Monitor', description: 'Track rankings, traffic, and conversions weekly. Fix what is not working. Double down on what is.' },
  { step: '05', title: 'Review', description: 'Every two months, we review performance and adjust the strategy. The market changes — the plan should too.' },
  { step: '06', title: 'Scale', description: 'What works gets expanded. What does not gets cut. The focus is always on ROI, not activity.' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge variant="signal">SINCE 2019 · 210+ SEO PROJECTS</Badge>
              <h1 className="mt-4 font-display text-4xl tracking-tight text-[var(--color-forest)] sm:text-5xl">
                Digital Growth & AI SEO Consultant
              </h1>
              <p className="mt-6 text-lg text-[var(--color-graphite)]">
                I help businesses rank higher on Google and get cited by AI search engines. Data-driven SEO, Facebook Ads, Google Ads, and digital marketing strategies that deliver measurable results.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-[var(--radius-card)] bg-[var(--color-signal)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--color-signal-dk)] transition-colors"
                >
                  Book a free 30-min call
                </Link>
                <Link
                  href="/case-studies"
                  className="rounded-[var(--radius-card)] border border-[var(--color-forest)]/12 bg-[var(--color-surface)] px-6 py-3 text-sm font-medium text-[var(--color-forest)] hover:bg-[var(--color-paper)] transition-colors"
                >
                  View case studies
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <Metric value="6+" label="Years Experience" />
                <Metric value="210+" label="SEO Projects" />
                <Metric value="350+" label="Total Projects" />
              </div>
            </div>
            <div>
              <SerpSimulator />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer — AEO optimized */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <div className="rounded-[var(--radius-card)] border border-[var(--color-signal)]/20 bg-[var(--color-signal)]/5 p-6">
            <h2 className="font-display text-xl text-[var(--color-forest)]">Quick answer</h2>
            <p className="mt-2 text-[var(--color-graphite)]">
              Kanok Miah is a digital marketing consultant in Dhaka, Bangladesh with 6+ years of experience. He has completed 210+ SEO projects and 350+ digital marketing campaigns for businesses in Bangladesh, UK, USA, UAE, and Canada. His services include SEO, AI SEO, Local SEO, Facebook Ads, Google Ads, and social media marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="text-center">
            <Badge>SCOPE</Badge>
            <h2 className="mt-4 font-display text-3xl text-[var(--color-forest)]">What I do</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
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

      {/* Process */}
      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="text-center">
            <Badge>METHOD</Badge>
            <h2 className="mt-4 font-display text-3xl text-[var(--color-forest)]">How the work runs</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {process.map((p) => (
              <div key={p.step} className="rounded-[var(--radius-card)] border border-[var(--color-forest)]/12 bg-[var(--color-surface)] p-6">
                <span className="font-data text-sm text-[var(--color-signal-dk)]">{p.step}</span>
                <h3 className="mt-2 font-display text-lg text-[var(--color-forest)]">{p.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-graphite)]">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="text-center">
            <Badge>PROOF</Badge>
            <h2 className="mt-4 font-display text-3xl text-[var(--color-forest)]">Selected results</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featuredCaseStudies.map((cs) => (
              <Link key={cs.slug} href={`/case-studies/${cs.slug}`}>
                <Card hover className="h-full">
                  <Badge variant="signal">{cs.market}</Badge>
                  <h3 className="mt-3 font-display text-lg text-[var(--color-forest)]">{cs.client}</h3>
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

      {/* Testimonials */}
      <section className="bg-[var(--color-forest)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="text-center">
            <Badge variant="forest">PROOF</Badge>
            <h2 className="mt-4 font-display text-3xl">What clients say</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="rounded-[var(--radius-card)] bg-white/10 p-6">
                <p className="text-white/90">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="mt-4 font-data text-sm text-white/70">{testimonial.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-signal)]">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
          <h2 className="font-display text-3xl text-white">
            Ready to grow?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Book a free 30-minute strategy call. Get an audit and 3 actionable steps — no cost, no commitment.
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
