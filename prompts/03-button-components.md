Please create button components for AO Portal.

**Prerequisites**

- Color palette defined in 01-tailwind-config.md
- Utility classes defined in 02-custom-utilities.md

**Files to Create**

- src/components/shared/ao-button.tsx
- src/components/shared/wallet-button.tsx

**AO Button Specifications**
variant props: "primary" | "secondary"

- primary: Green button
  - background: ao-success
  - border: 1px solid ao-success
  - text: white
  - hover effects included

- secondary: Gray button
  - background: ao-gray-100
  - border: 1px solid ao-gray-400
  - text: ao-gray-900
  - hover: background ao-gray-200, border ao-gray-300
  - transition effects included

**Wallet Button Specifications**
state props: "disconnected" | "connected"
walletType props: "arweave" | "eth"

- When disconnected: "Connect {walletType} Wallet"
- When connected: Display abbreviated wallet address
- Display appropriate icons
- Transition effects on hover

Use TypeScript, shadcn/ui style, and forwardRef.

**Accessibility Requirements**

- Keyboard navigation support (Tab, Enter, Space)
- Visual feedback on focus
- Proper attributes like aria-label, aria-pressed
- Disabled state styling and aria-disabled

**Performance Optimization**

- Memoization with React.memo
- Optimize callbacks like onClick with useCallback
- Prevent unnecessary re-renders

**Error Handling**

- Loading state display (spinner)
- Button state management on errors
- Appropriate error message display
