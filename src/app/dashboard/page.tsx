'use client';

import React, { Suspense } from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { YourAOSection } from '@/components/sections/your-ao-section';
import { NetworkSection } from '@/components/sections/network-section';
import { DepositCard } from '@/components/cards/deposit-card';
import { ExternalLink } from 'lucide-react';
import { useWallet, useUserBalance } from '@/hooks/use-wallet';
import { useNetworkData, useAllDeposits, useDepositMutations } from '@/hooks/use-network-data';

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
  // Use Zustand wallet store and TanStack Query hooks
  const { isConnected, walletAddress, connectWallet, error } = useWallet();
  const { data: userBalance, isLoading: balanceLoading, error: balanceError } = useUserBalance();
  const { data: networkData, isLoading: networkLoading, error: networkError } = useNetworkData();
  const { data: deposits, isLoading: depositsLoading, error: depositsError } = useAllDeposits();
  const { handleDeposit, handleSwap } = useDepositMutations();

  const handleConnectWallet = React.useCallback(() => {
    connectWallet('eth');
  }, [connectWallet]);

  const handleTokenSwap = React.useCallback(async (tokenSymbol: string) => {
    try {
      await handleSwap(tokenSymbol, 'AO', 100); // Example: swap 100 tokens to AO
    } catch (err) {
      console.error(`Failed to swap ${tokenSymbol}:`, err);
    }
  }, [handleSwap]);

  const handleTokenDeposit = React.useCallback(async (tokenSymbol: string) => {
    try {
      await handleDeposit(tokenSymbol, 100); // Example: deposit 100 tokens
    } catch (err) {
      console.error(`Failed to deposit ${tokenSymbol}:`, err);
    }
  }, [handleDeposit]);

  // Error states
  if (error || balanceError || networkError || depositsError) {
    return (
      <DashboardLayout>
        <div className="text-center py-12">
          <div className="text-red-600 mb-4" role="alert" aria-live="assertive">
            <h2 className="text-lg font-semibold mb-2">Error Loading Dashboard</h2>
            <p>{error || balanceError?.message || networkError?.message || depositsError?.message}</p>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Loading indicator with screen reader support */}
        <div aria-live="polite" className="sr-only">
          {(balanceLoading || networkLoading || depositsLoading) && 'Loading dashboard data...'}
        </div>

        {/* Your AO Section */}
        <Suspense fallback={<LoadingSection />}>
          <LazyYourAOSection
            isConnected={isConnected}
            walletAddress={walletAddress}
            currentBalance={userBalance?.currentBalance}
            thirtyDayProjection={userBalance?.thirtyDayProjection}
            oneYearProjection={userBalance?.oneYearProjection}
            onConnectWallet={handleConnectWallet}
          />
        </Suspense>

        {/* Network Section */}
        <Suspense fallback={<LoadingSection />}>
          {networkData ? (
            <LazyNetworkSection
              fairLaunchDeposits={networkData.fairLaunchDeposits}
              totalStethBridged={networkData.totalStethBridged}
              totalDaiBridged={networkData.totalDaiBridged}
              totalUsdsBridged={networkData.totalUsdsBridged}
            />
          ) : (
            <LoadingSection />
          )}
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
            {deposits && deposits.length > 0 ? (
              deposits.slice(0, 2).map((deposit) => (
                <Suspense key={deposit.tokenSymbol} fallback={<LoadingSection />}>
                  <LazyDepositCard
                    tokenName={deposit.tokenName}
                    tokenSymbol={deposit.tokenSymbol}
                    apy={deposit.apy}
                    nativeYield={deposit.nativeYield}
                    amountDeposited={deposit.amountDeposited}
                    thirtyDayProjection={deposit.thirtyDayProjection}
                    oneYearProjection={deposit.oneYearProjection}
                    thirtyDayRate={deposit.thirtyDayRate}
                    oneYearRate={deposit.oneYearRate}
                    isWalletConnected={isConnected}
                    onConnectWallet={handleConnectWallet}
                    onSwap={() => handleTokenSwap(deposit.tokenSymbol)}
                    onDeposit={() => handleTokenDeposit(deposit.tokenSymbol)}
                  />
                </Suspense>
              ))
            ) : (
              <>
                <LoadingSection />
                <LoadingSection />
              </>
            )}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}