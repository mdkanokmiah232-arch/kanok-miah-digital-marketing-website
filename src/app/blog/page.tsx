import type { Metadata } from 'next';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Notes on search, AI answers, and growth.',
};

export default function BlogPage() {
  return (
    <section className="bg-[var(--color-paper)]">
      <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
        <Badge>NOTES</Badge>
        <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">Notes on search, AI answers, and growth</h1>
        <p className="mt-4 text-lg text-[var(--color-graphite)]">
          Thoughts on SEO, AI search engines, and digital marketing — based on real campaigns, not theory.
        </p>
        <div className="mt-12 text-center text-[var(--color-graphite)]">
          <p>Blog posts coming soon. Check back for insights on SEO, AI SEO, and digital marketing strategy.</p>
        </div>
      </div>
    </section>
  );
}
