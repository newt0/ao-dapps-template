メトリック（数値）表示用のコンポーネントを作成してください。

【前提条件】

- 02-custom-utilities.md で定義された.text-label、.text-value、.metric-displayクラス
- 01-tailwind-config.md で定義されたカラーパレット

【ファイル作成】

- src/components/ui/metric-item.tsx
- src/components/ui/balance-display.tsx

【MetricItem仕様】
Props:

- label: string // "CURRENT BALANCE", "30 DAY PROJECTION"等
- value?: string | number // 数値
- suffix?: string // "AO"等の単位
- isPositive?: boolean // プラス表示用（緑色）
- isNegative?: boolean // マイナス表示用（赤色）
- conversionRate?: string // "1 AR = 0.001150 AO"等
- icon?: React.ReactNode // アイコン表示

スタイル:

- label: text-label クラス使用
- value: text-value クラス使用
- metric-display クラスでレイアウト
- +/- 記号の色分け対応

【BalanceDisplay仕様】
Props:

- currentBalance?: number
- thirtyDayProjection?: number
- oneYearProjection?: number
- isConnected: boolean
- tokenSymbol?: string

未接続時は "+/-" のみ表示
接続時は実際の数値表示

TypeScriptで型安全に実装してください。

【アクセシビリティ要件】

- スクリーンリーダー用のaria-labelでコンテキスト提供
- 数値変化時のライブリージョン（aria-live="polite"）
- 視覚的な色分けだけでなくアイコンやテキストでも状態を伝達

【パフォーマンス最適化】

- React.memoで不要な再レンダリング防止
- 大きな数値のフォーマット処理をuseMemoで最適化
- アニメーション付き数値変化はrequestAnimationFrameで最適化

【エラーハンドリング】

- データ取得失敗時の「--」表示
- ローディング中のスケルトン表示
- エラー時の再取得ボタン
