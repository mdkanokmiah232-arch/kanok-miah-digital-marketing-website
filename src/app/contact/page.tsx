import type { Metadata } from 'next';
import Badge from '@/components/ui/Badge';
import { NAP, SOCIAL, PAYMENT_METHODS } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Book a free 30-minute strategy call with Kanok Miah. Get an SEO audit and 3 actionable steps.',
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <div>
              <Badge>GET STARTED</Badge>
              <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">
                Book a free 30-minute strategy call
              </h1>
              <p className="mt-4 text-lg text-[var(--color-graphite)]">
                Tell me about your business and goals. I will audit your current setup and give you 3 actionable steps — no cost, no commitment.
              </p>

              <form className="mt-8 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-forest)]">Name</label>
                    <input type="text" required className="mt-1 block w-full rounded-lg border border-[var(--color-forest)]/12 bg-[var(--color-surface)] px-4 py-3 text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-forest)]">Email</label>
                    <input type="email" required className="mt-1 block w-full rounded-lg border border-[var(--color-forest)]/12 bg-[var(--color-surface)] px-4 py-3 text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-forest)]">Company / Website</label>
                  <input type="text" className="mt-1 block w-full rounded-lg border border-[var(--color-forest)]/12 bg-[var(--color-surface)] px-4 py-3 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-forest)]">What do you need help with?</label>
                  <textarea rows={4} className="mt-1 block w-full rounded-lg border border-[var(--color-forest)]/12 bg-[var(--color-surface)] px-4 py-3 text-sm" placeholder="Tell me about your business, goals, and current challenges." />
                </div>
                <button type="submit" className="rounded-[var(--radius-card)] bg-[var(--color-signal)] px-8 py-3 text-sm font-medium text-white hover:bg-[var(--color-signal-dk)] transition-colors">
                  Book my free call
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="rounded-[var(--radius-card)] border border-[var(--color-forest)]/12 bg-[var(--color-surface)] p-6">
                <h2 className="font-display text-xl text-[var(--color-forest)]">Contact details</h2>
                <div className="mt-4 space-y-3 text-sm text-[var(--color-graphite)]">
                  <p>📧 {NAP.email}</p>
                  <p>📱 {NAP.phone}</p>
                  <p>💬 WhatsApp: {NAP.whatsapp}</p>
                  <p>📍 {NAP.address}</p>
                </div>
              </div>

              <div className="mt-6 rounded-[var(--radius-card)] border border-[var(--color-forest)]/12 bg-[var(--color-surface)] p-6">
                <h2 className="font-display text-xl text-[var(--color-forest)]">Payment methods</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {PAYMENT_METHODS.map((method) => (
                    <span key={method} className="rounded-[var(--radius-pill)] bg-[var(--color-signal)]/10 px-3 py-1 text-xs font-medium text-[var(--color-signal-dk)]">
                      {method}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-[var(--radius-card)] border border-[var(--color-forest)]/12 bg-[var(--color-surface)] p-6">
                <h2 className="font-display text-xl text-[var(--color-forest)]">Social profiles</h2>
                <div className="mt-3 space-y-2 text-sm">
                  <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="block text-[var(--color-signal-dk)] hover:underline">Facebook</a>
                  <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="block text-[var(--color-signal-dk)] hover:underline">LinkedIn</a>
                  <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="block text-[var(--color-signal-dk)] hover:underline">Instagram</a>
                  <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="block text-[var(--color-signal-dk)] hover:underline">YouTube</a>
                  <a href={SOCIAL.pinterest} target="_blank" rel="noopener noreferrer" className="block text-[var(--color-signal-dk)] hover:underline">Pinterest</a>
                  <a href={SOCIAL.googleMaps} target="_blank" rel="noopener noreferrer" className="block text-[var(--color-signal-dk)] hover:underline">Google Maps</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
