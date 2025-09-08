'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface WalletButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  state?: 'disconnected' | 'connected';
  walletType?: 'arweave' | 'eth';
  walletAddress?: string;
  isLoading?: boolean;
}

const WalletButton = React.forwardRef<HTMLButtonElement, WalletButtonProps>(
  (
    {
      className,
      state = 'disconnected',
      walletType = 'arweave',
      walletAddress,
      isLoading = false,
      onClick,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 gap-2';

    const buttonStyles =
      'bg-ao-gray-100 border border-ao-gray-400 text-ao-gray-900 hover:bg-ao-gray-200 hover:border-ao-gray-400/70';

    const handleClick = React.useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!isLoading && onClick) {
          onClick(event);
        }
      },
      [isLoading, onClick]
    );

    const formatAddress = (address: string) => {
      if (address.length < 12) return address;
      return `${address.slice(0, 6)}...${address.slice(-6)}`;
    };

    const getWalletIcon = () => {
      if (walletType === 'arweave') {
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        );
      } else {
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
          </svg>
        );
      }
    };

    const getButtonText = () => {
      if (isLoading) return 'Connecting...';

      if (state === 'connected' && walletAddress) {
        return formatAddress(walletAddress);
      }

      return `Connect ${walletType === 'arweave' ? 'Arweave' : 'Ethereum'} Wallet`;
    };

    return (
      <button
        className={cn(baseStyles, buttonStyles, className)}
        ref={ref}
        onClick={handleClick}
        disabled={isLoading}
        aria-disabled={isLoading}
        aria-label={
          state === 'connected'
            ? `Connected to ${walletType} wallet`
            : `Connect ${walletType} wallet`
        }
        aria-pressed={state === 'connected'}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="h-4 w-4 animate-spin"
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
          </>
        ) : (
          getWalletIcon()
        )}
        {getButtonText()}
      </button>
    );
  }
);

WalletButton.displayName = 'WalletButton';

export default React.memo(WalletButton);
