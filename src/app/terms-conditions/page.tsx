import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions for kanokmiah.com and digital marketing services by Kanok Miah.',
};

export default function TermsPage() {
  return (
    <section className="bg-[var(--color-paper)]">
      <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
        <h1 className="font-display text-4xl text-[var(--color-forest)]">Terms & Conditions</h1>
        <p className="mt-2 text-sm text-[var(--color-graphite)]">Last updated: August 2026</p>

        <div className="mt-8 space-y-6 text-[var(--color-graphite)]">
          <p>These terms govern your use of kanokmiah.com and the services provided by Kanok Miah. By using this website or engaging my services, you agree to these terms.</p>

          <h2 className="font-display text-2xl text-[var(--color-forest)]">Services</h2>
          <p>All services are provided as described in the proposal or agreement for each project. Packages are month-to-month with no long-term contract unless explicitly agreed in writing.</p>

          <h2 className="font-display text-2xl text-[var(--color-forest)]">Pricing</h2>
          <p>Prices are listed in BDT and are starting points. The final scope and price are confirmed in writing before work begins. Payment is due at the start of each billing period.</p>

          <h2 className="font-display text-2xl text-[var(--color-forest)]">Results disclaimer</h2>
          <p>SEO and digital marketing results depend on many factors including competition, market conditions, and algorithm changes. Past results for other clients do not guarantee future outcomes. I use proven strategies but cannot guarantee specific rankings or traffic numbers.</p>

          <h2 className="font-display text-2xl text-[var(--color-forest)]">Cancellation</h2>
          <p>You may cancel any month-to-month service with 15 days written notice before the next billing cycle. There are no cancellation fees.</p>

          <h2 className="font-display text-2xl text-[var(--color-forest)]">Intellectual property</h2>
          <p>Upon full payment, you own all content, designs, and assets created specifically for your project. I retain the right to display work in my portfolio unless otherwise agreed.</p>

          <h2 className="font-display text-2xl text-[var(--color-forest)]">Limitation of liability</h2>
          <p>I am not liable for indirect, incidental, or consequential damages. My total liability for any claim shall not exceed the fees paid for the service in question.</p>

          <h2 className="font-display text-2xl text-[var(--color-forest)]">Contact</h2>
          <p>Questions about these terms? Email <a href="mailto:info@kanokmiah.com" className="text-[var(--color-signal-dk)] hover:underline">info@kanokmiah.com</a>.</p>
        </div>
      </div>
    </section>
  );
}
