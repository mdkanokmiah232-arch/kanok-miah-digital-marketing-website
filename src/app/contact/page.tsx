import type { Metadata } from 'next';
import { NAP, SOCIAL } from '@/lib/site';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Contact Kanok Miah | Free Strategy Call',
  description: 'Book a free 30-minute strategy call with Kanok Miah. Get an audit and 3 actionable steps for your business.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <Badge>SCOPE</Badge>
          <h1 className="mt-4 font-display text-4xl text-[var(--color-forest)]">
            Book a free 30-minute strategy call
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-[var(--color-graphite)]">
            Get a quick audit of your current digital presence and 3 actionable steps you can implement immediately. No cost, no commitment.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <div>
              <h2 className="font-display text-2xl text-[var(--color-forest)]">Send a message</h2>
              <form className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--color-forest)]">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full rounded-[var(--radius-card)] border border-[var(--color-forest)]/12 px-4 py-3 text-[var(--color-forest)] focus:border-[var(--color-signal)] focus:outline-none focus:ring-2 focus:ring-[var(--color-signal)]/20"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--color-forest)]">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-[var(--radius-card)] border border-[var(--color-forest)]/12 px-4 py-3 text-[var(--color-forest)] focus:border-[var(--color-signal)] focus:outline-none focus:ring-2 focus:ring-[var(--color-signal)]/20"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--color-forest)]">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 block w-full rounded-[var(--radius-card)] border border-[var(--color-forest)]/12 px-4 py-3 text-[var(--color-forest)] focus:border-[var(--color-signal)] focus:outline-none focus:ring-2 focus:ring-[var(--color-signal)]/20"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-[var(--radius-card)] bg-[var(--color-signal)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--color-signal-dk)] transition-colors"
                >
                  Send message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl text-[var(--color-forest)]">Get in touch</h2>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="font-data text-sm font-medium uppercase tracking-wider text-[var(--color-graphite)]">Email</h3>
                  <a href={`mailto:${NAP.email}`} className="mt-2 block text-[var(--color-forest)] hover:text-[var(--color-signal-dk)]">
                    {NAP.email}
                  </a>
                </div>
                <div>
                  <h3 className="font-data text-sm font-medium uppercase tracking-wider text-[var(--color-graphite)]">WhatsApp</h3>
                  <a href={`https://wa.me/${NAP.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="mt-2 block text-[var(--color-forest)] hover:text-[var(--color-signal-dk)]">
                    {NAP.whatsapp}
                  </a>
                </div>
                <div>
                  <h3 className="font-data text-sm font-medium uppercase tracking-wider text-[var(--color-graphite)]">Location</h3>
                  <p className="mt-2 text-[var(--color-forest)]">{NAP.address}</p>
                </div>
                <div>
                  <h3 className="font-data text-sm font-medium uppercase tracking-wider text-[var(--color-graphite)]">Social</h3>
                  <div className="mt-2 flex gap-4">
                    <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--color-graphite)] hover:text-[var(--color-signal-dk)]">LinkedIn</a>
                    <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="text-[var(--color-graphite)] hover:text-[var(--color-signal-dk)]">Facebook</a>
                    <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="text-[var(--color-graphite)] hover:text-[var(--color-signal-dk)]">YouTube</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
