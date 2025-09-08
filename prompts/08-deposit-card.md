Please create a deposit card component (for DAI, etc.).

**Prerequisites**

- src/components/shared/ao-button.tsx (03-button-components.md)
- src/components/shared/wallet-button.tsx (03-button-components.md)
- src/components/shared/metric-item.tsx (04-metric-components.md)

**File to Create**

- src/components/cards/deposit-card.tsx

**Specifications**
Props:

- tokenName: string // "DAI"
- tokenSymbol: string // "DAI"
- apy?: number // 2.7
- nativeYield?: number // 1.5
- amountDeposited?: number
- thirtyDayProjection?: number
- oneYearProjection?: number
- thirtyDayRate?: number // 1 DAI = X AO
- oneYearRate?: number
- isWalletConnected: boolean
- onConnectWallet: () => void
- onSwap?: () => void
- onDeposit?: () => void

**Structure**

1. Top: Token name + APY display + wallet button
2. Native Yield display
3. Amount Deposited display (icon + value)
4. Projection display (30-day, 1-year)
5. Rate display (1 DAI = X AO)
6. Bottom: Two action buttons
   - Left: Swap button (primary)
   - Right: Connect/Deposit button (secondary)

**State-based Display**

- Disconnected: "Connect ETH Wallet"
- Connected: Specific actions like "Deposit DAI"

Implement with white background card, appropriate padding, and responsive design.

**Accessibility Requirements**

- Mark up entire card with article element
- Structure token name as a heading
- Clear aria-labels for action buttons

**Performance Optimization**

- Memoize entire card with React.memo
- Optimize rate calculations with useMemo
- Optimize callback functions with useCallback

**Error Handling**

- Error display for transaction failures
- Button disabling during loading
- Retry functionality for network errors
