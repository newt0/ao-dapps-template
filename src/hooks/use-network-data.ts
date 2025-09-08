import { useQuery } from '@tanstack/react-query';
import { 
  fetchNetworkData, 
  fetchDepositData, 
  fetchAllDeposits,
  type NetworkData, 
  type DepositData 
} from '@/lib/mock-data';

export const useNetworkData = () => {
  return useQuery<NetworkData, Error>({
    queryKey: ['networkData'],
    queryFn: fetchNetworkData,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchInterval: 30 * 1000, // Refetch every 30 seconds
    retry: (failureCount, error) => {
      // Exponential backoff: don't retry more than 3 times
      if (failureCount >= 3) return false;
      return true;
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

export const useDepositData = (tokenSymbol: string) => {
  return useQuery<DepositData, Error>({
    queryKey: ['depositData', tokenSymbol],
    queryFn: () => fetchDepositData(tokenSymbol),
    enabled: !!tokenSymbol,
    staleTime: 2 * 60 * 1000, // 2 minutes
    retry: (failureCount, error) => {
      if (failureCount >= 3) return false;
      
      // Don't retry if token not found
      if (error.message.includes('not found')) return false;
      
      return true;
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

export const useAllDeposits = () => {
  return useQuery<DepositData[], Error>({
    queryKey: ['allDeposits'],
    queryFn: fetchAllDeposits,
    staleTime: 2 * 60 * 1000, // 2 minutes
    refetchInterval: 60 * 1000, // Refetch every minute
    retry: (failureCount) => failureCount < 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

// Hook for multiple specific deposits
export const useMultipleDeposits = (tokenSymbols: string[]) => {
  const queries = tokenSymbols.map(symbol => ({
    queryKey: ['depositData', symbol],
    queryFn: () => fetchDepositData(symbol),
    staleTime: 2 * 60 * 1000,
    retry: (failureCount: number, error: Error) => {
      if (failureCount >= 3) return false;
      if (error.message.includes('not found')) return false;
      return true;
    },
    retryDelay: (attemptIndex: number) => Math.min(1000 * 2 ** attemptIndex, 30000),
  }));

  return queries;
};

// Hook with optimistic updates for deposits
export const useDepositMutations = () => {
  // This would typically include useMutation hooks for deposit/withdraw operations
  // For now, we'll provide placeholder functions
  
  const handleDeposit = async (tokenSymbol: string, amount: number) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // In real implementation, this would make actual API calls
    console.log(`Depositing ${amount} ${tokenSymbol}`);
    
    // Optimistic update would happen here
    // queryClient.setQueryData(['depositData', tokenSymbol], (old) => ({ ...old, amountDeposited: old.amountDeposited + amount }))
  };

  const handleWithdraw = async (tokenSymbol: string, amount: number) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log(`Withdrawing ${amount} ${tokenSymbol}`);
  };

  const handleSwap = async (fromToken: string, toToken: string, amount: number) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log(`Swapping ${amount} ${fromToken} to ${toToken}`);
  };

  return {
    handleDeposit,
    handleWithdraw,
    handleSwap,
  };
};