Please create a component for the "Network" section.

**Prerequisites**

- src/components/shared/section-card.tsx (05-card-layouts.md)
- src/components/shared/metric-item.tsx (04-metric-components.md)

**File to Create**

- src/components/sections/network-section.tsx

**Specifications**
Props:

- fairLaunchDeposits: number
- totalStethBridged: number
- totalDaiBridged: number
- totalUsdsBridged: number

**Structure**

1. Use SectionCard component
2. Title: "Network"
3. Description: "Track overall network token emissions, total deposited assets, and your current and projected AO holdings."
4. Display 4 metrics:
   - Fair Launch Deposits: $ format
   - Total stETH Bridged: icon + value
   - Total DAI Bridged: icon + value
   - Total USDS Bridged: icon + value

**Icons**

- Display appropriate crypto/token icons
- Use lucide-react or appropriate icon library

Handle number formatting (comma separation, etc.) appropriately.

**Performance Optimization**

- Optimize number formatting with useMemo
- Lazy loading for icons
- Component memoization with React.memo

**Error Handling**

- Fallback for network data fetching failures
- Loading state display
