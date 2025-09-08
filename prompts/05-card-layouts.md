セクション表示用のカードコンポーネントを作成してください。

【ファイル作成】

- src/components/ui/section-card.tsx
- src/components/ui/section-compact.tsx

【SectionCard仕様（Network風）】
Props:

- title: string
- description?: string
- children: React.ReactNode
- className?: string

スタイル:

- section-card クラス使用
- title: text-section-title
- description: text-description

【SectionCompact仕様（Your AO風）】
Props:

- title: string
- children: React.ReactNode
- walletButton?: React.ReactNode
- className?: string

スタイル:

- section-compact クラス使用
- title: text-section-title-sm
- 右上にwalletButtonを配置

【共通要件】

- レスポンシブ対応
- 適切な型定義
- コンポーネントの合成可能性
- className prop でスタイル拡張可能

実装してください。
