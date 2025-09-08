「Your AO」セクションの完全なコンポーネントを作成してください。

【前提条件】

- src/components/ui/section-compact.tsx (05-card-layouts.md)
- src/components/ui/wallet-button.tsx (03-button-components.md)
- src/components/ui/balance-display.tsx (04-metric-components.md)

【ファイル作成】

- src/components/sections/your-ao-section.tsx

【仕様】
Props:

- isConnected: boolean
- walletAddress?: string
- currentBalance?: number
- thirtyDayProjection?: number
- oneYearProjection?: number
- onConnectWallet: () => void

【構成】

1. SectionCompactコンポーネントを使用
2. タイトル: "Your AO"
3. WalletButtonを右上に配置
4. BalanceDisplayで残高情報表示
5. 未接続時の適切な状態表示

【スタイル】

- これまで作成したコンポーネントとTailwindクラスを活用
- レスポンシブ対応
- ホバー効果やトランジション

状態管理はpropsで受け取る形で実装してください。

【パフォーマンス最適化】

- セクション全体をReact.memoでメモ化
- onConnectWalletコールバックの依存性最小化

【エラーハンドリング】

- ウォレット接続失敗時のエラー表示
- データ取得エラー時のフォールバックUI
