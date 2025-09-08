Please implement state management and data fetching layers for AO Portal.

**Prerequisites**

- All components created (prompts 01-09 completed)
- Next.js App Router environment

**Files to Create**

- src/stores/wallet-store.ts (Zustand)
- src/hooks/use-wallet.ts
- src/hooks/use-network-data.ts
- src/lib/mock-data.ts

**WalletStore Specifications**

- isConnected: boolean
- walletAddress?: string
- walletType?: "arweave" | "eth"
- balance?: number
- connect/disconnect actions

**NetworkStore Specifications**

- network metrics data
- deposit data
- update actions

**Hooks**

- Utilize TanStack Query
- Error handling
- Loading states
- Proper type definitions

**Mock Data**

- Sample data for development
- AO Portal-style realistic values

Build a comprehensive state management system.

**Performance Optimization**

- Zustand devtools integration
- State persistence (persist middleware)
- Selector optimization to prevent re-renders
- TanStack Query cache strategies

**Error Handling**

- Unified API error handling
- Retry functionality (exponential backoff)
- Error notification system (Toast or Alert)
- Offline mode support

**Accessibility Requirements**

- Screen reader notifications for loading states
- aria-live regions for error messages
