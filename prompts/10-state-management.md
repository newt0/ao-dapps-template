AO Portal用の状態管理とデータフェッチング層を実装してください。

【ファイル作成】

- src/stores/wallet-store.ts (Zustand)
- src/hooks/use-wallet.ts
- src/hooks/use-network-data.ts
- src/lib/mock-data.ts

【WalletStore仕様】

- isConnected: boolean
- walletAddress?: string
- walletType?: "arweave" | "eth"
- balance?: number
- connect/disconnect actions

【NetworkStore仕様】

- network metrics data
- deposit data
- update actions

【Hooks】

- TanStack Queryを活用
- エラーハンドリング
- ローディング状態
- 適切な型定義

【Mock Data】

- 開発用のサンプルデータ
- 実際のAO Portal風の数値

本格的な状態管理システムを構築してください。
