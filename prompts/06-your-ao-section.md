Please create a complete component for the "Your AO" section.

**Prerequisites**

- src/components/ui/section-compact.tsx (05-card-layouts.md)
- src/components/ui/wallet-button.tsx (03-button-components.md)
- src/components/ui/balance-display.tsx (04-metric-components.md)

**File to Create**

- src/components/sections/your-ao-section.tsx

**Specifications**
Props:

- isConnected: boolean
- walletAddress?: string
- currentBalance?: number
- thirtyDayProjection?: number
- oneYearProjection?: number
- onConnectWallet: () => void

**Structure**

1. Use SectionCompact component
2. Title: "Your AO"
3. Position WalletButton in top-right
4. Display balance information with BalanceDisplay
5. Appropriate state display when disconnected

**Styling**

- Utilize previously created components and Tailwind classes
- Responsive design
- Hover effects and transitions

Implement with state management through props.

**Performance Optimization**

- Memoize entire section with React.memo
- Minimize onConnectWallet callback dependencies

**Error Handling**

- Error display for wallet connection failures
- Fallback UI for data fetching errors
