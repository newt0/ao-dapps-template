Please create components for displaying metrics (numerical values).

**Prerequisites**

- .text-label, .text-value, .metric-display classes defined in 02-custom-utilities.md
- Color palette defined in 01-tailwind-config.md

**Files to Create**

- src/components/ui/metric-item.tsx
- src/components/ui/balance-display.tsx

**MetricItem Specifications**
Props:

- label: string // "CURRENT BALANCE", "30 DAY PROJECTION", etc.
- value?: string | number // Numerical value
- suffix?: string // Units like "AO"
- isPositive?: boolean // For positive display (green color)
- isNegative?: boolean // For negative display (red color)
- conversionRate?: string // "1 AR = 0.001150 AO", etc.
- icon?: React.ReactNode // Icon display

Styling:

- label: Use text-label class
- value: Use text-value class
- Layout with metric-display class
- Color coding for +/- symbols

**BalanceDisplay Specifications**
Props:

- currentBalance?: number
- thirtyDayProjection?: number
- oneYearProjection?: number
- isConnected: boolean
- tokenSymbol?: string

Display only "+/-" when disconnected
Display actual numerical values when connected

Implement with TypeScript for type safety.

**Accessibility Requirements**

- Provide context with aria-label for screen readers
- Live region for numerical changes (aria-live="polite")
- Convey state through icons and text, not just visual color coding

**Performance Optimization**

- Prevent unnecessary re-renders with React.memo
- Optimize large number formatting with useMemo
- Optimize animated numerical changes with requestAnimationFrame

**Error Handling**

- Display "--" when data fetching fails
- Skeleton display during loading
- Retry button on errors
