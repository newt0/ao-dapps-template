Next.jsプロジェクトのTailwindCSS設定を拡張して、AO Portalのデザイントークンを定義してください。

以下の要件で tailwind.config.ts を更新してください：

【カラーパレット】

- ao-gray-50: rgb(247, 247, 247) // セクション背景
- ao-gray-100: rgb(242, 242, 242) // 入力フィールド背景
- ao-gray-200: rgb(240, 240, 240) // ボーダー
- ao-gray-400: rgb(119, 119, 119) // ボーダー（濃い）
- ao-gray-500: rgb(107, 107, 107) // 説明文
- ao-gray-600: rgb(82, 82, 82) // ラベル
- ao-gray-900: rgb(21, 21, 21) // メインテキスト
- ao-success: rgb(35, 190, 48) // プライマリアクションボタン
- white: rgb(255, 255, 255) // カード背景

【フォント】

- DM Sans をプライマリフォントとして設定
- レスポンシブフォントサイズのclamp()値を定義：
  - text-ao-xs: clamp(13px, 1.35vw, 14px)
  - text-ao-sm: clamp(16px, 1.65vw, 18px)
  - text-ao-base: clamp(18px, 1.75vw, 24px)
  - text-ao-lg: 29px

【スペーシング】

- ao-section-padding: 24.5px 20px 20px
- ao-gap: 20px
- ao-metric-gap: 7.5px

設定ファイルを作成・更新してください。
