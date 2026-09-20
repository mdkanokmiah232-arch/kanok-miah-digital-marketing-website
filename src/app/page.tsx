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

const processSteps = [
  { step: '01', title: 'Project Research', description: 'We start with a complete understanding of your business and industry. Identify your objectives, challenges, and audience. Research competitors and investigate industry trends.', icon: '🔎' },
  { step: '02', title: 'Custom Strategy Building', description: 'No copy-paste solutions. Every business is different; therefore, so will be the strategy. We generate tailored strategies for SEO, content, paid ads, and branding.', icon: '🗺️' },
  { step: '03', title: 'Execution with SEO & Ads', description: 'I leverage both SEO and PPC advertising for max impact. Launching campaigns on Google, Facebook, YouTube, Instagram, and TikTok.', icon: '⚙️' },
  { step: '04', title: 'Performance Monitoring', description: 'Results are tracked and optimized continuously. Use Google Analytics, Search Console, and advanced tools. Fix technical issues and improve campaign performance.', icon: '📈' },
  { step: '05', title: 'Strategy Review', description: 'Markets change, and so do strategies. Review campaign performance every 2 months. Adjust plans to align with new trends and algorithms.', icon: '🔄' },
  { step: '06', title: 'Long-Term Growth & ROI', description: 'Building long-term rankings with SEO and authority building. Maximize ROI from every Taka spent. Stay involved until your business reaches success.', icon: '🚀' },
];

const pricingPlans = [
  {
    name: 'Standard',
    description: 'Perfect for small businesses',
    price: '25K',
    period: 'Monthly',
    features: ['SEO Service', 'Facebook Ads', 'Instagram Ads', 'GBP Management', 'Marketing Analytics & Reporting', 'Consultant Support'],
    cta: 'Buy Now',
    popular: false,
  },
  {
    name: 'Professional',
    description: 'Great for Growing Businesses',
    price: '35K',
    period: 'Monthly',
    features: ['SEO Service', 'YouTube SEO', 'Facebook Ads', 'Instagram Ads', 'Google Ads', 'GBP Management', 'Marketing Analytics & Reporting'],
    cta: 'Buy Now',
    popular: true,
  },
  {
    name: 'Premium',
    description: 'For Established Businesses',
    price: '55K',
    period: 'Monthly',
    features: ['Everything in Professional', 'YouTube Ads', 'Social Media Management', 'Branding Services', 'Website Maintenance', 'YouTube Video Creation (6)', 'YouTube Shorts Creation (6)'],
    cta: 'Buy Now',
    popular: false,
  },
];

const faqs = [
  { question: 'ডিজিটাল মার্কেটিং এক্সপার্ট কি এবং কেন দরকার?', answer: 'ডিজিটাল মার্কেটিং এক্সপার্ট হলেন সেই ব্যক্তি যিনি SEO, PPC, সোশ্যাল মিডিয়া এবং কন্টেন্ট স্ট্র্যাটেজি একসাথে ম্যানেজ করে আপনার বিজনেসের জন্য measurable growth আনেন।' },
  { question: 'SEO Expert vs Digital Marketing Expert — পার্থক্য কি?', answer: 'SEO Expert শুধু Google ranking-এ কাজ করে, কিন্তু Digital Marketing Expert SEO, Ads, Social Media, Content সবই ম্যানেজ করে সম্পূর্ণ growth strategy দেয়।' },
  { question: 'GEO (Generative Engine Optimization) কি?', answer: 'GEO হলো AI search engines (ChatGPT, Perplexity) এ আপনার businessকে cite করানোর পদ্ধতি। এটা নতুন generation এর SEO।' },
  { question: 'কেন আমি Kanok Miah-কে বাছাই করব?', answer: '6+ years experience, 350+ projects, 210+ SEO campaigns। Real results দেখানোর প্রমাণ আছে। Affordable pricing এবং transparent reporting।' },
];

const caseStudies = [
  { client: 'Locksmith Dundee', market: 'UK / Local SEO', type: '+320% Organic Traffic', slug: 'locksmith-dundee' },
  { client: 'SMMSun', market: 'Global / SaaS SEO', type: '+520% Organic Traffic', slug: 'smmsun' },
  { client: 'Stealth Windshield', market: 'US / E-commerce', type: '+285% Organic Sales', slug: 'stealth-windshield' },
];

const reviews = [
  { name: 'Pariya Sultana', text: 'Working with Kanok was the best decision for my online business. He improved my Google ranking fast and explained everything clearly. Will work again for sure.', time: '12 months ago' },
  { name: 'Orin Afrin', text: 'Kanok Miah is a true professional when it comes to SEO. He helped my local business appear on the first page of Google. Always available to answer questions.', time: '12 months ago' },
  { name: 'Sk totol Khan', text: 'I tried many SEO experts before, but Kanok stood out. He\'s professional, friendly, and delivers real results. My traffic has grown a lot.', time: '12 months ago' },
  { name: 'MD Sahid Alam', text: 'Kanok is not just an SEO specialist, he\'s a growth partner. He helped my small business grow online in just a few months.', time: '12 months ago' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-forest)] via-[#0d2818] to-[#0a1f14]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[var(--color-signal)]/20 blur-[100px] animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[var(--color-signal)]/10 blur-[80px] animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[60px]"></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-12 lg:py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-signal)]/30 bg-[var(--color-signal)]/10 px-4 py-2 text-sm text-[var(--color-signal)] backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-signal)] opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-signal)]"></span>
                </span>
                Available for new projects
              </div>
              
              <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                <span className="block">Best Digital Marketing</span>
                <span className="block mt-1 bg-gradient-to-r from-[var(--color-signal)] to-[#f59e0b] bg-clip-text text-transparent">
                  Expert in Bangladesh
                </span>
              </h1>
              
              <p className="mt-4 text-base text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Looking for the <strong className="text-white">best digital marketing expert</strong> in Bangladesh? I'm Kanok Miah with <strong className="text-white">6+ years experience</strong>, <strong className="text-white">210+ SEO</strong> & <strong className="text-white">350+ campaigns</strong>.
              </p>
              
              <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-[var(--color-signal)] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[var(--color-signal)]/30 transition-all hover:gap-4 hover:shadow-xl"
                >
                  Request for Quote
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  View Case Studies
                </Link>
              </div>
              
              {/* Quick Stats */}
              <div className="mt-8 grid grid-cols-4 gap-2">
                {[
                  { value: '6+', label: 'Years', color: 'text-white' },
                  { value: '210+', label: 'SEO', color: 'text-[var(--color-signal)]' },
                  { value: '350+', label: 'Projects', color: 'text-white' },
                  { value: '105', label: 'Reviews', color: 'text-[var(--color-signal)]' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 p-2 sm:p-3 text-center">
                    <div className={`text-lg sm:text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="text-[10px] sm:text-xs text-white/60 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* SERP Simulator - Hidden on mobile */}
            <div className="relative hidden lg:block">
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

      {/* About Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="signal">ABOUT</Badge>
            <h2 className="mt-4 font-display text-3xl font-bold text-[var(--color-forest)]">
              Kanok Miah – SEO Expert in Bangladesh
            </h2>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-[var(--color-graphite)] leading-relaxed">
              Hi, I'm Kanok Miah — a digital marketing expert and SEO expert in Bangladesh working in this field since 2019. I've led <strong>350+ projects</strong> and <strong>210+ SEO campaigns</strong> across local businesses, e-commerce stores, and international brands.
            </p>
            <p className="mt-4 text-lg text-[var(--color-graphite)] leading-relaxed">
              I founded Kanokmiah.com and currently serve as <strong>SEO Project Manager at Khan IT</strong> and <strong>Head of Digital Marketing at CloudMatrix Tech</strong>. Previously I worked at Walton Plaza and Solus Corporation.
            </p>
            <p className="mt-4 text-lg text-[var(--color-graphite)] leading-relaxed">
              I've earned certifications from Google Digital Garage, HubSpot Academy, SEMrush Academy, LinkedIn Learning, Coursera, Skillshare, YouTube and various industry blogs, but those certifications alone only took me so far in real-world experience. <strong>The real learning came from doing.</strong>
            </p>
            <p className="mt-4 text-lg text-[var(--color-graphite)] leading-relaxed">
              Every month I actively manage 8–12 live SEO projects and 2–5 paid ad campaigns — running experiments on real websites, testing what actually moves rankings versus what just sounds good in theory. Every algorithm update, every ranking drop, every unexpected win taught me something no course ever could.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[var(--color-paper)] py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <Badge variant="signal">SERVICES</Badge>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--color-forest)]">
              What Services I Offer
            </h2>
            <p className="mt-4 text-lg text-[var(--color-graphite)] max-w-2xl mx-auto">
              As a professional digital marketing consultant, I offer 360° marketing service in Bangladesh
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
            <Badge variant="forest">PROCESS</Badge>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--color-forest)]">
              My Digital Marketing Services Process
            </h2>
            <p className="mt-4 text-lg text-[var(--color-graphite)] max-w-2xl mx-auto">
              I don't just "do marketing"—I build strategies that deliver long-term growth and ROI
            </p>
          </div>
          
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((p) => (
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
                    STEP-{p.step}
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

      {/* Pricing */}
      <section className="bg-[var(--color-paper)] py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <Badge variant="signal">PRICING</Badge>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--color-forest)]">
              Transparent Pricing Plans
            </h2>
            <p className="mt-4 text-lg text-[var(--color-graphite)] max-w-2xl mx-auto">
              Choose the perfect package for your business needs. All packages include dedicated support and transparent reporting.
            </p>
          </div>
          
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.name}
                className={`relative rounded-2xl p-6 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-[var(--color-signal)] to-[#e85d04] text-white shadow-xl' 
                    : 'bg-white border border-[var(--color-forest)]/10 shadow-sm'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-bold text-[var(--color-signal-dk)]">
                    Popular
                  </div>
                )}
                <h3 className={`font-display text-xl font-bold ${plan.popular ? 'text-white' : 'text-[var(--color-forest)]'}`}>
                  {plan.name}
                </h3>
                <p className={`mt-1 text-sm ${plan.popular ? 'text-white/80' : 'text-[var(--color-graphite)]'}`}>
                  {plan.description}
                </p>
                <div className="mt-4">
                  <span className="font-display text-4xl font-bold">{plan.price}</span>
                  <span className={`text-sm ${plan.popular ? 'text-white/80' : 'text-[var(--color-graphite)]'}`}> BDT/{plan.period}</span>
                </div>
                <ul className="mt-6 space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <svg className={`h-4 w-4 ${plan.popular ? 'text-white' : 'text-[var(--color-signal-dk)]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={plan.popular ? 'text-white/90' : 'text-[var(--color-graphite)]'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-6 block w-full rounded-xl px-4 py-3 text-center font-medium transition-all ${
                    plan.popular 
                      ? 'bg-white text-[var(--color-signal-dk)] hover:bg-white/90' 
                      : 'bg-[var(--color-signal)] text-white hover:bg-[var(--color-signal-dk)]'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <Badge variant="signal">CASE STUDIES</Badge>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--color-forest)]">
              Digital Marketing Case Studies
            </h2>
          </div>
          
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {caseStudies.map((cs) => (
              <Link key={cs.slug} href={`/case-studies/${cs.slug}`}>
                <Card hover className="h-full group relative overflow-hidden">
                  <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-br from-[var(--color-signal)]/20 to-transparent rounded-full blur-2xl transition-all group-hover:scale-150"></div>
                  <div className="relative">
                    <Badge variant="signal">{cs.market}</Badge>
                    <h3 className="mt-3 font-display text-xl font-semibold text-[var(--color-forest)]">
                      {cs.client}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--color-graphite)]">{cs.type}</p>
                    <div className="mt-4 text-[var(--color-signal-dk)] text-sm font-medium">
                      Read Full Case Study →
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

      {/* Reviews */}
      <section className="bg-[var(--color-forest)] py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <Badge variant="forest">REVIEWS</Badge>
            <h2 className="mt-4 font-display text-4xl font-bold text-white">
              Trusted by Clients — Proven by Results
            </h2>
          </div>
          
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {reviews.map((review, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm p-6"
              >
                <div className="absolute top-4 right-4 text-6xl text-white/10 font-serif">"</div>
                <p className="relative text-white/90 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-signal)] text-white font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-white">{review.name}</div>
                    <div className="text-sm text-white/60">{review.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="https://g.page/r/kanokmiah/review" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-medium text-[var(--color-forest)] hover:bg-white/90 transition-all"
            >
              Write a Review on Google
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <Badge variant="signal">WHY ME</Badge>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--color-forest)]">
              Why Work With Me?
            </h2>
          </div>
          
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: '6+ Years of Hands-On Experience', desc: 'Since 2019, I have been engaged with businesses belonging to several industries. This exposure brings me to an understanding of problems unique to you.' },
              { title: 'Proven Results', desc: 'Having completed 350+ digital marketing projects and 210 SEO campaigns, I prove my worth with results: more traffic, more leads, more sales.' },
              { title: 'Problem-Solving Approach', desc: 'Many clients come to me after unsuccessfully trying campaigns. I work to discover the underlying problems and devise campaigns that work.' },
              { title: 'ROI-Focused Campaigns', desc: 'In every campaign I develop, I have one ultimate goal: results. Whether it\'s SEO, paid ads, or content, I focus on delivering growth you can measure.' },
              { title: 'Solid Marketing Background', desc: 'With a BBA in Marketing, I understand what happens in the real world. I build data-driven strategies from real-life observations.' },
              { title: 'Affordable & Transparent', desc: 'I stand for fairness in pricing, straightforward communication, and total honesty. No hidden costs, no fake promises—only real results.' },
            ].map((item, index) => (
              <div key={index} className="rounded-xl border border-[var(--color-forest)]/10 bg-[var(--color-paper)] p-6">
                <h3 className="font-display text-lg font-semibold text-[var(--color-forest)]">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-graphite)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[var(--color-paper)] py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="text-center">
            <Badge variant="signal">FAQs</Badge>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--color-forest)]">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-semibold text-[var(--color-forest)]">{faq.question}</h3>
                <p className="mt-2 text-[var(--color-graphite)] leading-relaxed">{faq.answer}</p>
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
            If you are done throwing away your money on stupid strategies and if you want to work with the best digital marketer in Bangladesh, I will be right there for you!
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-[var(--color-signal-dk)] shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              01712-883101
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/50 bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white/10"
            >
              Request for Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
