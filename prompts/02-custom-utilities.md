AO Portal用のカスタムTailwind utilityクラスを作成してください。

以下のクラスをTailwind設定のpluginとして追加：

【レイアウトパターン】

- .section-card: 白背景のカードレイアウト（Networkセクション風）
  - background: white
  - border: 1px solid ao-gray-200
  - display: flex, align-items: center, justify-content: space-between
  - flex-wrap: wrap, gap: ao-gap
  - padding: ao-section-padding
  - width: 100%

- .section-compact: グレー背景のコンパクトレイアウト（Your AO風）
  - background: ao-gray-50
  - 適切なpadding

【テキストスタイル】

- .text-section-title: セクションタイトル用（大）
  - font-size: 29px, font-weight: 400, color: ao-gray-900
  - font-family: "DM Sans", sans-serif
- .text-section-title-sm: セクションタイトル用（小）
  - font-size: text-ao-sm, font-weight: 500, color: ao-gray-900, line-height: 1
  - font-family: "DM Sans", sans-serif

- .text-label: ラベル用（CURRENT BALANCE等）
  - font-family: "Roboto Mono", monospace
  - font-weight: 400
  - text-transform: uppercase
  - font-size: text-ao-xs
  - color: ao-gray-600

- .text-description: 説明文用
  - font-size: 12px, color: ao-gray-500, font-weight: 400

- .text-value: 数値表示用
  - font-size: text-ao-base

【メトリック表示】

- .metric-display: 数値表示のレイアウト
  - display: flex, align-items: center, gap: ao-metric-gap
  - margin: 1.5px 0 0

tailwind.config.tsのplugin設定を追加してください。
