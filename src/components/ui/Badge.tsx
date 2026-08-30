import { ReactNode } from 'react';

type BadgeProps = {
  children: ReactNode;
  variant?: 'default' | 'signal' | 'forest';
  className?: string;
};

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-[var(--color-paper)] text-[var(--color-graphite)]',
    signal: 'bg-[var(--color-signal)]/10 text-[var(--color-signal-dk)]',
    forest: 'bg-[var(--color-forest)] text-white',
  };
  
  return (
    <span
      className={`inline-flex items-center rounded-[var(--radius-pill)] px-3 py-1 text-xs font-medium font-data ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
