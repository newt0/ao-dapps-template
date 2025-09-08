'use client';

import React from 'react';
import { MetricItem } from './metric-item';

interface BalanceDisplayProps {
  currentBalance?: number;
  thirtyDayProjection?: number;
  oneYearProjection?: number;
  isConnected: boolean;
  tokenSymbol?: string;
}

const BalanceDisplay = React.memo<BalanceDisplayProps>(
  ({ currentBalance, thirtyDayProjection, oneYearProjection, isConnected, tokenSymbol = 'AO' }) => {
    const formatProjectionValue = React.useMemo(() => {
      return (value?: number) => {
        if (!isConnected) return '+/-';
        if (value === undefined || value === null) return '--';

        const isPositive = value > 0;
        const isNegative = value < 0;
        const absValue = Math.abs(value);

        return {
          value: absValue,
          isPositive,
          isNegative,
        };
      };
    }, [isConnected]);

    const currentBalanceDisplay = React.useMemo(() => {
      if (!isConnected) return '+/-';
      return currentBalance;
    }, [isConnected, currentBalance]);

    const thirtyDayDisplay = formatProjectionValue(thirtyDayProjection);
    const oneYearDisplay = formatProjectionValue(oneYearProjection);

    return (
      <div className="flex flex-col gap-6" role="region" aria-label="Balance information">
        <MetricItem
          label="CURRENT BALANCE"
          value={currentBalanceDisplay}
          suffix={isConnected ? tokenSymbol : undefined}
        />

        <MetricItem
          label="30 DAY PROJECTION"
          value={typeof thirtyDayDisplay === 'object' ? thirtyDayDisplay.value : thirtyDayDisplay}
          suffix={isConnected && typeof thirtyDayDisplay === 'object' ? tokenSymbol : undefined}
          isPositive={typeof thirtyDayDisplay === 'object' ? thirtyDayDisplay.isPositive : false}
          isNegative={typeof thirtyDayDisplay === 'object' ? thirtyDayDisplay.isNegative : false}
        />

        <MetricItem
          label="1 YEAR PROJECTION"
          value={typeof oneYearDisplay === 'object' ? oneYearDisplay.value : oneYearDisplay}
          suffix={isConnected && typeof oneYearDisplay === 'object' ? tokenSymbol : undefined}
          isPositive={typeof oneYearDisplay === 'object' ? oneYearDisplay.isPositive : false}
          isNegative={typeof oneYearDisplay === 'object' ? oneYearDisplay.isNegative : false}
        />
      </div>
    );
  }
);

BalanceDisplay.displayName = 'BalanceDisplay';

export { BalanceDisplay };
