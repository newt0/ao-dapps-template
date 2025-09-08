'use client';

import React, { Suspense } from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { YourAOSection } from '@/components/sections/your-ao-section';
import { NetworkSection } from '@/components/sections/network-section';
import { DepositCard } from '@/components/cards/deposit-card';
import { ExternalLink } from 'lucide-react';

// Lazy load components for better performance
const LazyYourAOSection = React.lazy(() => 
  import('@/components/sections/your-ao-section').then(module => ({ 
    default: module.YourAOSection 
  }))
);

const LazyNetworkSection = React.lazy(() => 
  import('@/components/sections/network-section').then(module => ({ 
    default: module.NetworkSection 
  }))
);

const LazyDepositCard = React.lazy(() => 
  import('@/components/cards/deposit-card').then(module => ({ 
    default: module.DepositCard 
  }))
);

// Sample data - In real implementation, this would come from Zustand store
const SAMPLE_DATA = {
  wallet: {
    isConnected: true,
    address: '0x1234...5678'
  },
  balances: {
    currentBalance: 1250.75,
    thirtyDayProjection: 125.50,
    oneYearProjection: 1825.25
  },
  network: {
    fairLaunchDeposits: 12450000,
    totalStethBridged: 8750.25,
    totalDaiBridged: 15000.75,
    totalUsdsBridged: 9250.50
  },
  deposits: {
    arweave: {
      tokenName: 'Arweave',
      tokenSymbol: 'AR',
      apy: 4.2,
      nativeYield: 2.1,
      amountDeposited: 500.25,
      thirtyDayProjection: 42.5,
      oneYearProjection: 520.75,
      thirtyDayRate: 0.001150,
      oneYearRate: 0.001380
    },
    dai: {
      tokenName: 'DAI',
      tokenSymbol: 'DAI',
      apy: 2.7,
      nativeYield: 1.5,
      amountDeposited: 1000.0,
      thirtyDayProjection: 22.5,
      oneYearProjection: 270.0,
      thirtyDayRate: 0.000850,
      oneYearRate: 0.001020
    }
  }
};

const LoadingSection = ({ className }: { className?: string }) => (
  <div className={`animate-pulse bg-white rounded-lg border border-gray-200 p-6 ${className}`}>
    <div className="h-6 bg-gray-200 rounded mb-4"></div>
    <div className="space-y-3">
      <div className="h-4 bg-gray-200 rounded"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
    </div>
  </div>
);

export default function DashboardPage() {
  // In a real implementation, these would be managed by Zustand
  const [isWalletConnected, setIsWalletConnected] = React.useState(SAMPLE_DATA.wallet.isConnected);
  
  const handleConnectWallet = React.useCallback(() => {
    setIsWalletConnected(true);
    // In real implementation: dispatch wallet connection action
  }, []);

  const handleSwap = React.useCallback((tokenSymbol: string) => {
    console.log(`Swap ${tokenSymbol}`);
    // In real implementation: dispatch swap action
  }, []);

  const handleDeposit = React.useCallback((tokenSymbol: string) => {
    console.log(`Deposit ${tokenSymbol}`);
    // In real implementation: dispatch deposit action
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Your AO Section */}
        <Suspense fallback={<LoadingSection />}>
          <LazyYourAOSection
            isConnected={isWalletConnected}
            walletAddress={SAMPLE_DATA.wallet.address}
            currentBalance={SAMPLE_DATA.balances.currentBalance}
            thirtyDayProjection={SAMPLE_DATA.balances.thirtyDayProjection}
            oneYearProjection={SAMPLE_DATA.balances.oneYearProjection}
            onConnectWallet={handleConnectWallet}
          />
        </Suspense>

        {/* Network Section */}
        <Suspense fallback={<LoadingSection />}>
          <LazyNetworkSection
            fairLaunchDeposits={SAMPLE_DATA.network.fairLaunchDeposits}
            totalStethBridged={SAMPLE_DATA.network.totalStethBridged}
            totalDaiBridged={SAMPLE_DATA.network.totalDaiBridged}
            totalUsdsBridged={SAMPLE_DATA.network.totalUsdsBridged}
          />
        </Suspense>

        {/* Deposits Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                You are currently receiving yield
              </h2>
              <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm mt-1">
                Manage Delegations
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Arweave Card */}
            <Suspense fallback={<LoadingSection />}>
              <LazyDepositCard
                tokenName={SAMPLE_DATA.deposits.arweave.tokenName}
                tokenSymbol={SAMPLE_DATA.deposits.arweave.tokenSymbol}
                apy={SAMPLE_DATA.deposits.arweave.apy}
                nativeYield={SAMPLE_DATA.deposits.arweave.nativeYield}
                amountDeposited={SAMPLE_DATA.deposits.arweave.amountDeposited}
                thirtyDayProjection={SAMPLE_DATA.deposits.arweave.thirtyDayProjection}
                oneYearProjection={SAMPLE_DATA.deposits.arweave.oneYearProjection}
                thirtyDayRate={SAMPLE_DATA.deposits.arweave.thirtyDayRate}
                oneYearRate={SAMPLE_DATA.deposits.arweave.oneYearRate}
                isWalletConnected={isWalletConnected}
                onConnectWallet={handleConnectWallet}
                onSwap={() => handleSwap('AR')}
                onDeposit={() => handleDeposit('AR')}
              />
            </Suspense>

            {/* DAI Card */}
            <Suspense fallback={<LoadingSection />}>
              <LazyDepositCard
                tokenName={SAMPLE_DATA.deposits.dai.tokenName}
                tokenSymbol={SAMPLE_DATA.deposits.dai.tokenSymbol}
                apy={SAMPLE_DATA.deposits.dai.apy}
                nativeYield={SAMPLE_DATA.deposits.dai.nativeYield}
                amountDeposited={SAMPLE_DATA.deposits.dai.amountDeposited}
                thirtyDayProjection={SAMPLE_DATA.deposits.dai.thirtyDayProjection}
                oneYearProjection={SAMPLE_DATA.deposits.dai.oneYearProjection}
                thirtyDayRate={SAMPLE_DATA.deposits.dai.thirtyDayRate}
                oneYearRate={SAMPLE_DATA.deposits.dai.oneYearRate}
                isWalletConnected={isWalletConnected}
                onConnectWallet={handleConnectWallet}
                onSwap={() => handleSwap('DAI')}
                onDeposit={() => handleDeposit('DAI')}
              />
            </Suspense>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}