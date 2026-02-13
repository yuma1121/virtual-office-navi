/**
 * 記事生成の進捗チェックスクリプト
 * Usage: node scripts/check-progress.mjs
 *
 * keywords.csv から全キーワードを読み込み、
 * src/content/blog/ に対応する記事があるかチェックする
 */
import { readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

// keywords.csv を読み込み
const csvPath = join(projectRoot, 'keywords.csv');
const csvContent = readFileSync(csvPath, 'utf-8');
const lines = csvContent.trim().split('\n').slice(1); // ヘッダーをスキップ

// 既存記事を取得
const blogDir = join(projectRoot, 'src', 'content', 'blog');
const existingFiles = readdirSync(blogDir).filter(f => f.endsWith('.md'));

// 既存記事のタイトルを収集
const existingTitles = [];
for (const file of existingFiles) {
  const content = readFileSync(join(blogDir, file), 'utf-8');
  const titleMatch = content.match(/title:\s*"(.+?)"/);
  if (titleMatch) {
    existingTitles.push(titleMatch[1]);
  }
}

// 各キーワードの状態をチェック
const keywords = lines.map(line => {
  const parts = line.split(',');
  return {
    keyword: parts[0],
    category: parts[1],
    intent: parts[2],
    articleType: parts[3],
    priority: parts[4],
    titleIdea: parts[5],
  };
});

// キーワードごとに記事の有無を判定
const written = [];
const unwritten = [];

for (const kw of keywords) {
  const hasArticle = existingTitles.some(title => {
    const kwParts = kw.keyword.split(' ');
    return kwParts.every(part => title.includes(part));
  });

  if (hasArticle) {
    written.push(kw);
  } else {
    unwritten.push(kw);
  }
}

// 結果表示
console.log('=== バーチャルオフィスナビ 記事進捗 ===\n');
console.log(`総キーワード数: ${keywords.length}`);
console.log(`記事作成済み:   ${written.length}`);
console.log(`未作成:         ${unwritten.length}`);
console.log(`進捗率:         ${Math.round(written.length / keywords.length * 100)}%`);
console.log(`記事ファイル数: ${existingFiles.length}\n`);

// カテゴリ別集計
const categories = ['comparison', 'review', 'area', 'howto', 'concern'];
for (const cat of categories) {
  const total = keywords.filter(k => k.category === cat).length;
  const done = written.filter(k => k.category === cat).length;
  console.log(`  ${cat}: ${done}/${total}`);
}

// 未作成の高優先度キーワード
const highPriority = unwritten.filter(k => k.priority === '高');
if (highPriority.length > 0) {
  console.log(`\n=== 未作成・高優先度キーワード (${highPriority.length}件) ===\n`);
  for (const kw of highPriority) {
    console.log(`  [${kw.category}] ${kw.keyword}`);
    console.log(`    → ${kw.titleIdea}`);
  }
}

// 次に書くべき記事5件を提案
console.log('\n=== 次に書くべき記事（上位5件） ===\n');
const nextArticles = unwritten
  .sort((a, b) => {
    const priorityOrder = { '高': 0, '中': 1, '低': 2 };
    return (priorityOrder[a.priority] || 2) - (priorityOrder[b.priority] || 2);
  })
  .slice(0, 5);

for (let i = 0; i < nextArticles.length; i++) {
  const kw = nextArticles[i];
  console.log(`  ${i + 1}. [${kw.priority}] ${kw.keyword} (${kw.category})`);
  console.log(`     ${kw.titleIdea}`);
}
