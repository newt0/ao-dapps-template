import { useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useWalletStore, useWalletConnection, useWalletActions, useWalletError } from '@/lib/stores/wallet-store';
import { fetchUserBalance, type UserBalance } from '@/lib/mock-data';

export const useWallet = () => {
  const { isConnected, walletAddress, walletType, isConnecting } = useWalletConnection();
  const { connect, disconnect, setConnecting, setError } = useWalletActions();
  const { error, clearError } = useWalletError();

  const connectWallet = useCallback(async (type: 'arweave' | 'eth' = 'eth') => {
    try {
      setConnecting(true);
      clearError();

      // Simulate wallet connection
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Mock wallet addresses
      const mockAddress = type === 'eth' 
        ? '0x742d35Cc6131b8Fd0c0D0f2b72e1B0e1b1D8F2A7'
        : 'arweave_mock_address_12345';

      connect(mockAddress, type, 2847.35);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to connect wallet';
      setError(errorMessage);
    } finally {
      setConnecting(false);
    }
  }, [connect, setConnecting, setError, clearError]);

  const disconnectWallet = useCallback(() => {
    try {
      disconnect();
      clearError();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to disconnect wallet';
      setError(errorMessage);
    }
  }, [disconnect, clearError, setError]);

  return {
    isConnected,
    walletAddress,
    walletType,
    isConnecting,
    error,
    connectWallet,
    disconnectWallet,
    clearError,
  };
};

export const useUserBalance = () => {
  const { walletAddress, isConnected } = useWalletConnection();

  return useQuery<UserBalance, Error>({
    queryKey: ['userBalance', walletAddress],
    queryFn: () => fetchUserBalance(walletAddress!),
    enabled: isConnected && !!walletAddress,
    staleTime: 30 * 1000, // 30 seconds
    retry: (failureCount, error) => {
      // Exponential backoff: don't retry more than 3 times
      if (failureCount >= 3) return false;
      
      // Don't retry on client errors (400-499)
      if (error.message.includes('required')) return false;
      
      return true;
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};