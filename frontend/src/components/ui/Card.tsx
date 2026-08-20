import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

// Reusable card surface (theme tokens: card bg, border, 2xl radius).
export function Card({ children, className = '' }: Props) {
  return (
    <div
      className={`rounded-2xl border border-border bg-card p-6 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}
