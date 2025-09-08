これまで作成したコンポーネントを統合したダッシュボードページを作成してください。

【ファイル作成】

- src/app/dashboard/page.tsx
- src/components/layout/dashboard-layout.tsx

【構成】

1. Your AOセクション
2. Networkセクション
3. Depositsセクション
   - "You are currently Receiving yield" + "Manage Delegations"リンク
   - Arweaveカード
   - DAIカード（複数対応可能）

【レイアウト】

- 適切なスペーシング
- レスポンシブグリッド
- セクション間の視覚的分離

【状態管理】

- ウォレット接続状態
- 各種バランス情報
- サンプルデータでの動作確認

Zustandでの状態管理も含めて実装してください。
