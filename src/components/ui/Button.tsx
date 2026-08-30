import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
} & (ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement>);

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2';
  
  const variants = {
    primary: 'bg-[var(--color-signal)] text-white hover:bg-[var(--color-signal-dk)] focus-visible:outline-[var(--color-signal-dk)]',
    secondary: 'bg-[var(--color-forest)] text-white hover:bg-[var(--color-forest)]/90 focus-visible:outline-[var(--color-forest)]',
    ghost: 'bg-transparent text-[var(--color-forest)] hover:bg-[var(--color-paper)] focus-visible:outline-[var(--color-signal-dk)]',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-[var(--radius-card)]',
    md: 'px-6 py-3 text-base rounded-[var(--radius-card)]',
    lg: 'px-8 py-4 text-lg rounded-[var(--radius-card)]',
  };
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
