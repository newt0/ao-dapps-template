「Network」セクションのコンポーネントを作成してください。

【ファイル作成】

- src/components/sections/network-section.tsx

【仕様】
Props:

- fairLaunchDeposits: number
- totalStethBridged: number
- totalDaiBridged: number
- totalUsdsBridged: number

【構成】

1. SectionCardコンポーネント使用
2. タイトル: "Network"
3. 説明文: "Track overall network token emissions, total deposited assets, and your current and projected AO holdings."
4. 4つのメトリック表示:
   - Fair Launch Deposits: $ 形式
   - Total stETH Bridged: アイコン + 数値
   - Total DAI Bridged: アイコン + 数値
   - Total USDS Bridged: アイコン + 数値

【アイコン】

- 適切なcrypto/tokenアイコンを表示
- lucide-reactまたは適切なアイコンライブラリ使用

数値フォーマット（カンマ区切り等）も適切に処理してください。
