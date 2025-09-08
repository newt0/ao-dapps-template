Please create card components for section display.

**Prerequisites**

- .section-card, .section-compact classes defined in 02-custom-utilities.md
- Color palette and spacing defined in 01-tailwind-config.md

**Files to Create**

- src/components/ui/section-card.tsx
- src/components/ui/section-compact.tsx

**SectionCard Specifications (Network style)**
Props:

- title: string
- description?: string
- children: React.ReactNode
- className?: string

Styling:

- Use section-card class
- title: text-section-title
- description: text-description

**SectionCompact Specifications (Your AO style)**
Props:

- title: string
- children: React.ReactNode
- walletButton?: React.ReactNode
- className?: string

Styling:

- Use section-compact class
- title: text-section-title-sm
- Position walletButton in top-right

**Common Requirements**

- Responsive design
- Proper type definitions
- Component composability
- Style extension via className prop

Please implement.

**Accessibility Requirements**

- Use semantic HTML elements like section, article
- Proper heading hierarchy (h2, h3, etc.)
- Explicit regions with role="region" and aria-labelledby

**Performance Optimization**

- Memoization with React.memo
- Prevent child component re-renders
- Minimize dynamic CSS class generation
