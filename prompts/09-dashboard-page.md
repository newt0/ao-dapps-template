Please create a dashboard page that integrates all previously created components.

**Prerequisites**

- src/components/sections/your-ao-section.tsx (06-your-ao-section.md)
- src/components/sections/network-section.tsx (07-network-section.md)
- src/components/cards/deposit-card.tsx (08-deposit-card.md)
- src/stores/wallet-store.ts (10-state-management.md)

**Files to Create**

- src/app/dashboard/page.tsx
- src/components/layout/dashboard-layout.tsx

**Structure**

1. Your AO section
2. Network section
3. Deposits section
   - "You are currently Receiving yield" + "Manage Delegations" link
   - Arweave card
   - DAI card (multiple cards supported)

**Layout**

- Appropriate spacing
- Responsive grid
- Visual separation between sections

**State Management**

- Wallet connection state
- Various balance information
- Operation verification with sample data

Implement including Zustand state management.

**Performance Optimization**

- Lazy loading implementation for sections
- Loading state display with React.Suspense
- Dynamic imports for heavy components

**Error Handling**

- Error boundary implementation
- Global error handling
- Redirect to 404 page
