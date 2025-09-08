export interface NetworkData {
  fairLaunchDeposits: number;
  totalStethBridged: number;
  totalDaiBridged: number;
  totalUsdsBridged: number;
}

export interface DepositData {
  tokenName: string;
  tokenSymbol: string;
  apy: number;
  nativeYield: number;
  amountDeposited: number;
  thirtyDayProjection: number;
  oneYearProjection: number;
  thirtyDayRate: number;
  oneYearRate: number;
}

export interface UserBalance {
  currentBalance: number;
  thirtyDayProjection: number;
  oneYearProjection: number;
}

// Mock API delay simulation
export const mockDelay = (ms: number = 1000) => 
  new Promise(resolve => setTimeout(resolve, ms));

// Network data with realistic AO Portal values
export const mockNetworkData: NetworkData = {
  fairLaunchDeposits: 45_750_000,
  totalStethBridged: 12_847.75,
  totalDaiBridged: 23_156.25,
  totalUsdsBridged: 18_942.50,
};

// User balance data
export const mockUserBalance: UserBalance = {
  currentBalance: 2_847.35,
  thirtyDayProjection: 284.73,
  oneYearProjection: 3_416.82,
};

// Deposit data for different tokens
export const mockDepositData: Record<string, DepositData> = {
  AR: {
    tokenName: 'Arweave',
    tokenSymbol: 'AR',
    apy: 4.2,
    nativeYield: 2.1,
    amountDeposited: 847.25,
    thirtyDayProjection: 74.56,
    oneYearProjection: 883.15,
    thirtyDayRate: 0.001150,
    oneYearRate: 0.001380,
  },
  DAI: {
    tokenName: 'DAI',
    tokenSymbol: 'DAI',
    apy: 2.7,
    nativeYield: 1.5,
    amountDeposited: 2_500.0,
    thirtyDayProjection: 56.25,
    oneYearProjection: 675.0,
    thirtyDayRate: 0.000850,
    oneYearRate: 0.001020,
  },
  stETH: {
    tokenName: 'Staked Ethereum',
    tokenSymbol: 'stETH',
    apy: 3.8,
    nativeYield: 3.2,
    amountDeposited: 5.75,
    thirtyDayProjection: 0.62,
    oneYearProjection: 7.48,
    thirtyDayRate: 0.002150,
    oneYearRate: 0.002580,
  },
  USDS: {
    tokenName: 'USDS',
    tokenSymbol: 'USDS',
    apy: 1.9,
    nativeYield: 1.2,
    amountDeposited: 1_875.0,
    thirtyDayProjection: 29.69,
    oneYearProjection: 356.25,
    thirtyDayRate: 0.000750,
    oneYearRate: 0.000900,
  },
};

// Mock API functions
export const fetchNetworkData = async (): Promise<NetworkData> => {
  await mockDelay(800);
  
  // Simulate occasional API errors
  if (Math.random() < 0.1) {
    throw new Error('Failed to fetch network data');
  }
  
  return mockNetworkData;
};

export const fetchUserBalance = async (walletAddress: string): Promise<UserBalance> => {
  await mockDelay(600);
  
  if (!walletAddress) {
    throw new Error('Wallet address is required');
  }
  
  // Simulate occasional API errors
  if (Math.random() < 0.05) {
    throw new Error('Failed to fetch user balance');
  }
  
  return mockUserBalance;
};

export const fetchDepositData = async (tokenSymbol: string): Promise<DepositData> => {
  await mockDelay(400);
  
  const data = mockDepositData[tokenSymbol];
  if (!data) {
    throw new Error(`Deposit data not found for token: ${tokenSymbol}`);
  }
  
  // Simulate occasional API errors
  if (Math.random() < 0.05) {
    throw new Error(`Failed to fetch deposit data for ${tokenSymbol}`);
  }
  
  return data;
};

export const fetchAllDeposits = async (): Promise<DepositData[]> => {
  await mockDelay(1000);
  
  // Simulate occasional API errors
  if (Math.random() < 0.08) {
    throw new Error('Failed to fetch deposit data');
  }
  
  return Object.values(mockDepositData);
};