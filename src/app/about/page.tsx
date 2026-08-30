import type { Metadata } from 'next';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import Metric from '@/components/ui/Metric';
import { SITE, NAP, SOCIAL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description: 'Kanok Miah — SEO consultant since 2019. 6+ years experience, 210+ SEO projects, 350+ digital marketing campaigns.',
};

const experience = [
  { role: 'SEO Project Manager', company: 'Khan IT', period: 'Current' },
  { role: 'Head of Digital Marketing', company: 'CloudMatrix Tech', period: 'Current' },
  { role: 'SEO Project Manager', company: 'SMMGen, Growfollows, MoreThanPanel', period: 'Past' },
  { role: 'Marketing Manager', company: 'Solus Corporation', period: 'Past' },
  { role: 'Digital Marketing Executive', company: 'Walton Plaza', period: 'Past' },
];

const certifications = [
  'Google Digital Garage',
  'HubSpot Academy',
  'SEMrush Academy',
  'LinkedIn Learning',
  'Coursera',
  'Skillshare',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="max-w-3xl">
            <Badge>ABOUT</Badge>
            <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">
              Kanok Miah — SEO consultant since 2019
            </h1>
            <p className="mt-4 text-lg text-[var(--color-graphite)]">
              I am a digital marketing consultant based in Dhaka, Bangladesh. I have been working in SEO and digital marketing since 2019, completing 210+ SEO projects and 350+ digital marketing campaigns for businesses across Bangladesh, UK, USA, UAE, and Canada.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer — AEO */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <div className="rounded-[var(--radius-card)] border border-[var(--color-signal)]/20 bg-[var(--color-signal)]/5 p-6">
            <h2 className="font-display text-xl text-[var(--color-forest)]">Quick answer</h2>
            <p className="mt-2 text-[var(--color-graphite)]">
              Kanok Miah is a Bangladeshi SEO consultant and digital marketing expert with 6+ years of experience. He is the SEO Project Manager at Khan IT and Head of Digital Marketing at CloudMatrix Tech. He specializes in SEO, AI SEO (AEO + GEO), Local SEO, Facebook Ads, and Google Ads.
            </p>
          </div>
        </div>
      </section>

      {/* Journey — EEAT: Experience */}
      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <Badge>EXPERIENCE</Badge>
              <h2 className="mt-4 font-display text-2xl text-[var(--color-forest)]">My journey</h2>
              <p className="mt-4 text-[var(--color-graphite)]">
                I started in digital marketing in 2019, working with local businesses in Dhaka. Over the past six years, I have built SEO strategies for SaaS companies, e-commerce stores, manufacturers, and service businesses across five countries.
              </p>
              <p className="mt-4 text-[var(--color-graphite)]">
                Today, I manage 8-12 live SEO projects and 2-5 paid ad campaigns monthly. I work directly with clients — no account managers, no middlemen. When you work with me, you get my experience applied to your business.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <Metric value="210+" label="SEO Projects" />
                <Metric value="350+" label="Total Projects" />
                <Metric value="98%" label="Client Retention" />
                <Metric value="5" label="Countries Served" />
              </div>
            </div>
            <div>
              <Badge>CREDENTIALS</Badge>
              <h2 className="mt-4 font-display text-2xl text-[var(--color-forest)]">Education & certifications</h2>
              <p className="mt-2 text-sm text-[var(--color-graphite)]">BBA in Marketing</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <span key={cert} className="rounded-[var(--radius-pill)] bg-[var(--color-signal)]/10 px-3 py-1 text-xs font-medium text-[var(--color-signal-dk)]">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roles — EEAT: Authority */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <Badge>AUTHORITY</Badge>
          <h2 className="mt-4 font-display text-2xl text-[var(--color-forest)]">Where I have worked</h2>
          <div className="mt-8 space-y-4">
            {experience.map((exp, i) => (
              <div key={i} className="flex items-start gap-4 rounded-[var(--radius-card)] border border-[var(--color-forest)]/12 bg-[var(--color-surface)] p-4">
                <span className="font-data text-sm text-[var(--color-signal-dk)]">{exp.period}</span>
                <div>
                  <h3 className="font-display text-lg text-[var(--color-forest)]">{exp.role}</h3>
                  <p className="text-sm text-[var(--color-graphite)]">{exp.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy — EEAT: Trust */}
      <section className="bg-[var(--color-forest)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="forest">TRUST</Badge>
            <h2 className="mt-4 font-display text-2xl">My approach</h2>
            <div className="mt-6 space-y-4 text-white/80">
              <p>
                I do not chase traffic for its own sake. Every decision I make ties to one question: will this move the business forward?
              </p>
              <p>
                I often fix failed SEO campaigns before building new ones. The first step is always understanding what went wrong — then building a strategy that addresses the actual problem.
              </p>
              <p>
                You do not work with random account managers. You work with a system that reflects my experience and standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
          <h2 className="font-display text-3xl text-[var(--color-forest)]">Let&apos;s talk</h2>
          <p className="mt-4 text-lg text-[var(--color-graphite)]">
            Book a free 30-minute strategy call. I will audit your current situation and give you 3 actionable steps.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-[var(--radius-card)] bg-[var(--color-signal)] px-8 py-4 text-sm font-medium text-white hover:bg-[var(--color-signal-dk)] transition-colors"
          >
            Book a free call
          </Link>
        </div>
      </section>
    </>
  );
}
