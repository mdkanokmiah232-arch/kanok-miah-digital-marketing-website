import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Branding',
  description: 'Branding services: brand identity and positioning.',
};

export default function BrandingPage() {
  return (
    <section className="bg-[var(--color-paper)]">
      <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
        <p className="text-sm text-[var(--color-signal-dk)]"><Link href="/services/digital-marketing" className="hover:underline">Digital Marketing</Link> / Branding</p>
        <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">Branding services</h1>
        <div className="mt-6 rounded-[var(--radius-card)] border border-[var(--color-signal)]/20 bg-[var(--color-signal)]/5 p-6">
          <h2 className="font-display text-xl text-[var(--color-forest)]">Quick answer</h2>
          <p className="mt-2 text-[var(--color-graphite)]">Branding defines who you are, what you stand for, and how customers perceive you — then builds the visual and verbal identity to match.</p>
        </div>
        <div className="mt-8 space-y-4 text-[var(--color-graphite)]">
          <p>Branding is not just a logo. It is the consistent impression people get when they encounter your business — on your website, in your ads, in your customer service.</p>
          <p>I help define your positioning, voice, and visual identity so every touchpoint tells the same story.</p>
        </div>
        <div className="mt-12">
          <Link href="/contact" className="inline-block rounded-[var(--radius-card)] bg-[var(--color-signal)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--color-signal-dk)] transition-colors">Get a free consultation</Link>
        </div>
      </div>
    </section>
  );
}
