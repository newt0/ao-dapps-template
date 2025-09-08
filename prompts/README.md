# AO Portal Implementation Prompts

A collection of Claude Code prompts for implementing the AO Portal frontend infrastructure step by step.

## Execution Order

### Phase 1: Design Token Definition

1. `01-tailwind-config.md` - Build Tailwind configuration foundation
2. `02-custom-utilities.md` - Create custom utility classes

### Phase 2: Basic Component Creation

3. `03-button-components.md` - Create button components
4. `04-metric-components.md` - Metric display components
5. `05-card-layouts.md` - Card layout components

### Phase 3: Composite Component Creation

6. `06-your-ao-section.md` - Your AO section component
7. `07-network-section.md` - Network section component
8. `08-deposit-card.md` - Deposit card component

### Phase 4: Page-Level Integration

9. `09-dashboard-page.md` - Main dashboard page
10. `10-state-management.md` - State management and data fetching

## Tech Stack

- Next.js App Router
- TypeScript
- TailwindCSS
- Shadcn/ui
- Zustand
- TanStack Query

## Implementation Guidelines

- **Light Mode Only** - Dark mode will not be implemented
- **State Management with Zustand** - Context API will not be used
- **Styling with TailwindCSS** - CSS Modules and styled-components will not be used
- **TypeScript for Type Safety** - Proper type definitions for all components
- **Maintain Shadcn/ui Compatibility** - Extend existing Shadcn components

## How to Execute

Execute the contents of each markdown file sequentially using Claude Code.
