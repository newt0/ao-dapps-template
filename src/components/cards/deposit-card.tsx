'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { AOButton } from '@/components/shared/ao-button';
import { WalletButton } from '@/components/shared/wallet-button';
import { MetricItem } from '@/components/shared/metric-item';
import { Wallet } from 'lucide-react';

interface DepositCardProps {
  tokenName: string;
  tokenSymbol: string;
  apy?: number;
  nativeYield?: number;
  amountDeposited?: number;
  thirtyDayProjection?: number;
  oneYearProjection?: number;
  thirtyDayRate?: number;
  oneYearRate?: number;
  isWalletConnected: boolean;
  onConnectWallet: () => void;
  onSwap?: () => void;
  onDeposit?: () => void;
}

const DepositCard = React.memo<DepositCardProps>(
  ({
    tokenName,
    tokenSymbol,
    apy,
    nativeYield,
    amountDeposited,
    thirtyDayProjection,
    oneYearProjection,
    thirtyDayRate,
    oneYearRate,
    isWalletConnected,
    onConnectWallet,
    onSwap,
    onDeposit,
  }) => {
    const formattedAPY = React.useMemo(() => {
      return apy ? `${apy.toFixed(1)}%` : '--';
    }, [apy]);

    const formattedNativeYield = React.useMemo(() => {
      return nativeYield ? `${nativeYield.toFixed(1)}%` : '--';
    }, [nativeYield]);

    const thirtyDayRateDisplay = React.useMemo(() => {
      return thirtyDayRate ? `1 ${tokenSymbol} = ${thirtyDayRate.toFixed(6)} AO` : '--';
    }, [thirtyDayRate, tokenSymbol]);

    const oneYearRateDisplay = React.useMemo(() => {
      return oneYearRate ? `1 ${tokenSymbol} = ${oneYearRate.toFixed(6)} AO` : '--';
    }, [oneYearRate, tokenSymbol]);

    const walletIcon = React.useMemo(() => <Wallet className="h-4 w-4 text-gray-600" />, []);

    const handleSwap = React.useCallback(() => {
      onSwap?.();
    }, [onSwap]);

    const handleDeposit = React.useCallback(() => {
      if (isWalletConnected) {
        onDeposit?.();
      } else {
        onConnectWallet();
      }
    }, [isWalletConnected, onDeposit, onConnectWallet]);

    const depositButtonText = React.useMemo(() => {
      return isWalletConnected ? `Deposit ${tokenSymbol}` : 'Connect ETH Wallet';
    }, [isWalletConnected, tokenSymbol]);

    return (
      <article
        className={cn(
          'rounded-lg border border-gray-200 bg-white p-6 shadow-sm',
          'transition-all duration-300 hover:shadow-lg'
        )}
      >
        {/* Header */}
        <header className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{tokenName}</h3>
            <div className="mt-1 text-2xl font-bold text-green-600">{formattedAPY} APY</div>
          </div>
          <WalletButton isConnected={isWalletConnected} onConnect={onConnectWallet} />
        </header>

        {/* Content */}
        <div className="mb-6 space-y-4">
          <MetricItem label="NATIVE YIELD" value={formattedNativeYield} />

          <MetricItem
            label="AMOUNT DEPOSITED"
            value={isWalletConnected ? amountDeposited : '+/-'}
            suffix={isWalletConnected ? tokenSymbol : undefined}
            icon={walletIcon}
          />

          <div className="grid grid-cols-2 gap-4">
            <MetricItem
              label="30 DAY PROJECTION"
              value={isWalletConnected ? thirtyDayProjection : '+/-'}
              suffix={isWalletConnected ? 'AO' : undefined}
              isPositive={
                isWalletConnected && thirtyDayProjection ? thirtyDayProjection > 0 : false
              }
            />

            <MetricItem
              label="1 YEAR PROJECTION"
              value={isWalletConnected ? oneYearProjection : '+/-'}
              suffix={isWalletConnected ? 'AO' : undefined}
              isPositive={isWalletConnected && oneYearProjection ? oneYearProjection > 0 : false}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <MetricItem label="30 DAY RATE" value={thirtyDayRateDisplay} />

            <MetricItem label="1 YEAR RATE" value={oneYearRateDisplay} />
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <AOButton
            variant="primary"
            onClick={handleSwap}
            disabled={!onSwap}
            className="flex-1"
            aria-label={`Swap ${tokenSymbol}`}
          >
            Swap
          </AOButton>

          <AOButton
            variant="secondary"
            onClick={handleDeposit}
            className="flex-1"
            aria-label={depositButtonText}
          >
            {depositButtonText}
          </AOButton>
        </div>
      </article>
    );
  }
);

DepositCard.displayName = 'DepositCard';

export { DepositCard };
