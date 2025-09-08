Depositカード（DAI等）のコンポーネントを作成してください。

【前提条件】

- src/components/ui/ao-button.tsx (03-button-components.md)
- src/components/ui/wallet-button.tsx (03-button-components.md)
- src/components/ui/metric-item.tsx (04-metric-components.md)

【ファイル作成】

- src/components/cards/deposit-card.tsx

【仕様】
Props:

- tokenName: string // "DAI"
- tokenSymbol: string // "DAI"
- apy?: number // 2.7
- nativeYield?: number // 1.5
- amountDeposited?: number
- thirtyDayProjection?: number
- oneYearProjection?: number
- thirtyDayRate?: number // 1 DAI = X AO
- oneYearRate?: number
- isWalletConnected: boolean
- onConnectWallet: () => void
- onSwap?: () => void
- onDeposit?: () => void

【構成】

1. 上部: トークン名 + APY表示 + ウォレットボタン
2. Native Yield表示
3. Amount Deposited表示（アイコン + 数値）
4. Projection表示（30日・1年）
5. レート表示（1 DAI = X AO）
6. 下部: アクションボタン2つ
   - 左: Swapボタン（primary）
   - 右: Connect/Depositボタン（secondary）

【状態による表示切替】

- 未接続: "Connect ETH Wallet"
- 接続済: "Deposit DAI"等の具体的アクション

白背景のカード、適切なpadding、レスポンシブ対応で実装してください。

【アクセシビリティ要件】

- カード全体をarticle要素でマークアップ
- トークン名を見出しとして構造化
- アクションボタンの明確なaria-label

【パフォーマンス最適化】

- React.memoでカード全体をメモ化
- レート計算をuseMemoで最適化
- コールバック関数をuseCallbackで最適化

【エラーハンドリング】

- トランザクション失敗時のエラー表示
- ローディング中のボタン無効化
- ネットワークエラー時のリトライ機能
