import type { Metadata } from 'next';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'SEO Services',
  description: 'On-page, off-page, technical, and semantic SEO services that drive revenue, not just rankings.',
};

const subservices = [
  { title: 'On-Page SEO', description: 'Content optimization, meta tags, internal linking, and structure.', href: '/services/seo/on-page-seo' },
  { title: 'Off-Page SEO', description: 'Link building, digital PR, and authority signals.', href: '/services/seo/off-page-seo' },
  { title: 'Technical SEO', description: 'Crawlability, indexation, Core Web Vitals, and site architecture.', href: '/services/seo/technical-seo' },
  { title: 'Semantic SEO', description: 'Topical maps, entity SEO, and topical authority building.', href: '/services/seo/semantic-seo' },
];

export default function SEOServicesPage() {
  return (
    <>
      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="max-w-3xl">
            <Badge>SCOPE</Badge>
            <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">
              SEO services that drive revenue, not just rankings
            </h1>
            <p className="mt-4 text-lg text-[var(--color-graphite)]">
              Someone searches for your service right now. Three businesses show up. They get the call. SEO is the work that puts you in those three results — consistently, month after month.
            </p>
          </div>

          <div className="mt-8 rounded-[var(--radius-card)] border border-[var(--color-signal)]/20 bg-[var(--color-signal)]/5 p-6">
            <h2 className="font-display text-xl text-[var(--color-forest)]">Quick answer</h2>
            <p className="mt-2 text-[var(--color-graphite)]">
              SEO services improve your website&apos;s visibility in Google search results. This includes optimizing your content, fixing technical issues, building authority through links, and structuring your site so search engines understand what you offer. The result: more qualified traffic, more leads, more revenue.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <h2 className="font-display text-2xl text-[var(--color-forest)]">What&apos;s included</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {subservices.map((s) => (
              <Link key={s.href} href={s.href}>
                <Card hover className="h-full">
                  <h3 className="font-display text-lg text-[var(--color-forest)]">{s.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-graphite)]">{s.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <h2 className="font-display text-2xl text-[var(--color-forest)]">How the work runs</h2>
          <div className="mt-6 space-y-4 text-[var(--color-graphite)]">
            <p>Every SEO engagement starts with a technical audit and competitive analysis. I identify the specific gaps between your site and the top-ranking competitors for your target keywords.</p>
            <p>From there, I build a prioritized roadmap: quick wins first (meta tags, internal linking, content gaps), then medium-term authority building (link acquisition, content expansion), then long-term topical authority (semantic structure, entity optimization).</p>
            <p>You get a monthly report with one number that matters: revenue attributed to organic search. Rankings are a leading indicator, not the goal.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-forest)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
          <h2 className="font-display text-3xl">Ready to rank higher?</h2>
          <p className="mt-4 text-lg text-white/80">Book a free 30-minute SEO audit. I will show you exactly where you stand and what it takes to get to page one.</p>
          <Link href="/contact" className="mt-8 inline-block rounded-[var(--radius-card)] bg-[var(--color-signal)] px-8 py-4 text-sm font-medium text-white hover:bg-[var(--color-signal-dk)] transition-colors">
            Book a free SEO audit
          </Link>
        </div>
      </section>
    </>
  );
}
