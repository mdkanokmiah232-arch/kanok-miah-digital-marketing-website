import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for kanokmiah.com — how we collect, use, and protect your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-[var(--color-paper)]">
      <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
        <h1 className="font-display text-4xl text-[var(--color-forest)]">Privacy Policy</h1>
        <p className="mt-2 text-sm text-[var(--color-graphite)]">Last updated: August 2026</p>

        <div className="mt-8 space-y-6 text-[var(--color-graphite)]">
          <p>This Privacy Policy describes how Kanok Miah (&quot;I&quot;, &quot;me&quot;, &quot;my&quot;) collects, uses, and shares information when you visit kanokmiah.com or use my services.</p>

          <h2 className="font-display text-2xl text-[var(--color-forest)]">Information I collect</h2>
          <p>When you submit a contact form or request a quote, I collect your name, email address, company name, and any details you provide in your message. I also collect standard analytics data (pages visited, referral source, device type) via Google Analytics.</p>

          <h2 className="font-display text-2xl text-[var(--color-forest)]">How I use your information</h2>
          <p>I use your information to respond to your inquiry, provide the services you request, and improve my website. I do not sell, trade, or rent your personal information to third parties.</p>

          <h2 className="font-display text-2xl text-[var(--color-forest)]">Cookies</h2>
          <p>This website uses Google Analytics, which uses cookies to collect anonymous usage data. You can disable cookies in your browser settings.</p>

          <h2 className="font-display text-2xl text-[var(--color-forest)]">Data retention</h2>
          <p>I retain your contact information only as long as necessary to fulfill the purpose for which it was collected, or as required by law.</p>

          <h2 className="font-display text-2xl text-[var(--color-forest)]">Your rights</h2>
          <p>You have the right to access, correct, or delete your personal data. To exercise these rights, contact me at info@kanokmiah.com.</p>

          <h2 className="font-display text-2xl text-[var(--color-forest)]">Contact</h2>
          <p>For privacy-related inquiries, email me at <a href="mailto:info@kanokmiah.com" className="text-[var(--color-signal-dk)] hover:underline">info@kanokmiah.com</a>.</p>
        </div>
      </div>
    </section>
  );
}
