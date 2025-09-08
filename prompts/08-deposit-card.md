Depositカード（DAI等）のコンポーネントを作成してください。

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
