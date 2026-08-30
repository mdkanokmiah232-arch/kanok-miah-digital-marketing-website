import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`rounded-[var(--radius-card)] border border-[var(--color-forest)]/12 bg-[var(--color-surface)] p-6 ${
        hover ? 'transition-shadow hover:shadow-lg' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
