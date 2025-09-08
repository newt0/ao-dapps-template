AO Portal用のボタンコンポーネントを作成してください。

【前提条件】

- 01-tailwind-config.md で定義されたカラーパレット
- 02-custom-utilities.md で定義されたユーティリティクラス

【ファイル作成】

- src/components/ui/ao-button.tsx
- src/components/ui/wallet-button.tsx

【AO Button仕様】
variant props: "primary" | "secondary"

- primary: 緑色ボタン
  - background: ao-success
  - border: 1px solid ao-success
  - text: white
  - hover効果あり

- secondary: グレーボタン
  - background: ao-gray-100
  - border: 1px solid ao-gray-400
  - text: ao-gray-900
  - hover: background ao-gray-200, border ao-gray-300
  - transition効果あり

【Wallet Button仕様】
state props: "disconnected" | "connected"
walletType props: "arweave" | "eth"

- disconnected時: "Connect {walletType} Wallet"
- connected時: 省略されたウォレットアドレス表示
- 適切なアイコン表示
- hover時のtransition効果

TypeScript、shadcn/uiスタイル、forwardRefを使用してください。

【アクセシビリティ要件】

- キーボードナビゲーション対応（Tab、Enter、Space）
- フォーカス時の視覚的フィードバック
- aria-label、aria-pressed等の適切な属性
- disabled状態のスタイリングとaria-disabled

【パフォーマンス最適化】

- React.memoでメモ化
- onClick等のコールバックはuseCallbackで最適化
- 不要な再レンダリング防止

【エラーハンドリング】

- loading状態の表示（スピナー）
- エラー時のボタン状態管理
- 適切なエラーメッセージ表示
