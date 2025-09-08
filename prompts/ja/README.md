# AO Portal Implementation Prompts

AO Portalのフロントエンド基盤を段階的に実装するためのClaude Codeプロンプト集

## 実行順序

### Phase 1: デザイントークン定義

1. `01-tailwind-config.md` - Tailwind設定の基盤構築
2. `02-custom-utilities.md` - カスタムUtilityクラスの作成

### Phase 2: 基本コンポーネント作成

3. `03-button-components.md` - ボタンコンポーネントの作成
4. `04-metric-components.md` - メトリック表示コンポーネント
5. `05-card-layouts.md` - カードレイアウトコンポーネント

### Phase 3: 複合コンポーネント作成

6. `06-your-ao-section.md` - Your AOセクションコンポーネント
7. `07-network-section.md` - Networkセクションコンポーネント
8. `08-deposit-card.md` - Depositカードコンポーネント

### Phase 4: ページレベル統合

9. `09-dashboard-page.md` - メインダッシュボードページ
10. `10-state-management.md` - 状態管理とデータフェッチング

## 技術スタック

- Next.js App Router
- TypeScript
- TailwindCSS
- Shadcn/ui
- Zustand
- TanStack Query

## 実装方針

- **Light Modeのみ実装** - Dark Modeは実装しない
- **状態管理はZustandを使用** - Context APIは使用しない
- **TailwindCSSでスタイリング** - CSS Modulesやstyled-componentsは使用しない
- **TypeScriptで型安全性を確保** - 全コンポーネントで適切な型定義
- **Shadcn/uiとの互換性維持** - 既存のShadcnコンポーネントを拡張

## 実行方法

各mdファイルの内容をClaude Codeで順番に実行してください。
