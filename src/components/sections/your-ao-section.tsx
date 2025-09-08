'use client';

import React from 'react';
import { SectionCompact } from '@/components/shared/section-compact';
import { WalletButton } from '@/components/shared/wallet-button';
import { BalanceDisplay } from '@/components/shared/balance-display';

interface YourAOSectionProps {
  isConnected: boolean;
  walletAddress?: string;
  currentBalance?: number;
  thirtyDayProjection?: number;
  oneYearProjection?: number;
  onConnectWallet: () => void;
}

const YourAOSection = React.memo<YourAOSectionProps>(
  ({
    isConnected,
    walletAddress,
    currentBalance,
    thirtyDayProjection,
    oneYearProjection,
    onConnectWallet,
  }) => {
    const walletButton = React.useMemo(
      () => (
        <WalletButton
          isConnected={isConnected}
          walletAddress={walletAddress}
          onConnect={onConnectWallet}
        />
      ),
      [isConnected, walletAddress, onConnectWallet]
    );

    return (
      <SectionCompact
        title="Your AO"
        walletButton={walletButton}
        className="transition-all duration-300 hover:shadow-lg"
      >
        <div className="space-y-4">
          <BalanceDisplay
            currentBalance={currentBalance}
            thirtyDayProjection={thirtyDayProjection}
            oneYearProjection={oneYearProjection}
            isConnected={isConnected}
            tokenSymbol="AO"
          />

          {!isConnected && (
            <div className="py-4 text-center">
              <p className="text-description mb-4">
                Connect your wallet to view your AO balance and projections
              </p>
            </div>
          )}
        </div>
      </SectionCompact>
    );
  }
);

YourAOSection.displayName = 'YourAOSection';

export { YourAOSection };
