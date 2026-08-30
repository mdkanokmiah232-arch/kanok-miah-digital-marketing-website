import { ReactNode } from 'react';

type MetricProps = {
  value: string;
  label: string;
  delta?: string;
  deltaType?: 'positive' | 'negative' | 'neutral';
  className?: string;
};

export default function Metric({ value, label, delta, deltaType = 'neutral', className = '' }: MetricProps) {
  const deltaColors = {
    positive: 'text-[var(--color-signal-dk)]',
    negative: 'text-red-600',
    neutral: 'text-[var(--color-graphite)]',
  };
  
  return (
    <div className={`text-center ${className}`}>
      <div className="font-data text-3xl font-medium tabular-nums text-[var(--color-forest)]">
        {value}
      </div>
      <div className="mt-1 text-sm text-[var(--color-graphite)]">{label}</div>
      {delta && (
        <div className={`mt-1 font-data text-sm font-medium ${deltaColors[deltaType]}`}>
          {delta}
        </div>
      )}
    </div>
  );
}
