'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface SectionCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

const SectionCard = React.memo<SectionCardProps>(({ title, description, children, className }) => {
  return (
    <section
      className={cn('section-card', className)}
      role="region"
      aria-labelledby={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <header className="mb-6">
        <h2
          id={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}
          className="text-section-title"
        >
          {title}
        </h2>
        {description && <p className="text-description mt-2">{description}</p>}
      </header>

      <div className="section-content">{children}</div>
    </section>
  );
});

SectionCard.displayName = 'SectionCard';

export { SectionCard };
