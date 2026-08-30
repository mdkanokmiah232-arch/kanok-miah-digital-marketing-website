import type { Metadata } from 'next';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'AI SEO',
  description: 'AI SEO services: get cited by ChatGPT, Perplexity, and Google AI Overviews.',
};

const subservices = [
  { title: 'Answer Engine Optimization (AEO)', description: 'Optimize for AI-powered answer engines.', href: '/services/ai-seo/answer-engine-optimization' },
  { title: 'Generative Engine Optimization (GEO)', description: 'Get cited in AI-generated responses.', href: '/services/ai-seo/generative-engine-optimization' },
];

export default function AISEOPage() {
  return (
    <>
      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="max-w-3xl">
            <Badge>SCOPE</Badge>
            <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">
              AI SEO: get cited by ChatGPT, Perplexity, and AI Overviews
            </h1>
            <p className="mt-4 text-lg text-[var(--color-graphite)]">
              Google is no longer the only search engine. ChatGPT, Perplexity, and Google AI Overviews now answer millions of queries directly. If your brand is not in those answers, you are invisible to a growing share of searchers.
            </p>
          </div>

          <div className="mt-8 rounded-[var(--radius-card)] border border-[var(--color-signal)]/20 bg-[var(--color-signal)]/5 p-6">
            <h2 className="font-display text-xl text-[var(--color-forest)]">Quick answer</h2>
            <p className="mt-2 text-[var(--color-graphite)]">
              AI SEO optimizes your content to be cited, referenced, and recommended by AI-powered search engines. Unlike traditional SEO which targets blue links, AI SEO focuses on structured data, entity authority, and content format that AI models use to generate answers.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <h2 className="font-display text-2xl text-[var(--color-forest)]">Services</h2>
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
            <p>I analyze how AI models currently talk about your industry and competitors. I identify the content gaps, entity associations, and structural elements that determine whether AI engines cite you or your competitor.</p>
            <p>Then I optimize your content for the three signals that matter: entity authority (who you are), content structure (how your information is organized), and citation density (how often and how accurately others reference you).</p>
            <p>The result: when someone asks ChatGPT about your service category, your name appears in the answer.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-forest)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
          <h2 className="font-display text-3xl">Get cited, not just ranked</h2>
          <p className="mt-4 text-lg text-white/80">Book a free AI SEO audit. I will show you how AI engines currently describe your industry and where you fit.</p>
          <Link href="/contact" className="mt-8 inline-block rounded-[var(--radius-card)] bg-[var(--color-signal)] px-8 py-4 text-sm font-medium text-white hover:bg-[var(--color-signal-dk)] transition-colors">
            Book a free audit
          </Link>
        </div>
      </section>
    </>
  );
}
