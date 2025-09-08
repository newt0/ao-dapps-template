'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface AoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
}

const AoButton = React.forwardRef<HTMLButtonElement, AoButtonProps>(
  ({ className, variant = 'primary', isLoading = false, children, disabled, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2';

    const variants = {
      primary:
        'bg-ao-success border border-ao-success text-white hover:bg-ao-success/90 hover:border-ao-success/90',
      secondary:
        'bg-ao-gray-100 border border-ao-gray-400 text-ao-gray-900 hover:bg-ao-gray-200 hover:border-ao-gray-400/70',
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], className)}
        ref={ref}
        disabled={disabled || isLoading}
        aria-disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="mr-2 -ml-1 h-4 w-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Loading...
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

AoButton.displayName = 'AoButton';

export default React.memo(AoButton);
