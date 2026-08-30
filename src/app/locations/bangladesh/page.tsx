import type { Metadata } from 'next';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'SEO Consultant in Bangladesh',
  description: 'Digital marketing and SEO consultant in Bangladesh. Local office in Dhaka.',
};

const services = [
  { title: 'Local SEO', href: '/services/local-seo/bangladesh' },
  { title: 'SEO Services', href: '/services/seo/bangladesh' },
  { title: 'E-commerce SEO', href: '/services/ecommerce-seo/bangladesh' },
  { title: 'AI SEO', href: '/services/ai-seo/bangladesh' },
  { title: 'Digital Marketing', href: '/services/digital-marketing/bangladesh' },
];

export default function BangladeshPage() {
  return (
    <>
      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="max-w-3xl">
            <Badge>🇧🇩 BANGLADESH</Badge>
            <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">Digital marketing & SEO consultant in Bangladesh</h1>
            <p className="mt-4 text-lg text-[var(--color-graphite)]">
              I am based in Dhaka, Bangladesh. I work with local businesses, e-commerce brands, and manufacturers across the country — in both Bangla and English.
            </p>
          </div>

          <div className="mt-8 rounded-[var(--radius-card)] border border-[var(--color-signal)]/20 bg-[var(--color-signal)]/5 p-6">
            <h2 className="font-display text-xl text-[var(--color-forest)]">Quick answer</h2>
            <p className="mt-2 text-[var(--color-graphite)]">
              Kanok Miah is a digital marketing consultant based in Dhaka, Bangladesh, specializing in SEO, Facebook Ads, Google Ads, and social media marketing for local and international businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <h2 className="font-display text-2xl text-[var(--color-forest)]">Services in Bangladesh</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.href} href={s.href}>
                <Card hover><h3 className="font-display text-lg text-[var(--color-forest)]">{s.title}</h3></Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <h2 className="font-display text-2xl text-[var(--color-forest)]">Office & contact</h2>
          <div className="mt-4 space-y-2 text-[var(--color-graphite)]">
            <p>Mohammadia Housing Ltd, Road No. 7, Dhaka 1207, Bangladesh</p>
            <p>WhatsApp: +8801712-883101</p>
            <p>Email: info@kanokmiah.com</p>
          </div>

          <div className="mt-8 rounded-[var(--radius-card)] border border-[var(--color-forest)]/12 bg-[var(--color-surface)] p-6">
            <h3 className="font-display text-lg text-[var(--color-forest)]">FAQ (বাংলায়)</h3>
            <div className="mt-4 space-y-4 text-[var(--color-graphite)]">
              <div>
                <p className="font-medium text-[var(--color-forest)]">SEO কি?</p>
                <p className="mt-1 text-sm">SEO মানে Search Engine Optimization — আপনার ওয়েবসাইটকে Google এর প্রথম পৃষ্ঠায় আনার প্রক্রিয়া।</p>
              </div>
              <div>
                <p className="font-medium text-[var(--color-forest)]">ফি কত?</p>
                <p className="mt-1 text-sm">Standard প্যাকেজ ২৫,০০০ টাকা/মাস থেকে শুরু। Professional ৩৫,০০০, Premium ৫৫,০০০।</p>
              </div>
              <div>
                <p className="font-medium text-[var(--color-forest)]">কতদিনে রেজাল্ট আসবে?</p>
                <p className="mt-1 text-sm">সাধারণত ৩-৬ মাসে উল্লেখযোগ্য রেজাল্ট আসে। তবে এটা প্রতিযোগিতা এবং কীওয়ার্ডের উপর নির্ভর করে।</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
