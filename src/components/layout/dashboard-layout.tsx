'use client';

import React, { Suspense } from 'react';
import { cn } from '@/lib/utils';

interface DashboardLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-12">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
  </div>
);

const DashboardLayout = React.memo<DashboardLayoutProps>(({ children, className }) => {
  return (
    <div className={cn('min-h-screen bg-gray-50', className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <Suspense fallback={<LoadingSpinner />}>
            {children}
          </Suspense>
        </div>
      </div>
    </div>
  );
});

DashboardLayout.displayName = 'DashboardLayout';

export { DashboardLayout };