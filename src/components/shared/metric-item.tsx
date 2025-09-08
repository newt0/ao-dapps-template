'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface MetricItemProps {
  label: string;
  value?: string | number;
  suffix?: string;
  isPositive?: boolean;
  isNegative?: boolean;
  conversionRate?: string;
  icon?: React.ReactNode;
}

const MetricItem = React.memo<MetricItemProps>(
  ({ label, value, suffix, isPositive, isNegative, conversionRate, icon }) => {
    const formattedValue = React.useMemo(() => {
      if (value === undefined || value === null) return '--';

      if (typeof value === 'number') {
        if (value >= 1000000) {
          return (value / 1000000).toFixed(2) + 'M';
        }
        if (value >= 1000) {
          return (value / 1000).toFixed(2) + 'K';
        }
        return value.toLocaleString();
      }

      return value;
    }, [value]);

    const displayValue = React.useMemo(() => {
      let result = formattedValue;

      if (isPositive && value !== undefined && value !== null) {
        result = `+${result}`;
      }
      if (isNegative && value !== undefined && value !== null) {
        result = `-${result}`;
      }

      if (suffix) {
        result = `${result} ${suffix}`;
      }

      return result;
    }, [formattedValue, isPositive, isNegative, suffix, value]);

    const getValueColor = () => {
      if (isPositive) return 'text-green-500';
      if (isNegative) return 'text-red-500';
      return '';
    };

    return (
      <div className="metric-display flex flex-col gap-1">
        <div className="flex items-center gap-2">
          {icon && <div className="flex-shrink-0">{icon}</div>}
          <label className="text-label" aria-label={label}>
            {label}
          </label>
        </div>

        <div
          className={cn('text-value', getValueColor())}
          aria-live="polite"
          aria-label={`${label}: ${displayValue}`}
        >
          {displayValue}
        </div>

        {conversionRate && <div className="mt-1 text-xs text-gray-500">{conversionRate}</div>}
      </div>
    );
  }
);

MetricItem.displayName = 'MetricItem';

export { MetricItem };
