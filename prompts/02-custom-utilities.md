Please create custom Tailwind utility classes for AO Portal.

Add the following classes as Tailwind plugins in the configuration:

**Layout Patterns**

- .section-card: White background card layout (Network section style)
  - background: white
  - border: 1px solid ao-gray-200
  - display: flex, align-items: center, justify-content: space-between
  - flex-wrap: wrap, gap: ao-gap
  - padding: ao-section-padding
  - width: 100%

- .section-compact: Gray background compact layout (Your AO style)
  - background: ao-gray-50
  - appropriate padding

**Text Styles**

- .text-section-title: For section titles (large)
  - font-size: 29px, font-weight: 400, color: ao-gray-900
  - font-family: "DM Sans", sans-serif
- .text-section-title-sm: For section titles (small)
  - font-size: text-ao-sm, font-weight: 500, color: ao-gray-900, line-height: 1
  - font-family: "DM Sans", sans-serif

- .text-label: For labels (CURRENT BALANCE, etc.)
  - font-family: "Roboto Mono", monospace
  - font-weight: 400
  - text-transform: uppercase
  - font-size: text-ao-xs
  - color: ao-gray-600

- .text-description: For description text
  - font-size: 12px, color: ao-gray-500, font-weight: 400

- .text-value: For numeric displays
  - font-size: text-ao-base

**Metric Display**

- .metric-display: Layout for numeric displays
  - display: flex, align-items: center, gap: ao-metric-gap
  - margin: 1.5px 0 0

Please add the plugin configuration to tailwind.config.ts.
