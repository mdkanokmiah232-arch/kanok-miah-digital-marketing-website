import type { Metadata } from 'next';
import { SITE, SOCIAL, CASE_STUDIES } from '@/lib/site';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'About Kanok Miah | SEO & AI Search Consultant',
  description: 'Learn about Kanok Miah — a digital growth and AI SEO consultant with 6+ years of experience and 210+ SEO campaigns.',
};

const experience = [
  {
    role: 'SEO Project Manager',
    company: 'Khan IT',
    period: 'Current',
  },
  {
    role: 'Head of Digital Marketing',
    company: 'CloudMatrix Tech',
    period: 'Current',
  },
  {
    role: 'Ex-Marketing Manager',
    company: 'Solus Corporation',
    period: 'Past',
  },
  {
    role: 'Ex-Digital Marketing Executive',
    company: 'Walton Plaza',
    period: 'Past',
  },
];

const skills = [
  'Search Engine Optimization',
  'Answer Engine Optimization',
  'Generative Engine Optimization',
  'Technical SEO',
  'Local SEO',
  'E-commerce SEO',
  'Semantic SEO',
  'Search Engine Marketing',
  'Social Media Marketing',
  'Conversion Rate Optimization',
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
          <Badge>SCOPE</Badge>
          <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">
            Kanok Miah — SEO consultant since 2019
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-[var(--color-graphite)]">
            A results-driven digital marketing expert based in Dhaka, Bangladesh. I help businesses rank higher on Google and get cited by AI search engines like ChatGPT and Perplexity.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl text-[var(--color-forest)]">The journey</h2>
              <div className="mt-6 space-y-4 text-[var(--color-graphite)]">
                <p>
                  Started in 2019 with a simple observation: most businesses are invisible to the people searching for them. Not because they don&apos;t have good products or services, but because they don&apos;t know how to show up where it matters.
                </p>
                <p>
                  Since then, I&apos;ve worked on 210+ SEO campaigns and 350+ digital marketing projects across multiple industries — from local businesses in Dundee to SaaS companies serving global markets.
                </p>
                <p>
                  The approach is simple: measure what matters, fix what&apos;s broken, and build what compounds. No vanity metrics. No&ldquo; in today&apos;s digital landscape&rdquo; nonsense. Just work that moves numbers.
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl text-[var(--color-forest)]">Expertise</h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="signal">{skill}</Badge>
                ))}
              </div>
              
              <h2 className="mt-8 font-display text-2xl text-[var(--color-forest)]">Certifications</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <Badge key={cert}>{cert}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <h2 className="font-display text-2xl text-[var(--color-forest)]">Experience</h2>
          <div className="mt-8 space-y-4">
            {experience.map((exp, index) => (
              <div key={index} className="flex items-start gap-4 rounded-[var(--radius-card)] bg-white p-4">
                <div className="font-data text-sm text-[var(--color-graphite)]">{exp.period}</div>
                <div>
                  <div className="font-medium text-[var(--color-forest)]">{exp.role}</div>
                  <div className="text-sm text-[var(--color-graphite)]">{exp.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <h2 className="font-display text-2xl text-[var(--color-forest)]">Education</h2>
          <div className="mt-4 text-[var(--color-graphite)]">
            <p>BBA in Marketing</p>
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="bg-[var(--color-forest)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
          <h2 className="font-display text-2xl">Connect</h2>
          <div className="mt-6 flex justify-center gap-6">
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">LinkedIn</a>
            <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">Facebook</a>
            <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">YouTube</a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">Instagram</a>
          </div>
        </div>
      </section>
    </>
  );
}
