Please extend the TailwindCSS configuration for a Next.js project to define design tokens for AO Portal.

Update `tailwind.config.ts` with the following requirements:

**Color Palette**

- ao-gray-50: rgb(247, 247, 247) // Section background
- ao-gray-100: rgb(242, 242, 242) // Input field background
- ao-gray-200: rgb(240, 240, 240) // Border
- ao-gray-400: rgb(119, 119, 119) // Border (dark)
- ao-gray-500: rgb(107, 107, 107) // Description text
- ao-gray-600: rgb(82, 82, 82) // Label
- ao-gray-900: rgb(21, 21, 21) // Main text
- ao-success: rgb(35, 190, 48) // Primary action button
- white: rgb(255, 255, 255) // Card background

**Fonts**

- Set DM Sans as the primary font
- Define responsive font size clamp() values:
  - text-ao-xs: clamp(13px, 1.35vw, 14px)
  - text-ao-sm: clamp(16px, 1.65vw, 18px)
  - text-ao-base: clamp(18px, 1.75vw, 24px)
  - text-ao-lg: 29px

**Spacing**

- ao-section-padding: 24.5px 20px 20px
- ao-gap: 20px
- ao-metric-gap: 7.5px

Create and update the configuration file.
