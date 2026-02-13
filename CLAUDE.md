# バーチャルオフィスナビ - Claude Code運用ガイド

## プロジェクト概要

バーチャルオフィス特化のアフィリエイトサイト。Astro + Tailwind CSS で構築。
サイトURL: https://virtual-office.site (Vercelでホスティング)
GitHub: https://github.com/yuma1121/virtual-office-navi

## 技術スタック

- **フレームワーク**: Astro 4.x (静的サイト生成)
- **スタイリング**: Tailwind CSS 3.x
- **ホスティング**: Vercel (git push で自動デプロイ)
- **コンテンツ**: Markdown (Astro Content Collections)

## ディレクトリ構成

```
src/
├── content/blog/    # 記事(Markdown) ← ここに記事を追加
├── components/      # CTAButton, ComparisonTable, ServiceCard 等
├── layouts/         # BaseLayout, BlogPost
├── pages/           # index, blog/[...slug], category/[category]
└── styles/          # global.css (Tailwind)
scripts/
└── check-progress.mjs  # 記事進捗チェック
keywords.csv             # 100件のターゲットKWリスト
```

## 記事の書き方

### frontmatter テンプレート

```yaml
---
title: "タイトル（SEOキーワードを含む）"
description: "meta description（120文字以内）"
pubDate: 2026-02-14
category: "comparison"  # comparison | review | howto | area | concern
tags: ["タグ1", "タグ2"]
affiliateLinks:
  - name: "サービス名"
    url: "https://example.com/"
    cta: "CTAテキスト"
---
```

### カテゴリ一覧

| ID | 名前 | 用途 |
|----|------|------|
| comparison | 比較・ランキング | おすすめ記事、A vs B比較 |
| review | サービスレビュー | 個別サービスの口コミ・評判 |
| howto | 使い方・手続き | 法人登記、開業届、確定申告等 |
| area | エリア別おすすめ | 東京、渋谷、大阪等の地域記事 |
| concern | お悩み解決 | デメリット、怪しい、違法等の疑問解消 |

### 記事品質のルール

- **文字数**: 3,000〜5,000文字
- **視点**: 筆者はGMOオフィスサポートの実際の利用者（E-E-A-T対応）
- **トーン**: 自然な日本語、AI臭さを出さない、体験ベース
- **SEO**: h2/h3でKWを含む見出し、KW密度2-3%
- **アフィリエイトリンク**: `rel="nofollow sponsored noopener noreferrer"` (CTAButton コンポーネントで自動付与)
- **内部リンク**: 関連記事への自然なリンクを含める

### 主要アフィリエイトサービス

| サービス | URL | 推奨用途 |
|---------|-----|---------|
| GMOオフィスサポート | https://www.gmo-office.com/ | メイン推奨（筆者利用中） |
| レゾナンス | https://resonance-virtualoffice.com/ | 格安推奨 |
| NAWABARI | https://nawabari.net/ | ネットショップ向け推奨 |
| DMMバーチャルオフィス | https://virtualoffice.dmm.com/ | 大手ブランド推奨 |

## 量産ワークフロー

### 1. 進捗確認

```bash
node scripts/check-progress.mjs
```

### 2. 記事生成

keywords.csv から未作成の高優先度キーワードを選び、記事を `src/content/blog/` に生成する。
ファイル名はスラッグ形式（例: `virtual-office-freelance.md`）。

### 3. ビルド確認

```bash
npx astro build
```

### 4. コミット & プッシュ（自動デプロイ）

```bash
git add src/content/blog/
git commit -m "Add articles: [記事タイトル一覧]"
git push
```

## 注意事項

- sitemapプラグインは一時無効化中（OneDriveパスの日本語文字問題）
- アフィリエイトリンクURLは仮のもの。ASP登録後に実際のアフィリエイトリンクに差し替えが必要
- pubDate は記事ごとにずらして設定する（一括公開感を出さない）
