import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export type WalletType = 'arweave' | 'eth';

interface WalletState {
  isConnected: boolean;
  walletAddress?: string;
  walletType?: WalletType;
  balance?: number;
  isConnecting: boolean;
  error?: string;
}

interface WalletActions {
  connect: (address: string, type: WalletType, balance?: number) => void;
  disconnect: () => void;
  setBalance: (balance: number) => void;
  setConnecting: (isConnecting: boolean) => void;
  setError: (error?: string) => void;
  clearError: () => void;
}

type WalletStore = WalletState & WalletActions;

export const useWalletStore = create<WalletStore>()(
  devtools(
    persist(
      (set, get) => ({
        // State
        isConnected: false,
        walletAddress: undefined,
        walletType: undefined,
        balance: undefined,
        isConnecting: false,
        error: undefined,

        // Actions
        connect: (address: string, type: WalletType, balance?: number) => {
          set(
            {
              isConnected: true,
              walletAddress: address,
              walletType: type,
              balance,
              isConnecting: false,
              error: undefined,
            },
            false,
            'wallet/connect'
          );
        },

        disconnect: () => {
          set(
            {
              isConnected: false,
              walletAddress: undefined,
              walletType: undefined,
              balance: undefined,
              isConnecting: false,
              error: undefined,
            },
            false,
            'wallet/disconnect'
          );
        },

        setBalance: (balance: number) => {
          set({ balance }, false, 'wallet/setBalance');
        },

        setConnecting: (isConnecting: boolean) => {
          set({ isConnecting }, false, 'wallet/setConnecting');
        },

        setError: (error?: string) => {
          set({ error }, false, 'wallet/setError');
        },

        clearError: () => {
          set({ error: undefined }, false, 'wallet/clearError');
        },
      }),
      {
        name: 'wallet-store',
        partialize: (state) => ({
          isConnected: state.isConnected,
          walletAddress: state.walletAddress,
          walletType: state.walletType,
        }),
      }
    ),
    { name: 'WalletStore' }
  )
);

// Selectors to prevent unnecessary re-renders
export const useWalletConnection = () =>
  useWalletStore((state) => ({
    isConnected: state.isConnected,
    walletAddress: state.walletAddress,
    walletType: state.walletType,
    isConnecting: state.isConnecting,
  }));

export const useWalletBalance = () =>
  useWalletStore((state) => state.balance);

export const useWalletError = () =>
  useWalletStore((state) => ({
    error: state.error,
    clearError: state.clearError,
  }));

export const useWalletActions = () =>
  useWalletStore((state) => ({
    connect: state.connect,
    disconnect: state.disconnect,
    setBalance: state.setBalance,
    setConnecting: state.setConnecting,
    setError: state.setError,
  }));