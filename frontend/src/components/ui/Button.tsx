import type { ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

// Reusable button so callers don't re-spell the pill + theme-token classes.
const base =
  'rounded-full px-6 py-2.5 font-medium transition-opacity disabled:opacity-50';

const variants: Record<Variant, string> = {
  primary: 'bg-primary text-primary-foreground hover:opacity-90',
  secondary:
    'bg-secondary text-foreground hover:bg-muted transition-colors',
};

export function Button({ variant = 'primary', className = '', ...props }: Props) {
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
