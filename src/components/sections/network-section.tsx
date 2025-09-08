'use client';

import React from 'react';
import { SectionCard } from '@/components/shared/section-card';
import { MetricItem } from '@/components/shared/metric-item';
import { DollarSign, Coins, Banknote, CircleDollarSign } from 'lucide-react';

interface NetworkSectionProps {
  fairLaunchDeposits: number;
  totalStethBridged: number;
  totalDaiBridged: number;
  totalUsdsBridged: number;
}

const NetworkSection = React.memo<NetworkSectionProps>(
  ({ fairLaunchDeposits, totalStethBridged, totalDaiBridged, totalUsdsBridged }) => {
    const formattedFairLaunch = React.useMemo(() => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(fairLaunchDeposits);
    }, [fairLaunchDeposits]);

    const formatTokenValue = React.useCallback((value: number) => {
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(value);
    }, []);

    const stethIcon = React.useMemo(() => <Coins className="h-4 w-4 text-blue-500" />, []);

    const daiIcon = React.useMemo(() => <Banknote className="h-4 w-4 text-yellow-500" />, []);

    const usdsIcon = React.useMemo(
      () => <CircleDollarSign className="h-4 w-4 text-green-500" />,
      []
    );

    const fairLaunchIcon = React.useMemo(
      () => <DollarSign className="h-4 w-4 text-gray-600" />,
      []
    );

    return (
      <SectionCard
        title="Network"
        description="Track overall network token emissions, total deposited assets, and your current and projected AO holdings."
        className="transition-all duration-300 hover:shadow-lg"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <MetricItem
            label="FAIR LAUNCH DEPOSITS"
            value={formattedFairLaunch}
            icon={fairLaunchIcon}
          />

          <MetricItem
            label="TOTAL STETH BRIDGED"
            value={formatTokenValue(totalStethBridged)}
            suffix="stETH"
            icon={stethIcon}
          />

          <MetricItem
            label="TOTAL DAI BRIDGED"
            value={formatTokenValue(totalDaiBridged)}
            suffix="DAI"
            icon={daiIcon}
          />

          <MetricItem
            label="TOTAL USDS BRIDGED"
            value={formatTokenValue(totalUsdsBridged)}
            suffix="USDS"
            icon={usdsIcon}
          />
        </div>
      </SectionCard>
    );
  }
);

NetworkSection.displayName = 'NetworkSection';

export { NetworkSection };
