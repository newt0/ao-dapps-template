「Your AO」セクションの完全なコンポーネントを作成してください。

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
