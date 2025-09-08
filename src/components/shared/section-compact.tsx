'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface SectionCompactProps {
  title: string;
  children: React.ReactNode;
  walletButton?: React.ReactNode;
  className?: string;
}

const SectionCompact = React.memo<SectionCompactProps>(
  ({ title, children, walletButton, className }) => {
    return (
      <section
        className={cn('section-compact', className)}
        role="region"
        aria-labelledby={`compact-section-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <header className="mb-4 flex items-center justify-between">
          <h2
            id={`compact-section-${title.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-section-title-sm"
          >
            {title}
          </h2>
          {walletButton && <div className="flex-shrink-0">{walletButton}</div>}
        </header>

        <div className="section-content">{children}</div>
      </section>
    );
  }
);

SectionCompact.displayName = 'SectionCompact';

export { SectionCompact };
