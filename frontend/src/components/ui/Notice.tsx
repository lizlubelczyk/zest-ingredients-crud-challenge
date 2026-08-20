import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  tone?: 'muted' | 'error';
  action?: ReactNode;
}

// Reusable centered notice ("cartel") for loading / empty / error states,
// so those messages aren't re-styled inline in every place they appear.
export function Notice({ children, tone = 'muted', action }: Props) {
  const textClass = tone === 'error' ? 'text-foreground' : 'text-muted-foreground';
  return (
    <div className="py-8 text-center">
      <p className={textClass}>{children}</p>
      {action && <div className="mt-3">{action}</div>}
    </div>
  );
}
