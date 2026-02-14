import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

// 静的ページ: lastmod はページ作成・更新日を正確に記載
const staticPages = [
  { path: '/', lastmod: '2026-02-14' },
  { path: '/about/', lastmod: '2026-02-14' },
  { path: '/privacy/', lastmod: '2026-02-14' },
  { path: '/disclaimer/', lastmod: '2026-02-14' },
  { path: '/contact/', lastmod: '2026-02-14' },
  { path: '/category/comparison/', lastmod: '2026-02-14' },
  { path: '/category/review/', lastmod: '2026-02-14' },
  { path: '/category/area/', lastmod: '2026-02-14' },
  { path: '/category/howto/', lastmod: '2026-02-14' },
  { path: '/category/concern/', lastmod: '2026-02-14' },
];

export async function GET(context: APIContext) {
  const site = context.site!.href.replace(/\/$/, '');
  const posts = await getCollection('blog');

  const urls = staticPages.map(
    (page) => `  <url>
    <loc>${site}${page.path}</loc>
    <lastmod>${page.lastmod}</lastmod>
  </url>`
  );

  const blogUrls = posts
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .map((post) => {
      const lastmod = (post.data.updatedDate || post.data.pubDate).toISOString().split('T')[0];
      return `  <url>
    <loc>${site}/blog/${post.slug}/</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`;
    });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...urls, ...blogUrls].join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
