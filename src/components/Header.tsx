'use client';

import { useState } from 'react';
import Link from 'next/link';

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/case-studies' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-forest)]/12 bg-[var(--color-surface)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-xl text-[var(--color-forest)]">Kanok Miah</span>
          <span className="hidden text-sm text-[var(--color-graphite)] sm:block">Digital Growth & AI SEO</span>
        </Link>
        
        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-[var(--color-forest)] hover:text-[var(--color-signal-dk)] transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-[var(--radius-card)] bg-[var(--color-signal)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[var(--color-signal-dk)] transition-colors"
          >
            Book a free call
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-[var(--color-forest)]/12 bg-[var(--color-surface)] px-4 py-4 md:hidden">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2 text-sm font-medium text-[var(--color-forest)] hover:text-[var(--color-signal-dk)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 block rounded-[var(--radius-card)] bg-[var(--color-signal)] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[var(--color-signal-dk)]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book a free call
          </Link>
        </div>
      )}
    </header>
  );
}
