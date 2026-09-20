import Link from 'next/link';
import { SITE, CASE_STUDIES, TESTIMONIALS } from '@/lib/site';
import SerpSimulator from '@/components/SerpSimulator';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Metric from '@/components/ui/Metric';

const services = [
  { title: 'SEO', description: 'Rank higher on Google with data-driven strategies.', href: '/services/seo', icon: '📊' },
  { title: 'AI SEO', description: 'Get cited by ChatGPT, Perplexity, and AI Overviews.', href: '/services/ai-seo', icon: '🤖' },
  { title: 'Local SEO', description: 'Dominate Google Maps and local search results.', href: '/services/local-seo', icon: '📍' },
  { title: 'E-commerce SEO', description: 'More organic traffic, more sales for your store.', href: '/services/ecommerce-seo', icon: '🛒' },
  { title: 'Facebook Ads', description: 'High-converting Facebook and Instagram campaigns.', href: '/services/digital-marketing/social-media-marketing/facebook-marketing', icon: '📱' },
  { title: 'Google Ads', description: 'Get instant visibility with Google Search campaigns.', href: '/services/digital-marketing/search-engine-marketing', icon: '🔍' },
  { title: 'Social Media', description: 'Build brand presence across all platforms.', href: '/services/digital-marketing/social-media-marketing', icon: '🌐' },
  { title: 'SMM Panel SEO', description: 'Rank your SMM panel globally.', href: '/services/smm-panel-seo', icon: '⚡' },
];

const featuredCaseStudies = CASE_STUDIES.filter((cs) =>
  ['locksmith-dundee', 'smmsun', 'stealth-windshield'].includes(cs.slug)
);

const process = [
  { step: '01', title: 'Research', description: 'I audit your current setup, analyze competitors, and study your audience. No assumptions — only data.', icon: '🔎' },
  { step: '02', title: 'Strategy', description: 'A custom plan built around your business goals. No templates, no copy-paste frameworks.', icon: '🗺️' },
  { step: '03', title: 'Execution', description: 'I implement the strategy personally — or manage my team to deliver. Every task ties to a measurable outcome.', icon: '⚙️' },
  { step: '04', title: 'Monitor', description: 'Track rankings, traffic, and conversions weekly. Fix what is not working. Double down on what is.', icon: '📈' },
  { step: '05', title: 'Review', description: 'Every two months, we review performance and adjust the strategy. The market changes — the plan should too.', icon: '🔄' },
  { step: '06', title: 'Scale', description: 'What works gets expanded. What does not gets cut. The focus is always on ROI, not activity.', icon: '🚀' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-forest)] via-[var(--color-forest)] to-[#1a4d3a]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-[var(--color-signal)] blur-3xl"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-signal)] opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-signal)]"></span>
                </span>
                Available for new projects
              </div>
              
              <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Digital Growth &{' '}
                <span className="text-[var(--color-signal)]">AI SEO</span>{' '}
                Consultant
              </h1>
              
              <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                I help businesses rank higher on Google and get cited by AI search engines. 
                Data-driven SEO, Facebook Ads, Google Ads, and digital marketing strategies 
                that deliver <span className="font-semibold text-white">measurable results</span>.
              </p>
              
              <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-[var(--color-signal)] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[var(--color-signal)]/30 transition-all hover:gap-4 hover:shadow-xl hover:shadow-[var(--color-signal)]/40"
                >
                  Book a free 30-min call
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  View case studies
                </Link>
              </div>
              
              {/* Metrics */}
              <div className="mt-12 grid grid-cols-3 gap-4">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-white">6+</div>
                  <div className="text-sm text-white/60">Years Experience</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-[var(--color-signal)]">210+</div>
                  <div className="text-sm text-white/60">SEO Projects</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-white">350+</div>
                  <div className="text-sm text-white/60">Total Projects</div>
                </div>
              </div>
            </div>
            
            {/* SERP Simulator */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-signal)]/20 to-transparent blur-2xl"></div>
              <div className="relative rounded-2xl bg-white p-4 shadow-2xl">
                <SerpSimulator />
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50L60 45C120 40 240 30 360 35C480 40 600 60 720 65C840 70 960 60 1080 50C1200 40 1320 30 1380 25L1440 20V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Quick Answer — AEO optimized */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-[var(--color-signal)]/20 bg-gradient-to-r from-[var(--color-signal)]/5 to-transparent p-8">
            <div className="absolute top-0 right-0 h-32 w-32 bg-[var(--color-signal)]/10 rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-signal)]/10 px-4 py-1 text-sm font-medium text-[var(--color-signal-dk)]">
                💡 Quick Answer
              </div>
              <p className="mt-4 text-lg leading-relaxed text-[var(--color-graphite)]">
                <strong className="text-[var(--color-forest)]">Kanok Miah</strong> is a digital marketing consultant in Dhaka, Bangladesh with 6+ years of experience. He has completed <strong>210+ SEO projects</strong> and <strong>350+ digital marketing campaigns</strong> for businesses in Bangladesh, UK, USA, UAE, and Canada. His services include SEO, AI SEO, Local SEO, Facebook Ads, Google Ads, and social media marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[var(--color-paper)] py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <Badge variant="signal">SCOPE</Badge>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--color-forest)]">
              What I Do
            </h2>
            <p className="mt-4 text-lg text-[var(--color-graphite)] max-w-2xl mx-auto">
              Comprehensive digital marketing services designed to grow your business online
            </p>
          </div>
          
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link key={service.title} href={service.href}>
                <Card hover className="h-full group">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="font-display text-lg font-semibold text-[var(--color-forest)] group-hover:text-[var(--color-signal-dk)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-graphite)]">{service.description}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-signal-dk)] opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <Badge variant="forest">METHOD</Badge>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--color-forest)]">
              How The Work Runs
            </h2>
            <p className="mt-4 text-lg text-[var(--color-graphite)] max-w-2xl mx-auto">
              A proven 6-step process that delivers results, not excuses
            </p>
          </div>
          
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {process.map((p, index) => (
              <div 
                key={p.step} 
                className="group relative overflow-hidden rounded-2xl border border-[var(--color-forest)]/10 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-[var(--color-signal)]/30"
              >
                <div className="absolute top-0 right-0 -mt-2 -mr-2 h-20 w-20 rounded-full bg-[var(--color-signal)]/5 blur-2xl transition-all group-hover:bg-[var(--color-signal)]/10"></div>
                <div className="relative">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-signal)]/10 text-2xl">
                    {p.icon}
                  </span>
                  <span className="mt-4 block font-data text-sm font-bold text-[var(--color-signal-dk)]">
                    Step {p.step}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold text-[var(--color-forest)]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-graphite)]">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gradient-to-b from-[var(--color-paper)] to-white py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <Badge variant="signal">PROOF</Badge>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--color-forest)]">
              Selected Results
            </h2>
            <p className="mt-4 text-lg text-[var(--color-graphite)] max-w-2xl mx-auto">
              Real projects with real metrics from real clients
            </p>
          </div>
          
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featuredCaseStudies.map((cs) => (
              <Link key={cs.slug} href={`/case-studies/${cs.slug}`}>
                <Card hover className="h-full group relative overflow-hidden">
                  <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-br from-[var(--color-signal)]/20 to-transparent rounded-full blur-2xl transition-all group-hover:scale-150"></div>
                  <div className="relative">
                    <Badge variant="signal">{cs.market}</Badge>
                    <h3 className="mt-3 font-display text-xl font-semibold text-[var(--color-forest)]">
                      {cs.client}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--color-graphite)]">{cs.type}</p>
                    <div className="mt-6 flex items-baseline gap-2">
                      <span className="font-data text-3xl font-bold text-[var(--color-signal-dk)]">
                        {Object.values(cs.metrics)[0]}
                      </span>
                      <span className="text-sm text-[var(--color-graphite)]">
                        {Object.keys(cs.metrics)[0]}
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/case-studies" 
              className="inline-flex items-center gap-2 text-[var(--color-signal-dk)] font-medium hover:gap-3 transition-all"
            >
              View all case studies
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative overflow-hidden bg-[var(--color-forest)] py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 h-96 w-96 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-[var(--color-signal)] blur-3xl"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <Badge variant="forest">TESTIMONIALS</Badge>
            <h2 className="mt-4 font-display text-4xl font-bold text-white">
              What Clients Say
            </h2>
          </div>
          
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm p-6"
              >
                <div className="absolute top-4 right-4 text-6xl text-white/10 font-serif">"</div>
                <p className="relative text-white/90 leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-signal)] text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="font-medium text-white">{testimonial.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[var(--color-signal)] to-[#e85d04] py-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-white/5 blur-2xl"></div>
        </div>
        
        <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 className="font-display text-4xl font-bold text-white lg:text-5xl">
            Ready to Grow Your Business?
          </h2>
          <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto">
            Book a free 30-minute strategy call. Get an audit and 3 actionable steps — 
            no cost, no commitment.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-[var(--color-signal-dk)] shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              Book a free call
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/50 bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white/10"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
